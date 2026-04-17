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
    $varDir = $root . '/var';

    foreach ([$logsDir, $varDir] as $dir) {
        if (!is_dir($dir) && !mkdir($dir, 0775, true) && !is_dir($dir)) {
            throw new RuntimeException('Unable to create private directory: ' . $dir);
        }
    }

    return [
        'root' => $root,
        'logs' => $logsDir,
        'var' => $varDir,
    ];
}

function request_header(string $serverKey): string
{
    $value = $_SERVER[$serverKey] ?? '';
    return is_string($value) ? trim($value) : '';
}

function request_user_agent(): string
{
    return request_header('HTTP_USER_AGENT');
}

function request_accept_language(): string
{
    return request_header('HTTP_ACCEPT_LANGUAGE');
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

function string_length(string $value): int
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($value, 'UTF-8');
    }

    return strlen($value);
}

function string_lower(string $value): string
{
    if (function_exists('mb_strtolower')) {
        return mb_strtolower($value, 'UTF-8');
    }

    return strtolower($value);
}

function string_truncate(string $value, int $maxLength): string
{
    if ($maxLength <= 0 || string_length($value) <= $maxLength) {
        return $value;
    }

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }

    return substr($value, 0, $maxLength);
}

function normalize_line_endings(string $value): string
{
    return str_replace(["\r\n", "\r"], "\n", $value);
}

function normalize_text(string $value, int $maxLength = 0, bool $keepNewlines = false): string
{
    $value = str_replace("\0", '', $value);
    $value = normalize_line_endings($value);

    if ($keepNewlines) {
        $value = preg_replace('/[ \t]+/u', ' ', $value) ?? $value;
        $value = preg_replace('/\n{3,}/u', "\n\n", $value) ?? $value;
        $lines = explode("\n", $value);
        $lines = array_map(static fn (string $line): string => trim($line), $lines);
        $value = trim(implode("\n", $lines));
    } else {
        $value = preg_replace('/\s+/u', ' ', $value) ?? $value;
        $value = trim($value);
    }

    return string_truncate($value, $maxLength);
}

