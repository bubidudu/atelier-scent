/**
 * Core data schemas for Atelier Scent.
 * All user-facing copy is bilingual: Traditional Chinese (zh-HK) is the default.
 */

/** A bilingual string. zhHK is the primary / default locale. */
export interface Localized<T = string> {
  zhHK: T;
  en: T;
}

export type Locale = "zh-HK" | "en";

export const LOCALES: readonly Locale[] = ["zh-HK", "en"] as const;

export const DEFAULT_LOCALE: Locale = "zh-HK";

/**
 * Product category ids. Extensible: add a new id and the UI updates automatically.
 */
export type ProductCategoryId =
  | "candle"
  | "wax-sachet"
  | "roll-on"
  | "room-spray"
  | "massage-oil"
  | "solid-perfume"
  | "perfume"
  | "body-mist"
  | "lip-balm"
  | "insect-repellent"
  | "reed-diffuser"
  | "stone-diffuser"
  | "wood-diffuser"
  | "bamboo-diffuser"
  | "wish-charm"
  | "herbal-sachet"
  | "incense"
  | "car-fragrance"
  | "household-cleaner"
  | "anti-mould"
  | "deodoriser"
  | "diy-kit"
  | "mini-gift-set"
  | "packaging";

/**
 * Broad families used to group the category filter in the catalogue.
 */
export type CategoryGroupId = "personal" | "home" | "ritual";

/** Suitability / safety tags. Used both as product badges and as catalog filters. */
export type SafetyTagId =
  | "pregnancy-child-friendly"
  | "pet-friendly"
  | "sensitive-skin"
  | "allergen-declared"
  | "pregnancy-avoid"
  | "pet-caution";

export interface ProductCategory {
  id: ProductCategoryId;
  label: Localized;
  /** Short one-line positioning statement shown under the category title. */
  tagline: Localized;
  /** Which filter group this category belongs to. */
  group: CategoryGroupId;
}

export interface CategoryGroup {
  id: CategoryGroupId;
  label: Localized;
}

export interface SafetyTag {
  id: SafetyTagId;
  label: Localized;
  /** One sentence explaining what the tag means / guarantees. */
  description: Localized;
}

export interface ProductNote {
  /** e.g. "Top", "Heart", "Base" */
  family: Localized;
  /** The note itself, e.g. "Bergamot" */
  note: Localized;
}

export interface Product {
  id: string;
  name: Localized;
  category: ProductCategoryId;
  /** Scent story / editorial description. */
  story: Localized;
  /** Scent pyramid notes. */
  notes: ProductNote[];
  /** Key ingredients with their functional role. */
  ingredients: Array<{ name: Localized; role: Localized }>;
  /** Safety guidance specific to this product. */
  safetyNotes: Localized;
  /** How to use. */
  usage: Localized;
  /** Suitability tags. */
  tags: SafetyTagId[];
  /** e.g. "50ml" — a plain size string. */
  size: string;
  /** Price shown as indicative; pre-order only, no live checkout. */
  price: string;
  /** Availability status for editorial display. */
  status: "prototype" | "pre-order" | "in-stock";
  /** Key into the centralized image config. */
  imageKey: string;
  /** Optional: accent tone used for the placeholder block. */
  tone?: "sand" | "clay" | "sage" | "mist";
}

/** Empty-vessel return program entry. */
export interface VesselReturnPoint {
  id: string;
  title: Localized;
  detail: Localized;
}

/** Exhibition / market / workshop roadmap entry. */
export interface RoadmapEvent {
  id: string;
  date: string;
  title: Localized;
  venue: Localized;
  type: "market" | "pop-up" | "workshop";
  status: "upcoming" | "past";
}

/** Social content pillar. */
export interface ContentPillar {
  id: string;
  label: Localized;
  detail: Localized;
}

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
}
