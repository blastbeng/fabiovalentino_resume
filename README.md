# fabiovalentino.it — personal showcase site

Static single-page portfolio for **Fabio Valentino**, served by [SWAG](https://github.com/linuxserver/docker-swag)
(nginx) on a self-hosted Docker host.

- **Live:** https://fabiovalentino.it
- **Trilingual:** English by default, Italian and Korean via the `EN / IT / KO` switch in the header
- **No build step:** plain HTML, CSS and vanilla JavaScript
- **Cookie notice:** bottom banner, `localStorage["fv-consent"]`, reopenable from the footer

## Storage

The site sets no cookies. Two `localStorage` keys are used: `fv-lang` (language
choice) and `fv-consent` (cookie notice accepted). Both are technical, so the
notice is a single acknowledgement — there is nothing non-essential to refuse.

## Content

All copy is derived from the CV `CV_FVALENTINO_02072025.pdf`: current role as
Developer & Data Engineer at Intesa Sanpaolo, previous experience (RGI, Capgemini,
Betacom, SCAI), technical skills, education, certifications and languages.

Contact details are intentionally limited to e-mail and public profiles — the
phone number is **not** published.

## Language switching

- `index.html` contains the English text and marks every translatable node with
  `data-i18n`, `data-i18n-aria-label`, `data-i18n-title` or `data-i18n-content`.
- `i18n.js` holds the Italian and Korean dictionaries, captures the English source
  at load and swaps text, ARIA labels, `title`/`meta description` and JSON-LD.
- Resolution order for the initial language: `?lang=it` / `?lang=ko` →
  `localStorage["fv-lang"]` → `en`. The choice is persisted and
  `document.documentElement.lang` is updated.
- A `fv:langchange` event is dispatched on `<html>` after each switch.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Markup, English copy, JSON-LD `Person`, meta/OpenGraph |
| `styles.css` | Dark glass theme, responsive layout, print styles |
| `script.js` | Header state, mobile nav, scroll reveal, counters |
| `i18n.js` | Italian and Korean dictionaries, language switch logic |
| `favicon.svg` | Monogram favicon |
| `deploy/fabiovalentino.it.conf` | nginx server block used by SWAG |

## Deployment (SWAG)

Host paths (container mounts `/storage/docker/configs/swag` as `/config`):

```
/storage/docker/configs/swag/www/fabiovalentino.it/     # this site
/storage/docker/configs/swag/nginx/site-confs/fabiovalentino.it.conf
```

Publish an update:

```bash
scp index.html styles.css script.js i18n.js favicon.svg \
    root@<host>:/storage/docker/configs/swag/www/fabiovalentino.it/
ssh root@<host> 'chown -R 1000:1000 /storage/docker/configs/swag/www/fabiovalentino.it'
```

Static files need no nginx reload. Asset URLs carry a cache-busting query
(`styles.css?v=…`): bump it in `index.html` whenever CSS or JS changes, since
static assets are cached for 7 days. The certificate must cover both the apex and
`www` (`EXTRA_DOMAINS` in the SWAG stack), and the `server_name` for
`fabiovalentino.it` was removed from `default.conf` so the default page no longer
wins. `www` redirects permanently to the apex.

## Links

- GitHub — https://github.com/blastbeng
- LinkedIn — https://www.linkedin.com/in/fabio-valentino-770b5540/
- Discord — https://discord.com/users/345914015014453249
