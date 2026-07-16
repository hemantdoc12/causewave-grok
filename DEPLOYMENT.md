# Causewave Website — Deployment & Maintenance Guide

## Overview

This is the Causewave Innovations LLP website — a static site built with Astro, deployed to GitHub Pages at **https://causewave.in**.

### HTTPS enforcement (required)

Search Console has previously shown impressions for `http://causewave.in/` as well as `https://`. GitHub Pages should serve HTTPS for the custom domain, but confirm:

1. Repo **Settings → Pages →** Custom domain: `causewave.in`
2. Enable **Enforce HTTPS** (checkbox) after the certificate provisions
3. DNS: `CNAME` / apex records point only at GitHub Pages targets
4. In Google Search Console, use URL Inspection on an `http://` URL — expect a redirect to `https://`
5. The site also includes a client-side HTTP→HTTPS redirect as defense-in-depth (not a substitute for server-level redirect)

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Astro | 6.4.2 | Static site generator |
| Tailwind CSS | 4.3 | Utility-first CSS framework |
| @astrojs/sitemap | 3.7.3 | Auto-generates sitemap.xml |
| Node.js | >=22.12.0 | Runtime requirement |
| GitHub Pages | — | Hosting |
| Formspree | — | Contact form backend |

---

## Project Structure

```
├── astro.config.mjs          # Astro config: site URL, trailing slash, sitemap, Tailwind
├── package.json              # Dependencies and scripts
├── src/
│   ├── consts.ts             # Site-wide constants (name, URL, nav links, contact info)
│   ├── styles/
│   │   └── global.css        # CSS variables, @theme block, section spacing, animations
│   ├── layouts/
│   │   └── BaseLayout.astro  # HTML shell: meta tags, JSON-LD, nav, footer, scripts
│   ├── components/
│   │   ├── Navbar.astro      # Sticky nav with mobile menu, single CTA
│   │   ├── Footer.astro      # Footer with NAP (email, phone, location)
│   │   └── Icon.astro        # Inline SVG icons (no Font Awesome CDN)
│   ├── data/
│   │   └── insights.ts       # Insight metadata for hub + Article JSON-LD
│   └── pages/
│       ├── index.astro                # Homepage: hero, counters, services preview, about preview
│       ├── about/index.astro          # Company story, mission, expertise, Schedule VII tags
│       ├── services/index.astro       # Services across 3 pillars + process section
│       ├── contact/index.astro        # Contact form (Formspree) + details sidebar
│       ├── insights/index.astro       # On-site guides + secondary LinkedIn section
│       ├── insights/founder-story/
│       ├── insights/csr-compliance-companies-act-2013/
│       ├── insights/impactful-csr-programs-healthcare/
│       ├── insights/measuring-csr-impact-framework/
│       ├── privacy-policy/index.astro
│       └── terms-of-service/index.astro
├── public/
│   ├── robots.txt            # Allow all, sitemap URL
│   ├── CNAME                 # Custom domain: causewave.in
│   ├── brochure.html         # Print brochure (noindex)
│   ├── og-default.jpg        # OG image
│   ├── favicon.ico
│   └── images/
│       ├── logos/            # WebP + resized PNG fallbacks
│       └── backgrounds/      # Hero background (jpg + webp)
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions: auto-build and deploy on push to main
├── DESIGN.md                 # Design system documentation
├── TRACKER.md                # Implementation tracker
└── DEPLOYMENT.md             # This file
```

---

## Key Conventions

### URLs & Paths
- **Trailing slash required** on all internal links (`trailingSlash: 'always'`)
- `SITE.url` in `consts.ts` must have trailing slash: `'https://causewave.in/'`
- Nav links are relative (`services/`, `about/`) — Navbar/Footer prepend `${base}`
- `canonicalPath` prop in pages does NOT start with `/` (e.g., `about/`, `services/`)

### Typography
- **Headings:** Space Grotesk (Google Fonts)
- **Body:** Inter (Google Fonts)
- Use `font-semibold` — never `font-bold`

### Border Radius
- Use `rounded-xl`, `rounded-2xl`, `rounded-full`
- Never `rounded-lg` or `rounded-md`

### Accent Colors (cycle in order)
1. **Sky** (sky-500/600)
2. **Teal** (teal-500/600)
3. **Emerald** (emerald-500/600)

### Images
- All images converted to WebP with PNG/JPG fallbacks using `<picture>` elements
- Always include `width` and `height` attributes on `<img>` tags
- Logos: `logo_1` (hero/large), `logo_2` (navbar/small)

---

## SEO Implementation

