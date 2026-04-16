# Deployment naar mijn.host

## 1. Build lokaal

```bash
npm install
npm run build
```

## 2. SMTP config op hosting

Maak buiten `public_html` een directory `private/` aan met:

- `config.php`
- `logs/`

Gebruik `public/api/config.sample.php` als basis.

## 3. Upload

Upload de volledige inhoud van `dist/` naar `public_html/` op mijn.host.

Belangrijk:

- `public/.htaccess` moet mee
- `public/api/*.php` moet mee
- `private/` moet buiten `public_html/` staan

## 4. Preview controleren

Controleer minimaal:

- homepage
- trainingen
- basis cursus
- spotlight cursus
- FAQ
- aanmelden
- contact
- nieuws en beide posts
- `robots.txt`
- `sitemap.xml`
- formulieren inclusief mailaflevering

## 5. DNS switch bij TransIP

Pas alleen de webrecords aan:

- apex `A`
- apex `AAAA` indien geleverd door mijn.host
- `www`

Laat de mailrecords ongemoeid:

- MX
- SPF / relevante TXT-records

## 6. Na livegang

- sitemap opnieuw indienen in Search Console
- formulieren nogmaals testen
- 404's en logfiles monitoren
