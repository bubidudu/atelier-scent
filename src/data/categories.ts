import type { ProductCategory } from "./types";

export const productCategories: ProductCategory[] = [
  {
    id: "candle",
    label: { zhHK: "香氛蠟燭", en: "Scented Candles" },
    tagline: {
      zhHK: "大豆蠟慢燃，以分層香調描繪一室的安靜光影。",
      en: "Slow-burning soy wax that paints a room in quiet layers of light.",
    },
  },
  {
    id: "wax-sachet",
    label: { zhHK: "香薰蠟片", en: "Wax Sachets & Tablets" },
    tagline: {
      zhHK: "掛在衣櫃、書包或車內，讓香氣隨身移動。",
      en: "Hang in a wardrobe, a tote, or the car — scent that travels lightly.",
    },
  },
  {
    id: "roll-on",
    label: { zhHK: "精油滾珠", en: "Essential Oil Roll-Ons" },
    tagline: {
      zhHK: "貼身小瓶，點在脈搏與手腕，讓香氣只屬於你。",
      en: "A pocket-sized ritual applied at the pulse, so the scent stays yours.",
    },
  },
  {
    id: "room-spray",
    label: { zhHK: "空間噴霧", en: "Room & Space Sprays" },
    tagline: {
      zhHK: "一按即散，適合剛回家、通風後或整理房間的時刻。",
      en: "One press, a soft bloom — for arriving home, airing out, resetting a room.",
    },
  },
  {
    id: "massage-oil",
    label: { zhHK: "按摩油", en: "Massage Oils" },
    tagline: {
      zhHK: "植物基底稀釋精油，用於肩頸與睡前放鬆。",
      en: "Carrier-oil blends for shoulders, tension, and slow evening wind-down.",
    },
  },
  {
    id: "solid-perfume",
    label: { zhHK: "固體香水 / 香膏", en: "Solid Perfume & Balm" },
    tagline: {
      zhHK: "節日限定配方，以蠟質膏體封存一抹記憶。",
      en: "Seasonal formulas — a memory sealed into a waxy balm.",
    },
  },
];
