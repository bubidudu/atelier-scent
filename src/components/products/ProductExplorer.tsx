"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { products } from "@/data/products";
import { productCategories } from "@/data/categories";
import { safetyTags } from "@/data/safety";
import type { Product, ProductCategoryId, SafetyTagId } from "@/data/types";
import { cn } from "@/lib/cn";
import { ProductCard } from "./ProductCard";
import { ProductDetailDialog } from "./ProductDetailDialog";
import { useInquiry } from "@/components/inquiry/InquiryProvider";

type FilterId = ProductCategoryId | SafetyTagId;

export function ProductExplorer() {
  const { t } = useLocale();
  const { openInquiry } = useInquiry();
  const [selected, setSelected] = useState<FilterId | "all">("all");
  const [active, setActive] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    if (selected === "all") return products;
    return products.filter((product) => {
      if (product.category === selected) return true;
      return product.tags.includes(selected as SafetyTagId);
    });
  }, [selected]);

  const filterButton = (id: FilterId | "all", label: string) => {
    const isActive = selected === id;
    return (
      <button
        key={id}
        type="button"
        onClick={() => setSelected(id)}
        aria-pressed={isActive}
        className={cn(
          "rounded-full border px-4 py-1.5 text-[0.8125rem] transition-colors",
          isActive
            ? "border-ink bg-ink text-paper"
            : "border-line-strong text-ink-soft hover:border-ink hover:text-ink",
        )}
      >
        {label}
      </button>
    );
  };

  return (
    <div>
      <div className="space-y-4">
        <div>
          <p className="eyebrow">{t(copy.catalog.filterByForm)}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {filterButton("all", t(copy.catalog.filterAll))}
            {productCategories.map((category) =>
              filterButton(category.id, t(category.label)),
            )}
          </div>
        </div>

        <div>
          <p className="eyebrow">{t(copy.catalog.filterByTag)}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {safetyTags.map((tag) => filterButton(tag.id, t(tag.label)))}
          </div>
        </div>

        <p className="text-xs tracking-[0.1em] text-ink-faint uppercase">
          {filtered.length} {t(copy.catalog.results)}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 border border-line bg-paper-deep/40 px-5 py-8 text-center text-sm text-ink-soft">
          {t(copy.catalog.empty)}
        </p>
      ) : (
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={setActive} />
          ))}
        </div>
      )}

      <ProductDetailDialog
        product={active}
        onClose={() => setActive(null)}
        onRequest={(productId) => {
          setActive(null);
          openInquiry(productId);
        }}
      />
    </div>
  );
}
