# Deployment naar mijn.host

Dit document beschrijft de **huidige** productiesetup van `vectorworks-spotlight-training.nl`.

## Huidige productiemodel

De live site draait met twee git-branches:

- `main`
  broncode, content, Astro, PHP, styles, scripts
- `deploy`
  volledig gebouwde productie-output uit `dist/`

Flow:

1. wijzigingen gaan naar `main`
2. GitHub Action `Build Deploy Branch` draait
3. de action buildt de site en publiceert de inhoud van `dist/` naar `deploy`
4. productie op `mijn.host` is een git checkout van branch `deploy`

Dus:

- **nooit** `main` rechtstreeks naar `public_html` deployen
- **altijd** `deploy` gebruiken voor live output

## Live paden op mijn.host

Huidige productieopzet:

```text
/home/es133110/domains/vectorworks-spotlight-training.nl/
  private/
    config.php
    lists/
    logs/
    var/
  public_html/        -> git checkout van origin/deploy
  private_html/       -> symlink naar public_html
  vectorworks-site.git
```

Belangrijke live paden:

- webroot:
  `/home/es133110/domains/vectorworks-spotlight-training.nl/public_html`
- private config:
  `/home/es133110/domains/vectorworks-spotlight-training.nl/private/config.php`
- logs:
  `/home/es133110/domains/vectorworks-spotlight-training.nl/private/logs`
- state/storage:
  `/home/es133110/domains/vectorworks-spotlight-training.nl/private/var`

## Vereisten

Lokale ontwikkeling:

- Node.js 20+
- npm

Hosting:

- Apache met `.htaccess`
- PHP 8.x
- `mod_headers`
- schrijfbare private directory buiten webroot

Optioneel maar nuttig:

- `PDO_SQLite`

## GitHub repository en workflow

Bronrepo:

- `git@github.com:Bassey240/vectorworks-spotlight-training-site.git`

Workflow:

- [/.github/workflows/build-deploy-branch.yml](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/.github/workflows/build-deploy-branch.yml)

De workflow:

1. doet `npm ci`
2. doet `npm run build`
3. wist de inhoud van de `deploy` checkout
4. kopieert `dist/.` naar `deploy`
5. commit en push naar `deploy`

## Handmatige release-flow

### 1. Lokaal controleren

```bash
npm run build
```

Controleer minimaal:

- `/`
- `/nieuws/`
- `/contact/`
- `/aanmelden/`
- `/privacyverklaring/`
- `/cookiebeleid-eu/`

### 2. Push naar `main`

```bash
git push github main
```

of, als `origin` hetzelfde remote is:

```bash
git push origin main
```

### 3. Wacht tot GitHub Actions klaar is

Workflow moet groen zijn:

- `Build Deploy Branch`

### 4. Update productiecheckout

Via SSH:

```bash
ssh -i .codex-deploy/mijnhost_vectorworks -p 26 es133110@h60.mijn.host
cd /home/es133110/domains/vectorworks-spotlight-training.nl/public_html
git pull --ff-only origin deploy
```

De live checkout staat op branch:

- `deploy`

met upstream:

- `origin/deploy`

## Eerste provisioning op mijn.host

Dit is de benodigde eenmalige setup voor een nieuwe omgeving.

### 1. Domein toevoegen

Voeg in DirectAdmin een apart domein toe:

- `vectorworks-spotlight-training.nl`

### 2. Git repository op hosting

Er is een aparte bare repo op hosting aangemaakt:

- `vectorworks-site.git`

Daarnaast is `public_html` een echte git checkout van `deploy`.

### 3. SSH key voor deploy

De productiecheckout gebruikt een GitHub deploy key die toegang heeft tot:

- `Bassey240/vectorworks-spotlight-training-site`

### 4. Private directory

Maak aan:

```text
/home/es133110/domains/vectorworks-spotlight-training.nl/private/
```

met:

- `config.php`
- `logs/`
- `var/`
- optioneel `lists/`

