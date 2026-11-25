import type { Product } from "./types";
import { catalogueProducts } from "./productsCatalogue";

/**
 * Prototype catalogue. Add or edit items freely — the UI is driven entirely
 * by this array, so no component changes are needed to extend the range.
 */
export const products: Product[] = [
  {
    id: "candle-hinoki-rain",
    name: { zhHK: "檜木雨後", en: "Hinoki After Rain" },
    category: "candle",
    story: {
      zhHK: "雨後的檜木林，濕潤的泥土與一縷被洗淨的青苔。點燃時像打開一扇朝向山徑的窗。",
      en: "A cypress forest just after rain — damp earth and a washed-clean thread of moss. Lighting it feels like opening a window onto a mountain path.",
    },
    notes: [
      { family: { zhHK: "前調", en: "Top" }, note: { zhHK: "佛手柑", en: "Bergamot" } },
      { family: { zhHK: "中調", en: "Heart" }, note: { zhHK: "日本檜木", en: "Hinoki" } },
      { family: { zhHK: "後調", en: "Base" }, note: { zhHK: "濕苔與岩蘭草", en: "Wet Moss & Vetiver" } },
    ],
    ingredients: [
      { name: { zhHK: "日本檜木精油", en: "Hinoki essential oil" }, role: { zhHK: "定調主角", en: "Signature note" } },
      { name: { zhHK: "大豆蠟", en: "Soy wax" }, role: { zhHK: "100% 植物性基底", en: "100% plant-based base" } },
      { name: { zhHK: "棉芯", en: "Cotton wick" }, role: { zhHK: "無鉛、無金屬", en: "Lead-free, metal-free" } },
    ],
    packaging: {
      zhHK: "桐木禮盒 · 越前和紙杯套 · 水引繫結",
      en: "Paulownia box, Echizen washi sleeve, mizuhiki tie",
    },
    safetyNotes: {
      zhHK: "請於通風處使用；點燃期間請勿離開，並置於穩固耐熱表面。孕婦及小童適用（建議於嬰兒不在房間時點燃）。貓狗請離開房間後再點燃。",
      en: "Use in a ventilated room. Never leave a burning candle unattended, and place it on a stable, heat-resistant surface. Suitable during pregnancy and around children (light it only when the baby is not in the room). Please keep cats and dogs out of the room while burning.",
    },
    usage: {
      zhHK: "首次點燃請讓蠟油燒至邊緣形成完整熔池（約 2 小時）。之後每次點燃不超過 3 小時。",
      en: "On first burn, let the wax melt fully to the edge (around 2 hours). After that, burn for no more than 3 hours at a time.",
    },
    tags: ["pregnancy-child-friendly", "pet-friendly", "allergen-declared"],
    size: "220g · 約 45 小時",
    price: "HK$ 428",
    status: "pre-order",
    imageKey: "candle-hinoki-rain",
    tone: "sage",
  },
  {
    id: "candle-white-tea",
    name: { zhHK: "白茶日光", en: "White Tea Daylight" },
    category: "candle",
    story: {
      zhHK: "清晨窗邊的一杯白茶，乾淨、微甜，帶著曬過的亞麻布氣息。",
      en: "A cup of white tea by a morning window — clean, faintly sweet, with the scent of sun-dried linen.",
    },
    notes: [
      { family: { zhHK: "前調", en: "Top" }, note: { zhHK: "白茶與柑橘皮", en: "White Tea & Citrus Peel" } },
      { family: { zhHK: "中調", en: "Heart" }, note: { zhHK: "洋甘菊", en: "Chamomile" } },
      { family: { zhHK: "後調", en: "Base" }, note: { zhHK: "白麝香與棉", en: "White Musk & Cotton" } },
    ],
    ingredients: [
      { name: { zhHK: "白茶萃取", en: "White tea infusion" }, role: { zhHK: "柔化前調", en: "Softens the opening" } },
      { name: { zhHK: "洋甘菊精油", en: "Chamomile essential oil" }, role: { zhHK: "舒緩香調", en: "Calming middle note" } },
      { name: { zhHK: "大豆蠟與棉芯", en: "Soy wax & cotton wick" }, role: { zhHK: "植物性基底", en: "Plant-based base" } },
    ],
    packaging: {
      zhHK: "桐木禮盒 · 越前和紙杯套 · 水引繫結",
      en: "Paulownia box, Echizen washi sleeve, mizuhiki tie",
    },
    safetyNotes: {
      zhHK: "蠟燭必須有人看管。孕婦及小童適用；貓狗請於熄燭並通風後返回房間。",
      en: "Never leave a burning candle unattended. Suitable during pregnancy and around children; return cats and dogs only once the candle is extinguished and the room is aired.",
    },
    usage: {
      zhHK: "適合晨間或需要專注的下午，點燃 1–2 小時即可。",
      en: "Ideal for mornings or a focused afternoon — 1 to 2 hours is enough.",
    },
    tags: ["pregnancy-child-friendly", "sensitive-skin", "allergen-declared"],
    size: "220g · 約 45 小時",
    price: "HK$ 428",
    status: "pre-order",
    imageKey: "candle-white-tea",
    tone: "mist",
  },
  {
    id: "sachet-fig-cotton",
    name: { zhHK: "無花果棉語", en: "Fig & Cotton" },
    category: "wax-sachet",
    story: {
      zhHK: "衣櫃裡安靜的果香，混合乾淨的衣物與微微的木質感，適合放在書包或外套口袋。",
      en: "A quiet fruit note for a wardrobe — clean linen with a whisper of wood. Small enough for a tote or a coat pocket.",
    },
    notes: [
      { family: { zhHK: "前調", en: "Top" }, note: { zhHK: "無花果葉", en: "Fig Leaf" } },
      { family: { zhHK: "中調", en: "Heart" }, note: { zhHK: "無花果與棉花", en: "Fig & Cotton Flower" } },
      { family: { zhHK: "後調", en: "Base" }, note: { zhHK: "雪松", en: "Cedarwood" } },
    ],
    ingredients: [
      { name: { zhHK: "無花果香基", en: "Fig accord" }, role: { zhHK: "果香主角", en: "Fruity character" } },
      { name: { zhHK: "大豆蠟與天然色素", en: "Soy wax & natural pigment" }, role: { zhHK: "可溶配方", en: "Soluble formula" } },
    ],
    packaging: {
      zhHK: "越前和紙小袋 · 水引封口",
      en: "Echizen washi pouch, mizuhiki seal",
    },
    safetyNotes: {
      zhHK: "請置於兒童及寵物接觸不到的位置。蠟片不可食用；接觸皮膚後請以清水清洗。",
      en: "Keep out of reach of children and pets. Not for consumption; wash with water if it contacts skin.",
    },
    usage: {
      zhHK: "掛於衣櫃、書包、床頭或車內。氣味約可維持 8–12 週，可放雪櫃延長壽命。",
      en: "Hang in a wardrobe, tote, bedside, or car. Scent lasts roughly 8–12 weeks; keep chilled to extend it.",
    },
    tags: ["pregnancy-child-friendly", "sensitive-skin"],
    size: "每片約 8g",
    price: "HK$ 128",
    status: "pre-order",
    imageKey: "sachet-fig-cotton",
    tone: "clay",
  },
  {
    id: "rollon-grounding",
    name: { zhHK: "沉靜滾珠", en: "Grounding Roll-On" },
    category: "roll-on",
    story: {
      zhHK: "給需要重新站穩的時刻：兩點之間的工作日、擠滿的通勤、公眾場合前的深呼吸。",
      en: "For moments that call for steadiness: the two o'clock workday, a crowded commute, one long breath before a room.",
    },
    notes: [
      { family: { zhHK: "前調", en: "Top" }, note: { zhHK: "甜橙", en: "Sweet Orange" } },
      { family: { zhHK: "中調", en: "Heart" }, note: { zhHK: "乳香", en: "Frankincense" } },
      { family: { zhHK: "後調", en: "Base" }, note: { zhHK: "廣藿香", en: "Patchouli" } },
    ],
    ingredients: [
      { name: { zhHK: "乳香精油", en: "Frankincense oil" }, role: { zhHK: "定神基底", en: "Grounding base" } },
      { name: { zhHK: "甜橙精油", en: "Sweet orange oil" }, role: { zhHK: "提亮前調", en: "Bright opening" } },
      { name: { zhHK: "荷荷巴油", en: "Jojoba oil" }, role: { zhHK: "植物性稀釋基底", en: "Plant-based carrier" } },
    ],
    packaging: {
      zhHK: "和紙小盒 · 桐木盒身 · 水引繫結",
      en: "Washi case, paulownia body, mizuhiki tie",
    },
    safetyNotes: {
      zhHK: "外用。請先於手腕內側小範圍測試 24 小時。孕期、哺乳期或使用抗凝血藥物者請先諮詢醫護人員。",
      en: "For external use only. Patch test on the inner wrist for 24 hours first. Consult a healthcare professional if pregnant, breastfeeding, or taking blood-thinning medication.",
    },
    usage: {
      zhHK: "滾動於手腕內側、耳後或太陽穴周圍。需要時重複，每小時不超過 3 次。",
      en: "Roll onto inner wrists, behind the ears, or around the temples. Repeat as needed, up to three times an hour.",
    },
    tags: ["allergen-declared", "sensitive-skin"],
    size: "10ml",
    price: "HK$ 268",
    status: "prototype",
    imageKey: "rollon-grounding",
    tone: "clay",
  },
  {
    id: "rollon-sleep-lavender",
    name: { zhHK: "晚安滾珠", en: "Goodnight Roll-On" },
    category: "roll-on",
    story: {
      zhHK: "睡前一小段留給自己的時間：柔和的薰衣草與真正的睡眠節奏，而不是過於甜膩的香氛。",
      en: "A small hour kept for yourself: soft lavender that supports a real wind-down rather than a sugar-sweet perfume.",
    },
    notes: [
      { family: { zhHK: "前調", en: "Top" }, note: { zhHK: "薰衣草穗", en: "Lavender Tops" } },
      { family: { zhHK: "中調", en: "Heart" }, note: { zhHK: "真正薰衣草", en: "True Lavender" } },
      { family: { zhHK: "後調", en: "Base" }, note: { zhHK: "岩蘭草與雪松", en: "Vetiver & Cedar" } },
    ],
    ingredients: [
      { name: { zhHK: "真正薰衣草精油", en: "True lavender oil" }, role: { zhHK: "舒眠香調", en: "Sleep-support note" } },
      { name: { zhHK: "荷荷巴油", en: "Jojoba oil" }, role: { zhHK: "植物性稀釋基底", en: "Plant-based carrier" } },
    ],
    packaging: {
      zhHK: "和紙小盒 · 桐木盒身 · 水引繫結",
      en: "Washi case, paulownia body, mizuhiki tie",
    },
    safetyNotes: {
      zhHK: "外用，避開眼周。貓狗請勿接觸——貓科代謝缺乏葡萄糖醛酸轉移酶，薰衣草類成分需特別留意。",
      en: "External use, avoid the eye area. Keep away from cats and dogs — cats lack glucuronyl transferase, so lavender-family compounds need particular care.",
    },
    usage: {
      zhHK: "睡前滾於胸口與手腕，配合深呼吸 5 分鐘。",
      en: "Roll onto the chest and wrists before bed, with five slow breaths.",
    },
    tags: ["allergen-declared", "sensitive-skin"],
    size: "10ml",
    price: "HK$ 268",
    status: "prototype",
    imageKey: "rollon-sleep-lavender",
    tone: "mist",
  },
  {
    id: "spray-linen-room",
    name: { zhHK: "亞麻房間", en: "Linen Room" },
    category: "room-spray",
    story: {
      zhHK: "整理房間時的一個小儀式：把窗推開，噴一下，讓空間像剛洗過床單。",
      en: "A small reset ritual — open the window, press once, and the room behaves like freshly washed linen.",
    },
    notes: [
      { family: { zhHK: "前調", en: "Top" }, note: { zhHK: "葡萄柚", en: "Grapefruit" } },
      { family: { zhHK: "中調", en: "Heart" }, note: { zhHK: "亞麻與白茶", en: "Linen & White Tea" } },
      { family: { zhHK: "後調", en: "Base" }, note: { zhHK: "白檀", en: "Sandalwood" } },
    ],
    ingredients: [
      { name: { zhHK: "白檀精油", en: "Sandalwood oil" }, role: { zhHK: "柔滑底調", en: "Smooth base note" } },
      { name: { zhHK: "植物性酒精基底的溫和配方", en: "Gentle plant-based alcohol base" }, role: { zhHK: "霧化媒介", en: "Spray medium" } },
    ],
    packaging: {
      zhHK: "和紙盒 · 玻璃瓶 · 越前和紙標籤",
      en: "Washi box, glass bottle, Echizen washi label",
    },
    safetyNotes: {
      zhHK: "請勿朝臉部噴灑。使用後保持通風。孕婦與小童適用；貓狗請待空間通風後再返回。",
      en: "Do not spray toward the face. Keep the room ventilated after use. Suitable during pregnancy and around children; let the room air before pets return.",
    },
    usage: {
      zhHK: "距離織物約 30cm 輕噴 1–2 下。整理房間、接待客人或曬衣後使用。",
      en: "Lightly mist 1–2 sprays from about 30 cm away. Use while tidying, before guests arrive, or after airing laundry.",
    },
    tags: ["pregnancy-child-friendly", "pet-friendly", "allergen-declared"],
    size: "100ml",
    price: "HK$ 238",
    status: "pre-order",
    imageKey: "spray-linen-room",
    tone: "mist",
  },
  {
    id: "massage-shoulder",
    name: { zhHK: "肩頸放鬆油", en: "Shoulder Release Oil" },
    category: "massage-oil",
    story: {
      zhHK: "為長時間螢幕工作而生的配方：薄荷與迷迭香帶來清涼，荷荷巴油與甜杏仁油讓按摩滑順。",
      en: "Made for long hours in front of a screen: cooling mint and rosemary over a slipperiest base of jojoba and sweet almond.",
    },
    notes: [
      { family: { zhHK: "前調", en: "Top" }, note: { zhHK: "薄荷", en: "Peppermint" } },
      { family: { zhHK: "中調", en: "Heart" }, note: { zhHK: "迷迭香", en: "Rosemary" } },
      { family: { zhHK: "後調", en: "Base" }, note: { zhHK: "雪松與荷荷巴", en: "Cedar & Jojoba" } },
    ],
    ingredients: [
      { name: { zhHK: "荷荷巴油", en: "Jojoba oil" }, role: { zhHK: "按摩基底", en: "Massage carrier" } },
      { name: { zhHK: "甜杏仁油", en: "Sweet almond oil" }, role: { zhHK: "柔滑延伸", en: "Slip and softness" } },
      { name: { zhHK: "薄荷與迷迭香精油", en: "Peppermint & rosemary oils" }, role: { zhHK: "清涼感", en: "Cooling effect" } },
    ],
    packaging: {
      zhHK: "和紙盒 · 琥珀玻璃瓶 · 越前和紙標籤",
      en: "Washi box, amber glass bottle, Echizen washi label",
    },
    safetyNotes: {
      zhHK: "僅供身體外部使用，避免眼睛、黏膜與傷口。孕婦請避免使用迷迭香與薄荷；寵物請勿舔食殘留於毛髮上的精油。",
      en: "External body use only — avoid eyes, mucous membranes, and broken skin. Avoid rosemary and mint during pregnancy. Keep oils from being licked by pets.",
    },
    usage: {
      zhHK: "取 3–5 滴於掌心搓熱，於肩頸輕按 1–2 分鐘。每週 2–3 次或按需要。",
      en: "Warm 3–5 drops in the palms and press into shoulders and neck for 1–2 minutes. Two to three times a week, or as needed.",
    },
    tags: ["allergen-declared", "sensitive-skin"],
    size: "30ml",
    price: "HK$ 298",
    status: "prototype",
    imageKey: "massage-shoulder",
    tone: "sage",
  },
  {
    id: "solid-perfume-winter",
    name: { zhHK: "冬季固體香水：雪松夜", en: "Solid Perfume — Cedar Night" },
    category: "solid-perfume",
    story: {
      zhHK: "季節限定：以乳木果脂封存雪松與煙燻感的琥珀，膏體貼近體溫時才慢慢綻放。",
      en: "A seasonal edition: cedar and a smoky amber sealed in shea butter, released only as it warms against skin.",
    },
    notes: [
      { family: { zhHK: "前調", en: "Top" }, note: { zhHK: "杜松", en: "Juniper" } },
      { family: { zhHK: "中調", en: "Heart" }, note: { zhHK: "雪松", en: "Cedarwood" } },
      { family: { zhHK: "後調", en: "Base" }, note: { zhHK: "煙燻琥珀", en: "Smoked Amber" } },
    ],
    ingredients: [
      { name: { zhHK: "乳木果脂", en: "Shea butter" }, role: { zhHK: "膏體基底", en: "Balm base" } },
      { name: { zhHK: "雪松與杜松精油", en: "Cedar & juniper oils" }, role: { zhHK: "木質香調", en: "Woody character" } },
    ],
    packaging: {
      zhHK: "和紙盒 · 錫盒膏體 · 桐木盒蓋",
      en: "Washi box, tin balm case, paulownia lid",
    },
    safetyNotes: {
      zhHK: "外用。請先小範圍測試；含天然致敏原。孕婦與小童適用；貓狗請勿接觸。",
      en: "For external use. Patch test first; contains natural allergens. Suitable during pregnancy and around children; keep away from cats and dogs.",
    },
    usage: {
      zhHK: "以指腹取少量，點於手腕、耳後或鎖骨。體溫越高，香氣越明顯。",
      en: "Take a small amount with fingertips and apply to wrists, behind the ears, or the collarbone. The warmer the skin, the more it speaks.",
    },
    tags: ["pregnancy-child-friendly", "allergen-declared"],
    size: "8g",
    price: "HK$ 198",
    status: "prototype",
    imageKey: "solid-perfume-winter",
    tone: "sand",
  },
];

/**
 * The original flagship prototypes, kept as the editorial anchor of the
 * catalogue. Everything else in the range lives in `productsCatalogue.ts`.
 */
export const flagshipProducts: Product[] = products;

/**
 * The complete range: the original flagship prototypes followed by the wider
 * catalogue of forms. Ordering here is what the catalogue grid renders.
 */
export const allProducts: Product[] = [...products, ...catalogueProducts];

export const productMap = Object.fromEntries(
  allProducts.map((product) => [product.id, product]),
) as Record<string, Product>;
