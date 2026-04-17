# Plausible CE Homelab Plan

## Doel

Een eigen Plausible Community Edition installatie draaien op het Proxmox homelab en deze site daarna koppelen aan die analytics instance.

## Huidige site-status

- De website is live op `vectorworks-spotlight-training.nl`
- De sitecode is al voorbereid op Plausible
- Relevante config staat in `src/lib/site.ts`

Deze velden hoeven later alleen ingevuld te worden:

- `enabled: true`
- `scriptUrl`
- `dataDomain`
- optioneel `apiEndpoint`

## Aanbevolen opzet

Gebruik een aparte Debian 12 VM op Proxmox voor Plausible CE.

Waarom:

- netter dan op shared hosting
- Docker Compose past bij de officiële Plausible CE setup
- makkelijker backupen en updaten
- los van de website zelf

## VM advies

- 2 vCPU
- 4 GB RAM
- 30 GB disk

Officiële minimale richting:

- Docker + Docker Compose vereist
- minimaal 2 GB RAM aanbevolen

Bronnen:

- https://plausible.io/docs/self-hosting
- https://github.com/plausible/community-edition

## Domein

Gebruik een apart subdomein, bijvoorbeeld:

- `stats.ten-broek.nl`
- of `plausible.ten-broek.nl`

Niet op hetzelfde domein als de trainingssite.

## Installatiepad

1. Maak Debian 12 VM in Proxmox
2. Installeer Docker en Docker Compose
3. Clone `plausible/community-edition`
4. Maak `.env` met minimaal:
   - `BASE_URL=https://stats.jouwdomein.nl`
   - `SECRET_KEY_BASE=...`
5. Start met `docker compose up -d`
6. Zet reverse proxy of directe 80/443 publicatie ervoor
7. Rond TLS af
8. Maak eerste gebruiker aan in Plausible
9. Voeg beide sites als aparte properties toe

## Reverse proxy

Twee routes:

1. Direct 80/443 op de VM
2. Achter bestaande reverse proxy in je homelab

Als je al Traefik, Nginx Proxy Manager of Caddy gebruikt, is optie 2 logischer.

Bron:

- https://plausible.io/docs/proxy/introduction

## Koppeling met deze site

Na livegang van Plausible vul je in `src/lib/site.ts`:

- `enabled: true`
- `scriptUrl: "https://stats.jouwdomein.nl/js/script.js"`
- `dataDomain: "vectorworks-spotlight-training.nl"`
- `apiEndpoint: "https://stats.jouwdomein.nl/api/event"`

Daarna deploy je de site opnieuw.

## Wat nog open staat buiten Plausible

- mailbox of forwarder voor `info@vectorworks-spotlight-training.nl` controleren
- echte formuliertest op `/contact/`
- echte formuliertest op `/aanmelden/`
- optioneel externe LinkedIn thumbnails lokaal hosten voor extra performance
