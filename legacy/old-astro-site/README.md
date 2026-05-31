# CauseWave Innovations LLP - Official Website

**Live Demo:** https://hemantdoc12.github.io/causewave-site/

## About CauseWave

CauseWave Innovations LLP specializes in **Corporate Social Responsibility (CSR) Consulting** with deep expertise in **AI-driven technology** and **immersive Audio-Visual (AV) generation**. We help corporations and organizations create measurable social impact through innovative strategies, data-driven insights, and compelling storytelling.

## Tech Stack

- **Framework:** [Astro.js](https://astro.build/) — fast, static site generator
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v3.4
- **Fonts:** Space Grotesk (headings) + Inter (body) via Google Fonts
- **Icons:** Font Awesome 6.5
- **Deployment:** GitHub Pages via GitHub Actions

## Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro      # Shared HTML shell (head, meta, fonts, nav, footer)
├── components/
│   ├── Navbar.astro           # Responsive navbar with mobile menu
│   └── Footer.astro           # Site-wide footer
├── pages/
│   ├── index.astro            # Homepage (hero, services preview, about, CTA)
│   ├── about.astro            # About page (mission, approach, track record)
│   ├── services.astro         # Services page (6 service cards + process)
│   ├── founder.astro          # Founder bio (Dr. Hemant L. Patel)
│   └── contact.astro          # Contact form + info
├── styles/
│   └── global.css             # Tailwind directives + base typography
└── env.d.ts                   # Astro type reference
```

## Development

```bash
npm install
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Deployment

The site auto-deploys to GitHub Pages on push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).

For custom domain (causewave.co.in):
1. Add custom domain in GitHub Pages settings
2. Create `CNAME` file in repo root with: `causewave.co.in`
3. Update DNS at your registrar

## Branding Colors

- Primary Dark: `#0F172A`
- Accent Blue: `#0EA5E9`
- Accent Teal: `#14B8A6`
- Green (Impact): `#22C55E`

---

**Built for CauseWave Innovations LLP** | Ready to scale impact through technology.
