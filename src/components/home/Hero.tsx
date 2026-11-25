"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { useInquiry } from "@/components/inquiry/InquiryProvider";

export function Hero() {
  const { t, locale } = useLocale();
  const { openInquiry } = useInquiry();

  const title = t(copy.hero.title).split("\n");

  return (
    <section className="border-b border-line px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-20 lg:px-12 lg:pt-24">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow">{t(copy.hero.eyebrow)}</p>
          <h1 className="font-display mt-6 text-[2.25rem] leading-[1.1] tracking-[-0.03em] sm:text-[3rem] lg:text-[3.75rem]">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-8 h-px w-16 bg-ink" aria-hidden="true" />

          <p className="mt-8 max-w-lg text-[0.875rem] leading-[1.9] text-ink-soft">
            {t(copy.hero.subtitle)}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/products">{t(copy.hero.ctaPrimary)}</ButtonLink>
            <ButtonLink href="#community" variant="outline">
              {t(copy.hero.ctaSecondary)}
            </ButtonLink>
            <Button variant="ghost" onClick={() => openInquiry()}>
              {t(copy.inquiry.whatsapp)}
            </Button>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-2 gap-6 border-t border-line pt-7 sm:grid-cols-4">
            {copy.hero.heroStats.map((stat) => (
              <div key={stat.label.en}>
                <dt className="font-display text-[1.75rem] leading-none">{stat.value}</dt>
                <dd className="mt-2.5 text-[0.625rem] leading-snug uppercase tracking-[0.16em] text-ink-faint">
                  {t(stat.label)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <Media
            imageKey="hero-atelier"
            locale={locale}
            ratio="3/2"
            priority
            className="w-full border border-line"
          />
          <div className="mt-4 border border-line bg-paper-deep/50 p-5">
            <p className="eyebrow">{t(copy.brand.tagline)}</p>
            <p className="mt-2.5 text-[0.75rem] leading-[1.8] text-ink-soft">
              {t(copy.hero.heroImageAlt)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
