# Zayoni Platform: what it is and what's in it

> Status: **proposal v1** for founder review. Nothing is built yet (see CLAUDE.md, Phase 2).

## 1. Website vs. platform
| | Website (`website/`, live) | Platform (to build) |
|---|---|---|
| Purpose | Our storefront: explain, show off, convert to a demo | The product clients pay the monthly subscription for |
| Users | Prospects | Client businesses + their staff, and us (admins) |
| Example URL | `zayoni.../` | `app.zayoni.../` (client dashboard), `admin.zayoni.../` (ours) |

The end customers of our clients (patients, diners, shoppers) never log in. They only talk to the assistant on WhatsApp / Instagram / Messenger.

## 2. Three surfaces
1. **AI assistant engine** (invisible): receives every customer message, answers, books, captures, hands off.
2. **Client dashboard** (web, Arabic-first, mobile-friendly): where the business owner and staff see and control everything.
3. **Admin console** (ours): onboard clients, monitor quality, usage, costs and margins across all clients.

## 3. Modules

### A. AI assistant engine
- Channels: WhatsApp Cloud API, Instagram DMs, Messenger (all via Meta webhooks).
- Per-client **knowledge base**: services, prices, hours, locations, policies, FAQs, menu/catalogue.
- **Tools the AI can call**: check availability, create/reschedule booking, create order/lead, send menu/photos, hand off to a human.
- **Guardrails**: answers only from approved knowledge; never invents prices or promises; sensitive topics (refunds, discounts, complaints, medical) always hand off; low confidence → hand off.
- Iraqi dialect + Arabic + English, tone tuned per client.
- Business hours awareness, after-hours mode.

### B. Unified inbox (the screen staff live in)
- All conversations from all channels in one list, filter by status: *AI handling / needs human / resolved*.
- **Take over** button: staff replies from the dashboard; AI pauses on that conversation, resumes on release.
- Handoff alerts to staff (dashboard + WhatsApp notification) with an AI summary so the customer never repeats themselves.
- Assign to staff member, internal notes, quick replies.

### C. Customers & leads (mini CRM)
- Every person who messages becomes a contact automatically (name, phone, channel, history).
- Tags, pipeline stage (new → interested → booked/ordered → customer), follow-up reminders.
- Export to Excel/Sheets.

### D. Bookings & calendar (clinics, salons, services, real estate viewings)
- Services with durations and prices, staff/rooms, working hours, buffers.
- AI offers real free slots and books; staff can also book manually.
- Automatic WhatsApp **confirmation + reminder** (cuts no-shows), reschedule/cancel by chat.
- Later: Google Calendar sync.

### E. Orders (restaurants, shops)
- AI captures order + address, staff confirms, status (new → preparing → out for delivery → done).
- Later: catalogue with stock/prices synced from a Sheet.

### F. Knowledge base & "questions the AI couldn't answer"
- Owner edits FAQs, prices, hours in plain forms. Upload a price list / menu (PDF, photo) and the AI drafts the entries for approval.
- **Unanswered-questions queue**: every question the AI handed off for lack of knowledge appears here; the owner types the answer once and the assistant knows it from then on. This is the loop that makes the bot better every week with zero work from us.
- **Test chat**: try the assistant before changes go live.

### G. Reports
- Dashboard: conversations, response time, bookings/orders created, handoffs, top questions, busiest hours.
- **Weekly WhatsApp summary** to the owner (no login needed).

### H. Team & settings
- Roles: owner, manager, staff. Per-branch access (Business plan).
- Channel connections (WhatsApp, Instagram), business profile, assistant tone.

### I. Subscription & billing
- Plan, usage meter (conversations this month vs. limit), invoices.
- Payments recorded manually at first (ZainCash / transfer / cash); automate later.

### J. Admin console (ours)
- All clients, plan, onboarding checklist status, health (errors, handoff rate).
- **Cost per client**: AI tokens + WhatsApp template fees vs. revenue → margin.
- Conversation quality review (sample chats, flag bad answers), prompt/version management.
- "Log in as client" for support.
- Leads from the website's demo form land here.

### Add-ons (reuse the same engine, later)
- Google reviews requests + reply drafts.
- Broadcast campaigns (opt-in, Meta template costs shown upfront).
- Voice assistant.
- Owner report from Sheets/inventory.

## 4. Client journey
1. Prospect books a demo on the website → lead in admin console.
2. 15-min call → we create the client in admin, send an onboarding link.
3. Client (or we) fill the onboarding wizard: business info, services/prices, hours, FAQs, upload menu/price list.
4. Connect WhatsApp via Meta **Embedded Signup** (their number, a few clicks), optionally Instagram.
5. Test chat → client approves → go live. Target: ≤ 7 days, mostly automated.
6. Ongoing: inbox, bookings, unanswered-questions queue, weekly report. We only step in on Business plan calls or quality alerts.

## 5. MVP (first prototype) proposal
**In:** engine on WhatsApp (A), inbox with take-over (B), contacts (C basic), bookings with reminders (D), knowledge base + unanswered-questions queue + test chat (F), weekly WhatsApp report (G basic), admin console basics (J: clients, usage, cost), manual billing.
**Out for now:** Instagram/Messenger (add right after), orders module, campaigns, voice, reviews, self-serve signup, automated payments, calendar sync.

Rationale: one channel, one vertical (bookings), one pilot client gets us a real, sellable product fastest.

## 6. Technical outline (to be confirmed in an ADR)
- **TypeScript end to end.** Next.js dashboard + admin; API in the same app or a small Node service.
- **Postgres** (Supabase or self-hosted) with tenant isolation (row-level security by `business_id`).
- **Webhook ingestion → queue → worker** so no Meta webhook is ever dropped; idempotent message handling.
- **LLM via API with tool calling**; per-tenant knowledge in Postgres (+ embeddings when knowledge grows).
- WhatsApp Cloud API directly (no BSP fees), Meta Embedded Signup for onboarding.
- Hosting: one small VPS or managed platform; cost target from `docs/04`.
- Observability: every AI turn logged (input, tools called, answer, cost) for quality review and billing.

## 7. Rough milestones
1. WhatsApp echo → AI answers from a hard-coded knowledge base for one test business.
2. Knowledge base editor + test chat + unanswered-questions queue.
3. Bookings + reminders.
4. Inbox with take-over + handoff alerts.
5. Admin console + usage/cost tracking.
6. Pilot with 1–3 real clients, then Instagram, then billing.

## 8. Decisions needed from the founders
- First **pilot vertical**: clinics (bookings) or restaurants/shops (orders)?
- Pilot clients: which existing clients would try it?
- Onboarding: done-for-you only at first (recommended), or self-serve sign-up from day one?
- Dashboard language: Arabic only, or Arabic + English?
- Who on our side holds the Meta Business / WhatsApp developer account (needs business verification)?
