"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";

export function AboutIntro() {
  const { t, locale } = useLocale();

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow={t(copy.about.eyebrow)} title={t(copy.about.title)} />
          <div className="mt-12 space-y-8">
            {copy.about.philosophy.map((item, index) => (
              <div key={item.title.en} className="border-t border-line pt-6">
                <span className="text-[0.625rem] uppercase tracking-[0.18em] text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display mt-3.5 text-[1.0625rem] uppercase tracking-[0.04em]">
                  {t(item.title)}
                </h2>
                <p className="mt-3 text-[0.8125rem] leading-[1.9] text-ink-soft">
                  {t(item.body)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Media
            imageKey="atelier-portrait"
            locale={locale}
            ratio="3/2"
            className="w-full border border-line"
          />
          <div className="mt-4 border border-line bg-paper-deep/50 p-5">
            <p className="eyebrow">{t(copy.about.philosophyTitle)}</p>
            <p className="mt-2.5 text-[0.75rem] leading-[1.85] text-ink-soft">
              {t(copy.about.philosophy[0].body)}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
