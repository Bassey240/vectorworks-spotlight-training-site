# Vectorworks Form Security Implementation Plan

## Scope

This document covers only the implementation plan for:

- `vectorworks-spotlight-training.nl`

It does **not** define the implementation for `timetobill.nl`.

The Vectorworks site can continue with:

- Astro frontend
- PHP form handlers
- SMTP-based mail delivery

## Current State

Current relevant files:

- [src/components/ContactForm.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/components/ContactForm.astro)
- [src/components/SignupForm.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/components/SignupForm.astro)
- [src/components/FormStatus.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/components/FormStatus.astro)
- [src/layouts/BaseLayout.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/layouts/BaseLayout.astro)
- [public/api/contact.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/contact.php)
- [public/api/aanmelden.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/aanmelden.php)
- [public/api/shared.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/shared.php)
- [public/api/config.sample.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/config.sample.php)

Current protections already present:

- honeypot field
- timestamp-based timing check
- basic IP rate limiting
- SMTP delivery

Current weaknesses:

- non-atomic JSON-based rate limiting
- no scoring model
- no header/content analysis
- no ALTCHA
- mail header sanitization needs hardening
- logs are too basic for abuse review

## Target Architecture

For this site only:

- keep Astro as frontend
- keep PHP handlers for forms
- keep secrets outside the public web root
- use SQLite for form security state
- add a scoring engine
- add ALTCHA as an additional layer

## Deployment-Side Runtime Layout

Recommended hosting layout for this site:

```text
public_html/
  api/
    contact.php
    aanmelden.php
    shared.php

private/
  config.php
  logs/
  var/
    forms.sqlite
  lists/
    disposable_domains.txt
```

If desired later, PHP helper code may also be moved under a private non-public path. For now, the implementation can remain inside this site's PHP layer without trying to make it cross-site.

## Phase 1: Hardening Baseline

### Goal

Fix immediate safety and reliability issues before adding new features.

### Files to change

- [public/api/shared.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/shared.php)
- [public/api/contact.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/contact.php)
- [public/api/aanmelden.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/aanmelden.php)
- [public/api/config.sample.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/config.sample.php)

### Changes

1. Add header-safe sanitization helpers
- sanitize reply-to name
- remove CR/LF from header-bound values
- normalize whitespace

2. Add field length limits
- name
- company
- phone
- email
- message
- address fields

3. Replace JSON rate limiting with SQLite
- create `private/var/forms.sqlite`
- implement atomic rate limit writes and reads

4. Improve logging
- accepted
- blocked
- suspicious
- mail failures

5. Keep current honeypot and timing check
- but treat timing as a signal, not a fully trusted truth source

## Phase 2: Risk Scoring

### Goal

Move from simple block-or-allow logic to explainable scored decisions.

### Files to change

- [public/api/shared.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/shared.php)
- [public/api/contact.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/contact.php)
- [public/api/aanmelden.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/aanmelden.php)

### Signals to add

- empty user-agent
- missing accept-language
- too many links
- spam keyword patterns
- repeated text
- suspicious Unicode
- generic short messages
- repeated email submissions
- repeated IP + user-agent submissions

### Suggested score thresholds

- `<30`: accept
- `30-69`: accept but flag
- `>=70`: block

### Logging behavior

- suspicious submissions logged with score and triggered signals
- blocked submissions logged with score and triggered signals
- accepted submissions logged with lower detail if desired

## Phase 3: ALTCHA

### Goal

Add a privacy-conscious challenge layer on top of the scoring model.

### Files to change

- [src/components/ContactForm.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/components/ContactForm.astro)
- [src/components/SignupForm.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/components/SignupForm.astro)
- [src/layouts/BaseLayout.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/layouts/BaseLayout.astro)
- [public/api/shared.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/shared.php)
- [public/api/config.sample.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/config.sample.php)

### Changes

1. Add ALTCHA widget to both forms
2. Send ALTCHA payload with each submission
3. Verify ALTCHA server-side
4. Treat missing/invalid ALTCHA as a block or high risk score
5. Keep honeypot and scoring in place even after ALTCHA is added

## File-by-File Plan

### `src/components/ContactForm.astro`

Add:

- ALTCHA widget placeholder
- hidden ALTCHA response field if required by integration
- optional hidden form identifier

Keep:

- honeypot
- timing field
- existing field structure

### `src/components/SignupForm.astro`

Add:

- ALTCHA widget
- hidden ALTCHA response field
- optional hidden form identifier

Keep:

- honeypot
- timing field
- current course interest fields

### `src/components/FormStatus.astro`

Add new statuses such as:

- `captcha`
- `blocked_spam`
- `mail_unavailable`
- `review`

Messages should stay neutral and not expose exact scoring details to bots.

### `src/layouts/BaseLayout.astro`

Keep:

- timestamp script

Add later:

- ALTCHA frontend script only where needed

### `public/api/contact.php`

Refactor into a thinner handler:

- collect payload
- call shared processing flow
- redirect with status

### `public/api/aanmelden.php`

Refactor into a thinner handler:

- collect payload
- call shared processing flow
- redirect with status

### `public/api/shared.php`

This becomes the main security engine for this site.

Add:

- normalization helpers
- header sanitization helpers
- SQLite access
- atomic rate limit helpers
- score calculation helpers
- suspicious logging helpers
- optional MX checking
- ALTCHA verification helpers

### `public/api/config.sample.php`

Add fields for:

- score thresholds
- max field lengths
- max links
- per-email rate limits
- per-IP+UA rate limits
- ALTCHA keys/settings
- MX-check toggle

## Recommended Config Additions

Suggested additions:

- `security.score_flag_threshold`
- `security.score_block_threshold`
- `security.max_name_length`
- `security.max_company_length`
- `security.max_phone_length`
- `security.max_message_length`
- `security.max_links`
- `security.max_attempts_per_email_window`
- `security.max_attempts_per_ip_ua_window`
- `security.enable_mx_check`
- `security.disposable_domains_file`
- `altcha.enabled`
- `altcha.site_key`
- `altcha.secret_key`

## Suggested Storage Model

Use SQLite with tables such as:

- `rate_limits`
- `form_events`
- `mail_log`

Each row should capture enough context to debug abuse and delivery problems without putting logs in the public web root.

## Acceptance Criteria

Before launch, the Vectorworks site should meet all of these:

- valid contact form submission sends mail successfully
- valid signup form submission sends mail successfully
- invalid email is rejected
- honeypot submission is blocked
- repeated submissions are throttled atomically
- suspicious content is scored and logged
- missing or invalid ALTCHA is rejected once ALTCHA is enabled
- mail failures are logged cleanly
- all writable files live outside public web paths

## Recommended Order Of Execution

1. Harden headers and field limits
2. Replace JSON rate limiting with SQLite
3. Add scored logging and suspicious decision handling
4. Add content and header signals
5. Add ALTCHA
6. Run launch checklist on staging or live-like hosting

## Final Note

This document is intentionally Vectorworks-only.

It follows the shared security spec, but it does not assume that TimeToBill will implement the same logic in PHP.
