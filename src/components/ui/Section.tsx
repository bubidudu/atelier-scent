import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 sm:py-28 lg:px-12", className)}>
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="font-display mt-4 text-[2rem] leading-[1.15] sm:text-[2.75rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-soft">{intro}</p>
      ) : null}
    </div>
  );
}
