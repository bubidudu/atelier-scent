import type { Localized } from "./types";

/**
 * Global UI copy dictionary. Keys are grouped by section so new sections can
 * be added without touching components.
 */
export const copy = {
  brand: {
    name: { zhHK: "Atelier Scent", en: "Atelier Scent" },
    tagline: {
      zhHK: "香港 · 手作香氛與精油工作室",
      en: "Handcrafted fragrance & essential oils, Hong Kong",
    },
  },
  nav: {
    home: { zhHK: "首頁", en: "Home" },
    products: { zhHK: "香氛指南", en: "Scent Guide" },
    about: { zhHK: "理念與安全", en: "About & Safety" },
    safety: { zhHK: "成分安全", en: "Safety" },
    sustainability: { zhHK: "永續回收", en: "Sustainability" },
    roadmap: { zhHK: "市集與工作坊", en: "Markets & Workshops" },
    community: { zhHK: "社群", en: "Community" },
    menu: { zhHK: "選單", en: "Menu" },
    close: { zhHK: "關閉", en: "Close" },
    language: { zhHK: "語言", en: "Language" },
  },
  hero: {
    eyebrow: { zhHK: "調香師主導的手作香氛", en: "Perfumer-led handcrafted fragrance" },
    title: {
      zhHK: "從一間小工作室，\n點亮家的每一個角落。",
      en: "From a small atelier,\nlight every corner of home.",
    },
    subtitle: {
      zhHK: "Atelier Scent 由調香師與芳療師創立，結合配方濃度、成分透明與安全考量，把香港人熟悉的草本氣味，做成可以安心使用的手作作品。",
      en: "Founded by a perfumer-aromatherapist, Atelier Scent pairs measured concentrations, ingredient transparency, and safety-first formulation to turn the herbal scents Hong Kong already loves into pieces made to be used without hesitation.",
    },
    ctaPrimary: { zhHK: "瀏覽香氛指南", en: "Explore the Scent Guide" },
    ctaSecondary: { zhHK: "預留／查詢", en: "Request or Reserve" },
    heroStats: [
      { value: "51", label: { zhHK: "原型配方", en: "Prototype blends" } },
      { value: "100%", label: { zhHK: "成分全標示", en: "Full ingredient labels" } },
      { value: "0", label: { zhHK: "塑膠包裝", en: "Plastic packaging" } },
    ],
    heroImageAlt: {
      zhHK: "Atelier Scent 手作香氛工作桌：玻璃瓶、香精油與未點燃的蠟燭",
      en: "Atelier Scent handcrafting table with glass bottles, essential oils, and unlit candles",
    },
  },
  featured: {
    eyebrow: { zhHK: "系列一覽", en: "The Collection" },
    title: { zhHK: "二十五種形態，一套安心的香氣語言。", en: "Twenty-five forms, one reassuring vocabulary of scent." },
    intro: {
      zhHK: "從房間到貼身，每一種形態都對應一個真實的生活場景。以下為我們的原型配方，部分將陸續開放預留。",
      en: "From a room to the skin, each form answers a real moment in daily life. Below are our prototype blends — some are open for reservation as we release them.",
    },    viewAll: { zhHK: "查看全部香氛", en: "View all scents" },
    details: { zhHK: "查看詳情", en: "View details" },
    size: { zhHK: "規格", en: "Size" },
    price: { zhHK: "參考價", en: "Indicative price" },
    notes: { zhHK: "香調", en: "Notes" },
    safety: { zhHK: "安全提示", en: "Safety" },
    ingredients: { zhHK: "主要成分", en: "Key ingredients" },
    usage: { zhHK: "使用方式", en: "How to use" },
    story: { zhHK: "香氣故事", en: "The story" },
    status: {
      prototype: { zhHK: "原型配方", en: "Prototype" },
      "pre-order": { zhHK: "接受預留", en: "Open for reservation" },
      "in-stock": { zhHK: "現貨", en: "In stock" },
    },
    request: { zhHK: "預留／查詢此配方", en: "Request or reserve this blend" },
  },
  catalog: {
    eyebrow: { zhHK: "香氛指南", en: "Scent Guide" },
    title: { zhHK: "按形態與適用情境，尋找你的第一款香氣。", en: "Find your first scent by form and by who it has to live with." },
    intro: {
      zhHK: "所有配方都在瓶身列出完整成分與安全提示。以下篩選可同時結合產品形態與適用標籤。",
      en: "Every blend lists its full ingredients and safety notes on the bottle. Filter by product form, by suitability tag, or by both.",
    },
    filterAll: { zhHK: "全部", en: "All" },
    filterByForm: { zhHK: "按形態", en: "By form" },
    filterByTag: { zhHK: "按適用情境", en: "By suitability" },
    results: { zhHK: "件產品", en: "items" },
    empty: {
      zhHK: "目前沒有符合的配方，請嘗試放寬篩選條件。",
      en: "No blends match these filters yet — try widening your selection.",
    },
  },
  safety: {
    eyebrow: { zhHK: "成分與安全", en: "Ingredients & Safety" },
    title: { zhHK: "安心，是可以被驗證的事。", en: "Safety should be something you can verify." },
    intro: {
      zhHK: "我們相信「天然」不等於「一定適合每一個家」。因此每一支產品都附上完整成分表、已知天然致敏原，以及按情境標示的使用建議。",
      en: "We do not believe that 'natural' automatically means 'right for every household'. So every product carries a full ingredient list, its known natural allergens, and scenario-specific usage guidance.",
    },
    pillars: [
      {
        title: { zhHK: "濃度有標準", en: "Measured Concentrations" },
        body: {
          zhHK: "配方稀釋參考 IFRA 國際香精安全標準與調香師協會建議上限，再依使用方式（貼身、按摩、室內空氣）分別調整。",
          en: "Dilutions follow IFRA international fragrance safety standards and trade-body recommended limits, then are adjusted per use — on skin, in massage, or in the air of a room.",
        },
      },
      {
        title: { zhHK: "成分全透明", en: "Full Transparency" },
        body: {
          zhHK: "瓶身列出每一種成分，包括天然來源的致敏原（例如柑橘中的檸檬醛），不以「proprietary blend」帶過。",
          en: "Every ingredient is listed on the bottle, including naturally occurring allergens such as citral in citrus oils — never hidden behind a proprietary blend.",
        },
      },
      {
        title: { zhHK: "呼吸道與皮膚", en: "Respiratory & Skin" },
        body: {
          zhHK: "香氣同時作用於嗅覺與情緒。我們提供稀釋比例、patch test 指引，以及在孕婦、嬰幼兒與寵物同在空間時的實務建議。",
          en: "Scent acts on both olfaction and mood. We publish dilution ratios, patch-test instructions, and practical guidance for homes shared by expectant mothers, young children, and pets.",
        },
      },
      {
        title: { zhHK: "清楚標示", en: "Clearly Labelled" },
        body: {
          zhHK: "符合條件的配方會標上「孕婦／小童適用」或「寵物友善」，讓你不用靠猜測來決定。",
          en: "Qualifying blends carry a pregnancy-and-child-friendly or pet-friendly badge, so you never have to guess.",
        },
      },
    ],
    badgeTitle: { zhHK: "配方標示一覽", en: "What our badges mean" },
    disclaimer: {
      zhHK: "標示為「適用」的配方，仍需要依產品說明在適當場合使用；如你或家人有哮喘、過敏、孕期或長期健康狀況，請先諮詢醫護人員。",
      en: "A 'friendly' badge still requires you to use the product as instructed. If you or your family have asthma, allergies, are pregnant, or manage a long-term condition, please consult a healthcare professional first.",
    },
  },
  sustainability: {
    eyebrow: { zhHK: "小批量 · 零廢棄", en: "Small-Batch · Zero Waste" },
    title: { zhHK: "空瓶回來，下一單優惠。", en: "Bring the empty back, and the next order costs less." },
    intro: {
      zhHK: "我們從一開始就假設容器是要回來的：小批量調配減少浪費，多用途植物基底油減少瓶數，而每一個空瓶、蠟燭杯與香薰機都可以回到我們手上。",
      en: "From the start we assumed the vessels come back: small-batch blending wastes less, multi-purpose carrier oils mean fewer bottles, and every empty bottle, candle jar, and diffuser can return to us.",
    },
    cta: { zhHK: "查詢回收詳情", en: "Ask about vessel return" },
    discountNote: {
      zhHK: "回收可換取下一張訂單的折扣。",
      en: "Each return earns a discount on your next order.",
    },
  },
  roadmap: {
    eyebrow: { zhHK: "市集 · 快閃 · 工作坊", en: "Markets · Pop-Ups · Workshops" },
    title: { zhHK: "在哪裡遇見 Atelier Scent。", en: "Where to find Atelier Scent in person." },
    intro: {
      zhHK: "我們會定期出現在香港的市集與快閃店，現場可以聞到全部配方，也可以直接把空瓶帶回來回收。2027 年起，我們將推出精選香調系列，並舉辦香氣與調香工作坊。",
      en: "We appear regularly at markets and pop-ups across Hong Kong, where every blend can be smelled in person and empty vessels can be returned on the spot. From 2027 we launch curated scent lines alongside aromatherapy and perfumery workshops.",
    },
    types: {
      market: { zhHK: "市集", en: "Market" },
      "pop-up": { zhHK: "快閃店", en: "Pop-up" },
      workshop: { zhHK: "工作坊", en: "Workshop" },
    },
    status: {
      upcoming: { zhHK: "即將登場", en: "Upcoming" },
      past: { zhHK: "已舉行", en: "Past" },
    },
    cta: { zhHK: "預留市集通知", en: "Get booth updates" },
  },
  community: {
    eyebrow: { zhHK: "Instagram · Threads", en: "Instagram · Threads" },
    title: { zhHK: "追蹤我們的香氣日常。", en: "Follow along with the scent diary." },
    intro: {
      zhHK: "我們在 Instagram 與 Threads 上分享香氣故事、配方比較、製作過程短片與使用貼士，也有你的回饋。",
      en: "On Instagram and Threads we share scent stories, blend comparisons, making-of clips, and usage tips — plus your own notes from the community.",
    },
    pillarsTitle: { zhHK: "內容方向", en: "Content pillars" },
    formTitle: { zhHK: "留下聯絡方式", en: "Leave your details" },
    formIntro: {
      zhHK: "想預留新品、收到市集通知，或單純想讓我們知道你在等哪一款？留下聯絡方式，我們會回覆。",
      en: "Reserve a new release, hear about upcoming markets, or simply tell us which blend you are waiting for. Leave your details and we will reply.",
    },
    formName: { zhHK: "稱呼", en: "Name" },
    formEmail: { zhHK: "電郵", en: "Email" },
    formInterest: { zhHK: "感興趣的內容", en: "Interested in" },
    formInterestPlaceholder: { zhHK: "選擇一個選項", en: "Choose an option" },
    formMessage: { zhHK: "想預留或查詢的內容", en: "What would you like to reserve or ask about?" },
    formMessagePlaceholder: {
      zhHK: "例如：想預留「檜木雨後」兩件，家中有貓。",
      en: "For example: I'd like to reserve two Hinoki After Rain candles — I have a cat at home.",
    },
    formSubmit: { zhHK: "送出查詢", en: "Send inquiry" },
    formConsent: {
      zhHK: "送出即表示同意我們以此聯絡方式回覆你的查詢。我們不會轉發你的資料。",
      en: "By sending, you agree that we may reply to your inquiry using these details. We will not share them.",
    },
    formSuccess: {
      zhHK: "多謝！我們已收到你的查詢，通常於 1–2 個工作天內回覆。",
      en: "Thank you — your inquiry is with us. We usually reply within 1–2 working days.",
    },
    formError: {
      zhHK: "送出失敗，請稍後再試，或直接透過 WhatsApp 聯絡我們。",
      en: "That did not go through. Please try again, or reach us directly on WhatsApp.",
    },
    interestOptions: [
      { value: "reservation", label: { zhHK: "預留 / 訂購查詢", en: "Reservation or order inquiry" } },
      { value: "market", label: { zhHK: "市集與工作坊通知", en: "Market & workshop updates" } },
      { value: "wholesale", label: { zhHK: "零售 / 合作洽詢", en: "Retail or stockist partnership" } },
      { value: "feedback", label: { zhHK: "產品回饋", en: "Product feedback" } },
    ],
  },
  about: {
    eyebrow: { zhHK: "關於我們", en: "About" },
    title: { zhHK: "一位調香師，四個人，一張調香桌。", en: "One perfumer, four people, one blending bench." },
    philosophyTitle: { zhHK: "我們的做法", en: "How we work" },
    philosophy: [
      {
        title: { zhHK: "先理解，再調香", en: "Understand first, then blend" },
        body: {
          zhHK: "每支配方都從一個真實的生活場景開始：書房的兩點、嬰兒房、貓咪身邊。調香是結果，不是起點。",
          en: "Every blend begins with a real scene: two o'clock in a study, a nursery, a cat asleep nearby. Blending is the result, not the starting point.",
        },
      },
      {
        title: { zhHK: "背景不同，方法一致", en: "Different paths, one method" },
        body: {
          zhHK: "創辦人擁有調香與芳療證照，也做過會計與金融科技——那份對數字與合規的敏感，讓濃度與標示從第一天起就沒有模糊地帶。",
          en: "Our founder trained as a perfumer and aromatherapist, and worked in accounting and fintech. That instinct for numbers and compliance left no room for vague claims on concentration and labelling from day one.",
        },
      },
      {
        title: { zhHK: "手感與視覺同樣重要", en: "Hands and eyes both matter" },
        body: {
        zhHK: "從瓶身比例、貼標排版到螢幕上的每一個畫面，我們相信美學與安全是同一件事：讓人願意好好讀完標示。",
          en: "From bottle proportions and label typography to every screen, aesthetics and safety are the same discipline: making people want to read the label properly.",
        },
      },
    ],
    teamTitle: { zhHK: "團隊", en: "The team" },
    teamIntro: {
      zhHK: "一間小工作室，四個角色，從調方到包裝都自己來。",
      en: "A small studio of four roles, covering everything from formula to packaging.",
    },
    team: [
      {
        name: "創辦人 · 調香師 / 芳療師",
        enName: "Founder · Perfumer & Aromatherapist",
        body: {
          zhHK: "持有調香與芳療專業資格，具備會計與金融科技背景，負責配方、安全標準與品牌敘事。",
          en: "Certified in perfumery and aromatherapy with a background in accounting and fintech, leading formulas, safety standards, and brand narrative.",
        },
      },
      {
        name: "Hill · 產品與營運",
        enName: "Hill · Product & Operations",
        body: {
          zhHK: "負責從原料採購到批次品質的每一步，讓每一支蠟燭與每一瓶滾珠都一致。",
          en: "Owns everything from raw material sourcing to batch consistency, so every candle and roll-on arrives the same.",
        },
      },
      {
        name: "Laura · 視覺與品牌",
        enName: "Laura · Visual & Brand",
        body: {
          zhHK: "負責包裝、字體、版面與線上內容的視覺語言，讓產品與頁面保持同一份克制。",
          en: "Shapes packaging, type, layout, and the visual language of our online content — one calm system across product and page.",
        },
      },
      {
        name: "Janice · 社群與體驗",
        enName: "Janice · Community & Experience",
        body: {
          zhHK: "經營 Instagram 與 Threads，收集客人回饋，並把攤位與工作坊體驗帶回工作室。",
          en: "Runs Instagram and Threads, gathers customer feedback, and brings booth and workshop experience back into the studio.",
        },
      },
    ],
    guideTitle: { zhHK: "新手安全指南", en: "Beginner's Safety Guide" },
    faqTitle: { zhHK: "常見問題", en: "Frequently asked" },
  },
  inquiry: {
    title: { zhHK: "預留／查詢", en: "Request or Reserve" },
    subtitle: {
      zhHK: "我們以訊息方式處理預留，不設線上付款。留下你的選擇與聯絡方式，我們會確認後回覆。",
      en: "We handle reservations by message — there is no online payment. Tell us what you would like and how to reach you, and we will confirm by reply.",
    },
    productLabel: { zhHK: "想預留的配方", en: "Blend of interest" },
    productPlaceholder: { zhHK: "選擇一個配方", en: "Choose a blend" },
    name: { zhHK: "稱呼", en: "Name" },
    contact: { zhHK: "聯絡方式（電郵或電話）", en: "How to reach you (email or phone)" },
    quantity: { zhHK: "數量", en: "Quantity" },
    message: { zhHK: "備註", en: "Note" },
    messagePlaceholder: {
      zhHK: "例如：家中有貓與一名兩歲小孩，希望先確認適用性。",
      en: "For example: I have a cat and a two-year-old — please confirm suitability first.",
    },
    whatsapp: { zhHK: "以 WhatsApp 查詢", en: "Ask on WhatsApp" },
    instagram: { zhHK: "以 Instagram 私訊查詢", en: "Ask on Instagram" },
    close: { zhHK: "關閉", en: "Close" },
  },
  footer: {
    blurb: {
      zhHK: "Atelier Scent 是一間位於香港的手作香氛工作室，專注於安全、透明的精油與香氛配方。",
      en: "Atelier Scent is a handcrafted fragrance studio in Hong Kong, focused on safe, transparent essential oil and fragrance formulas.",
    },
    explore: { zhHK: "探索", en: "Explore" },
    contact: { zhHK: "聯絡", en: "Contact" },
    hours: { zhHK: "攤位時間", en: "Booth hours" },
    hoursValue: {
      zhHK: "週六至日 · 13:00–19:00（以市集公告為準）",
      en: "Sat–Sun · 13:00–19:00 (per market announcements)",
    },
    rights: { zhHK: "所有版權所有。", en: "All rights reserved." },
    privacy: { zhHK: "私隱政策", en: "Privacy" },
  },
} satisfies Record<string, unknown>;

export type Copy = typeof copy;

/** Resolve a localized value for the given locale. */
export function t<T>(value: Localized<T>, locale: "zh-HK" | "en"): T {
  return locale === "zh-HK" ? value.zhHK : value.en;
}