function sanitize_header_text(string $value, int $maxLength = 120): string
{
    $value = str_replace(["\r", "\n"], ' ', $value);
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? $value;
    $value = preg_replace('/\s+/u', ' ', $value) ?? $value;
    $value = trim($value);

    return string_truncate($value, $maxLength);
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

function normalize_string_array(array $values, int $maxLength): array
{
    $clean = [];
    foreach ($values as $value) {
        $normalized = normalize_text((string) $value, $maxLength);
        if ($normalized !== '') {
            $clean[] = $normalized;
        }
    }

    return array_values(array_unique($clean));
}

function bool_from_checkbox(string $key): bool
{
    return post_string($key) === '1';
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

function email_domain(string $email): string
{
    $atPos = strrpos($email, '@');
    if ($atPos === false) {
        return '';
    }

    return string_lower(substr($email, $atPos + 1));
}

function email_has_mx(string $email): bool
{
    $domain = email_domain($email);
    if ($domain === '') {
        return false;
    }

    if (function_exists('checkdnsrr')) {
        return checkdnsrr($domain, 'MX') || checkdnsrr($domain, 'A') || checkdnsrr($domain, 'AAAA');
    }

    if (function_exists('dns_get_record')) {
        $records = dns_get_record($domain, DNS_MX | DNS_A | DNS_AAAA);
        return is_array($records) && count($records) > 0;
    }

    return true;
}

function security_config_int(array $config, string $key, int $default): int
{
    return (int) ($config['security'][$key] ?? $default);
}

function security_config_bool(array $config, string $key, bool $default): bool
{
    return (bool) ($config['security'][$key] ?? $default);
}

function mail_config_string(array $config, string $key, string $default = ''): string
{
    $value = $config['mail'][$key] ?? $default;
    return is_string($value) ? $value : $default;
}

function mail_transport(array $config): string
{
    $transport = string_lower(trim((string) ($config['mail']['transport'] ?? 'smtp')));
    return in_array($transport, ['smtp', 'sendmail'], true) ? $transport : 'smtp';
}

function sqlite_available(): bool
{
    return class_exists('PDO') && in_array('sqlite', PDO::getAvailableDrivers(), true);
}

function storage_connection(array $paths): ?PDO
{
    static $pdo = null;
    static $attempted = false;

    if ($attempted) {
        return $pdo instanceof PDO ? $pdo : null;
    }

    $attempted = true;

    if (!sqlite_available()) {
        return null;
    }

    try {
        $dbFile = $paths['var'] . '/forms.sqlite';
        $pdo = new PDO('sqlite:' . $dbFile);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        initialize_storage_schema($pdo);
    } catch (Throwable $exception) {
        error_log('Forms SQLite unavailable: ' . $exception->getMessage());
        $pdo = null;
    }

    return $pdo instanceof PDO ? $pdo : null;
}

function initialize_storage_schema(PDO $pdo): void
{
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS rate_limit_hits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            bucket TEXT NOT NULL,
            key_hash TEXT NOT NULL,
            created_at INTEGER NOT NULL
        )'
    );
    $pdo->exec('CREATE INDEX IF NOT EXISTS idx_rate_limit_bucket_key_created ON rate_limit_hits (bucket, key_hash, created_at)');

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS form_events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            created_at TEXT NOT NULL,
            form_name TEXT NOT NULL,
            decision TEXT NOT NULL,
            status TEXT NOT NULL,
            ip TEXT NOT NULL,
            user_agent TEXT NOT NULL,
            email TEXT NOT NULL,
            score INTEGER NOT NULL,
            signals_json TEXT NOT NULL,
            payload_json TEXT NOT NULL
        )'
    );

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS mail_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            created_at TEXT NOT NULL,
            form_name TEXT NOT NULL,
            recipient TEXT NOT NULL,
            subject TEXT NOT NULL,
            status TEXT NOT NULL,
            error_message TEXT NOT NULL
        )'
    );

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS altcha_used_nonces (
            nonce_hash TEXT PRIMARY KEY,
            expires_at INTEGER NOT NULL,
            created_at INTEGER NOT NULL
        )'
    );
}

function rate_limit_key(string $bucket, string $material): string
{
    return hash('sha256', $bucket . '|' . string_lower($material));
}

function record_rate_attempt(string $bucket, string $material, int $windowSeconds, array $paths): int
{
    if ($material === '') {
        return 0;
    }

    $keyHash = rate_limit_key($bucket, $material);
    $now = time();

    $pdo = storage_connection($paths);
    if ($pdo instanceof PDO) {
        return record_rate_attempt_sqlite($pdo, $bucket, $keyHash, $now, $windowSeconds);
    }

    return record_rate_attempt_file($paths['logs'], $bucket, $keyHash, $now, $windowSeconds);
}

function record_rate_attempt_sqlite(PDO $pdo, string $bucket, string $keyHash, int $now, int $windowSeconds): int
{
    $cutoff = $now - $windowSeconds;

    $pdo->beginTransaction();

    try {
        $deleteStmt = $pdo->prepare('DELETE FROM rate_limit_hits WHERE created_at <= :cutoff');
        $deleteStmt->execute(['cutoff' => $cutoff]);

        $insertStmt = $pdo->prepare('INSERT INTO rate_limit_hits (bucket, key_hash, created_at) VALUES (:bucket, :key_hash, :created_at)');
        $insertStmt->execute([
            'bucket' => $bucket,
            'key_hash' => $keyHash,
            'created_at' => $now,
        ]);

        $countStmt = $pdo->prepare(
            'SELECT COUNT(*) FROM rate_limit_hits WHERE bucket = :bucket AND key_hash = :key_hash AND created_at > :cutoff'
        );
        $countStmt->execute([
            'bucket' => $bucket,
            'key_hash' => $keyHash,
            'cutoff' => $cutoff,
        ]);

        $count = (int) $countStmt->fetchColumn();
        $pdo->commit();

        return $count;
    } catch (Throwable $exception) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }

        throw $exception;
    }
}

