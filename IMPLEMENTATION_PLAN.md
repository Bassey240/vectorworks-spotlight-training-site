# Vectorworks Spotlight Training Migration to mijn.host

## Summary
- Rebuild the current WordPress site as a static-first website on mijn.host, with two small PHP form handlers for `/contact/` and `/aanmelden/`.
- Keep the domain registration and DNS management at TransIP. The domain staying there through 2027 is not a blocker.
- Cut over only the website DNS to mijn.host. Keep mail on TransIP by preserving the current MX/SPF records.
- Keep all current public URLs live: 16 pages, 2 posts, and the existing public download/media assets.
- Preserve the copywriter-reviewed copy on `/cursus-vectorworks-basis/`, `/cursus-spotlight/`, and `/faq/`, with only structural/SEO/UX cleanup.
- Use the existing private Forgejo repo as `origin`: `https://git.ten-broek.nl/sebastiaan/spotlight_training_website`.

## Key Changes
### Stack
- Frontend: Astro static build, TypeScript, Markdown/MDX content collections, custom CSS/components, no CMS.
- Backend: PHP endpoints on mijn.host for the two forms.
- Mail delivery: authenticated SMTP using `info@vectorworks-spotlight-training.nl`; do not use raw PHP `mail()`.
- Deployment: build locally to `dist/`, upload to mijn.host via SSH/SFTP, include PHP handlers, `.htaccess`, sitemap, robots, and `llms.txt`.

### Public routes and interfaces
- Preserve these URLs exactly:
  - `/`
  - `/trainingen/`
  - `/cursus-vectorworks-basis/`
  - `/cursus-spotlight/`
  - `/cursus-3d/`
  - `/cursus-rendering/`
  - `/cursus-op-maat/`
  - `/2d-3d-tekenwerk/`
  - `/over-mij/`
  - `/faq/`
  - `/aanmelden/`
  - `/contact/`
  - `/nieuws/`
  - `/vectorworks-stream-deck-profile/`
  - `/vectorworks-label-legends/`
  - `/privacyverklaring/`
  - `/algemene-voorwaarden/`
  - `/cookiebeleid-eu/`
- `POST /api/contact.php`
  - Fields: `company?`, `name*`, `phone*`, `email*`, `message*`, `privacy_accepted*`, honeypot, timestamp token
- `POST /api/aanmelden.php`
  - Fields: `company?`, `name*`, `address?`, `postal_code?`, `city?`, `phone*`, `email*`, `interest[]`, `message*`, `privacy_accepted*`, honeypot, timestamp token
- Form responses: validate server-side, send Dutch error/success feedback, mail to `info@vectorworks-spotlight-training.nl`, redirect back with `?status=success|error`, and write a private backup log outside `public_html`.

### DNS and hosting
- Registrar remains TransIP.
- DNS remains managed at TransIP nameservers unless mijn.host requires otherwise; preferred plan is to keep DNS hosted at TransIP and only change records.
- Website cutover at TransIP DNS:
  - Update apex `A` to mijn.host-provided IPv4
  - Update apex `AAAA` to mijn.host-provided IPv6 if available
  - Update `www` to the mijn.host target they prescribe, usually `CNAME` to apex or their host target
- Mail records stay as-is unless explicitly migrated later:
  - Keep current MX on TransIP mail
  - Keep SPF aligned with current mail provider until email is intentionally moved
- Lower DNS TTL 24 hours before cutover, switch records during launch, verify, then raise TTL again.

