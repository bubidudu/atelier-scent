import type { ContentPillar, FaqItem, VesselReturnPoint } from "./types";

export const vesselReturnPoints: VesselReturnPoint[] = [
  {
    id: "return",
    title: {
      zhHK: "空瓶回收",
      en: "Return empty vessels",
    },
    detail: {
      zhHK: "把已用完的玻璃瓶、蠟燭杯或香薰機帶到我們的攤位或市集，換取下一張訂單的折扣。",
      en: "Bring back empty glass bottles, candle jars, or diffusers at any booth or market and receive a discount on your next order.",
    },
  },
  {
    id: "clean",
    title: {
      zhHK: "只需洗淨",
      en: "Clean is enough",
    },
    detail: {
      zhHK: "不需要完美無瑕——倒空、沖洗乾淨即可。我們會做最後的分揀與消毒。",
      en: "It does not need to be pristine — empty, rinsed, and clean is enough. We handle final sorting and sanitising.",
    },
  },
  {
    id: "small-batch",
    title: {
      zhHK: "小批量製作",
      en: "Small-batch crafting",
    },
    detail: {
      zhHK: "每批以數十件為單位調配，避免浪費原料，也讓每一批的香氣更穩定。",
      en: "Every batch is blended in quantities of a few dozen, so nothing is wasted and each batch stays consistent.",
    },
  },
  {
    id: "multiuse",
    title: {
      zhHK: "一油多用",
      en: "One oil, many uses",
    },
    detail: {
      zhHK: "同一支植物性基底油同時用於按摩、擴香與蠟燭，減少瓶罐數量與整體廢棄。",
      en: "A single plant-based carrier serves massage, diffusion, and candle-making — fewer bottles, less waste overall.",
    },
  },
];

export const roadmapEvents = [
  {
    id: "ev-1",
    date: "2026-12",
    title: { zhHK: "冬季香氛市集", en: "Winter Scent Market" },
    venue: { zhHK: "中環 · PMQ 元創方", en: "PMQ, Sheung Wan" },
    type: "market" as const,
    status: "upcoming" as const,
  },
  {
    id: "ev-2",
    date: "2027-01",
    title: { zhHK: "手作香氛工作坊：滾珠調香", en: "Atelier: Roll-On Blending" },
    venue: { zhHK: "九龍 · 觀塘工廠大廈", en: "Kwun Tong, Kowloon" },
    type: "workshop" as const,
    status: "upcoming" as const,
  },
  {
    id: "ev-3",
    date: "2027-03",
    title: { zhHK: "精選香調系列首發", en: "Curated Scent Lines — First Release" },
    venue: { zhHK: "香港 · 網店限定", en: "Hong Kong · Online first" },
    type: "pop-up" as const,
    status: "upcoming" as const,
  },
  {
    id: "ev-4",
    date: "2026-09",
    title: { zhHK: "秋日慢活市集", en: "Slow Living Autumn Market" },
    venue: { zhHK: "香港 · 數碼港", en: "Cyberport, Hong Kong" },
    type: "market" as const,
    status: "past" as const,
  },
];

export const contentPillars: ContentPillar[] = [
  {
    id: "stories",
    label: { zhHK: "香氣故事", en: "Scent Stories" },
    detail: {
      zhHK: "每支香調背後的靈感、場合與創作者筆記。",
      en: "The inspiration, occasion, and maker's notes behind each blend.",
    },
  },
  {
    id: "comparisons",
    label: { zhHK: "香調比較", en: "Scent Comparisons" },
    detail: {
      zhHK: "兩種配方放在一起比較，讓你更容易選擇。",
      en: "Two formulas placed side by side so choosing feels easier.",
    },
  },
  {
    id: "making-of",
    label: { zhHK: "製作過程", en: "Making-Of" },
    detail: {
      zhHK: "調香、灌蠟、貼標——短片記錄每一批次的手工步驟。",
      en: "Blending, pouring, labelling — short clips of every hand-worked step.",
    },
  },
  {
    id: "usage-tips",
    label: { zhHK: "使用貼士", en: "Usage Tips" },
    detail: {
      zhHK: "稀釋比例、空間用量與孕婦／寵物情境的實務建議。",
      en: "Dilution ratios, room dosage, and practical tips for pregnancy and pet households.",
    },
  },
  {
    id: "customer-voices",
    label: { zhHK: "客人回饋", en: "Customer Voices" },
    detail: {
      zhHK: "真實使用者的短評與他們的香氣日常。",
      en: "Short notes from people who actually live with these scents.",
    },
  },
];

