# Claude Opus Handoff Prompt

You are taking over a website rebuild that was done incorrectly.

The site to rebuild is:
- https://vectorworks-spotlight-training.nl

The project workspace is:
- `/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training`

Your job is to fix the implementation so it matches the original website closely and actually respects the user’s scope.

## Core problem

The previous implementation drifted into a redesign and introduced rewritten/generated copy. That is not acceptable.

The user explicitly wants:
- same logos
- same images
- same hex colors
- same overall layout feel
- same public URLs
- no LLM-generated marketing text
- no paraphrased replacement copy unless absolutely necessary

Treat the current live website as the source of truth for:
- layout
- text
- assets
- navigation
- page composition
- forms
- visual hierarchy

If something on the live site feels imperfect, do not “improve” it by inventing a new design language. First recreate it faithfully as a static site. Minor cleanup is allowed only when it does not change the character of the site.

## Hosting / architecture constraints

Target deployment remains:
- static-first Astro site
- hosted on mijn.host
- domain stays at TransIP
- DNS stays at TransIP and later points web traffic to mijn.host
- email remains at TransIP

Backend requirements:
- keep `/contact/` and `/aanmelden/` working with small PHP handlers
- use authenticated SMTP for form delivery
- preserve all current public slugs

## What already exists in the repo

A partial Astro implementation already exists and can be salvaged or replaced.

Important current files:
- `src/pages/index.astro`
- `src/pages/[...slug].astro`
- `src/styles/global.css`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/ContactForm.astro`
- `src/components/SignupForm.astro`
- `src/content.config.ts`
- `src/lib/site.ts`
- `src/content/pages/*.md`
- `src/content/posts/*.md`
- `public/api/contact.php`
- `public/api/aanmelden.php`
- `public/api/shared.php`

Preserved assets already copied into the repo include the real logo and important original images/downloads under:
- `public/wp-content/uploads/...`

There is already:
- Astro configured
- routes generated
- sitemap generation
- PHP form handlers scaffolded
- a working build with `npm run build`

But the implementation was wrong in spirit and must be corrected.

## What was done wrong

The previous attempt:
- introduced a redesigned look instead of a close rebuild
- used invented / paraphrased copy in multiple places
- used a generic component system that made pages feel unlike the original site
- did not stay visually anchored to the live WordPress/Astra presentation

Some of this has already been partially corrected:
- the real logo is now used
- the original Astra-like link colors were restored
- many pages now contain source-site copy instead of invented copy
- the training overview now uses source-like card content
- the simpler Astra-like shell has started replacing the earlier redesign

Do not assume the current repo is fully correct. Audit it critically.

## Hard requirements

1. Read the live site carefully before editing.
2. Use the live site as the visual and textual reference.
3. Reuse the original images and logo already in `public/wp-content/uploads/...`.
4. Keep the existing public URLs exactly:
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
5. Preserve the existing downloadable asset URLs where already copied.
6. Do not replace source text with fresh AI copy.
7. If you cannot recover exact text from the live site for a page, keep it minimal and factual rather than inventing new sales copy.
8. Match the original palette and visual rhythm. The live Astra CSS already reveals important values like:
   - `#3757a6`
   - `#3b86b5`
   - `#f5f5f5`
   - `#fafafa`
   - `#e5e5e5`
   - text around `#444444`
9. Keep typography close to the original:
   - Open Sans
   - similar sizing
   - similar spacing
10. Match the original page composition:
   - simple page titles
   - training overview price cards
   - two-column content + “Kosten” sidebar on course/service pages where applicable
   - very plain footer
   - no flashy modern hero sections

## Current content guidance

These pages were previously beefed up by a copywriter and should be treated as good source content:
- `/cursus-vectorworks-basis/`
- `/cursus-spotlight/`
- `/faq/`

Do not rewrite them stylistically.

For the other pages:
- prefer exact or near-exact source-site wording
- preserve structure and tone
- no “upgraded” brand voice

## Forms

The live site forms are simple.

`/contact/` should stay close to the current live form:
- Bedrijfsnaam
- Naam*
- Telefoon nummer*
- Email*
- Uw vraag
- privacy checkbox

`/aanmelden/` should stay close to the current live form:
- Bedrijfsnaam
- Naam*
- Adres
- Postcode
- Woonplaats
- Telefoon nummer*
- Email*
- Interesse checkboxes
- message field with the original placeholder
- privacy checkbox

Keep the PHP backend approach, but the frontend markup/text should resemble the live site.

## Recommended approach

1. Open the live site and inspect:
   - homepage
   - trainingen
   - basis
   - spotlight
   - 3D
   - rendering
   - maatwerk
   - tekenwerk
   - over mij
   - faq
   - contact
   - aanmelden
   - nieuws
   - both posts
2. Compare each of those against the current repo.
3. Decide what can be salvaged and what should be replaced.
4. Prioritize fidelity over elegance.
5. Make the local result feel like the original WordPress site, just without WordPress.

## Definition of done

The handoff is successful only if:
- the site looks recognizably like the original
- the user can no longer say “this does not resemble my website layout one bit”
- the real assets are used throughout
- the copy is source-based, not AI-generated
- `npm run build` passes
- the static routes are preserved
- the PHP handlers remain in place for deployment

## Deliverable

Please take over this codebase and fix it properly.

When done, provide:
- a short explanation of what you changed
- a list of any pages still not faithful enough
- anything you could not recover exactly from the live site
