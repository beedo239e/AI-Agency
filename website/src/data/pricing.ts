/**
 * Pricing source of truth (USD). DRAFT — to be confirmed by the founders.
 * See docs/decisions/0003-pricing-v1.md for the reasoning behind each number.
 */
export type PlanId = "starter" | "growth" | "business";

export const plans: Record<PlanId, { monthly: number; setup: number; conversations: number; featured?: boolean }> = {
  starter: { monthly: 49, setup: 99, conversations: 1000 },
  growth: { monthly: 99, setup: 149, conversations: 3000, featured: true },
  business: { monthly: 199, setup: 299, conversations: 10000 },
};

/** Annual billing = 10 months paid for 12. */
export const ANNUAL_MONTHS_PAID = 10;
export const annualMonthly = (m: number) => Math.round((m * ANNUAL_MONTHS_PAID) / 12);

export type AddonId = "website" | "content" | "reviews" | "voice" | "reports" | "training";
export const addons: Record<AddonId, { price: number; unit: "mo" | "once" | "hour" | "from" }> = {
  website: { price: 19, unit: "mo" },
  content: { price: 79, unit: "mo" },
  reviews: { price: 29, unit: "mo" },
  voice: { price: 79, unit: "from" },
  reports: { price: 39, unit: "mo" },
  training: { price: 49, unit: "hour" },
};
