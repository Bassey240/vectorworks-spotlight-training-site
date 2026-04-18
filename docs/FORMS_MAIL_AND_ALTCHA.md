# Formulieren, mail en ALTCHA

Dit document beschrijft de volledige form stack van de site.

## Overzicht

De site heeft twee formulieren:

- `contact`
- `aanmelden`

Frontend:

- Astro componenten
- client-side validatie en statusweergave
- officiële ALTCHA widget

Backend:

- PHP handlers
- ALTCHA challenge endpoint
- ALTCHA verify
- spam scoring
- rate limiting
- mailverzending
- logging

## Relevante bestanden

Frontend:

- [src/components/ContactForm.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/components/ContactForm.astro)
- [src/components/SignupForm.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/components/SignupForm.astro)
- [src/components/FormStatus.astro](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/components/FormStatus.astro)
- [src/scripts/form-feedback.ts](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/scripts/form-feedback.ts)
- [src/scripts/form-timestamp.ts](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/scripts/form-timestamp.ts)
- [src/scripts/altcha.ts](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/src/scripts/altcha.ts)

Backend:

- [public/api/contact.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/contact.php)
- [public/api/aanmelden.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/aanmelden.php)
- [public/api/shared.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/shared.php)
- [public/api/altcha-challenge.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/altcha-challenge.php)
- [public/api/altcha-support.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/altcha-support.php)
- [public/api/config.sample.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/config.sample.php)

## Frontend flow

### Contactformulier

Form action:

- `/api/contact.php`

Velden:

- `company`
- `name`
- `phone`
- `email`
- `message`
- `privacy_accepted`
- `altcha`

Verborgen velden:

- `form_started_at`
- `company_site` (honeypot)

### Aanmeldformulier

Form action:

- `/api/aanmelden.php`

Extra velden:

- `address`
- `postal_code`
- `city`
- `interest[]`

## Runtime feedback

### Client-side validatie

`form-feedback.ts` doet:

- custom required messages
- vriendelijke checkbox/privacy melding
- email-validatieboodschap
- tijdelijke submit state `Verzenden...`
- statusweergave op basis van `?status=...`

### Bekende statussen

- `success`
- `invalid`
- `throttled`
- `blocked`
- `captcha`
- `blocked_spam`
- `review`
- `mail_unavailable`
- `error`

Deze worden server-side geredirect met:

- `303 Location: /contact/?status=...`
- `303 Location: /aanmelden/?status=...`

## ALTCHA

### Belangrijk uitgangspunt

Deze site gebruikt:

- de **officiële ALTCHA widget**
- de **officiële ALTCHA PHP library**
- een **eigen challenge endpoint op dezelfde server**

Dus:

- geen ALTCHA SaaS nodig
- geen externe ALTCHA-hosting nodig
- wel een serverendpoint dat challenge en verify doet

### Frontend

De widget draait via:

- `altcha/external`
- `altcha.css`
- Nederlandse i18n
- self-hosted workers

Waarom:

- de site heeft een strikte CSP
- de standaard ALTCHA bundel met blob-worker was hier niet stabiel genoeg
- de external/CSP setup is hier de juiste keuze

### Backend

Challenge endpoint:

- `/api/altcha-challenge.php?form=contact`
- `/api/altcha-challenge.php?form=signup`

Verify:

- gebeurt in `altcha_verify_payload()`

Extra server-side bescherming:

- nonce replay protection
- form binding (`contact` vs `signup`)
- expiry checks

## Mailflow

### Huidige logica

De mail wordt verzonden vanuit de site backend via `send_mail()`.

De mail bevat:

- `From:` technisch afzenderadres uit config
- `Reply-To:` e-mailadres van de invuller

Dit is bewust veiliger voor deliverability dan het gebruikersadres direct als echte SMTP-afzender te gebruiken.

### Zichtbare afzendernaam

Deze kan in config worden gezet, bijvoorbeeld:

- `STB Services | Vectorworks Spotlight Training`

### Ontvangstadres

Huidige doelmailbox:

- `info@vectorworks-spotlight-training.nl`

## Private configuratie

De echte config staat buiten git in:

```text
/home/es133110/domains/vectorworks-spotlight-training.nl/private/config.php
```

Belangrijke secties:

- `smtp`
- `mail`
- `altcha`
- `security`

Voorbeeldbron:

- [public/api/config.sample.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/config.sample.php)

## Spam- en abusebescherming

### Basischecks

- honeypot
- submit timing
- required fields
- email-validatie

### Rate limiting

Buckets:

- per IP
- per email
- per IP + user-agent

### Risicoscore

`analyze_submission_risk()` gebruikt o.a. signalen zoals:

- te snelle submit
- ontbrekende user-agent
- ontbrekende `Accept-Language`
- te veel links
- verdachte patronen
- disposable domains
- MX-check als die aan staat

Uitkomst:

- `ok`
- `flagged`
- `blocked`

### Gevolg

- `ok` -> normale success flow
- `flagged` -> mail wel sturen, maar status `review`
- `blocked` -> blokkeren

## Logging en opslag

Private directories:

```text
private/logs/
private/var/
```

Typische logbestanden:

- `form-events.log`
- `form-events-suspicious.log`
- `mail-events.log`

Als SQLite beschikbaar is, wordt ook:

- `private/var/forms.sqlite`

gebruikt.

Fallback zonder SQLite:

- file-based opslag

## Live troubleshooting

### ALTCHA toont kapotte widget

Controleer:

- `src/scripts/altcha.ts`
- CSP `worker-src 'self'`
- workers laden vanaf eigen domein

### ALTCHA challenge faalt

Controleer:

- `/api/altcha-challenge.php?form=contact`
- `private/config.php`
- `altcha.enabled`
- `hmac_signature_secret`

### Form submit geeft geen melding

Controleer:

- `form-feedback.ts` bundle laadt
- URL bevat `?status=...`
- script staat op de pagina

### Mail komt niet aan

Controleer:

- mailbox bestaat echt
- `mail.to_email` klopt
- `mail.from_email` klopt
- `mail.transport` klopt
- `private/logs/mail-events.log`

### Form komt als `review` binnen

Dat betekent niet automatisch dat hij kapot is.

`review` is juist bedoeld voor verdachte maar niet direct geblokkeerde submits.

Bijvoorbeeld:

- ontbrekende browserheaders
- rare submitcontext
- CLI-tests

## Testmatrix

Na wijzigingen in forms altijd testen:

1. geldig contactformulier
2. geldig aanmeldformulier
3. verplichte velden leeg
4. privacy checkbox leeg
5. ongeldig e-mailadres
6. ALTCHA fout / ontbrekend
7. mailontvangst op `info@...`

## Lokale ontwikkeling vs live

Belangrijk:

- Astro devserver rendert de frontend
- echte PHP-flow draait pas op een PHP-capabele omgeving

Dus:

- lokaal kun je UI en widget controleren
- live moet je echte end-to-end formtests doen
