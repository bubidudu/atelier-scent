import type { CategoryDefaults } from "./categoryDefaults";

export const moreCategoryDefaults: CategoryDefaults[] = [
  {
    category: "incense",
    safety: {
      zhHK: "使用時請保持通風。請勿讓小童或寵物接觸香灰與未熄的香頭。",
      en: "Keep the room ventilated while burning. Keep children and pets away from ash and unlit ends.",
    },
    usage: {
      zhHK: "點燃後待香頭出現紅點，置於香座上。一次一支，離開前請確認已熄滅。",
      en: "Light until the tip glows, then rest on a holder. Burn one at a time and confirm it is out before leaving.",
    },
    size: "每盒 20 支 · 約 30 分鐘",
    price: "HK$ 168",
    tags: ["allergen-declared"],
  },
  {
    category: "car-fragrance",
    safety: {
      zhHK: "請勿在行車中操作。避免噴向眼睛。請置於兒童及寵物接觸不到的位置。",
      en: "Do not operate while driving. Avoid the eye area. Keep out of reach of children and pets.",
    },
    usage: {
      zhHK: "置於杯架或吊掛於後照鏡。香氣約可維持 6–8 週。",
      en: "Place in a cup holder or hang from the mirror. Scent lasts 6–8 weeks.",
    },
    size: "30ml",
    price: "HK$ 218",
    tags: ["allergen-declared"],
  },
  {
    category: "household-cleaner",
    safety: {
      zhHK: "請勿與含氯漂白劑或酸性清潔劑混合使用。使用後請洗手。",
      en: "Do not mix with chlorine bleach or acidic cleaners. Wash hands after use.",
    },
    usage: {
      zhHK: "噴於抹布或直接噴於表面，靜置 1 分鐘後擦淨。",
      en: "Spray onto a cloth or the surface, leave for 1 minute, then wipe.",
    },
    size: "500ml",
    price: "HK$ 168",
    tags: ["pet-friendly"],
  },
  {
    category: "anti-mould",
    safety: {
      zhHK: "請勿與含氯漂白劑或酸性清潔劑混合使用。避免接觸眼周。使用後請洗手。",
      en: "Do not mix with chlorine bleach or acidic cleaners. Avoid the eye area. Wash hands after use.",
    },
    usage: {
      zhHK: "噴於潮濕角落與縫隙，靜置 10 分鐘後用清水擦淨。",
      en: "Apply to damp corners and crevices, leave for 10 minutes, then wipe with clean water.",
    },
    size: "500ml",
    price: "HK$ 198",
    tags: ["pet-friendly"],
  },
  {
    category: "deodoriser",
    safety: {
      zhHK: "請勿與含氯漂白劑或酸性清潔劑混合使用。避免接觸眼周。使用後請洗手。",
      en: "Do not mix with chlorine bleach or acidic cleaners. Avoid the eye area. Wash hands after use.",
    },
    usage: {
      zhHK: "噴於運動鞋內、衣櫃或垃圾箱，靜置數分鐘後自然風乾。",
      en: "Apply inside trainers, wardrobes, or bins and let air dry naturally.",
    },
    size: "300ml",
    price: "HK$ 178",
    tags: ["pet-friendly"],
  },
  {
    category: "diy-kit",
    safety: {
      zhHK: "套裝內精油為高濃度原液，請勿直接接觸眼睛或黏膜。使用後請洗手。",
      en: "Oils in the kit are neat and concentrated. Keep away from eyes and mucous membranes. Wash hands after use.",
    },
    usage: {
      zhHK: "先選一種基底，再逐滴滴入香精，最後以酒精稀釋。每瓶可調 10–15ml。",
      en: "Choose a base, add fragrance drop by drop, then dilute with alcohol. Each vial yields 10–15ml.",
    },
    size: "12 種原料 · 5 個空瓶",
    price: "HK$ 588",
    tags: ["allergen-declared"],
  },
  {
    category: "mini-gift-set",
    safety: {
      zhHK: "套裝內各產品的使用方式與安全提示以個別包裝標示為準。",
      en: "Follow the usage and safety directions printed on each individual product.",
    },
    usage: {
      zhHK: "禮盒可直接贈送。每件產品均可單獨回收到工作室。",
      en: "The set is ready to gift. Every piece can be returned to the studio on its own.",
    },
    size: "三件裝",
    price: "HK$ 468",
    tags: ["allergen-declared"],
  },
  {
    category: "packaging",
    safety: {
      zhHK: "包裝不含任何香氛成分。請以紙類回收，棉布袋可重複使用。",
      en: "Packaging contains no fragrance. Recycle as paper; the cotton bag is reusable.",
    },
    usage: {
      zhHK: "空盒與空袋可於任何市集攤位免費回收。",
      en: "Empty boxes and bags can be returned free at any market booth.",
    },
    size: "紙盒 / 棉布袋",
    price: "免費",
    tags: ["pet-friendly"],
  },
];
