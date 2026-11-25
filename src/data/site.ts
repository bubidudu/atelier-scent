/**
 * Centralised contact / social / link configuration.
 * Replace the placeholder handles with real accounts before launch.
 */
export const siteConfig = {
  brandName: "Atelier Scent",
  location: { zhHK: "香港", en: "Hong Kong" },
  contact: {
    /** Replace with the real WhatsApp business number (digits only, no +). */
    whatsappNumber: "85200000000",
    email: "hello@atelierscent.hk",
    instagramHandle: "atelierscent.hk",
    threadsHandle: "@atelierscent.hk",
  },
  social: [
    {
      id: "instagram",
      label: "Instagram",
      handle: "@atelierscent.hk",
      href: "https://www.instagram.com/atelierscent.hk/",
    },
    {
      id: "threads",
      label: "Threads",
      handle: "@atelierscent.hk",
      href: "https://www.threads.net/@atelierscent.hk",
    },
  ],
} as const;

/** Build a WhatsApp deep link with a prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Build an Instagram DM deep link with a prefilled message. */
export function instagramLink(message: string): string {
  return `https://ig.me/m/${siteConfig.contact.instagramHandle.replace(/^@/, "")}?text=${encodeURIComponent(message)}`;
}
