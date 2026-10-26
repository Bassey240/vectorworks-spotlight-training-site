# Operations

Dit document beschrijft dagelijks beheer en veelvoorkomende operationele taken.

## Dagelijkse release-check

Bij een normale inhouds- of codewijziging:

1. lokaal `npm run build`
2. push naar `main`
3. wacht op GitHub Action `Build Deploy Branch`
4. update productiecheckout
5. doe smoke test

## Smoke test

Controleer na deploy:

- homepage
- hero-carousel
- trainingenoverzicht
- nieuwsarchief
- een nieuwsdetailpagina
- FAQ-accordion
- contactformulier
- aanmeldformulier
- privacyverklaring
- cookiebeleid
- `robots.txt`
- `sitemap.xml`
- Plausible tracker (`200`) en events (`202`)

## Form smoke test

Doe altijd minimaal:

1. echte submit via `/contact/`
2. echte submit via `/aanmelden/`
3. check of succes- of reviewmelding verschijnt
4. check of mail aankomt in `info@vectorworks-spotlight-training.nl`

## Live logs op hosting

Loglocatie:

```text
/home/es133110/domains/vectorworks-spotlight-training.nl/private/logs
```

Belangrijke bestanden:

- `form-events.log`
- `form-events-suspicious.log`
- `mail-events.log`

Snel kijken:

```bash
ssh -i .codex-deploy/mijnhost_vectorworks -p 26 es133110@h60.mijn.host
cd /home/es133110/domains/vectorworks-spotlight-training.nl/private/logs
tail -n 50 form-events.log
tail -n 50 mail-events.log
```

## Live code checkout

Productiecheckout:

```text
/home/es133110/domains/vectorworks-spotlight-training.nl/public_html
```

Handige checks:

```bash
git status --short
git rev-parse --abbrev-ref HEAD
git log -1 --oneline
```

## Private config

Configpad:

```text
/home/es133110/domains/vectorworks-spotlight-training.nl/private/config.php
```

Nooit committen:

- mailboxwachtwoorden
- ALTCHA secrets
- SMTP credentials

## PHP endpoint hardening

The training website is static except for three public PHP endpoints. The root
`.htaccess` denies HTTP requests to all other `.php` paths, including path-info
variants; PHP can still include its helper and ALTCHA library files internally.

- `/api/contact.php` and `/api/aanmelden.php`: POST only; other methods return
  `405` with `Allow: POST`, before config loading or storage writes.
- `/api/altcha-challenge.php`: GET only; other methods return `405` with `Allow: GET`.
- API `.htaccess`: reject multipart bodies with `403`; enforce a 1 MiB request
  limit with `413` before PHP parsing.
- LiteSpeed API overrides: `post_max_size=8M`, `upload_max_filesize=1M`,
  `memory_limit=128M`, `max_input_vars=100`, `max_input_nesting_level=8`,
  `display_errors=Off`, `log_errors=On`.
- Keep `session.upload_progress.enabled=Off` at the hosting configuration level.
  Patched PHP is required; request limits do not replace runtime security updates.
- Private directories must be `0700`, private files `0600`, owned by the existing
  hosting user. `shared.php` sets `umask(0077)` for newly created storage files.
- SQLite and file rate-limit cleanup expires only the current bucket. Short IP
  windows must not discard the longer email or IP/user-agent history.

Run `php tests/php-hardening.php` and `node tests/form-hardening.mjs` locally.
The latter starts a loopback PHP server and captures mail locally. It tests normal
and maximum-length inputs, signup interests, method rejection, and invalid ALTCHA.
It does not emulate Apache/LiteSpeed rules: check access denial, multipart, `413`,
and the effective PHP settings through the real web handler after deployment.
Use an access-restricted temporary diagnostic with only selected settings, never
a public `phpinfo()` page, and remove it after verification.

