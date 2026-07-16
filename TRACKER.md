# Causewave Implementation Tracker

> Track progress against design + SEO workstreams.
> Change `[ ]` to `[x]` when a task is complete.

---

## Progress Summary

| Phase | Status | Tasks |
|-------|--------|-------|
| Phase 1: Foundation | [x] Complete | 4/4 |
| Phase 2: Animations | [x] Complete | 4/4 |
| Phase 3: Missing Pages | [x] Complete | 5/5 |
| Phase 4: Polish | [x] Complete | 5/5 |
| **Phase 5: Technical SEO (P0)** | [x] Complete | 5/5 |
| **Phase 6: Content SEO (P1)** | [x] Complete | 4/4 |
| **Phase 7: Polish & Ops (P2)** | [x] Complete | 5/5 |
| **Phase 8: Competitive keywords** | [x] Complete | 3/3 |

**Design system total:** 18/18 complete  
**SEO workstream total:** 17/17 complete  
**Last updated:** 2026-07-17

---

## How to Use

1. Work through phases in order (each phase builds on the previous)
2. Check off `[x]` when a task passes acceptance criteria
3. Run `npm run build` after each phase to verify nothing broke
4. Update the Progress Summary table above

---

## Context: Search Console baseline (2026-07-17)

### Performance
Source: `seo_results/causewave.in-Performance-on-Search-2026-07-17.xlsx`

| Metric | Value |
|--------|-------|
| Clicks (Jul 1–14) | 1 |
| Impressions | 14 |
| Only converting page | `/insights/founder-story/` (pos ~4) |
| Weak brand query | `causewave` avg pos ~20 |
| Opportunity page | CSR compliance guide (8 impr, pos ~66) |

### Index coverage (Page indexing)
Source: `seo_results/causewave.in-Coverage-2026-07-17.xlsx`

| Status (as of ~2026-07-10) | Count |
|----------------------------|------:|
| Indexed | 10 |
| Not indexed | 7 |

**Not indexed breakdown (critical issues):**

| Reason | Pages | Interpretation / action |
|--------|------:|-------------------------|
| Page with redirect | 3 | Expected: `http→https`, `www→apex`, no-trailing-slash→slash, `github.io→causewave.in`. Not bugs — validation can be started after deploy. |
| Alternative page with proper canonical tag | 2 | Expected: alternate URLs correctly point at canonical. Confirms canonicals work. |
| Discovered – currently not indexed | 1 | Google knows the URL but has not crawled yet — request indexing after deploy for weakest pages. |
| Crawled - currently not indexed | 1 | Crawled but not chosen for index — usually thin/low-priority; content expansion + internal links address this. |

**Pre-deploy index hygiene applied:** brochure `noindex` + `robots.txt` Disallow; stronger titles/content; human breadcrumbs; no fake SearchAction.

---

## Phase 5: Technical SEO (P0)

> Fix crawl/schema/internal-link foundations before investing more in content.

### Task 5.1 — Human breadcrumb labels + nested trails

- **Status:** [x] Complete
- **Priority:** High
- **Files:**
  - `src/layouts/BaseLayout.astro` — `breadcrumbLabel`, `breadcrumbParent`
  - All pages with `canonicalPath`
- **Done:** Nested insights emit `Home → Insights → <title>`; top-level pages use human labels.

### Task 5.2 — Remove fake SearchAction schema

- **Status:** [x] Complete
- **Priority:** High
- **Files:** `src/pages/index.astro`
- **Done:** `WebSite` JSON-LD retained without `potentialAction` / `/search`.

### Task 5.3 — Article OG type + Article JSON-LD on insight posts

- **Status:** [x] Complete
- **Priority:** High
- **Files:**
  - `src/layouts/BaseLayout.astro` (`ogType`)
  - `src/data/insights.ts` (`buildArticleJsonLd`)
  - All four insight post pages
- **Done:** Each post has `og:type=article` and Article schema (headline, author, dates, publisher).

### Task 5.4 — Insights hub: list all on-site articles

- **Status:** [x] Complete
- **Priority:** High
- **Files:** `src/pages/insights/index.astro`, `src/data/insights.ts`
- **Done:** Founder feature + three on-site guide cards; LinkedIn demoted to secondary section.

### Task 5.5 — HTTPS hardening note + client redirect keep

- **Status:** [x] Complete
- **Priority:** Medium
- **Files:** `BaseLayout.astro`, `DEPLOYMENT.md`, `README.md`
- **Done:** Client redirect retained; Pages/DNS/GSC HTTPS checklist documented in `DEPLOYMENT.md`.

---

## Phase 6: Content SEO (P1)

### Task 6.1 — Expand CSR compliance guide (priority page)

