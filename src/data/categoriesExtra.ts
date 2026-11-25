import type { ProductCategory } from "./types";

/**
 * Additional product forms. Kept compact — one entry per form — and merged
 * with the primary categories at runtime.
 */
export const extraCategories: ProductCategory[] = [
  {
    id: "insect-repellent",
    group: "personal",
    label: { zhHK: "防蚊 / 驅蟲噴霧", en: "Insect Repellent" },
    tagline: { zhHK: "香茅與檸檬草驅蚊，成分透明可查。", en: "Citronella and lemongrass, fully disclosed." },
  },
  {
    id: "reed-diffuser",
    group: "home",
    label: { zhHK: "擴香液", en: "Reed Diffuser" },
    tagline: { zhHK: "藤枝慢慢把香氣送進房間，不需點火。", en: "Reeds carry the scent into the room, no flame needed." },
  },
  {
    id: "stone-diffuser",
    group: "home",
    label: { zhHK: "擴香石 / 香氛石膏", en: "Stone & Plaster Diffuser" },
    tagline: { zhHK: "石膏把香氣吸住，慢慢釋放到房間角落。", en: "Plaster holds the scent and releases it slowly." },
  },
  {
    id: "wood-diffuser",
    group: "home",
    label: { zhHK: "擴香木", en: "Wood Diffuser" },
    tagline: { zhHK: "一片香木，掛在玄關或衣帽間。", en: "A scented wood slice for the entryway or wardrobe." },
  },
  {
    id: "bamboo-diffuser",
    group: "home",
    label: { zhHK: "擴香竹枝", en: "Bamboo Reed Diffuser" },
    tagline: { zhHK: "竹枝細節，帶來更輕盈的香氣層次。", en: "Bamboo reeds bring a lighter layer of scent." },
  },
  {
    id: "wish-charm",
    group: "ritual",
    label: { zhHK: "許願瓶 / 石 / 水晶", en: "Wishes & Crystals" },
    tagline: { zhHK: "為某個願望而調的一小瓶香氣。", en: "A small bottle blended for a single wish." },
  },
  {
    id: "herbal-sachet",
    group: "ritual",
    label: { zhHK: "草本香囊", en: "Herbal Sachet" },
    tagline: { zhHK: "乾燥草本與香料，時間越久越好。", en: "Dried herbs and spices that improve with age." },
  },
  {
    id: "incense",
    group: "ritual",
    label: { zhHK: "線香 / 塔香 / 盤香 / 竹香", en: "Incense Sticks, Cones & Coils" },
    tagline: { zhHK: "一支香的時間，留給自己。", en: "One stick of time, kept for yourself." },
  },
  {
    id: "car-fragrance",
    group: "personal",
    label: { zhHK: "車用香氛", en: "Car Fragrance" },
    tagline: { zhHK: "為通勤調的香氣，不搶過冷氣。", en: "Blended for the commute — never competing with the A/C." },
  },
  {
    id: "household-cleaner",
    group: "home",
    label: { zhHK: "多用途清潔噴霧", en: "Multi-Purpose Cleaner" },
    tagline: { zhHK: "一噴擦拭，柑橘清爽。", en: "One spray, a clean citrus finish." },
  },
  {
    id: "anti-mould",
    group: "home",
    label: { zhHK: "防霉噴霧", en: "Anti-Mould Spray" },
    tagline: { zhHK: "針對浴室與角落的黴味。", en: "Targets damp odours in bathrooms and corners." },
  },
  {
    id: "deodoriser",
    group: "home",
    label: { zhHK: "防臭噴霧", en: "Deodorising Spray" },
    tagline: { zhHK: "針對運動鞋、衣櫃與垃圾。", en: "For trainers, wardrobes, and bins." },
  },
  {
    id: "diy-kit",
    group: "ritual",
    label: { zhHK: "DIY 調香體驗套裝", en: "DIY Blending Kit" },
    tagline: { zhHK: "自己調出第一支屬於你的香。", en: "Blend your very first scent." },
  },
  {
    id: "mini-gift-set",
    group: "ritual",
    label: { zhHK: "迷你禮盒", en: "Mini Gift Set" },
    tagline: { zhHK: "三款小份，桐木盒與風呂敷包好。", en: "Three small formats, wrapped in a paulownia box and furoshiki." },
  },
  {
    id: "packaging",
    group: "ritual",
    label: { zhHK: "和風包裝 / 桐木盒", en: "Japanese Wrapping & Boxes" },
    tagline: { zhHK: "桐木盒、越前和紙與風呂敷，讓包裹本身也成為一件日用之物。", en: "Paulownia boxes, Echizen washi, and furoshiki — packaging made to be kept." },
  },
];
