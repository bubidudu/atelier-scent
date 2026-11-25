"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { roadmapEvents } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useInquiry } from "@/components/inquiry/InquiryProvider";

export function RoadmapSection() {
  const { t } = useLocale();
  const { openInquiry } = useInquiry();

  const upcoming = roadmapEvents.filter((event) => event.status === "upcoming");
  const past = roadmapEvents.filter((event) => event.status === "past");

  return (
    <Section id="roadmap" className="border-y border-line bg-paper-deep/40">
      <SectionHeading
        eyebrow={t(copy.roadmap.eyebrow)}
        title={t(copy.roadmap.title)}
        intro={t(copy.roadmap.intro)}
      />

      <div className="mt-14">
        <p className="eyebrow">{t(copy.roadmap.status.upcoming)}</p>
        <ul className="mt-5 divide-y divide-line border-y border-line">
          {upcoming.map((event) => (
            <li
              key={event.id}
              className="grid gap-3 py-7 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-10"
            >
              <p className="text-[0.75rem] uppercase tracking-[0.14em] text-ink-faint">
                {event.date}
              </p>
              <div>
                <h3 className="font-display text-[1.0625rem] uppercase tracking-[0.04em]">
                  {t(event.title)}
                </h3>
                <p className="mt-1.5 text-[0.75rem] text-ink-faint">{t(event.venue)}</p>
              </div>
              <Badge tone={event.type === "workshop" ? "clay" : "sage"}>
                {t(copy.roadmap.types[event.type])}
              </Badge>
            </li>
          ))}
        </ul>
      </div>

      {past.length > 0 ? (
        <div className="mt-14">
          <p className="eyebrow">{t(copy.roadmap.status.past)}</p>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {past.map((event) => (
              <li
                key={event.id}
                className="grid gap-3 py-7 opacity-50 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-10"
              >
                <p className="text-[0.75rem] uppercase tracking-[0.14em] text-ink-faint">
                  {event.date}
                </p>
                <div>
                  <h3 className="font-display text-[1.0625rem] uppercase tracking-[0.04em]">
                    {t(event.title)}
                  </h3>
                  <p className="mt-1.5 text-[0.75rem] text-ink-faint">{t(event.venue)}</p>
                </div>
                <Badge tone="outline">{t(copy.roadmap.types[event.type])}</Badge>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-10">
        <Button variant="outline" onClick={() => openInquiry()}>
          {t(copy.roadmap.cta)}
        </Button>
      </div>
    </Section>
  );
}
