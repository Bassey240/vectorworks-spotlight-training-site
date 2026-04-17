<?php

declare(strict_types=1);

require __DIR__ . '/shared.php';

$returnPath = '/contact/';

try {
    $config = app_config();
    $paths = ensure_private_paths();

    $payload = [
        'company' => normalize_text(post_string('company'), security_config_int($config, 'max_company_length', 160)),
        'name' => normalize_text(post_string('name'), security_config_int($config, 'max_name_length', 120)),
        'phone' => normalize_text(post_string('phone'), security_config_int($config, 'max_phone_length', 60)),
        'email' => normalize_text(post_string('email'), security_config_int($config, 'max_email_length', 254)),
        'message' => normalize_text(post_string('message'), security_config_int($config, 'max_message_length', 5000), true),
        'privacy_accepted' => bool_from_checkbox('privacy_accepted') ? 'yes' : 'no',
    ];

    $attemptCounts = [
        'ip' => record_rate_attempt(
            'contact:ip',
            client_ip(),
            security_config_int($config, 'window_seconds', 900),
            $paths
        ),
        'email' => record_rate_attempt(
            'contact:email',
            $payload['email'],
            security_config_int($config, 'email_window_seconds', 3600),
            $paths
        ),
        'ip_ua' => record_rate_attempt(
            'contact:ip_ua',
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
        log_form_event('contact', 'throttled', 'throttled', $payload, [
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
        log_form_event('contact', 'invalid', 'invalid', $payload, ['score' => 0, 'signals' => []], $paths);
        redirect_with_status($returnPath, 'invalid');
    }

    $analysis = analyze_submission_risk('contact', $payload, $config, $paths, $attemptCounts);
    if ($analysis['decision'] === 'blocked') {
        log_form_event('contact', 'blocked', 'blocked', $payload, $analysis, $paths);
        redirect_with_status($returnPath, 'blocked_spam');
    }

    $bodyLines = [
        'Nieuw bericht via contactformulier',
        '',
        'Bedrijfsnaam: ' . ($payload['company'] !== '' ? $payload['company'] : '-'),
        'Naam: ' . $payload['name'],
        'Telefoon: ' . $payload['phone'],
        'E-mail: ' . $payload['email'],
        '',
        'Bericht:',
        $payload['message'],
    ];

    if ($analysis['decision'] === 'flagged') {
        $bodyLines[] = '';
        $bodyLines[] = 'Beveiligingsreview:';
        $bodyLines[] = 'Score: ' . (string) $analysis['score'];
        $bodyLines[] = 'Signals: ' . implode(', ', array_keys($analysis['signals']));
    }

    $subject = build_mail_subject($config, 'Nieuw bericht via contactformulier', $analysis);
    $body = implode("\n", $bodyLines);

    try {
        smtp_send_mail(
            $config,
            $payload['email'],
            $payload['name'],
            $subject,
            $body
        );
        log_mail_event('contact', (string) $config['mail']['to_email'], $subject, 'sent', $paths);
    } catch (Throwable $mailException) {
        log_mail_event(
            'contact',
            (string) ($config['mail']['to_email'] ?? ''),
            $subject,
            'error',
            $paths,
            $mailException->getMessage()
        );
        throw $mailException;
    }

    $responseStatus = $analysis['decision'] === 'flagged' ? 'review' : 'success';
    log_form_event('contact', (string) $analysis['decision'], $responseStatus, $payload, $analysis, $paths);
    redirect_with_status($returnPath, $responseStatus);
} catch (Throwable $exception) {
    error_log($exception->getMessage());
    redirect_with_status($returnPath, 'mail_unavailable');
}
