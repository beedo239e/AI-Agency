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

## Hosting anywhere (portable)
The site is plain static files with no server and no lock-in. Two build outputs:

| Command | Output | Use when the site is served at… |
|---------|--------|---------------------------------|
| `npm run build` | `dist/` | the **root of a domain** (e.g. `zayoni.ai`, `x.pages.dev`, `x.vercel.app`, `x.netlify.app`, any cPanel/Hostinger `public_html`) |
| `npm run export:static` | `static/` | a **sub-path** (e.g. `user.github.io/AI-Agency/`); all links are relative so it works at any path |

Host-specific settings:
- **Cloudflare Pages / Vercel / Netlify / Render** (connect the repo): root directory `website`, build command `npm run build`, output `dist`, Node 22. Works with a private repo.
- **Shared hosting (cPanel, Hostinger, etc.)**: run `npm run build` locally and upload the contents of `dist/` to `public_html/`.
- **GitHub Pages**: already automated (below). Note: on GitHub's free plan Pages only works for public repos. If the repo goes private, use one of the hosts above instead.

Every page has `<meta name="build-commit">` with the commit it was built from, so you can check which version is live (view page source).

## Deploy
**Primary: GitHub Pages** → https://beedo239e.github.io/AI-Agency/
Every push to `main` touching `website/` runs `.github/workflows/pages.yml`, which builds `npm run export:static` (relative links) and force-pushes the result to the `gh-pages` branch. Pages source: *Deploy from a branch → gh-pages / (root)*.

**Live:** https://zayoni-ai.netlify.app (Netlify, public).

```bash
npm run deploy   # build + upload dist/ to Netlify (needs NETLIFY_AUTH_TOKEN locally)
```
For auto-deploy on every push: Netlify → Site configuration → Build & deploy → Link repository (root `netlify.toml` already configures it).

`dist/` is plain static output. Recommended: Cloudflare Pages (free) — build command `npm run build`, output `dist`, root `website`.
