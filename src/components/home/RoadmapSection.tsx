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

      <div className="mt-12">
        <p className="eyebrow">{t(copy.roadmap.status.upcoming)}</p>
        <ul className="mt-5 divide-y divide-line border-y border-line">
          {upcoming.map((event) => (
            <li
              key={event.id}
              className="grid gap-3 py-6 sm:grid-cols-[8rem_1fr_auto] sm:items-baseline sm:gap-8"
            >
              <p className="font-display text-lg text-ink-soft">{event.date}</p>
              <div>
                <h3 className="font-display text-xl">{t(event.title)}</h3>
                <p className="mt-1 text-sm text-ink-faint">{t(event.venue)}</p>
              </div>
              <Badge tone={event.type === "workshop" ? "clay" : "sage"}>
                {t(copy.roadmap.types[event.type])}
              </Badge>
            </li>
          ))}
        </ul>
      </div>

      {past.length > 0 ? (
        <div className="mt-12">
          <p className="eyebrow">{t(copy.roadmap.status.past)}</p>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {past.map((event) => (
              <li
                key={event.id}
                className="grid gap-3 py-6 opacity-60 sm:grid-cols-[8rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <p className="font-display text-lg text-ink-soft">{event.date}</p>
                <div>
                  <h3 className="font-display text-xl">{t(event.title)}</h3>
                  <p className="mt-1 text-sm text-ink-faint">{t(event.venue)}</p>
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
