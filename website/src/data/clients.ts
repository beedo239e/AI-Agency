/**
 * Client logos & testimonials.
 * TODO(founder): replace every entry with REAL clients and quotes they have approved.
 * Entries with `placeholder: true` are rendered with a visible "sample" marker and
 * MUST NOT go live as-is.
 */
export type Testimonial = {
  name: string;
  role: { ar: string; en: string };
  business: { ar: string; en: string };
  quote: { ar: string; en: string };
  rating: 1 | 2 | 3 | 4 | 5;
  placeholder?: boolean;
};

export const clientNames: { name: string; placeholder?: boolean }[] = [
  { name: "Client 1", placeholder: true },
  { name: "Client 2", placeholder: true },
  { name: "Client 3", placeholder: true },
  { name: "Client 4", placeholder: true },
  { name: "Client 5", placeholder: true },
  { name: "Client 6", placeholder: true },
];

export const testimonials: Testimonial[] = [
  {
    name: "[اسم العميل]",
    role: { ar: "صاحب عيادة", en: "Clinic owner" },
    business: { ar: "[اسم العيادة]", en: "[Clinic name]" },
    quote: { ar: "[رأي العميل الحقيقي يُكتب هنا بعد موافقته]", en: "[Real client quote goes here, with their approval]" },
    rating: 5,
    placeholder: true,
  },
  {
    name: "[اسم العميل]",
    role: { ar: "مدير مطعم", en: "Restaurant manager" },
    business: { ar: "[اسم المطعم]", en: "[Restaurant name]" },
    quote: { ar: "[رأي العميل الحقيقي يُكتب هنا بعد موافقته]", en: "[Real client quote goes here, with their approval]" },
    rating: 5,
    placeholder: true,
  },
  {
    name: "[اسم العميل]",
    role: { ar: "مدير مبيعات", en: "Sales manager" },
    business: { ar: "[اسم الشركة]", en: "[Company name]" },
    quote: { ar: "[رأي العميل الحقيقي يُكتب هنا بعد موافقته]", en: "[Real client quote goes here, with their approval]" },
    rating: 5,
    placeholder: true,
  },
];
