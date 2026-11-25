import type { CategoryGroup } from "./types";

/**
 * Filter groups for the catalogue. Categories are grouped so the filter list
 * stays readable as the range grows.
 */
export const categoryGroups: CategoryGroup[] = [
  { id: "personal", label: { zhHK: "個人護理", en: "Personal Care" } },
  { id: "home", label: { zhHK: "居家空間", en: "Home & Space" } },
  { id: "ritual", label: { zhHK: "儀式與體驗", en: "Ritual & Experience" } },
];