export const faqs: FaqItem[] = [
  {
    id: "start",
    question: {
      zhHK: "我應該從哪一支開始？",
      en: "Where should I start?",
    },
    answer: {
      zhHK: "如果你完全沒有使用過香氛，先從「空間噴霧」或「蠟片」開始——它們不會直接接觸皮膚，容錯率最高，適合先建立對某個香調的偏好。想直接體驗貼身香氣，可以試「滾珠」，但記得先做 24 小時的局部測試。",
      en: "If you have never used fragrance before, start with a room spray or a wax sachet — they never touch skin, so they are the safest way to discover which scents you actually like. If you want a wearable scent, try a roll-on, and always patch test for 24 hours first.",
    },
  },
  {
    id: "home-pets",
    question: {
      zhHK: "家中有貓狗，如何選擇安全的香氣？",
      en: "How do I choose a safe scent for a home with pets?",
    },
    answer: {
      zhHK: "選擇標有「寵物友善」的配方（例如「亞麻房間」或「檜木雨後」），並避免貓科特別敏感的成分，如薰衣草、茶樹、柑橘類的濃郁版本。使用蠟燭時請讓貓狗離開房間，熄燭並通風後再讓牠們返回。若貓咪有呼吸道問題，建議改用蠟片並放在貓咪接觸不到的位置。",
      en: "Choose formulas labelled pet-friendly (for example Linen Room or Hinoki After Rain) and avoid oils that cats are especially sensitive to, such as strong lavender, tea tree, or heavy citrus. When burning a candle, keep cats and dogs out of the room, and let them return only after it is extinguished and the room has aired. For cats with respiratory issues, use wax sachets placed out of reach instead.",
    },
  },
  {
    id: "family",
    question: {
      zhHK: "有孕婦或小童在家，可以安心使用嗎？",
      en: "Is it safe to use with a pregnant person or young children at home?",
    },
    answer: {
      zhHK: "可以，但要挑對產品並注意場合。我們對標示「孕婦／小童適用」的配方採用較保守的濃度，並在瓶身標明使用方式；蠟燭仍應在無人在場時點燃，滾珠則避免使用在腹部周圍。使用前如有任何疑慮，請先諮詢你的醫護人員。",
      en: "Yes — with the right product and sensible timing. Our pregnancy and child-friendly formulas use more conservative concentrations and carry usage directions on the bottle. Candles should still be lit only when no one is in the room, and roll-ons should be kept away from the abdomen. If you have any medical concerns, please check with your healthcare professional first.",
    },
  },
  {
    id: "concentration",
    question: {
      zhHK: "你們的濃度標準是什麼？",
      en: "What concentration standards do you follow?",
    },
    answer: {
      zhHK: "配方與稀釋比例參考國際香精協會（IFRA）標準及歐盟調香師協會建議的香精安全上限，並另外按芳香療法的使用原則調整（例如滾珠與按摩油的稀釋比例、室內使用的空氣濃度上限）。所有配方列出完整成分與已知天然致敏原。",
      en: "Our formulas and dilution ratios follow IFRA standards and the fragrance safety limits recommended by the European trade bodies, then are adjusted further by aromatherapy usage principles — dilution ratios for roll-ons and massage oils, and maximum airborne concentration for indoor use. Every formula lists all ingredients and known natural allergens.",
    },
  },
  {
    id: "scent-strength",
    question: {
      zhHK: "可以控制香氣的濃度嗎？",
      en: "Can I control the strength of the scent?",
    },
    answer: {
      zhHK: "可以。滾珠與按摩油請先稀釋使用（按摩油建議 1–2 滴兌 5ml  Carrier oil），噴霧則以少量噴灑並保持通風。同一配方在不同空間、濕度與季節下表現會有差異，這是正常的。",
      en: "Yes. Dilute roll-ons and massage oils before use (for massage oil, 1–2 drops in 5 ml of carrier oil), and mist room sprays sparingly in a ventilated space. The same formula will behave differently depending on the room, humidity, and season — that is normal.",
    },
  },
  {
    id: "returns",
    question: {
      zhHK: "空瓶回收如何使用？",
      en: "How does the empty-vessel return work?",
    },
    answer: {
      zhHK: "任何已用完的玻璃瓶、蠟燭杯或香薰機，只要倒空並沖洗乾淨，都可以帶到我們的攤位或市集換取下一張訂單的折扣。回收後我們會分揀、消毒並重新使用或回收再造。",
      en: "Any empty glass bottle, candle jar, or diffuser can be returned to a booth or market once it is empty and rinsed clean, in exchange for a discount on your next order. We sort, sanitise, and then reuse or recycle each vessel.",
    },
  },
];
