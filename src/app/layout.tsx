import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { InquiryProvider } from "@/components/inquiry/InquiryProvider";
import { InquiryModal } from "@/components/inquiry/InquiryModal";
import "./globals.css";

/** Jost is a geometric sans in the Futura lineage — the house type of the brand. */
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atelier-scent-umber.vercel.app"),
  title: {
    default: "Atelier Scent — 香港手作香氛與精油工作室",
    template: "%s — Atelier Scent",
  },
  description:
    "Atelier Scent 是香港的手作香氛工作室，提供成分透明、濃度安全的精油與香氛配方：香氛蠟燭、香薰蠟片、精油滾珠、空間噴霧與按摩油。",
  keywords: [
    "Atelier Scent",
    "手作香氛",
    "精油",
    "香氛蠟燭",
    "essential oils Hong Kong",
    "aromatherapy",
    "pet friendly fragrance",
  ],
  openGraph: {
    title: "Atelier Scent — 香港手作香氛與精油工作室",
    description:
      "調香師主導的手作香氛與精油：成分透明、濃度安全、孕婦小童與寵物情境的清楚標示。",
    locale: "zh_HK",
    alternateLocale: ["en_HK"],
    type: "website",
    siteName: "Atelier Scent",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f8f7f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-HK" suppressHydrationWarning className={jost.variable}>
      <body className="min-h-dvh">
        <LocaleProvider>
          <InquiryProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:text-xs"
            >
              跳至主要內容 / Skip to content
            </a>
            <SiteHeader />
            <main id="main">{children}</main>
            <SiteFooter />
            <InquiryModal />
          </InquiryProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
