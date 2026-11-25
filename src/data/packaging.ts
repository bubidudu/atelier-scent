import type { Localized } from "./types";

export const box: Localized = {
  zhHK: "桐木禮盒",
  en: "Paulownia box",
};

export const washi: Localized = {
  zhHK: "越前和紙",
  en: "Echizen washi",
};

export const furoshiki: Localized = {
  zhHK: "風呂敷",
  en: "Furoshiki",
};

export const mizuhiki: Localized = {
  zhHK: "水引",
  en: "Mizuhiki cord",
};

export const ceramic: Localized = {
  zhHK: "陶器",
  en: "Ceramic",
};

export const glass: Localized = {
  zhHK: "玻璃瓶",
  en: "Glass bottle",
};

export const bamboo: Localized = {
  zhHK: "竹",
  en: "Bamboo",
};

export const kin: Localized = {
  zhHK: "金箔",
  en: "Gold leaf",
};

export const cloth: Localized = {
  zhHK: "和棉布",
  en: "Washed cotton cloth",
};

export const wood: Localized = {
  zhHK: "桐木",
  en: "Paulownia wood",
};

export const shoji: Localized = {
  zhHK: "障子紙",
  en: "Shoji paper",
};

export const lacquer: Localized = {
  zhHK: "漆器",
  en: "Lacquerware",
};

export const kraft: Localized = {
  zhHK: "和紙盒",
  en: "Washi box",
};

/** Material vocabulary shared by product copy and the packaging section. */
export const packagingMaterials = {
  washi: { zhHK: "越前和紙", en: "Echizen washi" },
  paulownia: { zhHK: "桐木", en: "Paulownia" },
  furoshiki: { zhHK: "風呂敷", en: "Furoshiki" },
  mizuhiki: { zhHK: "水引", en: "Mizuhiki" },
  ceramic: { zhHK: "陶器", en: "Ceramic" },
  glass: { zhHK: "玻璃瓶", en: "Glass" },
  bamboo: { zhHK: "竹", en: "Bamboo" },
  kin: { zhHK: "金箔", en: "Gold leaf" },
  cloth: { zhHK: "和棉布", en: "Washed cotton" },
  shoji: { zhHK: "障子紙", en: "Shoji paper" },
  lacquer: { zhHK: "漆器", en: "Lacquer" },
} satisfies Record<string, Localized>;

