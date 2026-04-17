<?php

declare(strict_types=1);

function altcha_enabled(array $config): bool
{
    return (bool) ($config['altcha']['enabled'] ?? false);
}

function altcha_config_string(array $config, string $key, string $default = ''): string
{
    $value = $config['altcha'][$key] ?? $default;
    return is_string($value) ? $value : $default;
}

function altcha_config_int(array $config, string $key, int $default): int
{
    return (int) ($config['altcha'][$key] ?? $default);
}

function altcha_signature_secret(array $config): string
{
    return trim(altcha_config_string($config, 'hmac_signature_secret'));
}

function altcha_canonical_json(array $data): string
{
    ksort($data);
    altcha_sort_recursive($data);

    return json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?: '';
}

function altcha_sort_recursive(array &$data): void
{
    foreach ($data as &$value) {
        if (is_array($value) && !array_is_list($value)) {
            ksort($value);
            altcha_sort_recursive($value);
        }
    }
}

function altcha_hmac_hex(string $data, string $key): string
{
    return bin2hex(hash_hmac('sha256', $data, $key, true));
}

function altcha_key_prefix(array $config): string
{
    $prefix = preg_replace('/[^0-9a-f]/i', '', altcha_config_string($config, 'key_prefix', '00')) ?? '00';
    $prefix = strtolower($prefix);

    if ($prefix === '' || (strlen($prefix) % 2) !== 0) {
        return '00';
    }

    return $prefix;
}

function altcha_create_challenge_response(string $formName, array $config): array
{
    $secret = altcha_signature_secret($config);
    if ($secret === '') {
        throw new RuntimeException('ALTCHA signature secret is not configured.');
    }

    $parameters = [
        'algorithm' => 'PBKDF2/SHA-256',
        'cost' => max(100, altcha_config_int($config, 'pbkdf2_cost', 1000)),
        'data' => [
            'form' => $formName,
        ],
        'expiresAt' => time() + max(60, altcha_config_int($config, 'challenge_expires_seconds', 600)),
        'keyLength' => max(16, min(64, altcha_config_int($config, 'key_length', 32))),
        'keyPrefix' => altcha_key_prefix($config),
        'nonce' => bin2hex(random_bytes(16)),
        'salt' => bin2hex(random_bytes(16)),
    ];

    return [
        'parameters' => $parameters,
        'signature' => altcha_hmac_hex(altcha_canonical_json($parameters), $secret),
    ];
}

function altcha_decode_payload(string $payload): ?array
{
    if ($payload === '') {
        return null;
    }

    $normalized = strtr($payload, '-_', '+/');
    $padding = strlen($normalized) % 4;
    if ($padding !== 0) {
        $normalized .= str_repeat('=', 4 - $padding);
    }

    $decoded = base64_decode($normalized, true);
    if (!is_string($decoded) || $decoded === '') {
        return null;
    }

    $data = json_decode($decoded, true);
    return is_array($data) ? $data : null;
}

function altcha_nonce_hash(string $nonce): string
{
    return hash('sha256', $nonce);
}

function altcha_register_nonce_use(string $nonce, int $expiresAt, array $paths): bool
{
    $nonceHash = altcha_nonce_hash($nonce);
    $pdo = storage_connection($paths);

    if ($pdo instanceof PDO) {
        return altcha_register_nonce_use_sqlite($pdo, $nonceHash, $expiresAt);
    }

    return altcha_register_nonce_use_file($paths['logs'], $nonceHash, $expiresAt);
}

function altcha_register_nonce_use_sqlite(PDO $pdo, string $nonceHash, int $expiresAt): bool
{
    $now = time();
    $pdo->exec('BEGIN IMMEDIATE');

    try {
        $deleteStmt = $pdo->prepare('DELETE FROM altcha_used_nonces WHERE expires_at <= :now');
        $deleteStmt->execute(['now' => $now]);

        $selectStmt = $pdo->prepare('SELECT 1 FROM altcha_used_nonces WHERE nonce_hash = :nonce_hash LIMIT 1');
        $selectStmt->execute(['nonce_hash' => $nonceHash]);

        if ($selectStmt->fetchColumn() !== false) {
            $pdo->commit();
            return false;
        }

        $insertStmt = $pdo->prepare(
            'INSERT INTO altcha_used_nonces (nonce_hash, expires_at, created_at) VALUES (:nonce_hash, :expires_at, :created_at)'
        );
        $insertStmt->execute([
            'nonce_hash' => $nonceHash,
            'expires_at' => $expiresAt,
            'created_at' => $now,
        ]);

        $pdo->commit();
        return true;
    } catch (Throwable $exception) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }

        throw $exception;
    }
}

