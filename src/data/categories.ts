import type { ProductCategory } from "./types";
import { extraCategories } from "./categoriesExtra";

/**
 * The full list of product forms. `extraCategories` continues the range;
 * both arrays are merged so the filter list stays in one place.
 */
export const productCategories: ProductCategory[] = [
  {
    id: "candle",
    group: "home",
    label: { zhHK: "香氛蠟燭", en: "Scented Candles" },
    tagline: {
      zhHK: "大豆蠟慢燃，以分層香調描繪一室的安靜光影。",
      en: "Slow-burning soy wax that paints a room in quiet layers of light.",
    },
  },
  {
    id: "wax-sachet",
    group: "ritual",
    label: { zhHK: "香薰蠟片", en: "Wax Sachets & Tablets" },
    tagline: {
      zhHK: "掛在衣櫃、書包或車內，讓香氣隨身移動。",
      en: "Hang in a wardrobe, a tote, or the car — scent that travels lightly.",
    },
  },
  {
    id: "roll-on",
    group: "personal",
    label: { zhHK: "精油滾珠", en: "Essential Oil Roll-Ons" },
    tagline: {
      zhHK: "貼身小瓶，點在脈搏與手腕，讓香氣只屬於你。",
      en: "A pocket-sized ritual applied at the pulse, so the scent stays yours.",
    },
  },
  {
    id: "room-spray",
    group: "home",
    label: { zhHK: "空間噴霧", en: "Room & Space Sprays" },
    tagline: {
      zhHK: "一按即散，適合剛回家、通風後或整理房間的時刻。",
      en: "One press, a soft bloom — for arriving home, airing out, resetting a room.",
    },
  },
  {
    id: "massage-oil",
    group: "personal",
    label: { zhHK: "按摩油 / 身體油", en: "Massage & Body Oils" },
    tagline: {
      zhHK: "植物基底稀釋精油，用於肩頸與睡前放鬆。",
      en: "Carrier-oil blends for shoulders, tension, and slow evening wind-down.",
    },
  },
  {
    id: "solid-perfume",
    group: "personal",
    label: { zhHK: "固體香水 / 香膏", en: "Solid Perfume & Balm" },
    tagline: {
      zhHK: "節日限定配方，以蠟質膏體封存一抹記憶。",
      en: "Seasonal formulas — a memory sealed into a waxy balm.",
    },
  },
  {
    id: "perfume",
    group: "personal",
    label: { zhHK: "香水", en: "Eau de Parfum" },
    tagline: {
      zhHK: "完整的前中後調結構，留香時間以小時計。",
      en: "A full top-heart-base structure, built to linger for hours.",
    },
  },
  {
    id: "body-mist",
    group: "personal",
    label: { zhHK: "身體噴霧 / 香水噴霧", en: "Body & Fragrance Mist" },
    tagline: {
      zhHK: "輕盈霧狀，可噴於身上或織物，隨身補香。",
      en: "A light veil for skin or fabric — top up your scent on the go.",
    },
  },
  {
    id: "lip-balm",
    group: "personal",
    label: { zhHK: "護唇膏", en: "Lip Balm" },
    tagline: {
      zhHK: "滋潤配方，帶一點淡香適合隨身補擦。",
      en: "A conditioning base with a whisper of scent, easy to carry.",
    },
  },
  ...extraCategories,
];
