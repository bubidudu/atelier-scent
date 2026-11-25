import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeTone = "neutral" | "sage" | "clay" | "sand" | "outline";

const toneClasses: Record<BadgeTone, string> = {
  neutral: "bg-paper-deep text-ink-soft border-line",
  sage: "bg-sage/30 text-ink border-sage/60",
  clay: "bg-clay/35 text-ink border-clay/70",
  sand: "bg-sand/45 text-ink border-sand",
  outline: "bg-transparent text-ink-faint border-line-strong",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.6875rem] tracking-[0.08em] whitespace-nowrap",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
