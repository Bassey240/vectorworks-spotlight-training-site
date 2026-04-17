<?php

declare(strict_types=1);

require __DIR__ . '/shared.php';
require __DIR__ . '/altcha-support.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('X-Robots-Tag: noindex, nofollow');

$formName = $_GET['form'] ?? '';
$allowedForms = ['contact', 'signup'];

if (!is_string($formName) || !in_array($formName, $allowedForms, true)) {
    http_response_code(400);
    echo json_encode(['error' => 'invalid_form'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    $config = app_config();

    if (!altcha_enabled($config)) {
        http_response_code(503);
        echo json_encode(['error' => 'altcha_disabled'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        exit;
    }

    $challenge = altcha_create_challenge_response($formName, $config);
    echo json_encode($challenge, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
} catch (Throwable $exception) {
    error_log($exception->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'challenge_unavailable'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}
