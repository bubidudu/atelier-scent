# Atelier Scent — deployment notes

## Requirements

- Node.js 20.9+ (developed on Node 24)
- npm 10+

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck # tsc --noEmit
npm run lint      # eslint
npm run build     # production build
```

## Environment variables

The site currently requires **no** environment variables to build or run.
Everything that might change per deployment lives in `src/data/site.ts`:

| Value | Where | Notes |
| --- | --- | --- |
| WhatsApp business number | `src/data/site.ts` → `siteConfig.contact.whatsappNumber` | Digits only, no `+`. Currently a placeholder (`85200000000`). |
| Instagram handle | `src/data/site.ts` → `siteConfig.contact.instagramHandle` | Used for the IG DM deep link. |
| Threads handle | `src/data/site.ts` → `siteConfig.contact.threadsHandle` | Display only. |
| Contact email | `src/data/site.ts` → `siteConfig.contact.email` | Shown in the footer and inquiry modal. |
| Site URL | `src/app/layout.tsx` → `metadata.metadataBase` | Update to the production domain before launch. |

### Optional (only if you wire up a real form endpoint)

The inquiry modal and the community form currently simulate submission
client-side. To make them real, add a route handler (e.g.
`src/app/api/inquiry/route.ts`) and set:

```bash
# .env.local
INQUIRY_TO_EMAIL=hello@atelierscent.hk
RESEND_API_KEY=re_xxxxxxxx
```

No payment provider keys are used — reservations are handled over
WhatsApp / Instagram DM by design.

## Deploying to Vercel

1. Push this folder to a Git repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — the
   framework preset is detected automatically (Next.js).
3. No build-time environment variables are required.
4. Update `metadataBase` in `src/app/layout.tsx` and the contact details in
   `src/data/site.ts` to your production values.

## Before launch checklist

- [ ] Replace placeholder WhatsApp number and Instagram handle in `src/data/site.ts`.
- [ ] Add real product photography: drop files into `public/images/` and set the
      matching `src` field in `src/lib/images.ts` (placeholders render until then).
- [ ] Review the safety copy with a qualified aromatherapist / toxicologist.
- [ ] Wire the inquiry form to a real endpoint or Formspree / Resend.
- [ ] Add a privacy policy page (the footer currently links to a placeholder label).
- [ ] Verify the IFRA / EU compliance claims for each final formula batch.