Release order: verified commit on `main`, push primary Forgejo `origin`, push
GitHub mirror, verify its generated `deploy` commit references the source commit,
then fast-forward the production checkout. Keep existing security headers and
consent/analytics behavior. Send two clearly marked form verification messages to
the existing site inbox; distinguish mail-system acceptance from confirmed inbox
receipt when mailbox access is unavailable.

Before rollout, save the source/deploy commits, PHP settings, and private
permission modes outside the webroot in an owner-only backup. Do not commit secrets.
The 26 October baseline is deploy `8317131`, source `0ed392f`; the private snapshot
is `hardening-backup-20261026-a402d5e8` inside the domain directory, outside the
webroot. Binary timestamps are not evidence of installation time or worker restart.

Rollback: revert the hardening commit on `main`, push Forgejo then the mirror,
and deploy its generated rollback with `git pull --ff-only origin deploy`.
Restore the recorded permission modes from `permissions.json` only if required;
retain all form data and logs. Do not restore old secrets over current secrets.
The unrelated missing Stream Deck ZIP must be investigated separately, including
possible hosting quarantine; do not restore or delete tracked content blindly.

## SSL en DNS

Als SSL of bereikbaarheid stuk is:

1. controleer DNS
2. controleer `/.well-known/acme-challenge/`
3. vraag Let’s Encrypt opnieuw aan
4. controleer apex + `www`

## Search Console

Na livegang of grote SEO-wijzigingen:

1. open Search Console
2. check property status
3. dien opnieuw in:

```text
https://vectorworks-spotlight-training.nl/sitemap.xml
```

## Plausible analytics

Plausible is actief via de self-hosted STB-infrastructuur:

- tracker: `https://stats.stb-vw.com/js/pa-cIzfrcUgbuod2DhhacR-h.js`
- events: `https://stats.stb-vw.com/api/event`
- property: `vectorworks-spotlight-training.nl`

Controleer na een analyticswijziging minimaal:

1. de tracker staat één keer in de document-`head` en antwoordt met HTTP `200`
2. een pageview antwoordt met HTTP `202`
3. een externe link verstuurt `Outbound Link: Click`
4. een pdf- of ziplink verstuurt `File Download`
5. een geldige formulierinzending verstuurt `Form: Submission`
6. de eventresponses bevatten niet `x-plausible-dropped: 1`

Zie:

- [PLAUSIBLE_CE_SETUP.md](../PLAUSIBLE_CE_SETUP.md)

## Performance-onderhoud

Op deze site zijn de grootste aandachtspunten:

- grote lokale hero-afbeeldingen
- externe thumbnails of embeds
- nieuwsafbeeldingen

Aanbevolen:

- lokale afbeeldingen in `webp`
- externe afbeeldingen waar mogelijk lokaal spiegelen
- alleen echt benodigde embeds gebruiken

## E-mailmigratie

Belangrijke les uit de migratie:

- websitehosting en mailboxhosting hoeven niet per se tegelijk te verhuizen
- voor formulieren moet vooral de mailroute kloppen
- `Reply-To` is belangrijker dan het gebruikersadres als pure SMTP afzender

Als mailboxen op een andere host staan dan de website:

- check altijd waar `to_email` en uitgaande server echt afleveren

## Apple Mail / IMAP-migratie

Server-side waarheid is:

- als webmail de mapinhoud ziet, staat de mail echt op de server

Apple Mail kan daarna nog last hebben van:

- folder mapping
- cache
- indexering

Dus bij migratieproblemen eerst onderscheiden:

- serverprobleem
- clientprobleem

## Backup en rollback

### Live webroot backup

Er staat al een oude backup directory:

```text
/home/es133110/domains/vectorworks-spotlight-training.nl/public_html_backup_20260417-213129
```

### Oude WordPress backup

Zie:

- [docs/WORDPRESS_ARCHIVE.md](WORDPRESS_ARCHIVE.md)

## Wanneer iets verdacht is

Kijk eerst naar:

1. live logs
2. branch/commit op productie
3. private config
4. browserconsole
5. netwerkrequests

Pas daarna opnieuw deployen.
