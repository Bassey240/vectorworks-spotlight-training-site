# Architectuur

Dit document beschrijft de technische opbouw van de huidige site.

## Hoofdopzet

De site is een hybride van:

- statische Astro-rendering voor alle pagina's en posts
- server-side PHP endpoints voor formulieren en ALTCHA

De frontend is dus statisch, maar de site is geen volledig "pure static site", omdat onder `/api/` PHP code draait.

## Belangrijkste lagen

### 1. Contentlaag

Markdown content leeft in:

- `src/content/pages`
- `src/content/posts`

De schema's worden afgedwongen via:

- [src/content.config.ts](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/content.config.ts)

Collections:

- `pages`
- `posts`

### 2. Renderlaag

Belangrijkste Astro routes:

- `src/pages/index.astro`
  homepage
- `src/pages/[...slug].astro`
  vrijwel alle content pages en posts

`[...slug].astro` is de centrale renderer voor:

- content pages
- posts
- FAQ
- archive page
- legal pages
- form pages

### 3. Layoutlaag

- `src/layouts/BaseLayout.astro`

Verantwoordelijk voor:

- globale head tags
- canonical tags
- meta descriptions
- Open Graph / social tags
- structured data injectie
- globale script includes
- header/footer

### 4. PHP/API-laag

Onder `public/api/`:

- `contact.php`
- `aanmelden.php`
- `altcha-challenge.php`
- `altcha-support.php`
- `shared.php`
- `altcha-autoload.php`

Deze handlers worden door de build meegenomen naar `dist/api/` en draaien live via Apache/PHP.

## Content routing

### Pagina's

`getStaticPaths()` in `[...slug].astro` haalt:

- alle `pages`, behalve `home`
- alle `posts`

Daarmee worden routes als:

- `/trainingen/`
- `/faq/`
- `/nieuws/`
- `/privacyverklaring/`
- `/vectorworks-gebruikersdag-xxl-design-express-belux/`

statisch gegenereerd.

### Home

De homepage heeft een eigen route:

- `src/pages/index.astro`

## Types pagina's

In `pages` bepaalt `kind` de rendering.

Beschikbare types:

- `home`
- `overview`
- `course`
- `service`
- `about`
- `faq`
- `form`
- `legal`
- `archive`

Voorbeelden:

- `faq`
  rendert `faqItems` als accordion in één hoofdkaart
- `form`
  rendert `ContactForm` of `SignupForm`
- `legal`
  rendert de PDF-viewer + downloadactie
- `archive`
  rendert nieuwsarchief met client-side filter

## Belangrijkste componenten

### Form components

- [src/components/ContactForm.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/components/ContactForm.astro)
- [src/components/SignupForm.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/components/SignupForm.astro)
- [src/components/FormStatus.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/components/FormStatus.astro)

### Layout / chrome

- `Header.astro`
- `Footer.astro`

### Overig

- nieuws- en archive UI
- legal viewer shells
- hero en contentblokken

## Client-side scripts

Onder `src/scripts/`:

### `altcha.ts`

Laadt:

- `altcha/external`
- `altcha/altcha.css`
- Nederlandse i18n
- losse `sha` en `pbkdf2` workers

Dit is bewust gekozen vanwege de strikte CSP.

### `form-feedback.ts`

Verantwoordelijk voor:

- runtime formvalidatie
- custom foutmeldingen
- statusweergave op basis van `?status=...`
- submit-button state

### `form-timestamp.ts`

Vult `form_started_at` client-side in voor timing checks.

### `home-carousel.ts`

Regelt de homepage image carousel.

### `news-archive-filter.ts`

Client-side filter voor:

- zoekveld
- archieflinks
- resultaatstatus op `/nieuws/`

### `legal-pdf-viewer.ts`

Renderde legal PDF's op basis van `pdfjs-dist` direct in de pagina.

### `video-consent.ts`

Laadt YouTube pas na expliciete interactie.

## SEO en structured data

SEO en schema helpers staan in:

- `src/lib/site.ts`
- `src/lib/schema.ts`

De site genereert o.a.:

- canonical tags
- meta description
- Open Graph tags
- Twitter tags
- structured data voor:
  - `Organization`
  - `Person`
  - `BreadcrumbList`
  - `Course`
  - `Service`
  - `FAQPage`
  - `Article`

## Sanitizing en veilige HTML

Omdat sommige content HTML bevat, wordt dit opgeschoond via:

- `src/lib/content-sanitize.ts`

Dit wordt gebruikt voor:

- FAQ answers
- schema tekstextractie
- video embeds

Doel:

- XSS-risico beperken
- toch gecontroleerde rich content toelaten

## Legal-document pipeline

Bronnen:

- `src/content/pages/privacyverklaring.md`
- `src/content/pages/cookiebeleid-eu.md`

Generator:

- `scripts/generate-legal-pdfs.mjs`

Output:

- `public/legal/Privacyverklaring-STB-Services.pdf`
- `public/legal/Cookiebeleid-STB-Services.pdf`

Viewer:

- `src/scripts/legal-pdf-viewer.ts`

Dus:

- Markdown is de source of truth
- PDF wordt automatisch gegenereerd
- live pagina toont de PDF direct in de site

## Build pipeline

### `npm run dev`

Doet:

1. juridische PDF's genereren
2. Astro devserver starten

### `npm run build`

Doet:

1. juridische PDF's genereren
2. Astro build
3. `scripts/postbuild.mjs` uitvoeren

### `postbuild.mjs`

Kopieert:

- `dist/sitemap-index.xml`
naar:
- `dist/sitemap.xml`

Dat houdt compatibiliteit met tools en crawlers die `sitemap.xml` verwachten.

## Apache en security headers

Security gebeurt grotendeels via:

- `public/.htaccess`

Belangrijke zaken:

- force HTTPS
- force apex domein
- uitzondering voor `/.well-known/acme-challenge/`
- CSP
- `X-Content-Type-Options`
- `Referrer-Policy`
- `X-Frame-Options`
- `Permissions-Policy`

Belangrijke CSP-details:

- `worker-src 'self'`
- `connect-src 'self'`
- `frame-src` voor YouTube en YouTube nocookie

## Analytics

Plausible is voorbereid in:

- `src/lib/site.ts`

Maar staat nu uit:

- `analytics.enabled = false`

De site is dus nu niet afhankelijk van actieve analytics.

## Live architectuur in één zin

Deze site is een statisch gebouwde Astro-site met Markdown content, client-side enhancement scripts, en een kleine PHP backend voor forms, ALTCHA en mailafhandeling.
