# Oude WordPress-site archief

Dit document beschrijft de back-up van de oude WordPress-site die vóór de Astro-migratie draaide.

## Wat is gearchiveerd

Er zijn twee back-upbestanden gemaakt:

- volledige oude webroot
- volledige WordPress database dump

Lokale bestanden:

- `backup/old-wordpress-site/vectorworks-spotlight-training-www.tar.gz`
- `backup/old-wordpress-site/vectorworks-spotlight-training-wordpress.sql`

Deze bestanden zijn lokale archieven en horen niet standaard in git thuis.

## Grootte

Tijdens archivering gemeten:

- site-archief: ongeveer `209 MB`
- SQL dump: ongeveer `20 MB`

## Oude hostingbron

SSH host:

- `vector.ssh.transip.me`

SSH user:

- `vectorworks-spotlight-trainingnl`

Oude document root:

- `/data/sites/web/vectorworks-spotlight-trainingnl/www`

## Wat zit in het site-archief

Praktisch relevante delen:

- `wp-content/uploads`
- `wp-content/themes`
- `wp-content/plugins`
- `wp-config.php`
- overige WordPress-bestanden

## Wat zit in de database dump

De SQL dump bevat:

- posts
- pagina's
- media-referenties
- instellingen
- plugin-data
- gebruikersdata voor zover aanwezig in de oude site

## Wanneer dit archief nuttig is

Gebruik dit archief voor:

- historische referentie
- inhoud terugzoeken
- oude uploads herstellen
- plugin/thema-code terugvinden
- volledige lokale WordPress restore

## Alleen bestanden bekijken

Snelste route:

```bash
mkdir -p /tmp/vw-archive
tar -xzf backup/old-wordpress-site/vectorworks-spotlight-training-www.tar.gz -C /tmp/vw-archive
```

Daarna kun je rechtstreeks bekijken:

- uploads
- thema's
- plugins
- oude templates

## Lokale WordPress restore zonder Docker

Benodigd:

- PHP
- MySQL/MariaDB
- lokale webserver

Stappen:

1. pak het site-archief uit
2. maak lokale database aan
3. importeer `vectorworks-spotlight-training-wordpress.sql`
4. pas `wp-config.php` aan naar lokale DB-gegevens
5. open de site lokaal in browser

## Lokale WordPress restore met Docker

Alternatief:

- WordPress container
- MySQL/MariaDB container
- unpackte oude site als volume
- SQL dump importeren

Dat is vaak de schoonste manier als je de oude site nog echt wilt openen.

## Wat nog zinvol kan zijn om over te nemen

Hoewel de nieuwe site live is, kan het archief later nog nuttig zijn voor:

- oudere mediabestanden
- historische bloginhoud
- plugincode of snippets
- SEO/metadata uit het verleden

## Veiligheidsopmerking

De oude WordPress-site is een archief, geen productieomgeving.

Dus:

- niet publiek herpubliceren zonder updates
- oude plugins/thema's eerst als onveilig beschouwen
- geen oude credentials opnieuw gebruiken
