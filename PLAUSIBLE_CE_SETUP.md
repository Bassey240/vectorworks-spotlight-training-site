# Plausible CE Setup

This site uses a self-hosted Plausible Analytics property for `vectorworks-spotlight-training.nl`.

## Production configuration

- Tracker: `https://stats.stb-vw.com/js/pa-cIzfrcUgbuod2DhhacR-h.js`
- Event endpoint: `https://stats.stb-vw.com/api/event`
- Property domain: `vectorworks-spotlight-training.nl`
- Runtime: self-hosted Plausible on STB-controlled VPS infrastructure

The central configuration lives in `/src/lib/site.ts`. `/src/layouts/BaseLayout.astro` injects the tracker once in the shared production page head. Development pages do not load it.

## Automatic events

The property-specific tracker automatically records:

- pageviews
- outbound link clicks as `Outbound Link: Click`
- downloads of supported file types as `File Download`
- valid form submissions as `Form: Submission`

The integration does not send form field contents or revenue values.

## CSP

`public/.htaccess` allows `https://stats.stb-vw.com` only in:

- `script-src`, for the tracker
- `connect-src`, for events

All other CSP directives remain unchanged.

## Privacy and subprocessor status

- The tracker does not set analytics cookies or persistent visitor identifiers.
- The Plausible software is self-hosted on STB-controlled VPS infrastructure.
- Plausible SaaS is not used and Plausible is not an external SaaS subprocessor for these analytics events.
- The existing consent gate for YouTube remains separate and unchanged.

The public privacy and cookie texts are maintained in:

- `src/content/pages/privacyverklaring.md`
- `src/content/pages/cookiebeleid-eu.md`

Their PDF versions are generated during every build.
