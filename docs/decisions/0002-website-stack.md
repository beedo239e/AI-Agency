# 0002 — Marketing website stack: Astro (static) + hand-written CSS

- **Date:** 2026-11-26
- **Status:** accepted

## Context
Founder asked for a redesigned marketing site now (platform comes later). Needs: Arabic RTL + English, fast on mobile networks in Iraq, easy copy/price edits, no "AI template" look, free hosting.

## Decision
- **Astro 5** static output in `website/`. Zero JS framework; small vanilla TS scripts for interactivity.
- **Hand-written CSS with design tokens** (no Tailwind/UI kit) using logical properties so one stylesheet serves RTL and LTR.
- **IBM Plex Sans Arabic** self-hosted via Fontsource (no Google Fonts request).
- All copy in typed dictionaries (`src/i18n`), business data in `src/data` — content edits never touch components.
- Hosting target: Cloudflare Pages (free).

## Consequences
- Fast (static HTML, ~no JS), cheap, easy to hand off.
- The future client platform (dashboard, inbox) is a separate app (`platform/`), likely Next.js/React; decided in its own ADR.
