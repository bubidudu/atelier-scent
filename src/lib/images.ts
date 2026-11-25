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
  "candle-citrus-pop": {
    alt: { zhHK: "柑橘氣泡產品示意圖", en: "Citrus Pop product placeholder" },
    ratio: "4/5",
  },
  "candle-berry-fig": {
    alt: { zhHK: "野莓無花果產品示意圖", en: "Berry Fig product placeholder" },
    ratio: "4/5",
  },
  "candle-jasmine-night": {
    alt: { zhHK: "茉莉夜產品示意圖", en: "Jasmine Night product placeholder" },
    ratio: "4/5",
  },
  "candle-rose-peony": {
    alt: { zhHK: "玫瑰芍藥產品示意圖", en: "Rose & Peony product placeholder" },
    ratio: "4/5",
  },
  "candle-osmanthus-wax": {
    alt: { zhHK: "桂花香薰蠟片產品示意圖", en: "Osmanthus Sachet product placeholder" },
    ratio: "4/5",
  },
  "reed-hinoki": {
    alt: { zhHK: "檜木藤枝產品示意圖", en: "Hinoki Reeds product placeholder" },
    ratio: "4/5",
  },
  "reed-citrus": {
    alt: { zhHK: "柑橘藤枝產品示意圖", en: "Citrus Reeds product placeholder" },
    ratio: "4/5",
  },
  "reed-cedar": {
    alt: { zhHK: "雪松藤枝產品示意圖", en: "Cedar Reeds product placeholder" },
    ratio: "4/5",
  },
  "stone-linen": {
    alt: { zhHK: "亞麻石膏產品示意圖", en: "Linen Plaster product placeholder" },
    ratio: "4/5",
  },
  "wood-hinoki": {
    alt: { zhHK: "檜木香片產品示意圖", en: "Hinoki Wood product placeholder" },
    ratio: "4/5",
  },
  "wood-osmanthus": {
    alt: { zhHK: "桂花香片產品示意圖", en: "Osmanthus Wood product placeholder" },
    ratio: "4/5",
  },
  "bamboo-linen": {
    alt: { zhHK: "亞麻竹枝產品示意圖", en: "Linen Bamboo product placeholder" },
    ratio: "4/5",
  },
  "bamboo-cedar": {
    alt: { zhHK: "雪松竹枝產品示意圖", en: "Cedar Bamboo product placeholder" },
    ratio: "4/5",
  },
  "car-tea": {
    alt: { zhHK: "白茶車香產品示意圖", en: "White Tea Car product placeholder" },
    ratio: "4/5",
  },
  "car-cedar": {
    alt: { zhHK: "雪松車香產品示意圖", en: "Cedar Car product placeholder" },
    ratio: "4/5",
  },
  "clean-citrus": {
    alt: { zhHK: "柑橘清潔噴霧產品示意圖", en: "Citrus Cleaner product placeholder" },
    ratio: "4/5",
  },
  "clean-sage": {
    alt: { zhHK: "迷迭香清潔噴霧產品示意圖", en: "Rosemary Cleaner product placeholder" },
    ratio: "4/5",
  },
  "mould-tea": {
    alt: { zhHK: "茶樹防霉噴霧產品示意圖", en: "Tea Tree Anti-Mould product placeholder" },
    ratio: "4/5",
  },
  "mould-citrus": {
    alt: { zhHK: "柑橘防霉噴霧產品示意圖", en: "Citrus Anti-Mould product placeholder" },
    ratio: "4/5",
  },
  "deodorise-cedar": {
    alt: { zhHK: "雪松防臭噴霧產品示意圖", en: "Cedar Deodoriser product placeholder" },
    ratio: "4/5",
  },
  "wish-new-home": {
    alt: { zhHK: "新居願望產品示意圖", en: "New Home Wish product placeholder" },
    ratio: "4/5",
  },
  "wish-calm-water": {
    alt: { zhHK: "靜心泉水產品示意圖", en: "Calm Water product placeholder" },
    ratio: "4/5",
  },
  "herbal-lavender": {
    alt: { zhHK: "薰衣草香囊產品示意圖", en: "Lavender Sachet product placeholder" },
    ratio: "4/5",
  },
  "herbal-spice": {
    alt: { zhHK: "香料草囊產品示意圖", en: "Spice Sachet product placeholder" },
    ratio: "4/5",
  },
  "incense-hinoki": {
    alt: { zhHK: "檜木線香產品示意圖", en: "Hinoki Incense product placeholder" },
    ratio: "4/5",
  },
  "incense-osmanthus": {
    alt: { zhHK: "桂花塔香產品示意圖", en: "Osmanthus Cones product placeholder" },
    ratio: "4/5",
  },
  "incense-moss": {
    alt: { zhHK: "雨林盤香產品示意圖", en: "Rainforest Coil product placeholder" },
    ratio: "4/5",
  },
  "incense-bamboo": {
    alt: { zhHK: "竹韻香產品示意圖", en: "Bamboo Note product placeholder" },
    ratio: "4/5",
  },
  "kit-first-blend": {
    alt: { zhHK: "第一次調香套裝產品示意圖", en: "First Blend Kit product placeholder" },
    ratio: "3/2",
  },
  "kit-evening": {
    alt: { zhHK: "夜晚調香套裝產品示意圖", en: "Evening Kit product placeholder" },
    ratio: "3/2",
  },
  "gift-trio": {
    alt: { zhHK: "三款小禮盒產品示意圖", en: "Trio Gift Box product placeholder" },
    ratio: "3/2",
  },
  "gift-travel": {
    alt: { zhHK: "旅行小禮盒產品示意圖", en: "Travel Gift Box product placeholder" },
    ratio: "3/2",
  },
  "pack-box": {
    alt: { zhHK: "回收紙盒產品示意圖", en: "Recycled Box product placeholder" },
    ratio: "3/2",
  },
  "pack-bag": {
    alt: { zhHK: "棉布回收袋產品示意圖", en: "Cotton Return Bag product placeholder" },
    ratio: "3/2",
  },
  "balm-honey-bergamot": {
    alt: { zhHK: "蜂蜜佛手柑護唇膏產品示意圖", en: "Honey Bergamot Balm product placeholder" },
    ratio: "1/1",
  },
  "balm-tea-mint": {
    alt: { zhHK: "茶樹薄荷護唇膏產品示意圖", en: "Tea & Mint Balm product placeholder" },
    ratio: "1/1",
  },
  "repellent-citronella": {
    alt: { zhHK: "香茅驅蚊噴霧產品示意圖", en: "Citronella Repellent product placeholder" },
    ratio: "4/5",
  },
  "repellent-citrus": {
    alt: { zhHK: "柑橘驅蟲噴霧產品示意圖", en: "Citrus Repellent product placeholder" },
    ratio: "4/5",
  },
  "oil-body-calm": {
    alt: { zhHK: "舒緩身體油產品示意圖", en: "Calm Body Oil product placeholder" },
    ratio: "4/5",
  },
  "oil-leg-warmth": {
    alt: { zhHK: "腿部暖身油產品示意圖", en: "Warm Leg Oil product placeholder" },
    ratio: "4/5",
  },
  "mist-mint-coast": {
    alt: { zhHK: "薄荷海岸產品示意圖", en: "Mint Coast product placeholder" },
    ratio: "4/5",
  },
  "perfume-white-tea": {
    alt: { zhHK: "白茶淡香水產品示意圖", en: "White Tea EDP product placeholder" },
    ratio: "4/5",
  },
  "perfume-amber-rain": {
    alt: { zhHK: "琥珀雨夜產品示意圖", en: "Amber Rain product placeholder" },
    ratio: "4/5",
  },
  "candle-hinoki-rain": {
    alt: { zhHK: "檜木雨後產品示意圖", en: "Hinoki After Rain product placeholder" },
    ratio: "4/5",
  },
  "candle-white-tea": {
    alt: { zhHK: "白茶日光產品示意圖", en: "White Tea Daylight product placeholder" },
    ratio: "4/5",
  },
  "sachet-fig-cotton": {
    alt: { zhHK: "無花果棉語產品示意圖", en: "Fig & Cotton product placeholder" },
    ratio: "1/1",
  },
  "rollon-grounding": {
    alt: { zhHK: "沉靜滾珠產品示意圖", en: "Grounding Roll-On product placeholder" },
    ratio: "4/5",
  },
  "rollon-sleep-lavender": {
    alt: { zhHK: "晚安滾珠產品示意圖", en: "Goodnight Roll-On product placeholder" },
    ratio: "4/5",
  },
  "spray-linen-room": {
    alt: { zhHK: "亞麻房間產品示意圖", en: "Linen Room product placeholder" },
    ratio: "4/5",
  },
  "massage-shoulder": {
    alt: { zhHK: "肩頸放鬆油產品示意圖", en: "Shoulder Release Oil product placeholder" },
    ratio: "4/5",
  },
  "solid-perfume-winter": {
    alt: { zhHK: "冬季固體香水：雪松夜產品示意圖", en: "Solid Perfume — Cedar Night product placeholder" },
    ratio: "4/5",
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
