import type { Localized, ProductCategoryId, SafetyTagId } from "./types";

/**
 * Category-level defaults. Every product form shares a baseline safety note,
 * usage pattern, and indicative price band — individual products only need
 * to declare what genuinely differs.
 */
export interface CategoryDefaults {
  category: ProductCategoryId;
  safety: Localized;
  usage: Localized;
  size: string;
  price: string;
  /** Default suitability tags; products may add or override. */
  tags: SafetyTagId[];
}

export const categoryDefaults: CategoryDefaults[] = [
  {
    category: "perfume",
    safety: {
      zhHK: "外用。含天然致敏原，請先於小範圍測試 24 小時。",
      en: "For external use. Contains natural allergens — patch test for 24 hours first.",
    },
    usage: {
      zhHK: "噴於手腕、耳後或衣物，避開眼周。",
      en: "Spray on wrists, behind the ears, or clothing. Avoid the eye area.",
    },
    size: "50ml",
    price: "HK$ 588",
    tags: ["allergen-declared"],
  },
  {
    category: "body-mist",
    safety: {
      zhHK: "請勿朝臉部噴灑。使用後請保持通風。",
      en: "Do not spray toward the face. Keep ventilated after use.",
    },
    usage: {
      zhHK: "距離皮膚或織物約 30cm 輕噴 1–2 下。",
      en: "Lightly mist 1–2 sprays from about 30 cm away.",
    },
    size: "100ml",
    price: "HK$ 238",
    tags: ["allergen-declared"],
  },
  {
    category: "lip-balm",
    safety: {
      zhHK: "僅供唇部外用。含天然致敏原，首次使用前請小範圍測試。",
      en: "For lips only. Contains natural allergens — test a small area first.",
    },
    usage: {
      zhHK: "需要時塗抹於唇部。睡前一晚厚塗可作為隔夜唇膜。",
      en: "Apply to the lips as needed. A thicker layer before bed works as an overnight mask.",
    },
    size: "10g",
    price: "HK$ 138",
    tags: ["allergen-declared"],
  },
  {
    category: "insect-repellent",
    safety: {
      zhHK: "外用。請勿噴於眼周、黏膜與傷口。孕婦、哺乳期及兩歲以下小童使用前請先諮詢醫護人員。",
      en: "External use. Avoid eyes, mucous membranes, and broken skin. Consult a healthcare professional before use if pregnant, breastfeeding, or for children under two.",
    },
    usage: {
      zhHK: "噴於衣物與露膚部位，每 2–3 小時重複一次。避免大量噴灑於同一位置。",
      en: "Apply to clothing and exposed skin, repeating every 2–3 hours. Avoid heavy application to one area.",
    },
    size: "100ml",
    price: "HK$ 188",
    tags: ["allergen-declared"],
  },
  {
    category: "reed-diffuser",
    safety: {
      zhHK: "請勿飲用。請置於兒童及寵物接觸不到的位置。使用期間保持通風。",
      en: "Not for consumption. Keep out of reach of children and pets. Keep the room ventilated.",
    },
    usage: {
      zhHK: "將藤枝插入瓶中，每 1–2 週翻轉一次以維持香氣。補充液請勿直接倒入其他容器。",
      en: "Place reeds in the bottle and flip weekly to refresh. Do not decant the refill into other containers.",
    },
    size: "100ml",
    price: "HK$ 328",
    tags: ["pregnancy-child-friendly", "pet-friendly"],
  },
  {
    category: "stone-diffuser",
    safety: {
      zhHK: "請勿食用。擴香液請勿直接接觸皮膚或眼睛。",
      en: "Not for consumption. Do not let the fragrance liquid contact skin or eyes directly.",
    },
    usage: {
      zhHK: "在石膏表面滴上 2–3 滴，待完全吸收後再移動位置。",
      en: "Apply 2–3 drops to the plaster surface and let it absorb fully before moving it.",
    },
    size: "80ml + 石膏",
    price: "HK$ 398",
    tags: ["pregnancy-child-friendly", "pet-friendly"],
  },
  {
    category: "wood-diffuser",
    safety: {
      zhHK: "請勿食用。請避免陽光直射，並置於兒童及寵物接觸不到的位置。",
      en: "Not for consumption. Keep out of direct sunlight and away from children and pets.",
    },
    usage: {
      zhHK: "將香氛油滴在木片上，置於玄關或衣帽間。香氣約可維持 2–3 個月。",
      en: "Apply fragrance oil to the wood slice and place by an entryway or wardrobe. Lasts 2–3 months.",
    },
    size: "木片 + 10ml 油",
    price: "HK$ 288",
    tags: ["pregnancy-child-friendly", "pet-friendly"],
  },
  {
    category: "bamboo-diffuser",
    safety: {
      zhHK: "請勿食用。請避免陽光直射，並置於兒童及寵物接觸不到的位置。",
      en: "Not for consumption. Keep out of direct sunlight and away from children and pets.",
    },
    usage: {
      zhHK: "將竹枝插入瓶中，每 1–2 週翻轉一次。竹枝燒焦時可修剪末端。",
      en: "Insert the bamboo into the bottle and flip weekly. Trim the tips if they char.",
    },
    size: "100ml + 竹枝",
    price: "HK$ 348",
    tags: ["pregnancy-child-friendly", "pet-friendly"],
  },
  {
    category: "wish-charm",
    safety: {
      zhHK: "請勿讓小童或寵物咬碎。晶石與填充物不可食用。",
      en: "Keep away from small children and pets. Crystals and filling are not edible.",
    },
    usage: {
      zhHK: "放在床頭、書桌或玄關的小碟上。香氣約可維持 4–6 週。",
      en: "Rest in a small dish by the bedside, desk, or entryway. Scent lasts 4–6 weeks.",
    },
    size: "60ml",
    price: "HK$ 268",
    tags: ["allergen-declared"],
  },
  {
    category: "herbal-sachet",
    safety: {
      zhHK: "請勿食用。請置於兒童及寵物接觸不到的位置。",
      en: "Not for consumption. Keep out of reach of children and pets.",
    },
    usage: {
      zhHK: "放於衣櫃、書包或枕邊。氣味約可維持 3–6 個月。",
      en: "Place in a wardrobe, tote, or beside the pillow. Scent lasts 3–6 months.",
    },
    size: "每個約 15g",
    price: "HK$ 98",
    tags: ["pregnancy-child-friendly", "pet-friendly"],
  },
];