function altcha_register_nonce_use_file(string $logsDir, string $nonceHash, int $expiresAt): bool
{
    $file = $logsDir . '/altcha-nonces.json';
    $handle = fopen($file, 'c+');

    if ($handle === false) {
        throw new RuntimeException('Unable to open ALTCHA nonce storage.');
    }

    $now = time();

    try {
        if (!flock($handle, LOCK_EX)) {
            throw new RuntimeException('Unable to lock ALTCHA nonce storage.');
        }

        rewind($handle);
        $raw = stream_get_contents($handle);
        $data = [];

        if (is_string($raw) && trim($raw) !== '') {
            $decoded = json_decode($raw, true);
            if (is_array($decoded)) {
                $data = $decoded;
            }
        }

        foreach ($data as $storedHash => $storedExpiresAt) {
            if (!is_int($storedExpiresAt) || $storedExpiresAt <= $now) {
                unset($data[$storedHash]);
            }
        }

        if (isset($data[$nonceHash])) {
            flock($handle, LOCK_UN);
            fclose($handle);
            return false;
        }

        $data[$nonceHash] = $expiresAt;

        rewind($handle);
        ftruncate($handle, 0);
        fwrite($handle, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
        fflush($handle);
        flock($handle, LOCK_UN);
        fclose($handle);

        return true;
    } catch (Throwable $exception) {
        flock($handle, LOCK_UN);
        fclose($handle);
        throw $exception;
    }
}

function altcha_derive_pbkdf2_hex(array $parameters, int $counter): ?string
{
    $nonce = isset($parameters['nonce']) && is_string($parameters['nonce']) ? $parameters['nonce'] : '';
    $salt = isset($parameters['salt']) && is_string($parameters['salt']) ? $parameters['salt'] : '';

    if ($nonce === '' || $salt === '' || $counter < 0 || $counter > 4294967295) {
        return null;
    }

    $nonceBytes = hex2bin($nonce);
    $saltBytes = hex2bin($salt);
    if ($nonceBytes === false || $saltBytes === false) {
        return null;
    }

    $cost = isset($parameters['cost']) && is_int($parameters['cost']) ? max(1, $parameters['cost']) : 1000;
    $keyLength = isset($parameters['keyLength']) && is_int($parameters['keyLength']) ? max(16, min(64, $parameters['keyLength'])) : 32;

    $derivedKey = hash_pbkdf2(
        'sha256',
        $nonceBytes . pack('N', $counter),
        $saltBytes,
        $cost,
        $keyLength,
        true
    );

    return bin2hex($derivedKey);
}

function altcha_verify_payload(string $payloadString, array $config, array $paths, string $expectedForm): array
{
    if ($payloadString === '') {
        return ['verified' => false, 'error' => 'missing_payload'];
    }

    $secret = altcha_signature_secret($config);
    if ($secret === '') {
        return ['verified' => false, 'error' => 'missing_signature_secret'];
    }

    $payload = altcha_decode_payload($payloadString);
    if (!is_array($payload)) {
        return ['verified' => false, 'error' => 'invalid_payload'];
    }

    $challenge = $payload['challenge'] ?? null;
    $solution = $payload['solution'] ?? null;
    if (!is_array($challenge) || !is_array($solution)) {
        return ['verified' => false, 'error' => 'invalid_structure'];
    }

    $parameters = $challenge['parameters'] ?? null;
    $signature = $challenge['signature'] ?? null;
    if (!is_array($parameters) || !is_string($signature) || $signature === '') {
        return ['verified' => false, 'error' => 'invalid_challenge'];
    }

    if (($parameters['algorithm'] ?? null) !== 'PBKDF2/SHA-256') {
        return ['verified' => false, 'error' => 'unexpected_algorithm'];
    }

    $expectedSignature = altcha_hmac_hex(altcha_canonical_json($parameters), $secret);
    if (!hash_equals($expectedSignature, $signature)) {
        return ['verified' => false, 'error' => 'invalid_signature'];
    }

    $expiresAt = isset($parameters['expiresAt']) && is_int($parameters['expiresAt']) ? $parameters['expiresAt'] : 0;
    if ($expiresAt <= time()) {
        return ['verified' => false, 'error' => 'expired'];
    }

    $formName = $parameters['data']['form'] ?? null;
    if (!is_string($formName) || $formName !== $expectedForm) {
        return ['verified' => false, 'error' => 'form_mismatch'];
    }

    $counter = $solution['counter'] ?? null;
    $derivedKey = $solution['derivedKey'] ?? null;
    if (!is_int($counter) || !is_string($derivedKey) || !preg_match('/^[0-9a-f]+$/i', $derivedKey)) {
        return ['verified' => false, 'error' => 'invalid_solution'];
    }

    $expectedDerivedKey = altcha_derive_pbkdf2_hex($parameters, $counter);
    if (!is_string($expectedDerivedKey) || !hash_equals($expectedDerivedKey, strtolower($derivedKey))) {
        return ['verified' => false, 'error' => 'invalid_solution'];
    }

    $keyPrefix = isset($parameters['keyPrefix']) && is_string($parameters['keyPrefix']) ? strtolower($parameters['keyPrefix']) : '';
    if ($keyPrefix === '' || !str_starts_with($expectedDerivedKey, $keyPrefix)) {
        return ['verified' => false, 'error' => 'invalid_prefix'];
    }

    $nonce = isset($parameters['nonce']) && is_string($parameters['nonce']) ? $parameters['nonce'] : '';
    if ($nonce === '') {
        return ['verified' => false, 'error' => 'missing_nonce'];
    }

    if (!altcha_register_nonce_use($nonce, $expiresAt, $paths)) {
        return ['verified' => false, 'error' => 'replay_detected'];
    }

    return [
        'verified' => true,
        'error' => null,
        'expires_at' => $expiresAt,
        'nonce' => $nonce,
    ];
}