## Private configuratie

Gebruik [public/api/config.sample.php](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/api/config.sample.php) als basis.

De echte config staat **niet** in git.

Minimale secties:

- `smtp` of `sendmail`
- `mail`
- `altcha`
- `security`

Belangrijke keys:

- `mail.transport`
- `mail.from_email`
- `mail.from_name`
- `mail.to_email`
- `altcha.enabled`
- `altcha.hmac_signature_secret`

## Mail

De huidige site ondersteunt twee mailroutes:

- `sendmail`
- `smtp`

Historisch is tijdens de migratie met beide gewerkt. Voor actuele operationele details:

- zie [docs/FORMS_MAIL_AND_ALTCHA.md](docs/FORMS_MAIL_AND_ALTCHA.md)

## SSL

Voor Let’s Encrypt:

1. domein moet naar de juiste webserver wijzen
2. `/.well-known/acme-challenge/` mag niet kapotgerewrite worden
3. vraag certificaat aan voor:
   - `vectorworks-spotlight-training.nl`
   - `www.vectorworks-spotlight-training.nl`

Belangrijk:

- [public/.htaccess](/Users/sebastiaantenbroek/kDrive/STB Services/Coding/Website Vectorworks Spotlight Training/public/.htaccess) laat `/.well-known/acme-challenge/` bewust buiten de HTTPS redirect

## DNS

Tijdens de livegang is gewerkt met:

- website naar `mijn.host`
- mail later gemigreerd

Als alleen de website verhuist:

- wijzig webrecords
- laat mailrecords ongemoeid

Als ook e-mail verhuist:

- zorg eerst dat mailboxen op `mijn.host` werken
- pas daarna mail-DNS of nameservers aan

## Rollback

Er zijn twee rollbackpaden.

### Git rollback

Op productie:

```bash
cd /home/es133110/domains/vectorworks-spotlight-training.nl/public_html
git log --oneline
git checkout <oude-deploy-commit>
```

Of beter:

```bash
git reset --hard <oude-deploy-commit>
```

Gebruik dit alleen op de live checkout als je bewust naar een eerdere build terug wilt.

### Directory backup

Tijdens de eerste live deploy is een backup gemaakt:

```text
/home/es133110/domains/vectorworks-spotlight-training.nl/public_html_backup_20260417-213129
```

## Live smoke test

Na iedere deploy minimaal testen:

1. homepage laadt en hero-carousel werkt
2. nieuwsarchief en nieuwsdetailpagina's werken
3. privacy- en cookiepagina renderen de PDF-viewer
4. contactformulier toont ALTCHA correct
5. aanmeldformulier toont ALTCHA correct
6. succesvolle form submit geeft statusmelding
7. mail komt aan in `info@vectorworks-spotlight-training.nl`

## Veelvoorkomende problemen

### Git deploy laat nog oude site zien

Controleer:

- GitHub Action groen?
- `deploy` branch bevat nieuwe commit?
- productiecheckout op `public_html` staat op `deploy`?
- `git pull --ff-only origin deploy` uitgevoerd?

### Let’s Encrypt faalt

Controleer:

- DNS wijst naar de juiste server
- `/.well-known/acme-challenge/` is bereikbaar via HTTP
- geen foutieve IPv6-records

### Formulieren sturen geen mail

Controleer:

- `private/config.php`
- mailbox bestaat echt
- `mail.transport`
- logs in `private/logs`

Zie:

- [docs/FORMS_MAIL_AND_ALTCHA.md](docs/FORMS_MAIL_AND_ALTCHA.md)

### ALTCHA ziet er kapot uit of rendert niet

Controleer:

- `altcha/external` bundle
- workers via self-hosted assets
- CSP `worker-src 'self'`

Ook gedocumenteerd in:

- [docs/FORMS_MAIL_AND_ALTCHA.md](docs/FORMS_MAIL_AND_ALTCHA.md)
