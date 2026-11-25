import type { SafetyTag } from "./types";

export const safetyTags: SafetyTag[] = [
  {
    id: "pregnancy-child-friendly",
    label: { zhHK: "孕婦 / 小童適用", en: "Pregnancy & Child-Friendly" },
    description: {
      zhHK: "配方濃度與成分均按孕婦及小童較嚴謹的標準檢視，並於瓶身清楚標示使用方式。",
      en: "Concentrations and ingredients are reviewed against stricter pregnancy and child guidelines, with clear usage directions on every bottle.",
    },
  },
  {
    id: "pet-friendly",
    label: { zhHK: "寵物友善", en: "Pet-Friendly" },
    description: {
      zhHK: "僅選用對貓狗較安全的精油，並建議於通風處使用、避免直接噴向寵物。",
      en: "Only oils considered safer for cats and dogs, used in ventilated spaces and never sprayed directly at pets.",
    },
  },
  {
    id: "sensitive-skin",
    label: { zhHK: "敏膚配方", en: "Sensitive-Skin Friendly" },
    description: {
      zhHK: "低敏配方，先以小範圍測試，並附上稀釋與patch test 指引。",
      en: "Gentler formulations with patch-test and dilution guidance included.",
    },
  },
  {
    id: "allergen-declared",
    label: { zhHK: "致敏原標示", en: "Allergens Declared" },
    description: {
      zhHK: "完整列出配方中的天然致敏原（如柑橘、檸檬醛），讓你自行判斷。",
      en: "Every natural allergen (citrus, citral, and more) is listed in full so you can decide for yourself.",
    },
  },
  {
    id: "pregnancy-avoid",
    label: { zhHK: "孕期請避免", en: "Avoid During Pregnancy" },
    description: {
      zhHK: "含有孕期建議避免的成分（如薄荷、迷迭香、艾草），瓶身會標示具體原因。",
      en: "Contains ingredients commonly advised against in pregnancy (mint, rosemary, mugwort). The bottle states the specific reason.",
    },
  },
  {
    id: "pet-caution",
    label: { zhHK: "寵物需留意", en: "Pet Caution" },
    description: {
      zhHK: "貓狗代謝精油的方式與人不同，使用前請先閱讀瓶身指引。",
      en: "Cats and dogs metabolise essential oils differently from humans — read the bottle guidance first.",
    },
  },
];

export const safetyTagMap = Object.fromEntries(
  safetyTags.map((tag) => [tag.id, tag]),
) as Record<SafetyTag["id"], SafetyTag>;
