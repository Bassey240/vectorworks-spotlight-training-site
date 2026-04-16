<?php

return [
    'smtp' => [
        'host' => 'smtp.transip.email',
        'port' => 587,
        'encryption' => 'tls',
        'username' => 'info@vectorworks-spotlight-training.nl',
        'password' => 'replace-with-real-password',
        'timeout' => 15,
    ],
    'mail' => [
        'from_email' => 'info@vectorworks-spotlight-training.nl',
        'from_name' => 'STB Services',
        'to_email' => 'info@vectorworks-spotlight-training.nl',
    ],
    'security' => [
        'min_submit_seconds' => 3,
        'max_attempts_per_window' => 5,
        'window_seconds' => 900,
    ],
];
