"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { safetyTags } from "@/data/safety";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export function SafetySection() {
  const { t } = useLocale();

  return (
    <Section id="safety" className="border-y border-line bg-paper-deep/40">
      <SectionHeading
        eyebrow={t(copy.safety.eyebrow)}
        title={t(copy.safety.title)}
        intro={t(copy.safety.intro)}
      />

      <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
        {copy.safety.pillars.map((pillar) => (
          <div key={pillar.title.en} className="bg-paper p-7">
            <h3 className="font-display text-xl">{t(pillar.title)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {t(pillar.body)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <p className="eyebrow">{t(copy.safety.badgeTitle)}</p>
        <div className="mt-5 grid gap-8 sm:grid-cols-2">
          {safetyTags.map((tag) => (
            <div key={tag.id} className="border-t border-line pt-5">
              <Badge tone={tag.id === "pet-friendly" ? "sage" : "sand"}>
                {t(tag.label)}
              </Badge>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {t(tag.description)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 max-w-3xl border-l-2 border-clay pl-5 text-xs leading-relaxed text-ink-faint">
        {t(copy.safety.disclaimer)}
      </p>
    </Section>
  );
}
