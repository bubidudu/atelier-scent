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
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={t(copy.sustainability.eyebrow)}
            title={t(copy.sustainability.title)}
            intro={t(copy.sustainability.intro)}
          />

          <div className="mt-10 space-y-6">
            {vesselReturnPoints.map((point) => (
              <div key={point.id} className="flex gap-5 border-t border-line pt-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft" />
                <div>
                  <h3 className="font-display text-lg">{t(point.title)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {t(point.detail)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button onClick={() => openInquiry()}>
              {t(copy.sustainability.cta)}
            </Button>
            <p className="text-xs text-ink-faint">{t(copy.sustainability.discountNote)}</p>
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
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {t(copy.sustainability.intro)}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
