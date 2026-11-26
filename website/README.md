# Zayoni marketing website

Static, bilingual (Arabic RTL default + English) marketing site built with Astro 5. No client framework; a few small vanilla TS islands (chat demo, pricing toggle, calculator, tabs, lead form).

```bash
cd website
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/ (static files, deploy anywhere)
npm run preview
```

## Where to edit
| What | File |
|------|------|
| All Arabic copy | `src/i18n/ar.ts` (source of truth for the shape) |
| All English copy | `src/i18n/en.ts` |
| Prices, setup fees, add-ons | `src/data/pricing.ts` |
| Service catalogue (cards + detail pages) | `src/data/services.ts` |
| Clients & testimonials (**placeholders, replace before launch**) | `src/data/clients.ts` |
| WhatsApp number, socials, lead endpoint | `src/data/site.ts` |
| Design tokens (colours, type, spacing) | `src/styles/global.css` |

## Routes
`/`, `/pricing`, `/services/<slug>` and the same under `/en/…`. 404 page included. Sitemap generated at build.

## Lead form
Validates, opens WhatsApp with a pre-filled message, and — if `PUBLIC_LEAD_ENDPOINT` is set in `.env` — also POSTs the lead as JSON (e.g. to a Google Apps Script that appends to a Sheet). See `.env.example`.

## Live preview (claude.ai Artifact)
Private, shareable prototype: https://claude.ai/artifact/2Shn93rpXECbv8dCDJgfZZ

```bash
npm run preview:export   # build + rewrite links to relative → preview/ (gitignored)
```
Then republish `preview/index.html` with the other files of `preview/` (no `.woff`, sitemaps). Asset dir is `assets/` because the artifact host reserves names starting with `_`.

## Deploy
**Primary: GitHub Pages** → https://beedo239e.github.io/AI-Agency/
Every push touching `website/` runs `.github/workflows/pages.yml`, which builds `npm run export:static` (relative links) and force-pushes the result to the `gh-pages` branch. Pages source: *Deploy from a branch → gh-pages / (root)*.

**Live:** https://zayoni-ai.netlify.app (Netlify, public).

```bash
npm run deploy   # build + upload dist/ to Netlify (needs NETLIFY_AUTH_TOKEN locally)
```
For auto-deploy on every push: Netlify → Site configuration → Build & deploy → Link repository (root `netlify.toml` already configures it).

`dist/` is plain static output. Recommended: Cloudflare Pages (free) — build command `npm run build`, output `dist`, root `website`.
