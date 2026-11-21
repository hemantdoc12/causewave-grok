---
name: publish-insight
description: >
  Publish a Causewave insight from a LinkedIn article onto the live site
  (series part, special, or guide): data files, article page, lastmod,
  previous-part link, commit, push, GitHub Pages. Use when the user says
  publish article, add insight, new series part, LinkedIn pulse on-site,
  or /publish-insight.
user-invocable: true
---

# Publish an insight

LinkedIn first, then the on-site page. Author is Dr. Hemant L. Patel.

## Inputs

Take the LinkedIn pulse URL and the kind: series part, special, or standalone guide. If the kind is unclear, ask once.

Fetch the pulse for title, canonical URL, and body. Slug from the title the way existing insights are slugged (short, hyphenated, no author suffix).

## 1. Sibling template

Read the nearest sibling and copy its layout.

- Series part: latest part in that series (`src/data/series.ts`, `src/pages/insights/<prev-slug>/index.astro`). Use `BaseLayout`, `getInsightBySlug`, `buildArticleJsonLd`, `SeriesNav`, `getAdjacentParts`.
- Special: `src/pages/insights/the-agency-took-the-cheque/index.astro`. `kind: 'special'`. Not a numbered part.
- Guide: a recent file under `src/pages/insights/` that is neither a series slug nor a special.

Reuse an existing `public/images/og/` image unless the user supplies a new one.

## 2. Register

Add an `InsightPost` to `src/data/insights.ts`. `description` about 160 characters.

Series part: also append a `SeriesPart` with `linkedInUrl` in `src/data/series.ts`. Update or drop `upcoming`. `SeriesNav` “Part X of Y” is `series.parts.length`.

Special: `kind: 'special'`. Add a related card on the series hub and a close-link from the last series part. Do not append it to `parts`. Insights index already lists specials from `kind`.

## 3. Page

Write `src/pages/insights/<slug>/index.astro` in the sibling’s voice: short paragraphs, tables where the sibling uses tables, LinkedIn footer, CSR CTA. Internal-link earlier parts.

On the previous series part, turn a “Next week” teaser into a live link to this slug (pattern in `src/pages/insights/132-districts/index.astro`).

## 4. Lastmod

In `astro.config.mjs` `LASTMOD_BY_PATH`, set today on `/insights/`, `/insights/<slug>/`, the series hub when this is a part or related special, and the previous part path.

## 5. Build

`npm run build`. Confirm the new route, hub listing, previous-part next link, and sitemap lastmod.

## 6. Ship

Repo `hemantdoc12/causewave-grok`, branch `main`, workflow `.github/workflows/deploy.yml`, live `https://causewave.in`.

Commit only the files this ship added or edited. Leave `weekly/`, `brochure.html`, `causewave_marketing/`, and `seo_results/` out of the commit.

Message: `Add {series} Part N: {title}` or `Add {kind}: {title}`.

Push `main`. Watch the Pages run for this SHA until success. `github__actions_list` can be stale; `https://api.github.com/repos/hemantdoc12/causewave-grok/actions/runs` is current.

## 7. Live check

Confirm needles on the new page, series hub, `/insights/`, previous part, and `sitemap-0.xml`. Click through in the browser when those tools exist.

## 8. Memory

Update workspace topics for the insight series and site-deploy with commit, Pages run id, live URL, and LinkedIn pulse.
