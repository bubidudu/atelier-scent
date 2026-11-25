"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { packagingPrinciples } from "@/data/packagingPrinciples";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";

export function PackagingSection() {
  const { t, locale } = useLocale();

  return (
    <Section id="packaging">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow={t(copy.packaging.eyebrow)}
            title={t(copy.packaging.title)}
            intro={t(copy.packaging.intro)}
          />

          <div className="mt-12 space-y-7">
            {packagingPrinciples.map((principle, index) => (
              <div key={principle.id} className="flex gap-5 border-t border-line pt-5">
                <span className="mt-0.5 text-[0.625rem] uppercase tracking-[0.18em] text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.14em]">
                    {t(principle.label)}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] leading-[1.9] text-ink-soft">
                    {t(principle.detail)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Media
            imageKey="packaging-craft"
            locale={locale}
            ratio="3/2"
            className="w-full border border-line"
          />
          <div className="mt-4 border border-line bg-paper-deep/50 p-5">
            <p className="eyebrow">{t(copy.packaging.note)}</p>
            <p className="mt-2.5 text-[0.75rem] leading-[1.85] text-ink-soft">
              {t(copy.packaging.intro)}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
