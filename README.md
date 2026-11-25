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

### Current deployment

- **Production URL:** https://atelier-scent-umber.vercel.app
- **Project:** `atelier-scent` (scope: `kayanangela-3134s-projects`)
- Deployment protection is **disabled** — the site is publicly accessible.

### Deploying an update

With the GitHub remote connected (see below), every push to `main`
triggers an automatic Vercel deployment. To deploy manually instead:

```bash
vercel --prod
```

### Connecting the GitHub remote

The repository lives at `github.com/<owner>/atelier-scent`. To link it so
Vercel builds from GitHub (preview deployments per PR, automatic prod
deploys on merge):

```bash
vercel git connect https://github.com/<owner>/atelier-scent
```

### Before launch checklist

- [ ] Replace placeholder WhatsApp number and Instagram handle in `src/data/site.ts`.
- [ ] Add real product photography: drop files into `public/images/` and set the
      matching `src` field in `src/lib/images.ts` (placeholders render until then).
- [ ] Review the safety copy with a qualified aromatherapist / toxicologist.
- [ ] Wire the inquiry form to a real endpoint or Formspree / Resend.
- [ ] Add a privacy policy page (the footer currently links to a placeholder label).
- [ ] Verify the IFRA / EU compliance claims for each final formula batch.
