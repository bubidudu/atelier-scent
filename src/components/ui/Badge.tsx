import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeTone = "neutral" | "sage" | "clay" | "sand" | "outline";

const toneClasses: Record<BadgeTone, string> = {
  neutral: "bg-paper-deep text-ink-soft border-line",
  sage: "bg-sage/60 text-ink border-sage",
  clay: "bg-clay/70 text-ink border-clay",
  sand: "bg-sand text-ink-soft border-line",
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
        "inline-flex items-center gap-1.5 rounded-[2px] border px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.12em] whitespace-nowrap",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
