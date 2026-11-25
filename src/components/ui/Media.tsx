import Image from "next/image";
import { getImage } from "@/lib/images";
import { cn } from "@/lib/cn";
import type { Locale } from "@/data/types";

const ratioClasses: Record<string, string> = {
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-video",
};

/**
 * Renders a real photograph when one is configured in `src/lib/images.ts`,
 * otherwise a clean, descriptive placeholder block.
 */
export function Media({
  imageKey,
  locale,
  className,
  ratio,
  priority = false,
}: {
  imageKey: string;
  locale: Locale;
  className?: string;
  ratio?: "4/5" | "1/1" | "3/2" | "16/9";
  priority?: boolean;
}) {
  const entry = getImage(imageKey);
  const alt = locale === "zh-HK" ? entry.alt.zhHK : entry.alt.en;
  const aspect = ratio ?? entry.ratio;

  if (entry.src) {
    return (
      <div className={cn("relative overflow-hidden bg-paper-deep", ratioClasses[aspect], className)}>
        <Image
          src={entry.src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "media-placeholder flex items-end border border-line",
        ratioClasses[aspect],
        className,
      )}
    >
      <span className="relative z-10 m-3 border border-line-strong/70 bg-paper/70 px-2.5 py-1 text-[0.625rem] tracking-[0.18em] text-ink-faint uppercase backdrop-blur-sm">
        {imageKey}
      </span>
    </div>
  );
}
