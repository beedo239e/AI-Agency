# Services & Pricing

> Draft v1. Prices live in code at `website/src/data/pricing.ts`; rationale in ADR 0003.

## Strategy
Delivery is **the two founders + AI tools, no freelancers**. So every service is ranked by:
1. **Running cost** (ideally free / a cheap shared tool)
2. **Founder time per client per month** after setup (ideally ~0)
3. **Recurring revenue** potential
4. **Can be sold to many clients with the same build** (productized)

| Service | Type | Price | Our cost / client / mo | Founder time after setup | Scalable? | Verdict |
|---------|------|-------|-------------------|---------------------------|-----------|---------|
| AI assistant (WhatsApp/IG/Messenger) | Core subscription | $49–199/mo + setup | ~$2–8 (AI + infra share) | ~0–1 h | ✅✅ | **Hero product** |
| Website in 7 days | Add-on subscription | $19/mo + setup | ~$0 (static hosting) | ~0 | ✅✅ | Easy win, high perceived value |
| Google reviews & reputation | Add-on subscription | $29/mo | ~$0 (WhatsApp utility msgs, cents) | ~0 | ✅✅ | Easy win, reuses the WhatsApp engine |
| Smart owner report | Add-on subscription | $39/mo | ~$1 (AI) | ~0 | ✅ | Reuses Sheets integration |
| Monthly social content | Add-on subscription | $79/mo | ~$0–15 (Canva/AI image share) | 1–2 h | ⚠️ | Good margin, needs review time |
| Voice assistant | Premium add-on | from $79/mo + usage | per-minute (telephony + voice AI) | ~1 h | ⚠️ | Only on demand, price above cost |
| Custom automation | Project | quote | varies | high | ❌ | Lead magnet for big clients; price high |
| Training / 1:1 | Hourly / workshop | $49/h, workshops from ~$299 | $0 | 1:1 time | ❌ | Pure margin, not scalable — keep it premium |

## Removed from the old site's list (merged)
- *Email & appointments* → merged into the core assistant (bookings) and Business plan integrations.
- *Sales & CRM* → the assistant's lead dashboard (Growth+) and Custom.
- *Accounting / Inventory* → "Smart owner report" (read-only summaries & alerts). Full systems = Custom.
- *Internal workflow automation* → Custom.

## Claims on the website that need founder confirmation
- "Live in 7 days", "monthly, no contract / cancel anytime", "2 months free on yearly"
- "Usually works on your existing WhatsApp Business number"
- "Payable in IQD via local methods"
- Weekly report "every Sunday"
- Client names & testimonials (currently placeholders, must be real & approved)
