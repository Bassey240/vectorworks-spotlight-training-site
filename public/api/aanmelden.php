<?php

declare(strict_types=1);

require __DIR__ . '/shared.php';

$returnPath = '/aanmelden/';

try {
    $config = app_config();
    $paths = ensure_private_paths();

    if (is_honeypot_triggered()) {
        redirect_with_status($returnPath, 'blocked');
    }

    $minSeconds = (int) ($config['security']['min_submit_seconds'] ?? 3);
    if (submitted_too_fast($minSeconds)) {
        redirect_with_status($returnPath, 'blocked');
    }

    $windowSeconds = (int) ($config['security']['window_seconds'] ?? 900);
    $maxAttempts = (int) ($config['security']['max_attempts_per_window'] ?? 5);
    if (rate_limited('signup', $windowSeconds, $maxAttempts, $paths['logs'])) {
        redirect_with_status($returnPath, 'throttled');
    }

    $payload = [
        'company' => post_string('company'),
        'name' => post_string('name'),
        'address' => post_string('address'),
        'postal_code' => post_string('postal_code'),
        'city' => post_string('city'),
        'phone' => post_string('phone'),
        'email' => post_string('email'),
        'interest' => post_array('interest'),
        'message' => post_string('message'),
        'privacy_accepted' => bool_from_checkbox('privacy_accepted') ? 'yes' : 'no',
    ];

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
        redirect_with_status($returnPath, 'invalid');
    }

    $body = implode("\n", [
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
    ]);

    smtp_send_mail(
        $config,
        $payload['email'],
        $payload['name'],
        'Nieuwe aanmelding via website',
        $body
    );

    log_submission('signup', $payload, $paths['logs']);
    redirect_with_status($returnPath, 'success');
} catch (Throwable $exception) {
    error_log($exception->getMessage());
    redirect_with_status($returnPath, 'error');
}
