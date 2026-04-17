<?php

declare(strict_types=1);

require_once __DIR__ . '/altcha-autoload.php';

use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Altcha;
use AltchaOrg\Altcha\Challenge;
use AltchaOrg\Altcha\ChallengeParameters;
use AltchaOrg\Altcha\CreateChallengeOptions;
use AltchaOrg\Altcha\Payload;
use AltchaOrg\Altcha\Solution;
use AltchaOrg\Altcha\VerifySolutionOptions;

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

function altcha_key_signature_secret(array $config): ?string
{
    $value = trim(altcha_config_string($config, 'hmac_key_signature_secret'));
    return $value !== '' ? $value : null;
}

function altcha_instance(array $config): Altcha
{
    return new Altcha(
        hmacSignatureSecret: altcha_signature_secret($config),
        hmacKeySignatureSecret: altcha_key_signature_secret($config),
    );
}

function altcha_algorithm(): Pbkdf2
{
    return new Pbkdf2();
}

function altcha_create_challenge_response(string $formName, array $config): array
{
    $secret = altcha_signature_secret($config);
    if ($secret === '') {
        throw new RuntimeException('ALTCHA signature secret is not configured.');
    }

    $challenge = altcha_instance($config)->createChallenge(new CreateChallengeOptions(
        algorithm: altcha_algorithm(),
        cost: max(1000, altcha_config_int($config, 'pbkdf2_cost', 5000)),
        keyLength: max(16, min(64, altcha_config_int($config, 'key_length', 32))),
        keyPrefix: strtolower(altcha_config_string($config, 'key_prefix', '00')) ?: '00',
        expiresAt: time() + max(60, altcha_config_int($config, 'challenge_expires_seconds', 600)),
        data: ['form' => $formName],
    ));

    return $challenge->toArray();
}

function altcha_decode_payload_data(string $payload): ?array
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
    $pdo->beginTransaction();

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

function altcha_payload_from_array(array $payload): ?Payload
{
    $challengeData = $payload['challenge'] ?? null;
    $solutionData = $payload['solution'] ?? null;

    if (!is_array($challengeData) || !is_array($solutionData)) {
        return null;
    }

    $parametersData = $challengeData['parameters'] ?? null;
    $signature = $challengeData['signature'] ?? null;
    $counter = $solutionData['counter'] ?? null;
    $derivedKey = $solutionData['derivedKey'] ?? null;

    if (!is_array($parametersData) || ($signature !== null && !is_string($signature))) {
        return null;
    }

    if (!is_int($counter) || !is_string($derivedKey) || $derivedKey === '') {
        return null;
    }

    $challenge = new Challenge(
        ChallengeParameters::fromArray($parametersData),
        $signature
    );

    $solution = new Solution(
        counter: $counter,
        derivedKey: $derivedKey
    );

    return new Payload($challenge, $solution);
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

    $payloadData = altcha_decode_payload_data($payloadString);
    if (!is_array($payloadData)) {
        return ['verified' => false, 'error' => 'invalid_payload'];
    }

    $payload = altcha_payload_from_array($payloadData);
    if (!$payload instanceof Payload) {
        return ['verified' => false, 'error' => 'invalid_structure'];
    }

    if ($payload->challenge->parameters->algorithm !== 'PBKDF2/SHA-256') {
        return ['verified' => false, 'error' => 'unexpected_algorithm'];
    }

    $formName = $payload->challenge->parameters->data['form'] ?? null;
    if (!is_string($formName) || $formName !== $expectedForm) {
        return ['verified' => false, 'error' => 'form_mismatch'];
    }

    $result = altcha_instance($config)->verifySolution(new VerifySolutionOptions(
        payload: $payload,
        algorithm: altcha_algorithm(),
    ));

    if (!$result->verified) {
        if ($result->expired) {
            return ['verified' => false, 'error' => 'expired'];
        }

        if ($result->invalidSignature) {
            return ['verified' => false, 'error' => 'invalid_signature'];
        }

        if ($result->invalidSolution) {
            return ['verified' => false, 'error' => 'invalid_solution'];
        }

        return ['verified' => false, 'error' => 'verification_failed'];
    }

    $expiresAt = $payload->challenge->parameters->expiresAt ?? 0;
    $nonce = $payload->challenge->parameters->nonce;
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
