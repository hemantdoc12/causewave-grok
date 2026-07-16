# Causewave

Modern website for **Causewave Innovations LLP** — CSR strategy, implementation, and measurable social impact.

Built with Astro + TypeScript + Tailwind. Live at **[https://causewave.in](https://causewave.in)**.

## Goals

- Clean, maintainable marketing site
- Strong technical SEO foundations (canonicals, sitemap, structured data)
- Practical CSR content for compliance, healthcare, and impact measurement
- Reliable GitHub Pages deployment with custom domain

## Tech stack

- [Astro 6](https://astro.build) (TypeScript)
- Tailwind CSS v4
- `@astrojs/sitemap`
- GitHub Pages + GitHub Actions
- Formspree (contact form)

## Project structure

```
/
├── src/
│   ├── components/     # Navbar, Footer, Icon
│   ├── data/           # Shared insight metadata (hub + Article JSON-LD)
│   ├── layouts/        # BaseLayout (meta, OG, breadcrumbs, JSON-LD)
│   ├── pages/          # File-based routes (home, about, services, insights, legal)
│   ├── styles/         # global.css + @theme tokens
│   └── consts.ts       # Site URL, nav, contact
├── public/             # Static assets, robots.txt, CNAME, brochure
├── seo_results/        # Google Search Console exports
├── TRACKER.md          # Design + SEO implementation tracker
├── DEPLOYMENT.md       # Deploy and HTTPS checklist
└── legacy/             # Previous site versions (reference only)
```

Insights are file-based Astro pages under `src/pages/insights/`, with shared metadata in `src/data/insights.ts`. Content Collections can be introduced later if volume grows.

## Getting started

```bash
npm install
npm run dev
```

## Commands

| Command | Action |
| :------ | :----- |
| `npm run dev` | Start local dev server |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Deployment

Pushes to `main` deploy via GitHub Actions to GitHub Pages.

### One-time setup

1. Repository **Settings → Pages**
2. Source: **GitHub Actions**
3. Custom domain: `causewave.in` with **Enforce HTTPS** enabled  
   (see `DEPLOYMENT.md` for the full HTTPS checklist)

### Live site

**https://causewave.in**

## SEO tracker

Post-launch SEO work (breadcrumbs, Article schema, content expansion, hub internal links) is tracked in **`TRACKER.md`** phases 5–7.

## License

Private — Causewave Innovations LLP
