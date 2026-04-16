<?php

declare(strict_types=1);

function app_private_root(): string
{
    $fromEnv = getenv('STB_PRIVATE_ROOT');
    if (is_string($fromEnv) && $fromEnv !== '') {
        return rtrim($fromEnv, '/');
    }

    return dirname(__DIR__, 2) . '/private';
}

function app_config(): array
{
    $configFile = app_private_root() . '/config.php';

    if (!is_file($configFile)) {
        throw new RuntimeException('Config file not found.');
    }

    $config = require $configFile;

    if (!is_array($config)) {
        throw new RuntimeException('Config file is invalid.');
    }

    return $config;
}

function ensure_private_paths(): array
{
    $root = app_private_root();
    $logsDir = $root . '/logs';

    if (!is_dir($logsDir) && !mkdir($logsDir, 0775, true) && !is_dir($logsDir)) {
        throw new RuntimeException('Unable to create logs directory.');
    }

    return [
        'root' => $root,
        'logs' => $logsDir,
    ];
}

function post_string(string $key): string
{
    $value = $_POST[$key] ?? '';
    return is_string($value) ? trim($value) : '';
}

function post_array(string $key): array
{
    $value = $_POST[$key] ?? [];
    if (!is_array($value)) {
        return [];
    }

    return array_values(array_filter(array_map(
        static fn ($item) => is_string($item) ? trim($item) : '',
        $value
    )));
}

function client_ip(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    return is_string($ip) && $ip !== '' ? $ip : 'unknown';
}

function redirect_with_status(string $path, string $status): never
{
    $separator = str_contains($path, '?') ? '&' : '?';
    header('Location: ' . $path . $separator . 'status=' . rawurlencode($status), true, 303);
    exit;
}

function is_honeypot_triggered(): bool
{
    return post_string('company_site') !== '';
}

function submitted_too_fast(int $minimumSeconds): bool
{
    $startedAt = (int) post_string('form_started_at');
    if ($startedAt <= 0) {
        return true;
    }

    return (time() - $startedAt) < $minimumSeconds;
}

function rate_limit_key(string $formName): string
{
    return hash('sha256', $formName . '|' . client_ip());
}

function rate_limited(string $formName, int $windowSeconds, int $maxAttempts, string $logsDir): bool
{
    $file = $logsDir . '/rate-limit.json';
    $key = rate_limit_key($formName);
    $now = time();
    $data = [];

    if (is_file($file)) {
        $decoded = json_decode((string) file_get_contents($file), true);
        if (is_array($decoded)) {
            $data = $decoded;
        }
    }

    $attempts = array_filter(
        $data[$key] ?? [],
        static fn ($timestamp) => is_int($timestamp) && $timestamp > ($now - $windowSeconds)
    );

    $attempts[] = $now;
    $data[$key] = array_values($attempts);

    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);

    return count($attempts) > $maxAttempts;
}

function validate_required(array $fields): bool
{
    foreach ($fields as $field) {
        if (!isset($field['value']) || trim((string) $field['value']) === '') {
            return false;
        }
    }

    return true;
}

function valid_email(string $email): bool
{
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function log_submission(string $formName, array $payload, string $logsDir): void
{
    $record = [
        'timestamp' => date(DATE_ATOM),
        'form' => $formName,
        'ip' => client_ip(),
        'payload' => $payload,
    ];

    file_put_contents(
        $logsDir . '/form-submissions.log',
        json_encode($record, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL,
        FILE_APPEND | LOCK_EX
    );
}

function smtp_expect($socket, array $codes): string
{
    $response = '';

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (strlen($line) < 4 || $line[3] === ' ') {
            break;
        }
    }

    $code = (int) substr($response, 0, 3);

    if (!in_array($code, $codes, true)) {
        throw new RuntimeException('SMTP error: ' . trim($response));
    }

    return $response;
}

function smtp_send_command($socket, string $command, array $codes): string
{
    fwrite($socket, $command . "\r\n");
    return smtp_expect($socket, $codes);
}

function smtp_send_mail(array $config, string $replyToEmail, string $replyToName, string $subject, string $body): void
{
    $host = $config['smtp']['host'];
    $port = (int) $config['smtp']['port'];
    $timeout = (int) ($config['smtp']['timeout'] ?? 15);
    $encryption = $config['smtp']['encryption'] ?? 'tls';

    $socket = fsockopen($host, $port, $errno, $errstr, $timeout);
    if ($socket === false) {
        throw new RuntimeException('SMTP connection failed: ' . $errstr);
    }

    stream_set_timeout($socket, $timeout);
    smtp_expect($socket, [220]);
    smtp_send_command($socket, 'EHLO vectorworks-spotlight-training.nl', [250]);

    if ($encryption === 'tls') {
        smtp_send_command($socket, 'STARTTLS', [220]);
        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            throw new RuntimeException('Unable to enable TLS encryption.');
        }
        smtp_send_command($socket, 'EHLO vectorworks-spotlight-training.nl', [250]);
    }

    smtp_send_command($socket, 'AUTH LOGIN', [334]);
    smtp_send_command($socket, base64_encode((string) $config['smtp']['username']), [334]);
    smtp_send_command($socket, base64_encode((string) $config['smtp']['password']), [235]);

    $fromEmail = (string) $config['mail']['from_email'];
    $toEmail = (string) $config['mail']['to_email'];
    $fromName = (string) $config['mail']['from_name'];

    smtp_send_command($socket, 'MAIL FROM:<' . $fromEmail . '>', [250]);
    smtp_send_command($socket, 'RCPT TO:<' . $toEmail . '>', [250, 251]);
    smtp_send_command($socket, 'DATA', [354]);

    $headers = [
        'Date: ' . date(DATE_RFC2822),
        'From: ' . $fromName . ' <' . $fromEmail . '>',
        'Reply-To: ' . $replyToName . ' <' . $replyToEmail . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'Subject: ' . $subject,
    ];

    $message = implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n", "\r\n", $body);
    $message = preg_replace("/^\./m", '..', $message);

    fwrite($socket, $message . "\r\n.\r\n");
    smtp_expect($socket, [250]);
    smtp_send_command($socket, 'QUIT', [221]);

    fclose($socket);
}

function bool_from_checkbox(string $key): bool
{
    return post_string($key) === '1';
}
