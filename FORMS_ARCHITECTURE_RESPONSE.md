# TimeToBill Response To Shared Forms Handoff

Reviewed on 2026-04-17.

## Short answer

I agree with the core goal behind the handoff:

- both websites may live on the same hosting environment
- both websites should remain technically and operationally separate
- shared form/mail/security logic is good when it reduces maintenance without coupling the sites

So from the TimeToBill side, **same hosting is fine**. In fact, that is a sensible cost-saving setup if the separation stays clean:

- share infrastructure where useful
- keep config, secrets, logs, databases, sender identities, and operational ownership separate per site

But one core assumption in the handoff does **not** match the current TimeToBill implementation:

- the handoff assumes `Astro + PHP`
- the current `timetobill.nl` site is a separate `SvelteKit 2 + adapter-node` app deployed as a Node container behind Pangolin/Traefik on the VPS

That means the question is **not** whether both sites can share one hosting environment. They can.

The real question is which parts should be shared:

- shared hosting: yes
- shared maintenance patterns: yes
- shared security/mail/form architecture: yes
- forced shared PHP code: only if both sites actually run comfortably on that stack

## Current TimeToBill reality

### Website stack

TimeToBill's website currently lives in the separate `timetobill-site/` repo and runs as:

- SvelteKit 2
- Svelte 5
- `@sveltejs/adapter-node`
- Docker container deployment
- reverse proxy through Pangolin/Traefik

Relevant local references:

- `timetobill-site/README.md`
- `timetobill-infra/site/site.compose.yml`

### Public contact/forms state

TimeToBill does **not** currently have a public PHP-backed contact form:

- the footer contact link is `mailto:hello@timetobill.nl`
- the homepage provider wishlist is also a `mailto:` flow
- the current server-handled flows are commerce/account flows implemented through SvelteKit server routes and the FastAPI commerce backend

Relevant local references:

- `timetobill-site/src/lib/components/Footer.svelte`
- `timetobill-site/src/routes/+page.svelte`
- `timetobill-site/src/routes/buy/+page.server.ts`
- `timetobill-site/src/routes/buy/details/+page.server.ts`
- `timetobill-site/src/routes/account/request-link/+server.ts`

## What I agree with from the handoff

These principles are correct and I support them:

- separate sender identity per domain
- separate per-site config
- separate logs
- separate per-site SQLite DB if a site uses SQLite for forms
- separate thresholds if needed
- no logs or writable stores in public web roots
- shared anti-spam ideas only where that does not create coupling

I also agree that one generic sender identity for both domains is the wrong setup. If the SMTP host is shared, each site should still have its own mailbox or authenticated sender identity.

## What I do **not** want to do on the TimeToBill side

I do not want to retrofit the TimeToBill site into `Astro + PHP` just to match the other site's form architecture.

That would be the wrong tradeoff because:

- TimeToBill already has an active SvelteKit/Node deployment path
- TimeToBill already uses server routes and backend APIs for stateful flows
- cross-site reuse does not justify a stack migration

## Recommended shared architecture

If both websites should share ideas and some operational setup, the right boundary is:

- shared **policy**
- shared **SMTP provider**
- shared **anti-spam design**
- shared **logging/risk model**

Not necessarily shared PHP code.

### Maintenance goal

The maintainable target is:

- one hosting account or VPS
- two separate applications
- two separate deploy paths
- two separate config/secrets sets
- two separate logs/data stores
- one shared architecture approach for forms/security/mail

That keeps costs down without turning the sites into one coupled system.

### Recommended model

1. Keep both websites operationally separate.
2. Allow the same SMTP provider/account owner if needed.
3. Keep per-site sender identity, secrets, logs, and persistence separate.
4. Let each site implement thin handlers in its own native stack.
5. Share a spec and scoring model first, then share code only where the runtime matches cleanly.

For the Vectorworks site, that can still mean:

- Astro frontend
- PHP form handlers
- private shared PHP helper files

For TimeToBill, the equivalent native model would be:

- SvelteKit pages/forms
- SvelteKit `+server.ts` or `+page.server.ts` handlers, or the existing FastAPI commerce backend if needed
- separate TimeToBill-side config and logs

That is still a shared system in the way that matters operationally; it just is not a forced single-stack implementation.

## If literal code reuse is required

If we truly want one shared implementation used by both sites, the better cross-stack boundary is a small private HTTP service, not a shared PHP include tree.

That would look like:

- each site keeps its own public endpoint
- each site's public endpoint maps/validates its own payload
- each site forwards to a private shared form-processing service
- that service handles spam scoring, rate limiting, ALTCHA verification, and mail dispatch
- each site still keeps separate config, sender identity, logging namespace, and DB rows/files

I would only do this if both sites actually need real server-handled public forms. TimeToBill does not need that yet.

## Answers To The Open Questions

### 1. Which PHP version is available on the hosting environment?

Unknown from the TimeToBill repo, and not relevant to the current TimeToBill production target because TimeToBill is not currently deploying as PHP.

