# Propsoch Landing Page Rebuild

This project is a frontend assignment rebuild of the Propsoch landing page using Next.js, TypeScript, and Tailwind CSS.

## Live Site Analyzed

Reference: https://www.propsoch.com/

Lighthouse audit run on May 12, 2026 with Chrome headless:

| Category | Score |
| --- | ---: |
| Performance | 54 |
| Accessibility | 70 |
| Best Practices | 57 |
| SEO | 100 |

Key audit signals:

- Largest Contentful Paint: 3.8 s
- Total Blocking Time: 6,890 ms
- Time to Interactive: 20.6 s
- Responsive image savings: about 540 KiB
- Unused JavaScript savings: about 324 KiB
- Third-party main-thread blocking: about 3,540 ms

## UX and UI Issues Found

| Issue | Why it hurts | Fix in this rebuild |
| --- | --- | --- |
| Hero hierarchy is unclear | The original first viewport has a large video card and wide empty spacing, so the buyer value proposition competes with the media. | Rebuilt the hero as a full-bleed branded visual with a sharper headline, decision-focused copy, and two clear actions. |
| CTAs are repeated but not prioritized | Multiple buttons and utility icons make it harder to know the next best step. | Reduced above-the-fold actions to appointment booking and insight exploration, with supporting CTAs later. |
| Accessibility gaps | Lighthouse flagged contrast, button names, and link names. | Added named buttons/links, stronger contrast, semantic sections, and alt text for all images. |
| Heavy runtime and third-party cost | The audit shows high blocking time and long time to interactive. | Built static sections with no client-side carousel or external tracking scripts, keeping interaction cost low. |
| Responsive image waste | Lighthouse reported responsive image savings on the live site. | Converted reference images to local WebP assets and used `next/image` with explicit dimensions and responsive `sizes`. |

## What Was Improved

- Redesigned the hero around buyer confidence, verified insight, and guided negotiation.
- Rebuilt two original sections: the research/insights platform and the guided home-buying journey.
- Preserved the original comparison idea, but made it easier to scan.
- Used local optimized WebP images instead of loading large remote assets above the fold.
- Kept the layout responsive across mobile and desktop with readable text scale, stable cards, and simple navigation.

## Tech Decisions

- Next.js App Router for a modern, deployable structure.
- TypeScript for safer component contracts.
- Tailwind CSS for fast responsive styling and consistent design tokens.
- `next/image` for optimized image delivery.
- `lucide-react` for accessible, consistent icons.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run typecheck
npm run build
```

Local Lighthouse audit of the production build on `http://localhost:3001`:

| Category | Score |
| --- | ---: |
| Performance | 98 |
| Accessibility | 96 |
| Best Practices | 96 |
| SEO | 100 |
