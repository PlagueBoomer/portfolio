# maciejbledowski.pl

Personal portfolio and technical hub built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Domain:** maciejbledowski.pl

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Structure

```
src/
├── app/          # Pages (App Router)
│   ├── page.tsx        # Homepage
│   ├── projects/       # /projects
│   ├── homelab/        # /homelab
│   └── cv/             # /cv
├── components/   # Reusable components
└── data/         # Content & configuration
```

## Deployment

Push to `main` branch → Vercel auto-deploys to production.

```
GitHub → Vercel → maciejbledowski.pl
```
