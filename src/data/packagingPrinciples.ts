import type { Localized } from "./types";

export interface PackagingPrinciple {
  id: string;
  label: Localized;
  detail: Localized;
}

export const packagingPrinciples: PackagingPrinciple[] = [
  {
    id: "paulownia",
    label: { zhHK: "桐木盒", en: "Paulownia Boxes" },
    detail: {
      zhHK: "桐木輕、不易變形、開盒時帶著淡淡的木香。每個禮盒都以桐木板材製成，可回收，也可留作收納。",
      en: "Paulownia is light, resists warping, and carries a faint woody scent as the box opens. Every gift box is made from paulownia board — recyclable, or kept for storage.",
    },
  },
  {
    id: "washi",
    label: { zhHK: "越前和紙", en: "Echizen Washi" },
    detail: {
      zhHK: "標籤與杯套以福井越前和紙印製，紙纖維可見、手感溫厚，吸墨不均反而成了它的樣子。",
      en: "Labels and sleeves are printed on Echizen washi from Fukui. The fibres stay visible, the hand is warm, and the slight ink spread becomes part of the look.",
    },
  },
  {
    id: "furoshiki",
    label: { zhHK: "風呂敷", en: "Furoshiki" },
    detail: {
      zhHK: "一方和棉布，包得住瓶罐、也包得住禮盒。洗過之後可以再包一次，是日式環保禮物的原型。",
      en: "One square of washed cotton wraps a bottle or a whole gift box. Washed, it can wrap again — the original model for a reusable Japanese gift.",
    },
  },
  {
    id: "mizuhiki",
    label: { zhHK: "水引", en: "Mizuhiki" },
    detail: {
      zhHK: "以手工搓捻的水引繩繫結，不黏、不塑、會散——所以每個結都要打得剛好。",
      en: "Ties are closed with hand-twisted mizuhiki cord: no adhesive, no plastic, and it can be undone, so every knot has to be tied just right.",
    },
  },
  {
    id: "vessels",
    label: { zhHK: "竹與陶器", en: "Bamboo & Ceramics" },
    detail: {
      zhHK: "擴香瓶用陶器，蠟燭用玻璃，竹枝與木片直接作為香氣的載體——不做多餘的裝飾。",
      en: "Diffuser bottles are ceramic, candles sit in glass, and bamboo and wood slices carry the scent on their own. Nothing extra is added for decoration.",
    },
  },
];
