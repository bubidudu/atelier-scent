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
        <div className="relative overflow-hidden">
          <Media
            imageKey={product.imageKey}
            locale={locale}
            className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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

      <div className="mt-5 flex flex-1 flex-col">
        <p className="eyebrow">{category ? t(category.label) : product.category}</p>
        <h3 className="font-display mt-2.5 text-[1.0625rem] uppercase tracking-[0.04em]">
          {t(product.name)}
        </h3>
        <p className="mt-3 line-clamp-3 text-[0.8125rem] leading-[1.85] text-ink-soft">
          {t(product.story)}
        </p>

        <dl className="mt-5 space-y-1.5 text-[0.6875rem] text-ink-faint">
          <div className="flex gap-3">
            <dt className="w-16 shrink-0 uppercase tracking-[0.12em]">
              {t(copy.featured.size)}
            </dt>
            <dd className="text-ink-soft">{product.size}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-16 shrink-0 uppercase tracking-[0.12em]">
              {t(copy.featured.price)}
            </dt>
            <dd className="text-ink-soft">{product.price}</dd>
          </div>
        </dl>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
          <Badge tone="outline">{t(copy.featured.status[product.status])}</Badge>
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="border-b border-ink pb-0.5 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink-faint hover:text-ink-soft"
          >
            {t(copy.featured.details)} →
          </button>
        </div>
      </div>
    </article>
  );
}
