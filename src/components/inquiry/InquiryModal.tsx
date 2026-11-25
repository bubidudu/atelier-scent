"use client";

import { useEffect, useMemo, useState } from "react";
import { useInquiry } from "./InquiryProvider";
import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { products } from "@/data/products";
import { instagramLink, siteConfig, whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function InquiryModal() {
  const { isOpen, productId, closeInquiry } = useInquiry();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeInquiry();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeInquiry]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeInquiry();
      }}
    >
      {/* Keyed so the form state resets whenever a different product is requested. */}
      <InquiryForm key={productId ?? "general"} productId={productId} onClose={closeInquiry} />
    </div>
  );
}

function InquiryForm({
  productId,
  onClose,
}: {
  productId: string | null;
  onClose: () => void;
}) {
  const { t } = useLocale();
  const [selected, setSelected] = useState<string>(productId ?? "");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selected),
    [selected],
  );

  const message = selectedProduct
    ? `${copy.inquiry.title.zhHK} / ${copy.inquiry.title.en} — ${t(selectedProduct.name)} (${selectedProduct.id})`
    : `${copy.inquiry.title.zhHK} / ${copy.inquiry.title.en}`;

  return (
    <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto border border-line bg-paper shadow-2xl">
      <div className="flex items-start justify-between gap-6 border-b border-line px-6 py-5">
        <div>
          <p className="eyebrow">Atelier Scent</p>
          <h2 className="font-display mt-2 text-2xl">{t(copy.inquiry.title)}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {t(copy.inquiry.subtitle)}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="-mr-1 shrink-0 p-1 text-ink-faint transition-colors hover:text-ink"
          aria-label={t(copy.nav.close)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
      </div>

      <div className="space-y-4 px-6 py-6">
        <div>
          <label
            htmlFor="inquiry-product"
            className="mb-1.5 block text-xs tracking-[0.12em] text-ink-faint uppercase"
          >
            {t(copy.inquiry.productLabel)}
          </label>
          <select
            id="inquiry-product"
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
            className="w-full border border-line bg-paper-deep/50 px-3 py-2.5 text-sm outline-none focus:border-ink"
          >
            <option value="">{t(copy.inquiry.productPlaceholder)}</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {t(product.name)}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="inquiry-name"
              className="mb-1.5 block text-xs tracking-[0.12em] text-ink-faint uppercase"
            >
              {t(copy.inquiry.name)}
            </label>
            <input
              id="inquiry-name"
              type="text"
              className="w-full border border-line bg-paper-deep/50 px-3 py-2.5 text-sm outline-none focus:border-ink"
              placeholder={t({ zhHK: "你的稱呼", en: "Your name" })}
            />
          </div>
          <div>
            <label
              htmlFor="inquiry-contact"
              className="mb-1.5 block text-xs tracking-[0.12em] text-ink-faint uppercase"
            >
              {t(copy.inquiry.contact)}
            </label>
            <input
              id="inquiry-contact"
              type="text"
              className="w-full border border-line bg-paper-deep/50 px-3 py-2.5 text-sm outline-none focus:border-ink"
              placeholder={t({ zhHK: "電郵或 WhatsApp", en: "Email or WhatsApp" })}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="inquiry-quantity"
            className="mb-1.5 block text-xs tracking-[0.12em] text-ink-faint uppercase"
          >
            {t(copy.inquiry.quantity)}
          </label>
          <input
            id="inquiry-quantity"
            type="number"
            min={1}
            defaultValue={1}
            className="w-24 border border-line bg-paper-deep/50 px-3 py-2.5 text-sm outline-none focus:border-ink"
          />
        </div>

        <div>
          <label
            htmlFor="inquiry-message"
            className="mb-1.5 block text-xs tracking-[0.12em] text-ink-faint uppercase"
          >
            {t(copy.inquiry.message)}
          </label>
          <textarea
            id="inquiry-message"
            rows={3}
            className="w-full resize-none border border-line bg-paper-deep/50 px-3 py-2.5 text-sm outline-none focus:border-ink"
            placeholder={t(copy.inquiry.messagePlaceholder)}
          />
        </div>

        {status !== "idle" ? (
          <p
            role="status"
            className="border border-line bg-paper-deep/60 px-3 py-2.5 text-sm text-ink-soft"
          >
            {status === "sent" ? t(copy.community.formSuccess) : t(copy.community.formError)}
          </p>
        ) : null}
      </div>

      <div className="border-t border-line px-6 py-5">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            variant="primary"
            className="flex-1"
            // Simulated submission — replace with a real endpoint when ready.
            onClick={() => setStatus("sent")}
          >
            {t(copy.community.formSubmit)}
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
            }}
          >
            {t(copy.inquiry.whatsapp)}
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              window.open(instagramLink(message), "_blank", "noopener,noreferrer");
            }}
          >
            {t(copy.inquiry.instagram)}
          </Button>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-faint">
          {t(copy.community.formConsent)}
        </p>
        <p className="mt-2 text-xs text-ink-faint">{siteConfig.contact.email}</p>
      </div>
    </div>
  );
}