## Page-by-page migration
| URL | Action | Treatment |
| --- | --- | --- |
| `/` | Keep | Modernize homepage, stronger hierarchy, trust, certifications, clearer CTA |
| `/trainingen/` | Keep | Rebuild as course overview/comparison page |
| `/cursus-vectorworks-basis/` | Keep | Preserve reviewed copy, improve structure/schema/CTA |
| `/cursus-spotlight/` | Keep | Preserve reviewed copy, improve structure/schema/CTA |
| `/faq/` | Keep | Preserve reviewed copy, convert to structured FAQ blocks |
| `/cursus-3d/` | Keep | Rewrite for clarity, SEO, and internal linking |
| `/cursus-rendering/` | Keep | Rewrite for clarity, SEO, and internal linking |
| `/cursus-op-maat/` | Keep | Rewrite around company training and intake flow |
| `/2d-3d-tekenwerk/` | Keep | Rewrite as a service page with concrete use cases |
| `/over-mij/` | Keep | Rewrite as authority/E-E-A-T page with bio and credibility |
| `/aanmelden/` | Keep | Rebuild form, preserve current interest options |
| `/contact/` | Keep | Rebuild form and contact block |
| `/nieuws/` | Keep | Simple archive page for the 2 posts |
| `/vectorworks-stream-deck-profile/` | Keep | Migrate article, images, and download |
| `/vectorworks-label-legends/` | Keep | Migrate article and media |
| `/privacyverklaring/` | Keep | Carry over legal text, reformat only |
| `/algemene-voorwaarden/` | Keep | Carry over legal text, reformat only |
| `/cookiebeleid-eu/` | Keep | Replace plugin-generated page with static policy matching the new stack |

## Site structure
- Header: `Home`, `Trainingen`, `Tekenwerk`, `Over mij`, `FAQ`, `Contact`, CTA `Aanmelden`
- Footer: legal links, `Nieuws`, social links, contact/company block
- Homepage sections:
  - Hero
  - Why this training
  - Course overview
  - Trainer credibility
  - Planning/how it works
  - Certifications and sectors
  - Final CTA
- Course template:
  - Summary
  - Audience
  - Curriculum
  - Practical information
  - Pricing/duration/location
  - Related courses
  - CTA
- News template:
  - Article body
  - Download/media
  - CTA back to training pages

## SEO and LLM findability
- Preserve all slugs and canonical URLs.
- Generate:
  - `robots.txt`
  - `sitemap.xml`
  - `llms.txt`
- Add schema:
  - `Organization`
  - `Person`
  - `Course` or `Service`
  - `FAQPage`
  - `Article`
  - `BreadcrumbList`
- Keep all important text server-rendered in HTML.
- Improve internal linking between homepage, courses, FAQ, about, signup, and contact.
- Preserve Search Console verification and resubmit sitemap after launch.
- Keep `/nieuws/` and both post URLs live for SEO/backlinks.

## Migration sequence
1. Initialize the local git repo and connect `origin` to the private Forgejo repo.
2. Export and inventory all current public pages, posts, images, and downloadable assets.
3. Build the Astro base: layouts, SEO head, design tokens, navigation, content collections.
4. Implement pages in this order:
   - homepage
   - course pages
   - training overview
   - FAQ
   - about
   - service page
   - forms
   - news/posts
   - legal pages
5. Implement the two PHP form handlers with SMTP, honeypot, minimum-submit-time check, and rate limiting.
6. Prepare deployment artifacts:
   - `dist/`
   - PHP handlers
   - `.htaccess`
   - sitemap
   - robots
   - `llms.txt`
   - 404 page
7. Deploy to mijn.host on a preview path or temporary host.
8. Test every route, form, asset, redirect, and canonical before cutover.
9. Lower TransIP DNS TTL one day before launch.
10. Change only the web DNS records at TransIP to point to mijn.host.
11. Leave MX/SPF mail records unchanged.
12. Verify production, then monitor logs, forms, and Search Console for two weeks.

## Test Plan
- All preserved URLs return `200`.
- Any necessary legacy redirects return `301`.
- Forms:
  - valid submit
  - missing required fields
  - invalid email
  - privacy unchecked
  - honeypot triggered
  - too-fast submit
  - repeat-submit throttling
- No broken internal links.
- No missing images or downloads.
- Canonicals, sitemap, schema, and Open Graph tags validate.
- `www` redirects to apex and `http` redirects to `https`.
- Mobile and desktop review for home, one course page, FAQ, signup, contact, and one post.
- Verify mail delivery still works after DNS switch.

## Assumptions and defaults
- Content editing is repo-first, not CMS-driven.
- Launch is Dutch-only.
- No analytics/tracking at launch, so no consent banner at launch.
- Email remains on TransIP after the website moves to mijn.host.
- The three reviewed pages keep their current substantive copy.
- The rest of the commercial pages may be rewritten for consistency, SEO, and LLM readability.
- DNS cutover happens by changing records at TransIP, not by transferring the domain registration.
