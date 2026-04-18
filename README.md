# Vectorworks Spotlight Training

Astro-site voor `vectorworks-spotlight-training.nl` met:

- statische frontend
- Markdown content collections
- PHP-form handlers voor `contact` en `aanmelden`
- ALTCHA spambeveiliging
- juridische PDF-weergave en PDF-generatie
- git-based productiedeploy naar `mijn.host`

## Documentatie-index

Actuele documentatie:

- [DEPLOYMENT.md](DEPLOYMENT.md)
  Volledige productie- en deploydocumentatie.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
  Technische opbouw van site, routes, scripts en build-flow.
- [docs/CONTENT_WORKFLOW.md](docs/CONTENT_WORKFLOW.md)
  Hoe pagina's, posts, FAQ's en juridische documenten worden beheerd.
- [docs/FORMS_MAIL_AND_ALTCHA.md](docs/FORMS_MAIL_AND_ALTCHA.md)
  Formulieren, mailafhandeling, ALTCHA, logging en troubleshooting.
- [docs/OPERATIONS.md](docs/OPERATIONS.md)
  Dagelijks beheer, smoke tests, logging, rollback en launch-checks.
- [docs/WORDPRESS_ARCHIVE.md](docs/WORDPRESS_ARCHIVE.md)
  Back-up en lokale restore van de oude WordPress-site.
- [PLAUSIBLE_CE_HOMELAB_PLAN.md](PLAUSIBLE_CE_HOMELAB_PLAN.md)
  Plan voor latere Plausible CE self-hosting op het homelab.
- [PLAUSIBLE_CE_SETUP.md](PLAUSIBLE_CE_SETUP.md)
  Repo-voorbereiding voor latere Plausible activatie.

Historische plandocumenten:

- [FORM_SECURITY_SPEC.md](FORM_SECURITY_SPEC.md)
- [FORMS_ARCHITECTURE_HANDOFF.md](FORMS_ARCHITECTURE_HANDOFF.md)
- [FORMS_ARCHITECTURE_RESPONSE.md](FORMS_ARCHITECTURE_RESPONSE.md)
- [VECTORWORKS_FORM_IMPLEMENTATION_PLAN.md](VECTORWORKS_FORM_IMPLEMENTATION_PLAN.md)
- [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md)

Deze historische docs zijn nuttig als context, maar niet de primaire source of truth voor de huidige live setup.

## Stack

- Astro 5
- TypeScript
- Markdown content collections (`pages`, `posts`)
- PHP 8.x voor formulieren en ALTCHA-verificatie
- `sanitize-html` voor veilige HTML-rendering
- `pdfkit` + `pdfjs-dist` voor juridische PDF's
- GitHub Actions voor build naar `deploy` branch
- `mijn.host` voor hosting en mailboxen

## Belangrijkste mappen

```text
src/
  components/           Astro componenten
  content/              Markdown content
  layouts/              Layouts
  lib/                  SEO/schema/sanitizing/site config
  pages/                Astro routes
  scripts/              Client-side scripts

public/
  api/                  PHP-form handlers + ALTCHA endpoints
  legal/                Gegenereerde PDF-bestanden

scripts/
  generate-legal-pdfs.mjs
  postbuild.mjs

.github/workflows/
  build-deploy-branch.yml
```

## Lokale ontwikkeling

Installatie:

```bash
npm install
```

Development:

```bash
npm run dev
```

Build:

```bash
npm run build
```

De build doet drie dingen:

1. genereert juridische PDF's
2. bouwt de Astro-site naar `dist/`
3. kopieert `sitemap-index.xml` naar `sitemap.xml`

## Contentmodel

Er zijn twee content collections:

- `pages`
  vaste pagina's zoals trainingen, contact, FAQ, legal pages
- `posts`
  nieuwsberichten en artikelen

Schema's staan in [src/content.config.ts](src/content.config.ts).

Belangrijke pagina-types:

- `home`
- `overview`
- `course`
- `service`
- `about`
- `faq`
- `form`
- `legal`
- `archive`

## Formulieren

De site heeft twee live formulieren:

- `/contact/`
- `/aanmelden/`

Deze posten naar:

- `/api/contact.php`
- `/api/aanmelden.php`

Belangrijke eigenschappen:

- server-side validatie
- runtime feedback in de browser
- ALTCHA challenge + verify
- spam scoring
- rate limiting
- logging naar private directory

Zie:

- [docs/FORMS_MAIL_AND_ALTCHA.md](docs/FORMS_MAIL_AND_ALTCHA.md)

## Huidige live deploymodel

De live site draait niet rechtstreeks uit `main`.

Huidige flow:

1. `main` bevat broncode
2. GitHub Actions bouwt de site
3. build-output wordt naar branch `deploy` gepubliceerd
4. productie op `mijn.host` is een git checkout van `deploy`

Dit betekent:

- `main` = bewerkbare bron
- `deploy` = gebouwde productie-output

Zie:

- [DEPLOYMENT.md](DEPLOYMENT.md)

## Juridische documenten

De privacyverklaring en het cookiebeleid worden uit Markdown gegenereerd naar PDF:

- bron:
  - `src/content/pages/privacyverklaring.md`
  - `src/content/pages/cookiebeleid-eu.md`
- output:
  - `public/legal/Privacyverklaring-STB-Services.pdf`
  - `public/legal/Cookiebeleid-STB-Services.pdf`

De live pagina's renderen deze PDF's in een eigen canvas-viewer.

## Analytics

Plausible staat voorbereid in de repo, maar momenteel uit:

- config in [src/lib/site.ts](src/lib/site.ts)
- plannen in:
  - [PLAUSIBLE_CE_SETUP.md](PLAUSIBLE_CE_SETUP.md)
  - [PLAUSIBLE_CE_HOMELAB_PLAN.md](PLAUSIBLE_CE_HOMELAB_PLAN.md)

## Aanbevolen routine bij wijzigingen

1. pas content of code aan op `main`
2. run lokaal `npm run build`
3. commit en push naar `main`
4. wacht tot GitHub Action `Build Deploy Branch` groen is
5. update productiecheckout op `mijn.host`

De exacte productiecommando's staan in [DEPLOYMENT.md](DEPLOYMENT.md).
