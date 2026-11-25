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
    <section className="border-b border-line px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="eyebrow">{t(copy.hero.eyebrow)}</p>
          <h1 className="font-display mt-6 text-[2.75rem] leading-[1.08] sm:text-[3.75rem] lg:text-[4.25rem]">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
            {t(copy.hero.subtitle)}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/products">{t(copy.hero.ctaPrimary)}</ButtonLink>
            <ButtonLink href="#community" variant="outline">
              {t(copy.hero.ctaSecondary)}
            </ButtonLink>
            <Button variant="ghost" onClick={() => openInquiry()}>
              {t(copy.inquiry.whatsapp)}
            </Button>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-7">
            {copy.hero.heroStats.map((stat) => (
              <div key={stat.label.en}>
                <dt className="font-display text-3xl leading-none">{stat.value}</dt>
                <dd className="mt-2 text-[0.6875rem] leading-snug tracking-[0.1em] text-ink-faint uppercase">
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
          <div className="mt-4 hidden border border-line bg-paper-deep/50 p-5 sm:block">
            <p className="eyebrow">{t(copy.brand.tagline)}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {t(copy.hero.heroImageAlt)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
