# DecryptCare AI — Frontend

Production-ready React conversion of the DecryptCare Stitch designs.

## Stack
- React 18 + TypeScript + Vite
- Tailwind CSS (design tokens in `tailwind.config.js` under `brand` / `ink` / `alert`)
- shadcn/ui-style primitives in `src/components/ui`
- Framer Motion for transitions/animated progress
- React Router for navigation between screens
- TanStack Query for data fetching (mocked, see `src/hooks`)
- React Hook Form + Zod for the upload dropzone and chat composer

## Screens → Routes
| Route          | Screen                                    |
|-----------------|--------------------------------------------|
| `/`             | Clinical Overview dashboard                |
| `/documents`    | Document Intelligence (upload + queue)     |
| `/scan`         | Mobile camera capture + review scan flow   |
| `/insights`     | AI Insights chat (bill Q&A, translation)   |
| `/diagnostics`  | Audit Dashboard (cost breakdown, risk)     |
| `/report`       | Legal audit report + citations panel       |

## Getting started
```bash
npm install
npm run dev      # start dev server
npm run build    # production build
```

## Notes
- All data is mocked in `src/lib/mockData.ts` and served through TanStack Query hooks
  in `src/hooks/` — swap the `fetch...` functions for real API calls when the backend
  is wired up (endpoints are called out in code comments).
- Colors, spacing, and copy were matched directly against the Stitch screenshots;
  no new layouts or palettes were introduced.
