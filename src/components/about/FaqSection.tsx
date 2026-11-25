"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { faqs } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export function FaqSection() {
  const { t } = useLocale();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <Section>
      <SectionHeading title={t(copy.about.faqTitle)} />

      <ul className="mt-10 border-t border-line">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <li key={faq.id} className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-lg leading-snug">{t(faq.question)}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-1 shrink-0 text-ink-faint transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "grid overflow-hidden transition-[grid-template-rows] duration-300",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="min-h-0">
                  <p className="max-w-3xl pb-6 text-sm leading-relaxed text-ink-soft">
                    {t(faq.answer)}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
