<?php

declare(strict_types=1);

// Local integration tests use this process as sendmail; no message leaves the machine.
if (($argv[1] ?? '') === '--capture-mail') {
    umask(0077);
    file_put_contents(getenv('STB_TEST_MAIL_FILE'), stream_get_contents(STDIN) . "\n--- message end ---\n", FILE_APPEND);
    exit;
}

require dirname(__DIR__) . '/public/api/shared.php';

if (($argv[1] ?? '') === '--file-count') {
    echo record_rate_attempt_file($argv[2], 'contact:ip', 'ip-key', 10000, 900);
    exit;
}

function expect_same(mixed $expected, mixed $actual): void
{
    if ($expected !== $actual) {
        throw new RuntimeException('Expected ' . var_export($expected, true) . ', got ' . var_export($actual, true));
    }
}

$failures = 0;
function run_test(string $name, callable $test): void
{
    global $failures;
    try {
        $test();
        echo "PASS $name\n";
    } catch (Throwable $error) {
        $failures++;
        echo "FAIL $name: {$error->getMessage()}\n";
    }
}

run_test('SQLite cleanup preserves other buckets and expires its own records', function (): void {
    $pdo = new PDO('sqlite::memory:');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    initialize_storage_schema($pdo);
    $insert = $pdo->prepare('INSERT INTO rate_limit_hits (bucket, key_hash, created_at) VALUES (?, ?, ?)');
    $insert->execute(['contact:email', 'email-key', 8000]);
    $insert->execute(['contact:ip_ua', 'ua-key', 8500]);
    $insert->execute(['contact:ip', 'ip-key', 9000]);
    expect_same(1, record_rate_attempt_sqlite($pdo, 'contact:ip', 'ip-key', 10000, 900));
    expect_same(2, record_rate_attempt_sqlite($pdo, 'contact:email', 'email-key', 10000, 3600));
    expect_same(2, record_rate_attempt_sqlite($pdo, 'contact:ip_ua', 'ua-key', 10000, 1800));
    expect_same(1, (int) $pdo->query("SELECT COUNT(*) FROM rate_limit_hits WHERE bucket = 'contact:ip'")->fetchColumn());
});

run_test('File cleanup preserves other buckets and persists between PHP processes', function (): void {
    $dir = sys_get_temp_dir() . '/stb-rate-test-' . bin2hex(random_bytes(8));
    mkdir($dir, 0700);
    $file = $dir . '/rate-limit.json';
    try {
        file_put_contents($file, json_encode([
            'contact:email' => ['email-key' => [8000]],
            'contact:ip_ua' => ['ua-key' => [8500]],
            'contact:ip' => ['ip-key' => [9000]],
        ]));
        expect_same(1, record_rate_attempt_file($dir, 'contact:ip', 'ip-key', 10000, 900));
        expect_same(2, record_rate_attempt_file($dir, 'contact:email', 'email-key', 10000, 3600));
        expect_same(2, record_rate_attempt_file($dir, 'contact:ip_ua', 'ua-key', 10000, 1800));
        expect_same([10000], json_decode(file_get_contents($file), true)['contact:ip']['ip-key']);
        $process = proc_open([PHP_BINARY, __FILE__, '--file-count', $dir], [1 => ['pipe', 'w'], 2 => ['pipe', 'w']], $pipes);
        expect_same('2', stream_get_contents($pipes[1]));
        fclose($pipes[1]);
        fclose($pipes[2]);
        expect_same(0, proc_close($process));
    } finally {
        unlink($file);
        rmdir($dir);
    }
});

run_test('New private directories and files have owner-only permissions', function (): void {
    $dir = sys_get_temp_dir() . '/stb-private-test-' . bin2hex(random_bytes(8));
    mkdir($dir, 0700);
    putenv('STB_PRIVATE_ROOT=' . $dir);
    $paths = ensure_private_paths();
    try {
        record_rate_attempt_file($paths['logs'], 'contact:ip', 'ip-key', 10000, 900);
        expect_same(0700, fileperms($paths['logs']) & 0777);
        expect_same(0700, fileperms($paths['var']) & 0777);
        expect_same(0600, fileperms($paths['logs'] . '/rate-limit.json') & 0777);
    } finally {
        unlink($paths['logs'] . '/rate-limit.json');
        rmdir($paths['logs']);
        rmdir($paths['var']);
        rmdir($dir);
        putenv('STB_PRIVATE_ROOT');
    }
});

exit($failures === 0 ? 0 : 1);