function record_rate_attempt_file(string $logsDir, string $bucket, string $keyHash, int $now, int $windowSeconds): int
{
    $file = $logsDir . '/rate-limit.json';
    $handle = fopen($file, 'c+');

    if ($handle === false) {
        throw new RuntimeException('Unable to open rate limit storage.');
    }

    $cutoff = $now - $windowSeconds;

    try {
        if (!flock($handle, LOCK_EX)) {
            throw new RuntimeException('Unable to lock rate limit storage.');
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

        foreach ($data as $bucketName => $bucketValues) {
            if (!is_array($bucketValues)) {
                unset($data[$bucketName]);
                continue;
            }

            foreach ($bucketValues as $storedKey => $timestamps) {
                if (!is_array($timestamps)) {
                    unset($data[$bucketName][$storedKey]);
                    continue;
                }

                $data[$bucketName][$storedKey] = array_values(array_filter(
                    $timestamps,
                    static fn ($timestamp) => is_int($timestamp) && $timestamp > $cutoff
                ));

                if ($data[$bucketName][$storedKey] === []) {
                    unset($data[$bucketName][$storedKey]);
                }
            }

            if ($data[$bucketName] === []) {
                unset($data[$bucketName]);
            }
        }

        $attempts = $data[$bucket][$keyHash] ?? [];
        $attempts[] = $now;
        $data[$bucket][$keyHash] = $attempts;

        rewind($handle);
        ftruncate($handle, 0);
        fwrite($handle, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
        fflush($handle);
        flock($handle, LOCK_UN);
        fclose($handle);

        return count($attempts);
    } catch (Throwable $exception) {
        flock($handle, LOCK_UN);
        fclose($handle);
        throw $exception;
    }
}

function log_form_event(
    string $formName,
    string $decision,
    string $status,
    array $payload,
    array $analysis,
    array $paths
): void {
    $record = [
        'timestamp' => date(DATE_ATOM),
        'form' => $formName,
        'decision' => $decision,
        'status' => $status,
        'ip' => client_ip(),
        'user_agent' => request_user_agent(),
        'accept_language' => request_accept_language(),
        'email' => $payload['email'] ?? '',
        'score' => (int) ($analysis['score'] ?? 0),
        'signals' => $analysis['signals'] ?? [],
        'payload' => $payload,
    ];

    file_put_contents(
        $paths['logs'] . '/form-events.log',
        json_encode($record, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL,
        FILE_APPEND | LOCK_EX
    );

    if (in_array($decision, ['flagged', 'blocked', 'throttled', 'captcha_failed'], true)) {
        file_put_contents(
            $paths['logs'] . '/form-events-suspicious.log',
            json_encode($record, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL,
            FILE_APPEND | LOCK_EX
        );
    }

    $pdo = storage_connection($paths);
    if (!($pdo instanceof PDO)) {
        return;
    }

    $stmt = $pdo->prepare(
        'INSERT INTO form_events (created_at, form_name, decision, status, ip, user_agent, email, score, signals_json, payload_json)
         VALUES (:created_at, :form_name, :decision, :status, :ip, :user_agent, :email, :score, :signals_json, :payload_json)'
    );
    $stmt->execute([
        'created_at' => $record['timestamp'],
        'form_name' => $formName,
        'decision' => $decision,
        'status' => $status,
        'ip' => $record['ip'],
        'user_agent' => $record['user_agent'],
        'email' => (string) $record['email'],
        'score' => $record['score'],
        'signals_json' => json_encode($record['signals'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
        'payload_json' => json_encode($record['payload'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
    ]);
}

function log_mail_event(
    string $formName,
    string $recipient,
    string $subject,
    string $status,
    array $paths,
    ?string $errorMessage = null
): void {
    $record = [
        'timestamp' => date(DATE_ATOM),
        'form' => $formName,
        'recipient' => $recipient,
        'subject' => $subject,
        'status' => $status,
        'error' => $errorMessage ?? '',
    ];

    file_put_contents(
        $paths['logs'] . '/mail-events.log',
        json_encode($record, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL,
        FILE_APPEND | LOCK_EX
    );

    $pdo = storage_connection($paths);
    if (!($pdo instanceof PDO)) {
        return;
    }

    $stmt = $pdo->prepare(
        'INSERT INTO mail_log (created_at, form_name, recipient, subject, status, error_message)
         VALUES (:created_at, :form_name, :recipient, :subject, :status, :error_message)'
    );
    $stmt->execute([
        'created_at' => $record['timestamp'],
        'form_name' => $formName,
        'recipient' => $recipient,
        'subject' => $subject,
        'status' => $status,
        'error_message' => $record['error'],
    ]);
}

function count_links(string $text): int
{
    preg_match_all('/(?:https?:\/\/|www\.|[a-z0-9.-]+\.[a-z]{2,}(?:\/|\b))/iu', $text, $matches);
    return isset($matches[0]) && is_array($matches[0]) ? count($matches[0]) : 0;
}

function contains_spam_patterns(string $text): bool
{
    return preg_match(
        '/\b(?:seo|backlinks?|guest post|domain authority|dr traffic|google ranking|link exchange|casino|gambling|crypto|forex|viagra|telegram|whatsapp|adult dating)\b/iu',
        $text
    ) === 1;
}

function contains_repeated_text(string $text): bool
{
    if (preg_match('/(.{12,})\1{2,}/u', $text) === 1) {
        return true;
    }

    $words = preg_split('/[^\p{L}\p{N}@._-]+/u', string_lower($text), -1, PREG_SPLIT_NO_EMPTY);
    if (!is_array($words) || count($words) < 6) {
        return false;
    }

    $frequencies = array_count_values($words);
    if ($frequencies === []) {
        return false;
    }

    rsort($frequencies);
    $maxFrequency = (int) $frequencies[0];

    return $maxFrequency >= max(6, (int) ceil(count($words) * 0.35));
}

function contains_suspicious_unicode(string $text): bool
{
    return preg_match('/[\x{200B}-\x{200F}\x{202A}-\x{202E}\x{2060}\x{FEFF}]/u', $text) === 1;
}

function is_generic_message(string $text): bool
{
    $normalized = string_lower(normalize_text($text));
    if ($normalized === '') {
        return false;
    }

    $genericMessages = [
        'hello',
        'hi',
        'test',
        'good site',
        'nice website',
        'hello dear',
        'how are you',
        'need seo help',
    ];

    if (in_array($normalized, $genericMessages, true)) {
        return true;
    }

    return string_length($normalized) < 20 && preg_match('/^(hello|hi|test|goed|top|nice)\b/iu', $normalized) === 1;
}

function suspicious_user_agent(string $userAgent): bool
{
    if ($userAgent === '') {
        return false;
    }

    return preg_match('/(?:curl|wget|python|requests|scrapy|aiohttp|go-http-client|httpclient|okhttp|java|libwww-perl)/iu', $userAgent) === 1;
}

function disposable_domains_file(array $config, array $paths): string
{
    $configured = (string) ($config['security']['disposable_domains_file'] ?? '');
    if ($configured !== '') {
        if (str_starts_with($configured, '/')) {
            return $configured;
        }

        return $paths['root'] . '/' . ltrim($configured, '/');
    }

    return $paths['root'] . '/lists/disposable_domains.txt';
}

function load_disposable_domains(array $config, array $paths): array
{
    static $cache = [];

    $file = disposable_domains_file($config, $paths);
    if (isset($cache[$file])) {
        return $cache[$file];
    }

    if (!is_file($file)) {
        $cache[$file] = [];
        return [];
    }

    $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if (!is_array($lines)) {
        $cache[$file] = [];
        return [];
    }

    $domains = [];
    foreach ($lines as $line) {
        $line = trim((string) $line);
        if ($line === '' || str_starts_with($line, '#')) {
            continue;
        }

        $domains[] = string_lower($line);
    }

    $cache[$file] = array_values(array_unique($domains));

    return $cache[$file];
}

function is_disposable_email_domain(string $email, array $config, array $paths): bool
{
    $domain = email_domain($email);
    if ($domain === '') {
        return false;
    }

    return in_array($domain, load_disposable_domains($config, $paths), true);
}

function add_signal(array &$signals, int &$score, string $code, int $points, array $meta = []): void
{
    $signals[$code] = [
        'score' => $points,
        'meta' => $meta,
    ];
    $score += $points;
}

function analyze_submission_risk(
    string $formName,
    array $payload,
    array $config,
    array $paths,
    array $attemptCounts
): array {
    $score = 0;
    $signals = [];
    $message = (string) ($payload['message'] ?? '');
    $userAgent = request_user_agent();
    $acceptLanguage = request_accept_language();

    if (is_honeypot_triggered()) {
        add_signal($signals, $score, 'honeypot', 100);
    }

    $minSeconds = security_config_int($config, 'min_submit_seconds', 3);
    if (submitted_too_fast($minSeconds)) {
        add_signal($signals, $score, 'submitted_too_fast', 30, ['minimum_seconds' => $minSeconds]);
    }

    if ($userAgent === '') {
        add_signal($signals, $score, 'empty_user_agent', 25);
    } elseif (suspicious_user_agent($userAgent)) {
        add_signal($signals, $score, 'suspicious_user_agent', 20, ['user_agent' => $userAgent]);
    }

    if ($acceptLanguage === '') {
        add_signal($signals, $score, 'missing_accept_language', 15);
    }

    $maxLinks = security_config_int($config, 'max_links', 2);
    $linkCount = count_links($message);
    if ($linkCount > $maxLinks) {
        add_signal($signals, $score, 'too_many_links', 20, ['count' => $linkCount]);
    }

    if (contains_spam_patterns($message)) {
        add_signal($signals, $score, 'spam_patterns', 20);
    }

    if (contains_repeated_text($message)) {
        add_signal($signals, $score, 'repeated_text', 15);
    }

    if (contains_suspicious_unicode($message)) {
        add_signal($signals, $score, 'suspicious_unicode', 15);
    }

    if (is_generic_message($message)) {
        add_signal($signals, $score, 'generic_message', 10);
    }

    if (($attemptCounts['email'] ?? 0) >= max(2, security_config_int($config, 'max_attempts_per_email_window', 3))) {
        add_signal($signals, $score, 'repeated_email_attempts', 20, ['count' => $attemptCounts['email'] ?? 0]);
    }

    if (($attemptCounts['ip_ua'] ?? 0) >= max(3, security_config_int($config, 'max_attempts_per_ip_ua_window', 6))) {
        add_signal($signals, $score, 'repeated_ip_ua_attempts', 20, ['count' => $attemptCounts['ip_ua'] ?? 0]);
    }

    if (is_disposable_email_domain((string) ($payload['email'] ?? ''), $config, $paths)) {
        add_signal($signals, $score, 'disposable_email_domain', 15, ['domain' => email_domain((string) ($payload['email'] ?? ''))]);
    }

    if (security_config_bool($config, 'enable_mx_check', false) && !email_has_mx((string) ($payload['email'] ?? ''))) {
        add_signal($signals, $score, 'missing_mx_record', 10, ['domain' => email_domain((string) ($payload['email'] ?? ''))]);
    }

    $flagThreshold = security_config_int($config, 'score_flag_threshold', 30);
    $blockThreshold = security_config_int($config, 'score_block_threshold', 70);

    $decision = 'accepted';
    if ($score >= $blockThreshold) {
        $decision = 'blocked';
    } elseif ($score >= $flagThreshold) {
        $decision = 'flagged';
    }

    return [
        'form' => $formName,
        'score' => $score,
        'signals' => $signals,
        'decision' => $decision,
    ];
}

function build_mail_subject(array $config, string $baseSubject, array $analysis): string
{
    $subject = trim(mail_config_string($config, 'subject_prefix'));
    $reviewPrefix = trim(mail_config_string($config, 'review_prefix', '[Review]'));

    $parts = [];
    if ($subject !== '') {
        $parts[] = $subject;
    }
    if (($analysis['decision'] ?? 'accepted') === 'flagged' && $reviewPrefix !== '') {
        $parts[] = $reviewPrefix;
    }
    $parts[] = $baseSubject;

    return trim(implode(' ', $parts));
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

function mail_headers(
    array $config,
    string $replyToEmail,
    string $replyToName,
    string $subject
): array {
    $replyToEmail = sanitize_header_text($replyToEmail, 254);
    $replyToName = sanitize_header_text($replyToName, 120);
    $subject = sanitize_header_text($subject, 180);
    $fromEmail = sanitize_header_text((string) $config['mail']['from_email'], 254);
    $fromName = sanitize_header_text((string) $config['mail']['from_name'], 120);

    return [
        'Date: ' . date(DATE_RFC2822),
        'From: ' . $fromName . ' <' . $fromEmail . '>',
        'Reply-To: ' . $replyToName . ' <' . $replyToEmail . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'Subject: ' . $subject,
    ];
}

function sendmail_send_mail(array $config, string $replyToEmail, string $replyToName, string $subject, string $body): void
{
    $toEmail = sanitize_header_text((string) $config['mail']['to_email'], 254);
    $fromEmail = sanitize_header_text((string) $config['mail']['from_email'], 254);
    $subject = sanitize_header_text($subject, 180);

    $headers = mail_headers($config, $replyToEmail, $replyToName, $subject);
    $headers = array_filter($headers, static fn (string $header): bool => !str_starts_with($header, 'Subject: '));

    $success = mail(
        $toEmail,
        $subject,
        $body,
        implode("\r\n", $headers),
        '-f ' . $fromEmail
    );

    if ($success !== true) {
        throw new RuntimeException('sendmail delivery failed.');
    }
}

function smtp_send_mail(array $config, string $replyToEmail, string $replyToName, string $subject, string $body): void
{
    $host = (string) $config['smtp']['host'];
    $port = (int) $config['smtp']['port'];
    $timeout = (int) ($config['smtp']['timeout'] ?? 15);
    $encryption = (string) ($config['smtp']['encryption'] ?? 'tls');

    $socket = fsockopen($host, $port, $errno, $errstr, $timeout);
    if ($socket === false) {
        throw new RuntimeException('SMTP connection failed: ' . $errstr);
    }

    $replyToEmail = sanitize_header_text($replyToEmail, 254);
    $replyToName = sanitize_header_text($replyToName, 120);
    $subject = sanitize_header_text($subject, 180);

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

    $toEmail = sanitize_header_text((string) $config['mail']['to_email'], 254);
    $fromEmail = sanitize_header_text((string) $config['mail']['from_email'], 254);

    smtp_send_command($socket, 'MAIL FROM:<' . $fromEmail . '>', [250]);
    smtp_send_command($socket, 'RCPT TO:<' . $toEmail . '>', [250, 251]);
    smtp_send_command($socket, 'DATA', [354]);

    $headers = mail_headers($config, $replyToEmail, $replyToName, $subject);

    $message = implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n", "\r\n", $body);
    $message = preg_replace("/^\./m", '..', $message);

    fwrite($socket, $message . "\r\n.\r\n");
    smtp_expect($socket, [250]);
    smtp_send_command($socket, 'QUIT', [221]);

    fclose($socket);
}

function send_mail(array $config, string $replyToEmail, string $replyToName, string $subject, string $body): void
{
    if (mail_transport($config) === 'sendmail') {
        sendmail_send_mail($config, $replyToEmail, $replyToName, $subject, $body);
        return;
    }

    smtp_send_mail($config, $replyToEmail, $replyToName, $subject, $body);
}
