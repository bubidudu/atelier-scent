"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { contentPillars } from "@/data/content";
import { siteConfig } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type FormStatus = "idle" | "sent" | "error";

const fieldClass =
  "w-full rounded-[2px] border border-line bg-paper px-3 py-2.5 text-[0.8125rem] outline-none transition-colors focus:border-ink";

const labelClass = "mb-1.5 block text-[0.625rem] font-medium uppercase tracking-[0.16em] text-ink-faint";

export function CommunitySection() {
  const { t } = useLocale();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [interest, setInterest] = useState<string>("");

  return (
    <Section id="community">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow={t(copy.community.eyebrow)}
            title={t(copy.community.title)}
            intro={t(copy.community.intro)}
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {siteConfig.social.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-[3px] border border-ink px-6 py-3 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-inverse"
              >
                {social.label}
                <span className="text-ink-faint">{social.handle}</span>
              </a>
            ))}
          </div>

          <div className="mt-14">
            <p className="eyebrow">{t(copy.community.pillarsTitle)}</p>
            <ul className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2">
              {contentPillars.map((pillar) => (
                <li key={pillar.id} className="bg-paper p-7">
                  <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.14em]">
                    {t(pillar.label)}
                  </h3>
                  <p className="mt-3 text-[0.8125rem] leading-[1.85] text-ink-soft">
                    {t(pillar.detail)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-line bg-paper-deep/40 p-8">
          <h3 className="font-display text-[1.25rem] uppercase tracking-[0.04em]">
            {t(copy.community.formTitle)}
          </h3>
          <p className="mt-4 text-[0.8125rem] leading-[1.9] text-ink-soft">
            {t(copy.community.formIntro)}
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              // Replace with a real endpoint (e.g. Resend / Formspree / your API route).
              setStatus("sent");
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="community-name" className={labelClass}>
                  {t(copy.community.formName)}
                </label>
                <input id="community-name" name="name" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="community-email" className={labelClass}>
                  {t(copy.community.formEmail)}
                </label>
                <input
                  id="community-email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="community-interest" className={labelClass}>
                {t(copy.community.formInterest)}
              </label>
              <select
                id="community-interest"
                name="interest"
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
                className={fieldClass}
              >
                <option value="">{t(copy.community.formInterestPlaceholder)}</option>
                {copy.community.interestOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {t(option.label)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="community-message" className={labelClass}>
                {t(copy.community.formMessage)}
              </label>
              <textarea
                id="community-message"
                name="message"
                rows={4}
                className={cn(fieldClass, "resize-none")}
                placeholder={t(copy.community.formMessagePlaceholder)}
              />
            </div>

            <Button type="submit" className="w-full">
              {t(copy.community.formSubmit)}
            </Button>

            {status !== "idle" ? (
              <p
                role="status"
                className={cn(
                  "border px-3.5 py-3 text-[0.8125rem]",
                  status === "sent"
                    ? "border-sage bg-sage/40 text-ink"
                    : "border-clay bg-clay/40 text-ink",
                )}
              >
                {status === "sent"
                  ? t(copy.community.formSuccess)
                  : t(copy.community.formError)}
              </p>
            ) : null}

            <p className="text-[0.6875rem] leading-[1.8] text-ink-faint">
              {t(copy.community.formConsent)}
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
