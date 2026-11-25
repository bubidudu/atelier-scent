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

export function CommunitySection() {
  const { t } = useLocale();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [interest, setInterest] = useState<string>("");

  return (
    <Section id="community">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
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
                className="inline-flex items-center gap-2 border border-line-strong px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink"
              >
                {social.label}
                <span className="text-xs text-ink-faint">{social.handle}</span>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <p className="eyebrow">{t(copy.community.pillarsTitle)}</p>
            <ul className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2">
              {contentPillars.map((pillar) => (
                <li key={pillar.id} className="bg-paper p-6">
                  <h3 className="font-display text-lg">{t(pillar.label)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {t(pillar.detail)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-line bg-paper-deep/40 p-7 sm:p-8">
          <h3 className="font-display text-2xl">{t(copy.community.formTitle)}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {t(copy.community.formIntro)}
          </p>

          <form
            className="mt-7 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              // Replace with a real endpoint (e.g. Resend / Formspree / your API route).
              setStatus("sent");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="community-name"
                  className="mb-1.5 block text-xs tracking-[0.12em] text-ink-faint uppercase"
                >
                  {t(copy.community.formName)}
                </label>
                <input
                  id="community-name"
                  name="name"
                  required
                  className="w-full border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-ink"
                />
              </div>
              <div>
                <label
                  htmlFor="community-email"
                  className="mb-1.5 block text-xs tracking-[0.12em] text-ink-faint uppercase"
                >
                  {t(copy.community.formEmail)}
                </label>
                <input
                  id="community-email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-ink"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="community-interest"
                className="mb-1.5 block text-xs tracking-[0.12em] text-ink-faint uppercase"
              >
                {t(copy.community.formInterest)}
              </label>
              <select
                id="community-interest"
                name="interest"
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
                className="w-full border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-ink"
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
              <label
                htmlFor="community-message"
                className="mb-1.5 block text-xs tracking-[0.12em] text-ink-faint uppercase"
                >
                {t(copy.community.formMessage)}
              </label>
              <textarea
                id="community-message"
                name="message"
                rows={4}
                className="w-full resize-none border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-ink"
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
                  "border px-3 py-2.5 text-sm",
                  status === "sent"
                    ? "border-sage/60 bg-sage/15 text-ink"
                    : "border-clay/60 bg-clay/15 text-ink",
                )}
              >
                {status === "sent"
                  ? t(copy.community.formSuccess)
                  : t(copy.community.formError)}
              </p>
            ) : null}

            <p className="text-xs leading-relaxed text-ink-faint">
              {t(copy.community.formConsent)}
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
