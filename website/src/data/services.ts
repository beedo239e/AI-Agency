/**
 * Service catalogue. One entry = one card on the home page + one detail page per locale.
 * Order matters: it's the display order.
 */
type L = { ar: string; en: string };
type LList = { ar: string[]; en: string[] };

export type Service = {
  slug: string;
  icon: string;
  kind: "core" | "addon" | "custom";
  price: L;
  title: L;
  tagline: L;
  summary: L;
  outcomes: LList;
  features: LList;
  steps: LList;
  faq: { q: L; a: L }[];
};

export const services: Service[] = [
  {
    slug: "ai-receptionist",
    icon: "message",
    kind: "core",
    price: { ar: "يبدأ من $49 / شهرياً", en: "From $49 / month" },
    title: { ar: "المساعد الذكي لواتساب وإنستغرام", en: "AI assistant for WhatsApp & Instagram" },
    tagline: { ar: "يرد، يحجز، ويسجّل الطلبات ٢٤ ساعة", en: "Replies, books and captures orders 24/7" },
    summary: {
      ar: "موظف استقبال ذكي يعرف خدماتك وأسعارك وأوقاتك، ويرد على زباينك خلال ثواني باللهجة العراقية. الحالات اللي تحتاج إنسان يحوّلها لفريقك مع ملخص.",
      en: "A smart receptionist that knows your services, prices and hours, and replies to customers in seconds in Iraqi Arabic. Anything that needs a person goes to your team with a summary.",
    },
    outcomes: {
      ar: ["رد فوري حتى بالليل والعطل", "وقت أقل على الأسئلة المكررة", "ولا طلب أو حجز يضيع"],
      en: ["Instant replies, even at night and on holidays", "Less time on repeated questions", "No lost orders or bookings"],
    },
    features: {
      ar: ["أسئلة وأجوبة مبنية على معلومات نشاطك", "حجز المواعيد والتذكير", "تسجيل الزباين والطلبات بلوحة وحدة", "تحويل ذكي للموظف مع ملخص", "واتساب وإنستغرام وماسنجر", "تقرير أسبوعي"],
      en: ["Q&A built on your business information", "Bookings and reminders", "Customers and orders in one dashboard", "Smart handoff with summary", "WhatsApp, Instagram and Messenger", "Weekly report"],
    },
    steps: {
      ar: ["مكالمة نفهم بيها شغلك", "نجهّز ونجرّب على محادثات حقيقية", "نطلقه ونحسّنه كل شهر"],
      en: ["A call to understand your business", "We build and test on real conversations", "Launch and improve monthly"],
    },
    faq: [
      {
        q: { ar: "يشتغل على رقمي الحالي؟", en: "Does it work on my current number?" },
        a: { ar: "إي، غالباً نربطه على رقم الواتساب بزنس الحالي.", en: "Usually yes. We connect it to your existing WhatsApp Business number." },
      },
      {
        q: { ar: "إذا ما عرف الجواب؟", en: "What if it doesn't know?" },
        a: { ar: "ما يخمّن. يحوّل المحادثة لفريقك فوراً.", en: "It never guesses. It hands over to your team right away." },
      },
    ],
  },
  {
    slug: "website",
    icon: "globe",
    kind: "addon",
    price: { ar: "$19 / شهرياً + تجهيز", en: "$19 / month + setup" },
    title: { ar: "موقع احترافي خلال ٧ أيام", en: "A professional website in 7 days" },
    tagline: { ar: "موقع سريع لنشاطك، مربوط بواتساب", en: "A fast website for your business, wired to WhatsApp" },
    summary: {
      ar: "موقع أنيق بالعربي والإنكليزي يعرض خدماتك وأسعارك وموقعك، يظهر بجوجل، وكل زر بي يودّي الزبون لواتساب مباشرة. الاستضافة والتحديثات علينا.",
      en: "A clean Arabic/English site showing your services, prices and location. It's findable on Google, and every button leads straight to WhatsApp. Hosting and updates are on us.",
    },
    outcomes: {
      ar: ["حضور محترم أونلاين", "زباين جدد من جوجل", "ثقة أكثر بنشاطك"],
      en: ["A credible online presence", "New customers from Google", "More trust in your brand"],
    },
    features: {
      ar: ["تصميم يناسب هوية نشاطك", "عربي وإنكليزي ويشتغل على الموبايل", "ربط مع واتساب وخرائط جوجل", "استضافة ودومين وشهادة أمان", "تعديلات شهرية بسيطة"],
      en: ["Design matched to your brand", "Arabic & English, mobile-first", "WhatsApp and Google Maps links", "Hosting, domain and SSL", "Small monthly edits"],
    },
    steps: {
      ar: ["ترسلنا الشعار والصور والمعلومات", "نصمم ونرسلك نسخة للمراجعة", "ننشر الموقع ونربطه بجوجل"],
      en: ["Send us your logo, photos and info", "We design and send a draft", "We publish and connect it to Google"],
    },
    faq: [
      { q: { ar: "الدومين باسمي؟", en: "Is the domain mine?" }, a: { ar: "إي، الدومين يتسجّل باسم نشاطك.", en: "Yes, it's registered to your business." } },
      { q: { ar: "أگدر أعدّل بنفسي؟", en: "Can I edit it myself?" }, a: { ar: "ترسلنا التعديل على واتساب ونسويه إلك.", en: "Send changes on WhatsApp and we'll make them." } },
    ],
  },
  {
    slug: "content",
    icon: "sparkles",
    kind: "addon",
    price: { ar: "$79 / شهرياً", en: "$79 / month" },
    title: { ar: "محتوى السوشيال الشهري", en: "Monthly social content" },
    tagline: { ar: "١٢ منشور شهرياً بالتصاميم والنصوص", en: "12 posts a month, designs and captions" },
    summary: {
      ar: "خطة محتوى شهرية لنشاطك، مع تصاميم ونصوص باللهجة اللي يحبها زباينك. تراجعها وتوافق، وإحنا نجدولها.",
      en: "A monthly content plan with designs and captions in your customers' tone. You review and approve, and we schedule it.",
    },
    outcomes: {
      ar: ["نشر منتظم بدون صداع", "هوية واضحة لنشاطك", "رسائل أكثر من السوشيال"],
      en: ["Consistent posting, no headache", "A clear brand voice", "More inbound messages"],
    },
    features: {
      ar: ["خطة شهرية حسب المواسم والعروض", "١٢ تصميم ونص جاهز", "أفكار ريلز وسكربتات قصيرة", "جدولة على إنستغرام وفيسبوك", "تقرير أداء مبسط"],
      en: ["Monthly plan around seasons and offers", "12 ready designs and captions", "Reel ideas and short scripts", "Scheduling on Instagram and Facebook", "Simple performance report"],
    },
    steps: {
      ar: ["نتفق على الأهداف والعروض", "نجهز المحتوى وترسل ملاحظاتك", "ننشر ونقيس النتائج"],
      en: ["Agree goals and offers", "We draft, you give feedback", "We publish and measure"],
    },
    faq: [
      { q: { ar: "منو يراجع المحتوى؟", en: "Who approves content?" }, a: { ar: "انت. ما ينشر شي بدون موافقتك.", en: "You do. Nothing goes live without your approval." } },
      { q: { ar: "تسوون فيديو؟", en: "Do you make videos?" }, a: { ar: "نجهّز أفكار وسكربتات، والتصوير حسب الاتفاق.", en: "We write ideas and scripts; filming is by arrangement." } },
    ],
  },
  {
    slug: "reviews",
    icon: "star",
    kind: "addon",
    price: { ar: "$29 / شهرياً", en: "$29 / month" },
    title: { ar: "تقييمات جوجل والسمعة", en: "Google reviews & reputation" },
    tagline: { ar: "تقييمات أكثر، وظهور أعلى بخرائط جوجل", en: "More reviews, higher on Google Maps" },
    summary: {
      ar: "بعد كل زيارة أو طلب، زيوني يرسل للزبون رسالة لطيفة يطلب تقييمه. والتقييمات اللي توصل يجهّز إلها رد مهني تراجعه قبل النشر.",
      en: "After each visit or order, Zayoni sends a friendly review request. For every new review, it drafts a professional reply for you to approve.",
    },
    outcomes: {
      ar: ["تقييمات أكثر وأحسن", "ترتيب أعلى بخرائط جوجل", "تعرف رأي زباينك أول بأول"],
      en: ["More and better reviews", "Higher Google Maps ranking", "Real-time customer feedback"],
    },
    features: {
      ar: ["طلب تقييم تلقائي على واتساب", "تحسين صفحة نشاطك على جوجل", "ردود جاهزة على التقييمات", "تنبيه فوري للتقييم السلبي", "تقرير شهري"],
      en: ["Automatic review requests on WhatsApp", "Google Business Profile optimization", "Drafted replies to reviews", "Instant alert on negative reviews", "Monthly report"],
    },
    steps: {
      ar: ["نراجع صفحتك على جوجل", "نربط طلب التقييم بعد الزيارة", "نتابع ونرد شهرياً"],
      en: ["Audit your Google profile", "Connect post-visit review requests", "Monitor and reply monthly"],
    },
    faq: [
      { q: { ar: "التقييمات حقيقية؟", en: "Are reviews genuine?" }, a: { ar: "أكيد. نطلبها بس من زباينك الحقيقيين.", en: "Always. We only ask your real customers." } },
      { q: { ar: "أحتاج صفحة جوجل؟", en: "Do I need a Google profile?" }, a: { ar: "إذا ما عندك نسويها إلك.", en: "If you don't have one, we'll create it." } },
    ],
  },
  {
    slug: "reports",
    icon: "chart",
    kind: "addon",
    price: { ar: "$39 / شهرياً", en: "$39 / month" },
    title: { ar: "تقرير المدير الذكي", en: "Smart owner report" },
    tagline: { ar: "مبيعاتك ومصاريفك ومخزونك برسالة وحدة", en: "Sales, expenses and stock in one message" },
    summary: {
      ar: "نربط جداولك أو نظامك الحالي، وكل أسبوع توصلك على واتساب خلاصة واضحة: شكد بعت، شكد صرفت، شنو قرب يخلص، وشنو يحتاج انتباهك.",
      en: "We connect your spreadsheets or system, and every week you get a clear WhatsApp summary: sales, spending, low stock and what needs your attention.",
    },
    outcomes: {
      ar: ["صورة واضحة بدون ما تفتح ملفات", "تنبيه قبل ما يخلص المخزون", "قرارات أسرع"],
      en: ["A clear picture without opening files", "Alerts before stock runs out", "Faster decisions"],
    },
    features: {
      ar: ["ربط Google Sheets أو Excel أو نظامك", "ملخص أسبوعي وشهري", "تنبيهات نقص المخزون", "مقارنة الفروع", "أسئلة بالعربي: «شكد بعنا هالشهر؟»"],
      en: ["Connects Google Sheets, Excel or your system", "Weekly and monthly summaries", "Low-stock alerts", "Branch comparisons", "Ask in Arabic: “How much did we sell this month?”"],
    },
    steps: {
      ar: ["نشوف وين بياناتك", "نوحّد الشكل ونربط", "توصلك التقارير تلقائياً"],
      en: ["Find where your data lives", "Standardize and connect", "Reports arrive automatically"],
    },
    faq: [
      { q: { ar: "يغني عن المحاسب؟", en: "Does it replace my accountant?" }, a: { ar: "لا، يسهّل شغله ويوضحلك الصورة.", en: "No, it makes their work easier and gives you clarity." } },
      { q: { ar: "بياناتي وين تنحفظ؟", en: "Where is my data stored?" }, a: { ar: "بحساباتك انت، وإحنا نقرأ بصلاحية محددة.", en: "In your own accounts; we read with scoped access." } },
    ],
  },
  {
    slug: "voice",
    icon: "phone",
    kind: "addon",
    price: { ar: "يبدأ من $79 / شهرياً", en: "From $79 / month" },
    title: { ar: "المساعد الصوتي", en: "AI voice assistant" },
    tagline: { ar: "يرد على المكالمات اللي تفوتك", en: "Answers the calls you miss" },
    summary: {
      ar: "لما محد يگدر يرد على التلفون، المساعد الصوتي يستقبل المكالمة، يجاوب على الأسئلة الأساسية، ويسجّل طلب الحجز أو رد الاتصال.",
      en: "When no one can pick up, the voice assistant answers, handles basic questions, and logs a booking or callback request.",
    },
    outcomes: {
      ar: ["مكالمات فائتة أقل", "استقبال بعد الدوام", "طلبات منظمة للفريق"],
      en: ["Fewer missed calls", "After-hours reception", "Organized requests for your team"],
    },
    features: {
      ar: ["استقبال بالعربي والإنكليزي", "معلومات الدوام والعنوان والخدمات", "تسجيل طلبات الحجز ورد الاتصال", "ملخص المكالمة على واتساب", "تجربة اللهجة قبل التشغيل"],
      en: ["Arabic and English reception", "Hours, location and services info", "Booking and callback requests", "Call summary on WhatsApp", "Dialect testing before launch"],
    },
    steps: {
      ar: ["نحدد السيناريوهات", "نجرّب الصوت واللهجة وياك", "نشغّل ونتابع الجودة"],
      en: ["Define call scenarios", "Test voice and dialect with you", "Launch and monitor quality"],
    },
    faq: [
      { q: { ar: "الصوت طبيعي؟", en: "Does it sound natural?" }, a: { ar: "نسمّعك نماذج قبل الاتفاق حتى تقرر بنفسك.", en: "You'll hear samples before deciding." } },
      { q: { ar: "ليش السعر يبدأ من؟", en: "Why “from”?" }, a: { ar: "لأن التكلفة تعتمد على عدد دقائق المكالمات.", en: "Cost depends on call minutes." } },
    ],
  },
  {
    slug: "automation",
    icon: "workflow",
    kind: "custom",
    price: { ar: "حسب الطلب", en: "Custom quote" },
    title: { ar: "أتمتة وحلول مخصصة", en: "Custom automation" },
    tagline: { ar: "نحوّل الشغل الروتيني إلى نظام يمشي وحده", en: "Turn routine work into a system that runs itself" },
    summary: {
      ar: "طلبات صيانة، موافقات، متابعة مبيعات، ربط أنظمة… نحلل سير العمل عندك ونبني حل يناسب شركتك بالضبط، مع نقاط موافقة بشرية وين ما تحتاج.",
      en: "Maintenance requests, approvals, sales follow-up, system integrations: we analyze your workflow and build a solution that fits your company, with human approval where it matters.",
    },
    outcomes: {
      ar: ["مسؤوليات أوضح", "تأخير أقل", "ساعات عمل ترجع لفريقك"],
      en: ["Clearer ownership", "Fewer delays", "Hours back for your team"],
    },
    features: {
      ar: ["تحليل سير العمل الحالي", "إسناد المهام والتنبيهات", "مسارات موافقة", "ربط CRM والأنظمة الحالية", "لوحة متابعة"],
      en: ["Current workflow analysis", "Task assignment and alerts", "Approval flows", "CRM and system integrations", "Tracking dashboard"],
    },
    steps: {
      ar: ["جلسة تحليل", "عرض حل وسعر واضح", "بناء وتجربة وتسليم"],
      en: ["Discovery session", "Clear proposal and price", "Build, test and hand over"],
    },
    faq: [
      { q: { ar: "لازم أغيّر أنظمتي؟", en: "Must I replace my systems?" }, a: { ar: "لا، نبدي بالربط ويا الموجود.", en: "No, we start by connecting what you have." } },
      { q: { ar: "شكد ياخذ وقت؟", en: "How long does it take?" }, a: { ar: "يعتمد على الحجم، ونوضحه بالعرض.", en: "It depends on scope; we state it in the proposal." } },
    ],
  },
  {
    slug: "training",
    icon: "graduation",
    kind: "custom",
    price: { ar: "$49 / ساعة · ورش للفرق", en: "$49 / hour · team workshops" },
    title: { ar: "تدريب وجلسات 1:1", en: "Training & 1:1 sessions" },
    tagline: { ar: "خلّي فريقك يستخدم الذكاء الاصطناعي صح", en: "Help your team use AI the right way" },
    summary: {
      ar: "جلسات فردية أو ورش عملية لفريقك على أدوات الذكاء الاصطناعي اللي تفيد شغلكم اليومي: الكتابة، التحليل، خدمة العملاء، والتسويق.",
      en: "1:1 sessions or hands-on workshops on AI tools that help your daily work: writing, analysis, customer service and marketing.",
    },
    outcomes: {
      ar: ["فريق أسرع وأكثر ثقة", "استخدام آمن للبيانات", "أفكار أتمتة من داخل شركتك"],
      en: ["A faster, more confident team", "Safe use of data", "Automation ideas from inside your company"],
    },
    features: {
      ar: ["تدريب حسب كل وظيفة", "أمثلة من شغلكم الحقيقي", "قواعد الاستخدام الآمن", "دليل مختصر بعد الجلسة", "متابعة بعد التدريب"],
      en: ["Role-based training", "Examples from your real work", "Safe-use guidelines", "A short guide after each session", "Post-training follow-up"],
    },
    steps: {
      ar: ["نفهم مستوى الفريق", "نجهّز تمارين من شغلكم", "جلسة عملية ومتابعة"],
      en: ["Assess team level", "Prepare exercises from your work", "Hands-on session and follow-up"],
    },
    faq: [
      { q: { ar: "للمبتدئين؟", en: "For beginners?" }, a: { ar: "إي، نبدي من الأساسيات.", en: "Yes, we start from the basics." } },
      { q: { ar: "حضوري لو أونلاين؟", en: "In person or online?" }, a: { ar: "الاثنين حسب راحتكم.", en: "Either, whatever suits you." } },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
