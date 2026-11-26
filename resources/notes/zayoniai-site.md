# Resource: zayoniai.com (current prototype website)

- **Source:** https://www.zayoniai.com/ — captured 2026-11-26
- **Raw copy:** `resources/inbox/zayoniai-site/pages/*.txt` (all 10 pages, AR + EN text) and `screenshots/`
- **What it is:** First prototype marketing site for the agency. 1 home page + 9 service pages. No pricing, no product, no login.

## 1. Brand & positioning
- **Name:** Zayoni AI Consulting — «شركة زيوني لخدمات الذكاء الاصطناعي»
- **Market:** Iraqi businesses (SMBs). Copy is written in **Iraqi dialect** («وياك»، «شنو»، «زباين»، «أگدر»).
- **Languages:** Arabic (RTL, default) + English toggle (client-side switch on the same page).
- **Headline:** «خلي الذكاء الاصطناعي يشتغل وياك. مو بدالك.» — *AI works with you, not instead of you.*
- **Core promise:** reply faster to customers, organize appointments, follow up sales, cut routine work.
- **Trust pillars (hero badges):** Arabic & English · human approval for important decisions · solutions tailored to your work.
- **Tone:** warm, local, but very cautious / heavily disclaimed.

## 2. Site map
| Page | Content |
|------|---------|
| `/` | Hero + static demo chat → 9 services grid → 6 sectors → 4-step process → "AI helps your staff" dialogue → 3 FAQs → CTA → contact (WhatsApp) + inquiry form → socials |
| `/whatsapp-customer-service.html` | WhatsApp & customer service |
| `/voice-assistant.html` | AI voice assistant (calls) |
| `/email-appointments.html` | Email & appointments |
| `/sales-crm.html` | Sales & CRM |
| `/marketing-content.html` | Marketing & content creation |
| `/accounting-reporting.html` | Accounting & reporting |
| `/inventory-orders.html` | Inventory & orders |
| `/workflow-automation.html` | Internal workflow automation |
| `/team-training.html` | Team training |

Every service page uses the **same template**: hero → "4 practical ways" → illustrative step-by-step example (with "not a promise" disclaimer) → deliverables → what we need from you → 2 FAQs → CTA → list of other services.

## 3. Services (as currently described)
| # | Service | 4 capabilities | Example used |
|---|---------|----------------|--------------|
| 1 | WhatsApp & customer service | FAQ answers · classify & escalate · collect order details · approved follow-ups | Electronics store: "is it available? how much?" |
| 2 | Voice assistant | After-hours reception · basic info · call routing · appointment requests | Clinic missing evening calls |
| 3 | Email & appointments | Inbox triage · draft replies · calendar conflicts · reminders | Services office, 50 emails/day |
| 4 | Sales & CRM | Lead capture · assign & follow up · draft quotes · pipeline reports | Real-estate viewing requests |
| 5 | Marketing & content | Monthly plan · AR/EN copy · video/design ideas · simple reports | Restaurant weekly posts |
| 6 | Accounting & reporting | Organize records · categorize expenses · monthly reports · flag anomalies | Multi-branch company |
| 7 | Inventory & orders | Low-stock alerts · movement summaries · order status · reorder suggestions | Grocery running out of items |
| 8 | Internal workflow automation | Tasks & reminders · approvals · meeting/doc summaries · exceptions | Property maintenance requests |
| 9 | Team training | Role-based sessions · safe use · real scenarios · follow-up | Clinic reception staff |

**Sectors listed:** clinics & medical centers · real estate & contracting · restaurants & cafés · shops & retail · factories & distribution · services & education.

**Process:** 01 understand your work → 02 design the solution → 03 test & integrate → 04 train & improve.

**Pricing:** none anywhere. No packages, no plans, no "starting from".

## 4. Conversion & contact
- Only channel: **WhatsApp** to a **US (+1) number**.
- The inquiry form (name, business, problem) **does not store anything** — it just opens WhatsApp with a prefilled message. If the visitor doesn't press send, the lead is lost.
- No booking calendar, no email, no phone, no address, no live chat.
- Socials: Instagram & TikTok `@zayouniai`, LinkedIn `zayoniai`, Facebook profile, one YouTube video. Note the **spelling mismatch** (zayouni vs zayoni).

## 5. Tech
- Hand-written static HTML/CSS (inline CSS, Tahoma fallback font), hosted on **Wix** (headless). No framework.
- No analytics / pixel detected → no way to measure traffic or conversion.

## 6. UX/UI review

### Strengths (keep)
- Clean dark navy + aqua look; good RTL layout; works on mobile.
- Local Iraqi dialect copy feels human and approachable.
- The "with you, not instead of you" + human-approval message addresses real fear of AI.
- Consistent service-page structure; bilingual.

### Problems (fix)
1. **No pricing or packages.** The visitor can't tell if this costs $100 or $10,000. Everything funnels to "book a consultation", which filters out small businesses.
2. **9 equal services = no focus.** It reads like a menu of everything. No hero product, no "start here". Hard to know what to buy first.
3. **Too many disclaimers.** «مثال توضيحي، مو وعد بنتيجة محددة»، «الفائدة المحتملة»، «الجودة تختلف حسب الأداة» on every page. It sounds legal and unsure, and weakens confidence.
4. **Zero social proof.** No clients, logos, testimonials, case studies, numbers, team or founder story.
5. **Fake demo.** The hero "assistant" is a static image of 2 messages. No way to actually try the bot.
6. **Trust gap on contact.** A US +1 WhatsApp number for an Iraqi audience, no local phone, no address.
7. **Leaky lead capture.** The form stores nothing; no CRM, no analytics.
8. **Outcome-light copy.** Talks about features ("classify conversations") instead of outcomes ("never miss a customer at 11pm").
9. **Sectors are dead ends.** Sector tiles aren't clickable; no sector-specific landing pages.
10. **Emoji icons** and a repeated identical template make service pages feel generic.
11. No blog/SEO content, no ROI explanation, no onboarding timeline, no "what happens after I contact you".

## 7. Opportunities for our better version
- **Productized packages with visible prices** (setup + monthly), plus a "custom" tier.
- **One hero offer** (most likely the WhatsApp AI assistant) with the other services as add-ons/bundles.
- **Live demo:** a real bot visitors can chat with on the site or on WhatsApp.
- **Sector landing pages** (clinic, restaurant, real estate, retail) with sector-specific bundles.
- **ROI / savings calculator** ("how many hours/messages do you handle per day?").
- **Real lead capture** → CRM + analytics + calendar booking.
- **Social proof:** pilot clients, before/after numbers, founder story.
- **Client portal / dashboard** (later): see conversations, leads, reports, usage, invoices — this is what turns the agency into a scalable product.
- Shorter, confident copy; move disclaimers to one "how we keep you in control" section.
