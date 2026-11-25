import type { Localized } from "@/data/types";

export interface ImageConfigEntry {
  /** Descriptive alt text used until real photography is dropped in. */
  alt: Localized;
  /** Optional source path; when empty the placeholder block is rendered. */
  src?: string;
  /** Aspect ratio token for the placeholder. */
  ratio: "4/5" | "1/1" | "3/2" | "16/9";
}

/**
 * Centralised image configuration. Add real photography by setting `src`
 * to a file in /public and the placeholder is replaced automatically.
 */
export const images: Record<string, ImageConfigEntry> = {
  "candle-hinoki-rain": {
    alt: {
      zhHK: "檜木雨後香氛蠟燭，玻璃杯中的米白大豆蠟，旁放著檜木枝與佛手柑",
      en: "Hinoki After Rain scented candle in a clear glass jar, ivory soy wax beside a hinoki sprig and bergamot",
    },
    ratio: "4/5",
  },
  "candle-white-tea": {
    alt: {
      zhHK: "白茶日光香氛蠟燭，米白蠟面微微凹陷，旁邊是一杯白茶與亞麻布",
      en: "White Tea Daylight candle with softly pooled ivory wax, a cup of white tea and folded linen beside it",
    },
    ratio: "4/5",
  },
  "sachet-fig-cotton": {
    alt: {
      zhHK: "無花果棉語香薰蠟片，圓形米色蠟片以麻繩繫著，掛在衣櫃掛鈎上",
      en: "Fig & Cotton wax sachet, a round cream disc tied with twine, hanging from a wardrobe hook",
    },
    ratio: "1/1",
  },
  "rollon-grounding": {
    alt: {
      zhHK: "沉靜滾珠精油，深琥珀色小玻璃瓶與黃銅滾珠蓋，放在石板上",
      en: "Grounding Roll-On bottle, a small amber glass vial with a brass roller, resting on a stone slab",
    },
    ratio: "4/5",
  },
  "rollon-sleep-lavender": {
    alt: {
      zhHK: "晚安滾珠精油，淡紫色標籤的小瓶，旁放一束乾燥薰衣草",
      en: "Goodnight Roll-On bottle with a pale lavender label, a bunch of dried lavender beside it",
    },
    ratio: "4/5",
  },
  "spray-linen-room": {
    alt: {
      zhHK: "亞麻房間空間噴霧，霧面玻璃噴瓶與疊好的白色亞麻枕頭",
      en: "Linen Room spray in a frosted glass bottle beside neatly folded white linen pillows",
    },
    ratio: "4/5",
  },
  "massage-shoulder": {
    alt: {
      zhHK: "肩頸放鬆油，深色琥珀瓶身與淺色按摩油，倒在手掌中的按摩油滴",
      en: "Shoulder Release Oil in a dark amber bottle, with drops of pale oil shown in an open palm",
    },
    ratio: "4/5",
  },
  "solid-perfume-winter": {
    alt: {
      zhHK: "雪松夜固體香水膏，銀色圓形小盒打開，露出乳木果脂膏體與木質小片",
      en: "Cedar Night solid perfume balm in an open silver tin, showing shea balm and a small cedar shaving",
    },
    ratio: "1/1",
  },
  "hero-atelier": {
    alt: {
      zhHK: "Atelier Scent 手作香氛工作桌：玻璃瓶、香精油、未點燃的蠟燭與紙本標籤",
      en: "Atelier Scent workbench with glass bottles, essential oils, unlit candles and paper labels",
    },
    ratio: "3/2",
  },
  "hero-detail": {
    alt: {
      zhHK: "手工標籤特寫，手寫字體的配方標示與成分列表",
      en: "Close-up of a hand-finished label showing the formula name and ingredient list",
    },
    ratio: "1/1",
  },
  "atelier-portrait": {
    alt: {
      zhHK: "調香師在工作室調配精油，桌上排列著不同色澤的琥珀色玻璃瓶",
      en: "The perfumer blending oils at the studio bench, rows of amber bottles in different tones",
    },
    ratio: "3/2",
  },
  "sustainability-vessels": {
    alt: {
      zhHK: "回收待處理的空玻璃瓶、蠟燭杯與香薰機，整齊排列在紙箱中",
      en: "Returned empty glass bottles, candle jars and diffusers neatly arranged in a cardboard box",
    },
    ratio: "3/2",
  },
  "roadmap-market": {
    alt: {
      zhHK: "市集攤位：一張木桌上擺放著蠟燭、滾珠與攤位招牌",
      en: "Market booth: candles, roll-ons and a signage card arranged on a wooden table",
    },
    ratio: "3/2",
  },
  "workshop-table": {
    alt: {
      zhHK: "工作坊桌面，參與者面前放著調香所需的精油瓶與空白樣品瓶",
      en: "Workshop table with essential oil bottles and blank sample vials set out for participants",
    },
    ratio: "3/2",
  },
};

export const fallbackImage: ImageConfigEntry = {
  alt: {
    zhHK: "Atelier Scent 產品影像，敬請期待",
    en: "Atelier Scent product photograph, coming soon",
  },
  ratio: "4/5",
};

export function getImage(key: string): ImageConfigEntry {
  return images[key] ?? fallbackImage;
}
