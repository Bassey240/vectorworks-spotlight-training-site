# Shared Forms and Mail Architecture Handoff

## Context

There is one existing website:

1. `vectorworks-spotlight-training.nl`

There is also a second website:

2. `timetobill.nl`

It is being evaluated whether both websites should live on the same hosting environment. If that happens, form handling, mail delivery, and anti-spam protection should be designed in a way that allows reuse where it makes sense, without coupling the two sites operationally.

## Current Shared Understanding

- Same hosting is acceptable.
- Both sites should remain operationally separate.
- The SMTP provider may be shared.
- Sender identity should remain domain-specific.
- Config, secrets, logs, and writable data must remain separate per site.
- A shared anti-spam architecture is useful.
- A forced shared PHP implementation across both sites is not the right default.

## Current Site Reality

### Vectorworks site

Current working assumption:

- Astro frontend
- PHP form handlers
- SMTP-based mail delivery

That means the Vectorworks site can continue with a PHP-native implementation for forms and spam protection.

### TimeToBill site

Current known reality from the TimeToBill side:

- separate repository
- SvelteKit 2
- adapter-node
- deployed as a Node container
- reverse proxy through Pangolin/Traefik

TimeToBill does not currently need to be retrofitted into an Astro/PHP forms model.

## Agreed Design Boundary

The correct sharing boundary is:

- shared policy
- shared SMTP provider
- shared anti-spam design
- shared logging/risk model

Not necessarily:

- shared PHP include trees
- shared runtime-specific code
- shared writable storage

## What Can Be Shared

- SMTP provider
- anti-spam rules
- validation rules
- scoring model
- ALTCHA decision policy
- logging model
- operational conventions

## What Must Stay Separate

- deploy paths
- repositories
- site config
- secrets
- logs
- persistence
- sender identities
- branding and form content

## Recommended Implementation Direction

### Preferred near-term model

- one hosting account or VPS if desired
- two separate applications
- two separate deployment paths
- two separate config and secrets sets
- two separate logs and writable stores
- one shared architecture specification for forms, spam protection, and mail handling

### Runtime-specific implementation

Vectorworks:

- Astro pages
- PHP form handlers
- private PHP helper code if useful

TimeToBill:

- SvelteKit pages and forms
- native SvelteKit server handlers or existing backend routes
- separate config and logging on the TimeToBill side

This still gives shared architecture where it matters, without forcing a single stack across both sites.

## If Literal Code Reuse Is Needed Later

If both sites eventually need the same server-side form-processing logic across different runtimes, the better boundary is a private HTTP service rather than shared PHP files.

That model would look like:

- each site keeps its own public endpoint
- each site validates and maps its own payload
- each site forwards to a private shared form-processing service
- that service handles scoring, throttling, ALTCHA verification, and mail dispatch
- each site still keeps separate config, sender identity, and log namespace

This should only be considered if both sites end up needing real public form handling.

## Working Decisions

1. Approve the same-hosting approach, provided both sites remain isolated in configuration and deployment.
2. Do not force TimeToBill into the Astro/PHP form model.
3. Keep sender identity, logs, DB, secrets, thresholds, and branding separate per site.
4. Treat PHP helper code as a Vectorworks-side implementation detail unless a stack-neutral shared service becomes necessary later.
5. Write a stack-neutral form security spec first, then let each site implement it in its native runtime.

## Open Checks

These points still need to be confirmed in the real hosting/admin environment:

1. Which SMTP provider and plan will be used going forward?
2. Does the provider support separate sender identities or SMTP logins per domain?
3. Which PHP version and extensions are available for the Vectorworks site?
4. Is `pdo_sqlite` available where the Vectorworks forms will run?
5. Is MX lookup available if email-domain checks are added on the PHP side?
6. Will ALTCHA be added to the Vectorworks site first only, or to both sites later?
7. Does TimeToBill actually need a public form backend in the near term, or is mailto still sufficient for now?

## Next Documents

The next useful documents are:

- a stack-neutral `FORM_SECURITY_SPEC.md`
- a Vectorworks-only `VECTORWORKS_FORM_IMPLEMENTATION_PLAN.md`

That separates shared architecture from runtime-specific implementation.
