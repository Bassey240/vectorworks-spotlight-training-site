# Content workflow

Dit document beschrijft hoe content in deze repo wordt beheerd.

## Overzicht

Er zijn twee content collections:

- `src/content/pages`
- `src/content/posts`

Beide worden gevalideerd door Zod-schema's in:

- [src/content.config.ts](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/content.config.ts)

## Pagina's (`pages`)

### Verplichte velden

Iedere pagina heeft minimaal:

- `title`
- `description`
- `kind`

### Optionele velden

Afhankelijk van het paginatype:

- `seoTitle`
- `hero`
- `highlights`
- `practicalInfo`
- `topics`
- `links`
- `sidebar`
- `archiveSidebar`
- `cards`
- `faqItems`
- `faqIntro`
- `formType`
- `reviewedCopy`
- `ogImage`
- `published`
- `updated`
- `socialLinks`
- `document`

### `kind` bepaalt de renderer

Gebruik:

- `overview`
  pagina met kaarten, bijvoorbeeld trainingsoverzicht
- `course`
  trainingspagina
- `service`
  dienstpagina
- `about`
  over-mij type pagina
- `faq`
  FAQ-accordion
- `form`
  contact of aanmelden
- `legal`
  privacy/cookie met PDF-viewer
- `archive`
  nieuwsarchief

## Posts (`posts`)

### Verplichte velden

- `title`
- `description`
- `date`
- `excerpt`

### Optionele velden

- `author`
- `authorHref`
- `ogImage`
- `thumbnail`
- `download`
- `video`
- `links`
- `comments`

## Nieuwe pagina aanmaken

1. maak een nieuw Markdown-bestand in `src/content/pages`
2. geef correcte frontmatter mee
3. kies het juiste `kind`
4. voeg bodycontent toe
5. run `npm run build`
6. controleer de pagina lokaal

Voorbeeld minimale pagina:

```md
---
title: Voorbeeldpagina
description: Korte omschrijving voor SEO en socials.
kind: service
---

Hier komt de inhoud van de pagina.
```

## Nieuw nieuwsartikel aanmaken

1. maak nieuw bestand in `src/content/posts`
2. gebruik een nette slug als bestandsnaam
3. vul frontmatter in
4. voeg artikeltekst toe
5. run `npm run build`
6. controleer:
   - detailpagina
   - `/nieuws/`

Voorbeeld:

```md
---
title: Voorbeeld nieuwsbericht
description: SEO beschrijving
date: 2026-04-18
excerpt: Korte teaser voor archief en kaarten.
author: Sebastiaan ten Broek
thumbnail: /images/nieuws/voorbeeld.webp
---

Hier komt het artikel.
```

## FAQ-content

FAQ leeft in een `page` met:

- `kind: faq`
- `faqItems`
- optioneel `faqIntro`

Belangrijk:

- FAQ-antwoorden mogen beperkte HTML bevatten
- deze HTML wordt gesanitized voor renderen
- schema-tekst wordt er apart uitgehaald

Dus:

- geen willekeurige scripts of embeds in FAQ-antwoorden zetten

## Juridische documenten

Juridische content leeft in Markdown, niet direct in PDF.

Bron:

- `src/content/pages/privacyverklaring.md`
- `src/content/pages/cookiebeleid-eu.md`

Frontmatter bevat o.a.:

- `kind: legal`
- `document.pdfHref`
- eventueel `document.downloadLabel`

De PDF's worden bij `dev` en `build` automatisch gegenereerd.

Dus:

- wijzig altijd de Markdown-bron
- niet handmatig de PDF

## Afbeeldingen

### Voorkeur

Gebruik zoveel mogelijk:

- `webp`
- eventueel `avif` als workflow dat ondersteunt

### Praktische regels

- lokale afbeeldingen hebben de voorkeur boven externe hotlinks
- voor nieuwsartikelen is `thumbnail` bedoeld voor archiefkaarten
- `ogImage` kan apart worden opgegeven voor socials

### Externe afbeeldingen

Dit mag technisch, maar heeft nadelen:

- trager
- afhankelijk van derde partij
- minder controle over caching

Dus:

- waar mogelijk lokaal opslaan

## Video's

Posts kunnen een `video` object hebben.

Belangrijke velden:

- `label`
- `href`
- `embed`

De embed wordt server-side gevalideerd/schoongemaakt en client-side pas geladen na toestemming.

Dus:

- alleen geldige YouTube embeds gebruiken
- geen ruwe iframe-HTML in de body dumpen als het ook via `video.embed` kan

## Nieuwsarchief

`/nieuws/` wordt automatisch opgebouwd uit alle posts.

Functionaliteit:

- datum-sortering
- archieflinks per maand
- zoekfilter op titel en excerpt

Je hoeft hiervoor geen aparte archiefdata bij te houden.

## Content-checklist voor publicatie

Voor iedere nieuwe pagina of post:

1. `title` klopt
2. `description` is ingevuld
3. slug is netjes
4. afbeeldingen zijn lokaal of bewust extern
5. interne links werken
6. build slaagt
7. mobiele layout gecontroleerd
8. SEO-titel en eventuele `ogImage` kloppen

## Veelvoorkomende fouten

### Verkeerd `kind`

Als een pagina vreemd rendert, controleer eerst `kind`.

### Vergeten `description`

De schema's vereisen dit, maar inhoudelijk moet hij ook echt bruikbaar zijn.

### Juridische tekst alleen in PDF aanpassen

Niet doen. De Markdown-bron is leidend.

### Externe LinkedIn/Facebook afbeeldingen gebruiken

Kan, maar maakt performance slechter. Lokale assets zijn beter.
