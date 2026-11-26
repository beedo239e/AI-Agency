/** Global business facts used across both locales. Edit here, not in components. */
export const site = {
  url: "https://www.zayoniai.com",
  brand: { ar: "زيوني", en: "Zayoni" },
  /** E.164 without "+", used for wa.me links. TODO(founder): replace with an Iraqi number when available. */
  whatsapp: "13134775123",
  whatsappDisplay: "+1 (313) 477-5123",
  /** Optional endpoint that receives lead-form JSON (e.g. a Google Apps Script, n8n or Formspree URL).
   *  Set PUBLIC_LEAD_ENDPOINT in .env. When empty, the form only opens WhatsApp. */
  leadEndpoint: import.meta.env.PUBLIC_LEAD_ENDPOINT ?? "",
  socials: [
    { name: "Instagram", url: "https://www.instagram.com/zayouniai/" },
    { name: "TikTok", url: "https://www.tiktok.com/@zayouniai" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61596333525004" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/zayoniai/" },
    { name: "YouTube", url: "https://www.youtube.com/watch?v=3sVWG5aXpOc" },
  ],
} as const;

export const waLink = (text = "") =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