- **Status:** [x] Complete
- **Priority:** High
- **Files:** `src/pages/insights/csr-compliance-companies-act-2013/index.astro`
- **Done:** Long-form guide: applicability, obligations, Schedule VII, unspent CSR, penalties, checklist, FAQ, internal links.

### Task 6.2 — Expand healthcare CSR design guide

- **Status:** [x] Complete
- **Priority:** High
- **Files:** `src/pages/insights/impactful-csr-programs-healthcare/index.astro`
- **Done:** Expanded framework, failure-mode table, links to founder / compliance / M&E / services.

### Task 6.3 — Expand CSR impact measurement framework

- **Status:** [x] Complete
- **Priority:** High
- **Files:** `src/pages/insights/measuring-csr-impact-framework/index.astro`
- **Done:** Four-step M&E with indicator table, MVP checklist, cross-links.

### Task 6.4 — Strengthen on-site internal linking on expanded posts

- **Status:** [x] Complete
- **Priority:** Medium
- **Files:** All insight posts
- **Done:** Guides cross-link each other + services/contact; founder story links to all three guides.

---

## Phase 7: Polish & Ops (P2)

### Task 7.1 — Footer NAP / contact signals

- **Status:** [x] Complete
- **Priority:** Medium
- **Files:** `src/components/Footer.astro`
- **Done:** Email, phone, location with mailto/tel links.

### Task 7.2 — Brochure `noindex`

- **Status:** [x] Complete
- **Priority:** Medium
- **Files:** `public/brochure.html`, `brochure.html`
- **Done:** `noindex, nofollow` meta added.

### Task 7.3 — Compress oversized logo assets

- **Status:** [x] Complete
- **Priority:** Medium
- **Files:** `public/images/logos/*`
- **Done:** PNG resized for display; WebP re-exported (`logo_2.png` ~800KB → ~60KB).

### Task 7.4 — Reduce Font Awesome CDN dependency

- **Status:** [x] Complete
- **Priority:** Medium
- **Files:** `src/components/Icon.astro`, `BaseLayout.astro`, pages using icons
- **Done:** Inline SVG `Icon` component; Font Awesome CDN removed from layout.

### Task 7.5 — README accuracy (live URL + structure)

- **Status:** [x] Complete
- **Priority:** Low
- **Files:** `README.md`, `DEPLOYMENT.md`
- **Done:** Live URL `https://causewave.in`; structure matches repo; SEO tracker referenced.

---

## Phase 8: Competitive keywords (Sattva-class category terms)

> Align titles, meta, schema, and on-page language with category leaders such as [Sattva Consulting](https://www.sattva.co.in/) — without copying brand claims. Own “CSR consulting firm India”, corporate CSR strategy, programme design, impact measurement/assessment, compliance, and Causewave’s public-health differentiator.

### Task 8.1 — Keyword map + site defaults

- **Status:** [x] Complete
- **Files:** `src/data/seo-keywords.ts`, `src/consts.ts`
- **Done:** Central SEO map for home/about/services/contact/insights titles & descriptions; `SITE` defaults pull from map.

### Task 8.2 — Page titles, H1s, body, schema

- **Status:** [x] Complete
- **Files:** Home, About, Services, Contact, Insights, Footer, BaseLayout Organization schema
- **Done:** Competitive phrasing (CSR consulting firm India, impact measurement, programme design, corporate CSR & sustainability, Section 135). Organization/`ProfessionalService` schema with `knowsAbout` + `areaServed: India`. Homepage “who we work with” section for category coverage.

### Task 8.3 — Insight meta aligned to buyer intent

- **Status:** [x] Complete
- **Files:** `src/data/insights.ts`
- **Done:** Descriptions emphasise CSR compliance, healthcare programme design, impact measurement & assessment.

---

## Deferred (not in this sprint)

| Item | Why deferred |
|------|----------------|
| Astro Content Collections migration | `src/data/insights.ts` unblocks hub/schema; migrate when volume grows |
| Full LinkedIn article mirrors on-site | Editorial rewrite; hub already links externally |
| Self-host Google Fonts | Optional next performance pass |
| Google Business Profile / off-site brand | Outside codebase |

---

## Phase 1–4 archive (design system — complete)

<details>
<summary>Original design-system tasks (all complete)</summary>

Phases 1–4 covered fonts, dead-code removal, color tokens, Tailwind `@theme`, scroll-reveal, hero animations, counters, mobile menu, missing pages, and polish. See git history prior to the SEO workstream for full task text. **18/18 complete.**

</details>

---

## Definition of done (SEO sprint)

- [x] All Phase 5–7 tasks checked
- [x] `npm run build` succeeds
- [x] Dist HTML: human breadcrumbs, no SearchAction, article OG types on posts, hub links all posts
- [x] Expanded guides ship with internal links
- [x] Footer NAP + brochure noindex + smaller logos + no FA CDN
- [x] README reflects production domain
