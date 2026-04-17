# Deployment naar mijn.host

Deze site is statisch gebouwd met Astro, maar gebruikt ook PHP-endpoints voor formulieren en ALTCHA. De deployment bestaat dus uit:

- de volledige inhoud van `dist/`
- de PHP-bestanden in `dist/api/`
- een private configuratie buiten de webroot

## 1. Lokale build

```bash
npm install
npm run build
```

Controleer daarna minimaal:

- `/`
- `/contact/`
- `/aanmelden/`
- `/privacyverklaring/`
- `/cookiebeleid-eu/`

## 2. Hostingvereisten op mijn.host

Controleer in DirectAdmin of het pakket dit ondersteunt:

- PHP 8.2 of 8.3
- `openssl`
- `pdo_sqlite` als beschikbaar
- schrijfrechten voor een private map buiten `public_html`

Belangrijk:

- De formulieren werken ook zonder SQLite, maar SQLite heeft de voorkeur voor rate limiting en logging.
- Zonder `mod_headers` werken de extra security headers uit `.htaccess` niet volledig.

## 3. Private mappenstructuur

Maak buiten `public_html` een private map aan, bijvoorbeeld:

```text
/home/<account>/private/
  config.php
  logs/
  var/
  lists/
```

Vereist:

- `config.php`
- `logs/`
- `var/`

Aanbevolen:

- `lists/disposable_domains.txt`

De PHP-code zoekt standaard naar:

```text
<project-root>/private
```

Wil je een ander pad gebruiken, stel dan de environment variable `STB_PRIVATE_ROOT` in.

## 4. Configuratie

Gebruik `dist/api/config.sample.php` als basis voor de echte private config.

Belangrijkste waarden:

- SMTP host, gebruikersnaam en wachtwoord
- `from_email`
- `to_email`
- ALTCHA secret
- security thresholds

Voor deze site is de beoogde mailbox:

- `info@vectorworks-spotlight-training.nl`

### Minimaal voorbeeld

```php
<?php

return [
    'smtp' => [
        'host' => 'smtp.jouw-provider.tld',
        'port' => 587,
        'encryption' => 'tls',
        'username' => 'info@vectorworks-spotlight-training.nl',
        'password' => 'vervang-dit',
        'timeout' => 15,
    ],
    'mail' => [
        'from_email' => 'info@vectorworks-spotlight-training.nl',
        'from_name' => 'STB Services',
        'to_email' => 'info@vectorworks-spotlight-training.nl',
        'subject_prefix' => '',
        'review_prefix' => '[Review]',
    ],
    'altcha' => [
        'enabled' => true,
        'hmac_signature_secret' => 'vervang-dit-met-een-lang-random-secret',
    ],
];
```

## 5. Upload

Upload de volledige inhoud van `dist/` naar `public_html/`.

Controleer dat in `public_html/` aanwezig zijn:

- `.htaccess`
- `api/contact.php`
- `api/aanmelden.php`
- `api/altcha-challenge.php`
- `api/altcha-support.php`
- `robots.txt`
- `sitemap.xml`

## 6. Security headers

De site levert security headers via `public/.htaccess`. Controleer op hosting dat Apache `mod_headers` ondersteunt.

Verwacht onder andere:

- `Content-Security-Policy`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `X-Frame-Options`
- `Permissions-Policy`

## 7. ALTCHA

Na deployment moet dit werken:

- `POST` of `GET` naar `/api/altcha-challenge.php?form=contact`
- idem voor `form=signup`

Als ALTCHA niet werkt:

- controleer `config.php`
- controleer of PHP draait in `public_html/api/`
- controleer schrijfrechten op `private/logs` en `private/var`

## 8. Formulieren

Test live minimaal:

1. geldig contactformulier
2. geldig aanmeldformulier
3. formulier zonder ALTCHA
4. formulier zonder privacy checkbox
5. formulier met ongeldig e-mailadres

Controleer daarna:

- komt de mail aan?
- wordt spam geblokkeerd?
- worden logs geschreven?

## 9. DNS

Als het domein geregistreerd blijft bij TransIP, maar de site naar mijn.host verhuist:

- pas alleen de webrecords of nameservers aan
- verhuis niet automatisch de domeinregistratie zelf

Laat mailrecords alleen aanpassen als de mailboxinrichting ook verandert.

## 10. Plausible CE later inschakelen

Plausible CE is voorbereid maar staat nu uit.

Als je het later activeert:

1. vul de Plausible config in `src/lib/site.ts`
2. build opnieuw
3. controleer of de CSP in `.htaccess` ook het Plausible hostdomein toelaat voor:
   - `script-src`
   - `connect-src`

Zie ook:

- [PLAUSIBLE_CE_SETUP.md](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/PLAUSIBLE_CE_SETUP.md)

## 11. Launch smoke test

Controleer na livegang:

- homepage
- trainingen
- FAQ
- contact
- aanmelden
- privacyverklaring
- cookiebeleid
- nieuwsartikelen
- `robots.txt`
- `sitemap.xml`
- formulieren inclusief mailaflevering
- ALTCHA challenge endpoint

## 12. Na livegang

- controleer mailaflevering en spammap
- monitor `logs/` en eventueel SQLite/file-based rate limiting
- dien de sitemap opnieuw in bij Search Console
- pas privacy/cookie teksten opnieuw aan zodra Plausible CE echt actief is
