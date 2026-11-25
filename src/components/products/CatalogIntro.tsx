"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { SectionHeading } from "@/components/ui/Section";

export function CatalogIntro() {
  const { t } = useLocale();

  return (
    <SectionHeading
      eyebrow={t(copy.catalog.eyebrow)}
      title={t(copy.catalog.title)}
      intro={t(copy.catalog.intro)}
    />
  );
}
