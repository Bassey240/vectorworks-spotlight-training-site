<?php

declare(strict_types=1);

require __DIR__ . '/shared.php';
require __DIR__ . '/altcha-support.php';

$returnPath = '/aanmelden/';
$allowedInterests = [
    '3-Daagse cursus Vectorworks Basis',
    '1-Daagse cursus Vectorworks Spotlight',
    '1-Daagse cursus Vectorworks 3D-modeling',
    '1-Daagse cursus Vectorworks Rendering en Visualisatie',
    'Maatwerk Training',
    '2D- en 3D-tekenwerk en visualisatie',
];

try {
    $config = app_config();
    $paths = ensure_private_paths();

    $payload = [
        'company' => normalize_text(post_string('company'), security_config_int($config, 'max_company_length', 160)),
        'name' => normalize_text(post_string('name'), security_config_int($config, 'max_name_length', 120)),
        'address' => normalize_text(post_string('address'), security_config_int($config, 'max_address_length', 200)),
        'postal_code' => normalize_text(post_string('postal_code'), security_config_int($config, 'max_postal_code_length', 32)),
        'city' => normalize_text(post_string('city'), security_config_int($config, 'max_city_length', 120)),
        'phone' => normalize_text(post_string('phone'), security_config_int($config, 'max_phone_length', 60)),
        'email' => normalize_text(post_string('email'), security_config_int($config, 'max_email_length', 254)),
        'interest' => array_values(array_intersect(
            normalize_string_array(post_array('interest'), 120),
            $allowedInterests
        )),
        'message' => normalize_text(post_string('message'), security_config_int($config, 'max_message_length', 5000), true),
        'privacy_accepted' => bool_from_checkbox('privacy_accepted') ? 'yes' : 'no',
    ];

    $attemptCounts = [
        'ip' => record_rate_attempt(
            'signup:ip',
            client_ip(),
            security_config_int($config, 'window_seconds', 900),
            $paths
        ),
        'email' => record_rate_attempt(
            'signup:email',
            $payload['email'],
            security_config_int($config, 'email_window_seconds', 3600),
            $paths
        ),
        'ip_ua' => record_rate_attempt(
            'signup:ip_ua',
            client_ip() . '|' . request_user_agent(),
            security_config_int($config, 'ip_ua_window_seconds', 1800),
            $paths
        ),
    ];

    if (
        $attemptCounts['ip'] > security_config_int($config, 'max_attempts_per_window', 5) ||
        $attemptCounts['email'] > security_config_int($config, 'max_attempts_per_email_window', 3) ||
        $attemptCounts['ip_ua'] > security_config_int($config, 'max_attempts_per_ip_ua_window', 6)
    ) {
        log_form_event('signup', 'throttled', 'throttled', $payload, [
            'score' => 0,
            'signals' => [
                'rate_limit' => [
                    'score' => 0,
                    'meta' => $attemptCounts,
                ],
            ],
        ], $paths);
        redirect_with_status($returnPath, 'throttled');
    }

    if (
        !validate_required([
            ['value' => $payload['name']],
            ['value' => $payload['phone']],
            ['value' => $payload['email']],
            ['value' => $payload['message']],
        ]) ||
        !bool_from_checkbox('privacy_accepted') ||
        !valid_email($payload['email'])
    ) {
        log_form_event('signup', 'invalid', 'invalid', $payload, ['score' => 0, 'signals' => []], $paths);
        redirect_with_status($returnPath, 'invalid');
    }

    if (altcha_enabled($config)) {
        $altchaResult = altcha_verify_payload(post_string('altcha'), $config, $paths, 'signup');
        if (($altchaResult['verified'] ?? false) !== true) {
            log_form_event('signup', 'captcha_failed', 'captcha', $payload, [
                'score' => 100,
                'signals' => [
                    'altcha' => [
                        'score' => 100,
                        'meta' => [
                            'error' => $altchaResult['error'] ?? 'unknown',
                        ],
                    ],
                ],
            ], $paths);
            redirect_with_status($returnPath, 'captcha');
        }
    }

    $analysis = analyze_submission_risk('signup', $payload, $config, $paths, $attemptCounts);
    if ($analysis['decision'] === 'blocked') {
        log_form_event('signup', 'blocked', 'blocked', $payload, $analysis, $paths);
        redirect_with_status($returnPath, 'blocked_spam');
    }

    $bodyLines = [
        'Nieuwe aanmelding via formulier',
        '',
        'Bedrijfsnaam: ' . ($payload['company'] !== '' ? $payload['company'] : '-'),
        'Naam: ' . $payload['name'],
        'Adres: ' . ($payload['address'] !== '' ? $payload['address'] : '-'),
        'Postcode: ' . ($payload['postal_code'] !== '' ? $payload['postal_code'] : '-'),
        'Woonplaats: ' . ($payload['city'] !== '' ? $payload['city'] : '-'),
        'Telefoon: ' . $payload['phone'],
        'E-mail: ' . $payload['email'],
        'Interesse: ' . (count($payload['interest']) > 0 ? implode(', ', $payload['interest']) : '-'),
        '',
        'Opmerking / gewenste periode:',
        $payload['message'],
    ];

    if ($analysis['decision'] === 'flagged') {
        $bodyLines[] = '';
        $bodyLines[] = 'Beveiligingsreview:';
        $bodyLines[] = 'Score: ' . (string) $analysis['score'];
        $bodyLines[] = 'Signals: ' . implode(', ', array_keys($analysis['signals']));
    }

    $subject = build_mail_subject($config, 'Nieuwe aanmelding via website', $analysis);
    $body = implode("\n", $bodyLines);

    try {
        send_mail(
            $config,
            $payload['email'],
            $payload['name'],
            $subject,
            $body
        );
        log_mail_event('signup', (string) $config['mail']['to_email'], $subject, 'sent', $paths);
    } catch (Throwable $mailException) {
        log_mail_event(
            'signup',
            (string) ($config['mail']['to_email'] ?? ''),
            $subject,
            'error',
            $paths,
            $mailException->getMessage()
        );
        throw $mailException;
    }

    $responseStatus = $analysis['decision'] === 'flagged' ? 'review' : 'success';
    log_form_event('signup', (string) $analysis['decision'], $responseStatus, $payload, $analysis, $paths);
    redirect_with_status($returnPath, $responseStatus);
} catch (Throwable $exception) {
    error_log($exception->getMessage());
    redirect_with_status($returnPath, 'mail_unavailable');
}