### Meta Tags (in BaseLayout.astro)
Every page passes these props to `BaseLayout`:
```astro
<BaseLayout
  title="Page Title | Causewave"
  description="Meta description for search engines"
  ogTitle="OG Title for social sharing"
  ogDescription="OG description for social sharing"
  canonicalPath="page-slug/"
  activePage="page-name"
  jsonLd={structuredData}
>
```

### Structured Data (JSON-LD)
| Schema | Where | Purpose |
|--------|-------|---------|
| Organization | BaseLayout (all pages) | Company name, URL, logo, address, contact |
| BreadcrumbList | BaseLayout (inner pages) | Auto-generated from `canonicalPath` |
| WebSite | Homepage | Name, URL, SearchAction |
| Service | Services page | All 18 services in OfferCatalog |
| LocalBusiness | Contact page | Address, phone, hours, area served |

### Sitemap
- Auto-generated by `@astrojs/sitemap` integration
- Output: `sitemap-index.xml` → `sitemap-0.xml`
- Contains all 11 pages
- URL: `https://causewave.in/sitemap-index.xml`

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://causewave.in/sitemap-index.xml
```

---

## Deployment

### GitHub Actions Workflow
File: `.github/workflows/deploy.yml`

- Triggers on push to `main` branch
- Builds with Node 22
- Deploys to GitHub Pages via `actions/deploy-pages@v4`

### Custom Domain (causewave.in)
- `public/CNAME` contains `causewave.in`
- DNS records at Hostinger:
  - 4 A records → GitHub Pages IPs (185.199.108.153, 109.153, 110.153, 111.153)
  - CNAME record: `www` → `hemantdoc12.github.io`

### GitHub Repo Settings
- Settings → Pages → Source: **GitHub Actions**
- Settings → Pages → Custom domain: `causewave.in`
- Settings → Pages → Enforce HTTPS: ✅

### Google Search Console
- Property: `causewave.in`
- Verification: DNS TXT record
- Sitemap submitted: `https://causewave.in/sitemap-index.xml`

---

## Contact Form

### Formspree Integration
- Endpoint: `https://formspree.io/f/xnjkpjvy`
- Emails sent to: `innovate@causewave.in`
- Subject line: "New inquiry from Causewave website"
- Honeypot field for spam prevention
- JavaScript handles submission via `fetch()` API
- Success message shown on submission
- Error message with direct email fallback

### To enable auto-reply
Go to Formspree dashboard → your form → Emails → enable Autoresponder.

---

## Services Structure

### 18 Services Across 3 Pillars

**Pillar 1: CSR Strategy & Consulting (6)**
1. CSR Strategy & Planning
2. Program Implementation
3. Compliance & Reporting
4. Stakeholder Engagement
5. Impact Measurement
6. Sustainability Consulting

**Pillar 2: Technology & Data Solutions (6)**
7. CSR Platform Development
8. Data Integration Solutions
9. Digital Transformation
10. Cloud Solutions
11. Data Analytics
12. Cybersecurity

**Pillar 3: AI-Powered Communication (6)**
13. Impact Story Generation
14. Stakeholder Videos
15. Personalized Video Marketing
16. Training Video Generation
17. Social Media Content
18. Brand Storytelling

---

## How To Make Common Changes

### Update site title or description
Edit `src/consts.ts` → `SITE.title` and `SITE.description`

### Add a new page
1. Create `src/pages/new-page/index.astro`
2. Import `BaseLayout` and pass SEO props
3. Add to `NAV_LINKS` in `consts.ts` if needed in nav
4. Sitemap auto-updates on build

### Update services
Edit `src/pages/services/index.astro`:
- Add cards in the appropriate pillar section
- Update `servicesJsonLd` in the frontmatter with new service

### Update contact info
Edit `src/consts.ts` → `CONTACT` object

### Change Formspree endpoint
Edit `src/pages/contact/index.astro` → update `action` attribute on the form

### Update OG image
1. Replace `public/og-default.jpg`
2. No code change needed (referenced in `consts.ts` as `SITE.ogImage`)

### Add blog post / insight
1. Create `src/pages/insights/post-slug/index.astro`
2. Add card to `src/pages/insights/index.astro`
3. Sitemap auto-updates

### Run locally
```bash
npm run dev
# Opens at http://localhost:4321/causewave-grok/
```

### Build and preview
```bash
npm run build
npm run preview
```

---

## Design Decisions

1. **No scroll-reveal animations** — Content must always be visible; reveal systems caused invisible content
2. **Single CTA** — Only one "Get Started" button in navbar pointing to `/contact/`
3. **No CTA sections on About/Services** — Homepage is the single conversion point
4. **Insights = LinkedIn articles** — Published articles linked externally, not internal blog posts
5. **Footer = single line** — Compact footer with copyright, legal links, and "Made in India"
6. **No FAQ sections** — Removed from About and Services pages per design preference

---

## Last Updated
June 2026