### 2. Is `pdo_sqlite` available?

Unknown from the TimeToBill repo. If the Vectorworks site uses PHP form handling with SQLite, this must be confirmed on that host directly.

### 3. Is `dns_get_record()` or equivalent available for MX checks?

Unknown from the TimeToBill repo. Same answer as above: relevant only for the PHP-hosted implementation.

### 4. Will there be a reverse proxy or CDN in front of the sites?

For TimeToBill, yes on the reverse-proxy side:

- current target deployment is Pangolin/Traefik on the VPS
- no CDN is part of the current main site plan

Relevant local references:

- `timetobill-infra/README.md`
- `timetobill-infra/site/site.compose.yml`

### 5. Will ALTCHA be added to both sites immediately, or only to the training site first?

My recommendation:

- add it to the Vectorworks site first if that site is getting the first real public forms
- do not block TimeToBill on ALTCHA yet, because TimeToBill does not currently expose a real public form backend
- add it to TimeToBill only when a real public contact/lead form is introduced

### 6. Will the two sites live in separate repositories?

From the TimeToBill side, yes:

- `TimeToBill/` is one repo
- `timetobill-site/` is a separate repo nested locally
- `timetobill-infra/` is also separate

That makes direct cross-repo include-path sharing a bad default.

### 7. Who owns and manages site-specific secrets and config files?

From the TimeToBill side:

- site/infra secrets are managed separately in the private `timetobill-infra` repo
- secrets are stored as SOPS-encrypted config
- site-specific ownership should remain separate

Relevant local references:

- `timetobill-infra/README.md`
- `timetobill-infra/export-secrets.sh`

### 8. Which SMTP provider is being used exactly?

On the TimeToBill side today:

- SMTP/mailbox provider: mijn.host
- current mailbox/sender in use: `hello@timetobill.nl`
- SMTP endpoint used in docs/code: `mail.timetobill.nl:587`

Relevant local references:

- `docs/PHASE5C_SALES_AND_BACKEND_INFRA.md`
- `timetobill-infra/webhook/src/main.py`
- `timetobill-infra/webhook/webhook.compose.yml`

### 9. Does that provider support separate SMTP logins per domain / sender address?

Not confirmed from this repo. Preferred answer is "yes, use separate identities per domain if supported", but this still needs to be checked in the provider/admin environment.

### 10. Where should the shared private forms engine live?

My answer depends on whether "shared" means shared hosting or shared implementation:

- if "shared" only means one hosting environment, the engine can live separately inside each site stack while following the same spec
- if the Vectorworks site alone stays on PHP, keep its shared PHP form code in a private non-public path for that site
- if both sites need true shared processing across different stacks, use a private service boundary instead of shared PHP files
- for TimeToBill specifically, I do not want a shared PHP include tree inside the SvelteKit app

## Decisions I Would Make Now

### Decision 1

Approve the one-hosting approach, provided both sites stay isolated in configuration and deployment.

### Decision 2

Do **not** force TimeToBill into the Astro/PHP forms model just because the hosting is shared.

### Decision 3

Approve the separation rule:

- shared provider/policy where useful
- separate config, secrets, logs, DB, sender identity, thresholds, and branding

### Decision 4

Treat the shared PHP helper library as a Vectorworks-side implementation detail unless TimeToBill later gets a real reason to consume the same logic through a stack-neutral interface.

### Decision 5

If a shared anti-spam/mail design is desired now, write it as a short implementation spec first:

- payload shape
- validation rules
- risk scoring buckets
- logging schema
- rate-limit rules
- ALTCHA verification flow
- sender/reply-to rules

That spec can then be implemented in PHP on one site and in SvelteKit/FastAPI on the other without coupling the repositories.

## Hosting clarification

The key distinction to align on with the other developer is:

When they say "same hosting environment", do they mean:

- the same operational environment/VPS account, while each site keeps its own runtime stack

or:

- the same shared-hosting/PHP runtime

Those are very different decisions. From the TimeToBill side, the first is acceptable. The second would conflict with the current SvelteKit/Node deployment direction.

## Suggested reply summary

If I had to answer in one short message:

> I agree with sharing mail/security concepts and keeping config, logs, databases, and sender identities separate per site. But TimeToBill is not Astro/PHP; it is a SvelteKit/Node site with server routes and VPS deployment behind Pangolin/Traefik. So I do not want to standardize on a shared PHP forms library for both sites. The right shared boundary is either a spec or, if we later need true reuse across both stacks, a small private service. For now, Vectorworks can implement the PHP form stack independently, and TimeToBill can adopt the same security/mail rules when it actually gets public forms.

## Current preferred direction

The clearest maintainable solution from the TimeToBill side is:

- both websites on one hosting environment
- each website keeps its own best-fit stack
- both websites share the same form/mail/security design principles
- site-specific config, secrets, senders, logs, and persistence stay separate
- shared code only where that helps without forcing one site into the other site's runtime
