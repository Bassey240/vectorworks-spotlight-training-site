# Form Security Specification

## Purpose

This document defines a stack-neutral specification for public website forms that need:

- email delivery
- bot and spam resistance
- privacy-conscious operation
- clean separation between websites, even when infrastructure is shared

This spec is intended to be implemented in each site's native runtime.

## Goals

- Accept legitimate submissions with minimal friction
- Block obvious bots
- Flag suspicious submissions without over-blocking humans
- Keep implementation maintainable
- Avoid coupling unrelated websites at runtime
- Keep logs and persistence site-specific

## Non-Goals

- Building a full threat-intel platform
- Sharing runtime-specific code across unrelated stacks by force
- Requiring paid bot-protection services as the baseline

## Submission Model

Each public form submission should include:

- form identifier
- user payload fields
- honeypot field
- form start timestamp or equivalent timing signal
- optional captcha/ALTCHA payload
- request metadata available server-side

Typical user payload fields may include:

- company
- name
- phone
- email
- message
- optional address fields
- optional product or interest selection
- privacy acceptance checkbox

## Server-Side Validation Rules

Validation must happen server-side, regardless of frontend validation.

Required checks:

- required fields present
- valid email syntax
- privacy checkbox accepted if legally required
- field lengths within limits
- header-sensitive fields sanitized
- arrays normalized before use

Recommended baseline limits:

- `name`: 120 chars
- `company`: 160 chars
- `phone`: 60 chars
- `email`: 254 chars
- `message`: 5000 chars
- free-text optional fields: explicit max length per field

## Risk Signals

### Baseline signals

- honeypot filled
- submitted too fast
- request burst from same IP
- repeated requests for same email
- repeated requests for same IP + user-agent

### Header and request signals

- empty `User-Agent`
- missing `Accept-Language`
- obviously malformed or bot-like headers

### Content signals

- too many links
- spam keyword patterns
- repeated text patterns
- suspicious Unicode usage
- very short generic messages
- repeated submissions with near-identical content

### Email signals

- suspicious or disposable domain
- missing MX record if MX checking is enabled

### Captcha signal

- missing ALTCHA or equivalent response
- invalid ALTCHA or equivalent response

## Suggested Scoring Model

Recommended starting weights:

- `+100` honeypot filled
- `+30` submitted too fast
- `+25` empty user-agent
- `+15` missing accept-language
- `+20` more than 2 links
- `+20` spam keyword patterns
- `+15` repeated text
- `+15` suspicious Unicode
- `+15` disposable email domain
- `+10` no MX record
- `+20` repeated submissions by email
- `+20` repeated submissions by IP + user-agent
- `+100` invalid or missing ALTCHA when captcha is enforced

## Decision Buckets

- `0-29`: accept
- `30-69`: accept but flag as suspicious
- `70+`: block

The exact thresholds may be tuned per site, but the model should remain simple and explainable.

## Rate Limiting Requirements

At minimum, implement:

- per-form IP limit
- per-form email limit
- per-form IP + user-agent limit

Rate limiting must be atomic. Avoid non-atomic JSON read-modify-write flows for production use.

Recommended storage:

- SQLite per site
- or another atomic store native to the target runtime

## Logging Requirements

Each site must keep its own logs and persistence.

Recommended log/event model:

- timestamp
- form name
- decision
- total score
- triggered signals
- sender email if present
- IP
- user-agent
- normalized payload snapshot
- mail delivery status if email sending is attempted

Separate at least:

- accepted events
- suspicious events
- blocked events
- mail delivery errors

No writable stores inside the public web root.

## Mail Requirements

- One SMTP provider may be shared between sites
- Sender identity must remain site-specific
- `from_email`, `to_email`, and `from_name` must be configured per site
- User input must never be inserted raw into mail headers
- Reply-To names must be sanitized to prevent malformed headers or header injection

## Captcha Requirements

Preferred baseline:

- ALTCHA or equivalent privacy-conscious server-verified challenge

Guidelines:

- captcha is an additional layer, not the only protection
- site-specific keys/secrets per domain
- server-side verification required

## Privacy and Retention

Only retain the data needed for operations, abuse review, and debugging.

Recommended retention starting point:

- rate limit records: rolling cleanup
- form events: 90 to 180 days
- mail logs: 90 days

Document retention in deployment or privacy documentation where appropriate.

## Operational Requirements

- Each site owns its own secrets
- Each site owns its own writable storage
- Shared architecture does not require shared runtime code
- Shared implementation should only be introduced when the runtime boundary is clean

## Test Matrix

Minimum scenarios to test:

1. valid contact submission
2. valid signup or lead submission
3. missing required field
4. invalid email
5. honeypot filled
6. submit too fast
7. repeated requests from same IP
8. repeated requests from same email
9. message with 3 or more links
10. message with obvious spam keywords
11. empty user-agent
12. missing accept-language
13. missing ALTCHA
14. invalid ALTCHA
15. SMTP failure during delivery

## Output Of This Spec

Each site should implement:

- native form handlers in its own runtime
- site-specific config and storage
- the same validation and scoring model
- the same logging categories
- separate sender identities

The shared part is the policy and security model, not the forced runtime implementation.
