# Vectorworks Spotlight Training

Statische Astro website voor `vectorworks-spotlight-training.nl`, met twee PHP-form handlers voor `contact` en `aanmelden`.

## Stack

- Astro static site
- Markdown content collections
- PHP form handlers met SMTP
- Deploy naar mijn.host via SSH/SFTP

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

De build output staat in `dist/`.

## Form configuration

Plaats op de hosting een bestand `private/config.php` buiten `public_html`. Gebruik hiervoor `public/api/config.sample.php` als startpunt.

De PHP handlers verwachten:

- SMTP host, port, username, password
- afzenderadres
- ontvangeradres
- pad naar een private logdirectory
- ALTCHA HMAC secret voor de challenge signature

De formulieren gebruiken nu:

- honeypot + timing check
- rate limiting op IP, e-mail en IP + user-agent
- server-side spam scoring
- ALTCHA proof-of-work verificatie
- SQLite opslag als `PDO_SQLite` beschikbaar is, anders file fallback

## DNS cutover

- domeinregistratie en DNS blijven bij TransIP
- alleen webrecords wijzen later naar mijn.host
- MX/SPF voor mail blijven ongewijzigd zolang e-mail op TransIP blijft
