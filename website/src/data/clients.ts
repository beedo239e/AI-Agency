/**
 * Testimonials.
 *
 * `example: true` entries are ILLUSTRATIVE (written to show the kind of results a
 * business gets). They carry no names, are shown under an "illustrative examples"
 * note, and must be replaced by real, approved client quotes before any of them is
 * presented as a real review. To add a real one: set `example: false` and fill
 * `name` with the client's approved display name.
 */
type L = { ar: string; en: string };

export type SectorId = "clinic" | "restaurant" | "shop" | "realestate" | "education" | "beauty";

export const sectorIcon: Record<SectorId, string> = {
  clinic: "stethoscope",
  restaurant: "utensils",
  shop: "bag",
  realestate: "building",
  education: "book",
  beauty: "sparkles",
};

export type Testimonial = {
  sector: SectorId;
  role: L;
  city: L;
  quote: L;
  highlight: L;
  name?: string;
  example: boolean;
};

export const testimonials: Testimonial[] = [
  {
    sector: "clinic",
    role: { ar: "صاحبة عيادة أسنان", en: "Dental clinic owner" },
    city: { ar: "بغداد", en: "Baghdad" },
    quote: {
      ar: "قبل زيوني نص رسائل المراجعين جانت توصل بعد الدوام ومحد يرد. هسة المساعد يحجز بالليل ويذكّرهم قبل الموعد، والسكرتيرة صار عدها وقت للمراجعين اللي بالعيادة.",
      en: "Half our patients used to message after hours and nobody answered. Now the assistant books at night and reminds them before the visit, and our receptionist has time for the patients in front of her.",
    },
    highlight: { ar: "حجوزات حتى بعد الدوام", en: "Bookings even after hours" },
    example: true,
  },
  {
    sector: "restaurant",
    role: { ar: "مدير مطعم", en: "Restaurant manager" },
    city: { ar: "أربيل", en: "Erbil" },
    quote: {
      ar: "وقت الغدا جان التلفون والواتساب ينفجرون. المساعد يدز المنيو ويسجّل الطلب والعنوان، وإحنا بس نأكد. ما ضاع ولا طلب من شغّلناه.",
      en: "At lunchtime the phone and WhatsApp used to explode. The assistant sends the menu and takes the order and address; we just confirm. We haven't lost an order since.",
    },
    highlight: { ar: "ولا طلب يضيع وقت الذروة", en: "No lost orders at peak time" },
    example: true,
  },
  {
    sector: "shop",
    role: { ar: "صاحب محل موبايلات", en: "Mobile shop owner" },
    city: { ar: "البصرة", en: "Basra" },
    quote: {
      ar: "سؤال «موجود؟ وشكد سعره؟» جان ياكل يومنا كله. هسة المساعد يجاوب من قائمة الأسعار، واللي يريد يقسّط يحوّله إلي مباشرة ويا كل التفاصيل.",
      en: "“Is it in stock? How much?” used to eat our whole day. Now the assistant answers from the price list and sends installment requests straight to me with all the details.",
    },
    highlight: { ar: "ساعات ترجع للبيع الفعلي", en: "Hours back for real selling" },
    example: true,
  },
  {
    sector: "realestate",
    role: { ar: "مدير مكتب عقارات", en: "Real estate office manager" },
    city: { ar: "بغداد", en: "Baghdad" },
    quote: {
      ar: "كل مهتم ينسجل بالمنطقة والميزانية، وبالتقرير الأسبوعي أشوف منو يحتاج متابعة. صرنا نرتب مواعيد مشاهدة أكثر بنفس الفريق.",
      en: "Every lead is logged with area and budget, and the weekly report shows me who needs a follow-up. We arrange more viewings with the same team.",
    },
    highlight: { ar: "متابعة كل مهتم", en: "Every lead followed up" },
    example: true,
  },
  {
    sector: "education",
    role: { ar: "مديرة معهد لغات", en: "Language institute director" },
    city: { ar: "النجف", en: "Najaf" },
    quote: {
      ar: "بداية كل كورس جانت تجينا مئات الأسئلة عن الأسعار والجداول. المساعد يجاوب ويسجّل الطالب، والإدارة تتفرغ للتسجيل الفعلي.",
      en: "Every new term brought hundreds of questions about fees and timetables. The assistant answers and registers students, so the office can focus on enrolment.",
    },
    highlight: { ar: "تسجيل أسرع بداية كل كورس", en: "Faster enrolment each term" },
    example: true,
  },
  {
    sector: "beauty",
    role: { ar: "صاحبة مركز تجميل", en: "Beauty center owner" },
    city: { ar: "كربلاء", en: "Karbala" },
    quote: {
      ar: "أكثر شي عجبني إنه ما يألّف. أي سؤال ما يعرفه يحوّله إلنا، نكتب الجواب مرة وحدة ومن بعدها يعرفه.",
      en: "What I like most is that it never makes things up. Anything it doesn't know comes to us; we write the answer once and from then on it knows.",
    },
    highlight: { ar: "يتعلم من فريقك", en: "Learns from your team" },
    example: true,
  },
];
