# CLAUDE.md — AI-Agency

Working memory for Claude (and any teammate) on this repo. Read this first every session.

## What this is
An early-stage startup project. The product idea is still being defined; the founder will
feed resources and requirements over many sessions until we have a real codebase.

**Current phase:** Phase 1 — Marketing website v2 (`website/`, Astro, see ADR 0002).
The client platform (dashboard / AI assistant backend) is NOT started yet; don't scaffold it
until the founders confirm its scope (record in `docs/decisions/`).

**Team:** two founders. The founder in this chat = senior software engineer; Ammar = business side.
Delivery is founders + AI tools only (no freelancers), so favour automated, productized services.
**Market:** Iraq (for now). Brand: Zayoni (زيوني). Site copy in Iraqi dialect.

## Communication
- The founder writes in Egyptian Arabic (often mixed with English). Reply in the same style:
  Egyptian Arabic for discussion, English for code, file names, commits and technical terms.
- Docs in this repo are written in English (so tools and future hires can read them),
  with Arabic quotes kept verbatim where they capture the founder's intent.
- Ask when a decision is genuinely the founder's (product scope, pricing, stack trade-offs);
  otherwise pick a sensible default and say so.

## Where things live
| Path | Purpose |
|------|---------|
| `docs/00-vision.md` | The idea, problem, target customer, why now |
| `docs/01-product.md` | Services/features, user flows, MVP scope |
| `docs/02-prototype-plan.md` | Prototype milestones and task checklist |
| `docs/03-services-and-pricing.md` | Service catalogue, pricing, claims to confirm |
| `docs/04-tools-and-subscriptions.md` | Tools we pay for vs. client pays for |
| `website/` | Marketing site (Astro). See `website/README.md` |
| `docs/decisions/` | ADRs — one file per important decision (`NNNN-title.md`) |
| `docs/open-questions.md` | Things we still need answers to |
| `resources/inbox/` | Raw material the founder drops in (PDFs, notes, screenshots, links) |
| `resources/notes/` | Claude's digested summaries of each resource |

## Workflow
1. New resource arrives → save it in `resources/inbox/`, write a short summary in
   `resources/notes/<name>.md`, and update vision/product docs with what changed.
2. Any decision (stack, scope, naming, pricing, vendor) → new ADR in `docs/decisions/`.
3. Unknowns → `docs/open-questions.md`; remove them once answered.
4. Keep `docs/02-prototype-plan.md` as the single source of truth for what's next.

## Website rules
- Copy only in `website/src/i18n/{ar,en}.ts`; prices in `src/data/pricing.ts`; never hard-code text in components.
- Never present placeholder testimonials/clients as real. Replace from `src/data/clients.ts` with approved quotes only.
- **Public site: https://beedo239e.github.io/AI-Agency/** (GitHub Pages, `gh-pages` branch, auto-built by `.github/workflows/pages.yml` on every push to `main` that touches `website/`). Netlify (`zayoni-ai.netlify.app`) is unreachable from the founder's network in Egypt/Iraq: don't rely on it.
- The repo is meant to be **public**: never commit secrets, client data or private contacts.
- Verify visually (Playwright screenshots, desktop + mobile, RTL + LTR) after UI changes; `npm run build` must pass.

## Git
- `main` is the source of truth and the only branch that deploys the website. The founders edit `main` directly.
- Claude works on `claude/youthful-hopper-tcsism`; changes reach the live site only once merged into `main` (fast-forward). Ask the founder before pushing to `main` unless they already asked for that change to go live.
- No pull requests unless the founder asks.
- Never commit secrets. Real keys go in `.env` (gitignored); document names in `.env.example`.

## Environment (cloud container)
Available out of the box: Node 22 + npm/pnpm, Python 3.13, Docker, Chromium + Playwright.
The container is ephemeral — anything worth keeping must be committed and pushed.
