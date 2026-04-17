# Plausible CE Setup

This site is already prepared for a self-hosted Plausible CE script, but tracking is disabled by default.

## What is already in place

- A central analytics config in `/src/lib/site.ts`
- Conditional script injection in `/src/layouts/BaseLayout.astro`
- No tracking script is loaded until the config is explicitly enabled

## What to fill in later

Update `/src/lib/site.ts`:

```ts
analytics: {
  provider: "plausible",
  enabled: true,
  plausible: {
    scriptUrl: "https://analytics.your-domain.tld/js/script.js",
    dataDomain: "vectorworks-spotlight-training.nl",
    apiEndpoint: "https://analytics.your-domain.tld/api/event"
  }
}
```

## Notes

- `scriptUrl` is required to enable tracking.
- `dataDomain` should match the tracked site domain in Plausible.
- `apiEndpoint` is optional. Keep it empty if you use the default Plausible endpoint behavior.
- Once Plausible CE is live, the privacy and cookie texts should be updated to reflect:
  - ALTCHA for spam protection
  - Plausible CE for privacy-friendly analytics
  - Google Fonts
  - YouTube embeds where applicable

## Suggested shared setup

If both websites will use the same Plausible CE instance:

- run one Plausible CE installation
- create a separate property for each website
- use a dedicated `dataDomain` per site
- reuse the same Plausible host, but keep the site properties separate
