# Tools & Subscriptions

> Goal: free or near-free tools we can rely on, with us paying a few dollars per client and charging one bundled subscription.
> ⚠️ Vendor prices change. Re-check each before committing. Items marked (verify) are especially uncertain.

## A. What WE pay (shared across all clients)

| Need | Tool | Cost | Notes |
|------|------|------|-------|
| WhatsApp messaging | **Meta WhatsApp Business Platform (Cloud API)** | Free to use. Replies inside the 24h customer-service window are free. Business-initiated *template* messages are charged per message by category (marketing > utility) and country (verify Iraq rate). | No BSP middleman needed: we integrate directly, so no per-seat fees like Wati/Respond.io. |
| Instagram & Messenger DMs | Meta Graph API | Free | Same Meta app as WhatsApp. |
| AI model | A small, fast LLM via API | Pay per token: typically cents per client per day at SMB volumes | Main variable cost. Measure on the prototype; use prompt caching. |
| Backend + DB (later, platform) | Supabase (free tier → ~$25/mo Pro) **or** one VPS (~$5–15/mo) running Postgres | Low | One instance serves all clients (multi-tenant). |
| Automations / glue | **n8n self-hosted** on the same VPS | Free (open source) | Reports, reminders, Sheets sync, review requests. |
| Marketing site & client websites | **Cloudflare Pages** | Free | Static sites; unlimited bandwidth on free tier. |
| Lead capture (now) | Google Sheets + Apps Script webhook | Free | Plug into `PUBLIC_LEAD_ENDPOINT`. |
| Analytics | Cloudflare Web Analytics / Umami | Free | Privacy-friendly, no cookie banner. |
| Booking calendar | Built into our platform, or Cal.com (self-host free) | Free | |
| Transactional email | Resend (free tier) / Zoho Mail free for domain | Free | |
| Design for content add-on | Canva Pro (1 seat) + AI image tools | ~$15/mo (verify) | Only once the content add-on sells. |
| Voice assistant (optional) | Telephony + voice-AI provider | Per minute | Iraqi number availability limited (verify) → premium add-on only. |
| Domain | Existing zayoniai.com | ~$15/yr | Consider moving DNS to Cloudflare. |

**Fixed monthly cost to start: ~$0–30.** Variable cost per Starter/Growth client: **~$2–8/mo** (mostly AI tokens).

## B. What the CLIENT needs (we set it up for them)

| Item | Who pays | Cost |
|------|----------|------|
| WhatsApp Business number (their existing one where possible) | Client owns it | Free |
| Meta Business account + verification | Free | Free; we do the setup |
| Marketing broadcasts / bulk offers (optional) | Pass-through to client at cost (or bundled) | Per message, Meta rate |
| Voice minutes (only with voice add-on) | Pass-through / included up to a cap | Per minute |
| Domain for their website (add-on) | Client, or bundled in setup | ~$10–15/yr |

Everything else is included in our subscription → the client sees **one simple bill**.

## C. Getting paid in Iraq (open)
- Stripe is not available for Iraq-registered businesses (verify). Options: local wallets/cards (ZainCash, Qi Card, FIB, FastPay, verify which offer merchant APIs), bank transfer, cash on signing.
- Alternative: a company registered abroad (e.g. US LLC) to accept international cards via Stripe/Paddle for clients who can pay by card.
- Start manual (invoice + transfer/wallet), automate later.
