"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { productCategories } from "@/data/categories";
import { safetyTagMap } from "@/data/safety";
import type { Product } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { Media } from "@/components/ui/Media";

export function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (product: Product) => void;
}) {
  const { t, locale } = useLocale();
  const category = productCategories.find((item) => item.id === product.category);

  return (
    <article className="group flex h-full flex-col">
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="w-full text-left"
        aria-label={`${t(product.name)} — ${t(copy.featured.details)}`}
      >
        <div className="relative">
          <Media
            imageKey={product.imageKey}
            locale={locale}
            className="w-full transition-transform duration-500 group-hover:scale-[1.015]"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {product.tags.slice(0, 2).map((tagId) => (
              <Badge key={tagId} tone={tagId === "pet-friendly" ? "sage" : "sand"}>
                {t(safetyTagMap[tagId].label)}
              </Badge>
            ))}
          </div>
        </div>
      </button>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="eyebrow">{category ? t(category.label) : product.category}</p>
        <h3 className="font-display mt-2 text-xl leading-snug">{t(product.name)}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
          {t(product.story)}
        </p>

        <dl className="mt-4 space-y-1.5 text-xs text-ink-faint">
          <div className="flex gap-2">
            <dt className="w-16 shrink-0">{t(copy.featured.size)}</dt>
            <dd className="text-ink-soft">{product.size}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-16 shrink-0">{t(copy.featured.price)}</dt>
            <dd className="text-ink-soft">{product.price}</dd>
          </div>
        </dl>

        <div className="mt-4 flex items-center justify-between gap-3 pt-1">
          <Badge tone="outline">{t(copy.featured.status[product.status])}</Badge>
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="border-b border-ink-faint pb-0.5 text-xs tracking-[0.08em] text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            {t(copy.featured.details)} →
          </button>
        </div>
      </div>
    </article>
  );
}
