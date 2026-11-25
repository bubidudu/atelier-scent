"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { Section, SectionHeading } from "@/components/ui/Section";

export function TeamSection() {
  const { t } = useLocale();

  return (
    <Section className="border-y border-line bg-paper-deep/40">
      <SectionHeading title={t(copy.about.teamTitle)} intro={t(copy.about.teamIntro)} />

      <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
        {copy.about.team.map((member) => (
          <li key={member.enName} className="bg-paper p-7">
            <div className="flex items-baseline gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft" />
              <h3 className="font-display text-lg">{member.name}</h3>
            </div>
            <p className="mt-1.5 text-xs tracking-[0.1em] text-ink-faint uppercase">
              {member.enName}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {t(member.body)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
