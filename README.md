# Causewave Grok

Modern website for **Causewave Innovations LLP** — CSR strategy, implementation, and measurable social impact.

This is a fresh rebuild (2026) using Astro + TypeScript + Tailwind, following clean architecture and modern best practices.

## Goals of this rebuild

- Clean, maintainable codebase (addressing issues from previous version)
- Strong TypeScript usage and strict configuration
- Proper component architecture (no more giant inline scripts)
- Content Collections for insights/articles
- Modern, reliable GitHub Pages deployment
- Better performance and accessibility
- Easier long-term maintenance

## Tech Stack

- [Astro 6](https://astro.build) (with strict TypeScript)
- Tailwind CSS
- Content Collections (for Insights)
- GitHub Pages + GitHub Actions

## Project Structure

```
/
├── legacy/                 # Previous versions preserved for reference
│   ├── old-astro-site/
│   ├── old-html-version/
│   └── REVIEW.md           # Code review of the previous version
├── reference-assets/       # Original images, logos, PDFs for reference
├── src/
│   ├── components/
│   ├── content/            # Content Collections (Insights, etc.)
│   ├── layouts/
│   ├── pages/
│   └── consts.ts           # Centralized site config & branding
├── public/                 # Static assets
└── astro.config.mjs
```

## Getting Started

```bash
npm install
npm run dev
```

## Commands

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `npm run dev`       | Start local dev server                       |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview the production build locally         |
| `npm run astro ...` | Run Astro CLI commands                       |

## Deployment

This site automatically deploys to GitHub Pages on every push to `main`.

### One-time Setup (Required)

After the first deployment workflow runs, you must enable GitHub Pages in the repository settings:

1. Go to your repository on GitHub → **Settings** → **Pages**
2. Under "Build and deployment", set **Source** to **GitHub Actions**
3. Save

Once enabled, every future push to `main` will automatically build and deploy the site.

### Manual Deployment

You can also trigger a deployment manually:
- Go to the **Actions** tab → select **"Deploy to GitHub Pages"** → **Run workflow**

### Live Site

After setup, the site will be available at:
`https://hemantdoc12.github.io/causewave-grok/`

## License

Private — Causewave Innovations LLP

---

**Built fresh with modern practices** — see `legacy/REVIEW.md` for context on what was improved.
