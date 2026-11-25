"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { vesselReturnPoints } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { useInquiry } from "@/components/inquiry/InquiryProvider";

export function SustainabilitySection() {
  const { t, locale } = useLocale();
  const { openInquiry } = useInquiry();

  return (
    <Section id="sustainability">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow={t(copy.sustainability.eyebrow)}
            title={t(copy.sustainability.title)}
            intro={t(copy.sustainability.intro)}
          />

          <div className="mt-12 space-y-7">
            {vesselReturnPoints.map((point, index) => (
              <div key={point.id} className="flex gap-5 border-t border-line pt-5">
                <span className="mt-0.5 text-[0.625rem] uppercase tracking-[0.18em] text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.14em]">
                    {t(point.title)}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] leading-[1.9] text-ink-soft">
                    {t(point.detail)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button onClick={() => openInquiry()}>{t(copy.sustainability.cta)}</Button>
            <p className="text-[0.75rem] text-ink-faint">
              {t(copy.sustainability.discountNote)}
            </p>
          </div>
        </div>

        <div>
          <Media
            imageKey="sustainability-vessels"
            locale={locale}
            ratio="3/2"
            className="w-full border border-line"
          />
          <div className="mt-4 border border-line bg-paper-deep/50 p-5">
            <p className="eyebrow">Zero Waste</p>
            <p className="mt-2.5 text-[0.75rem] leading-[1.85] text-ink-soft">
              {t(copy.sustainability.intro)}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
