---
name: ship-weekly
description: >
  Ship Causewave Sunday weeklies (Impact Weekly and AI Health Weekly) to the
  live site: cleaned PDFs, issue registry, landings, hub date, sitemap lastmod,
  commit, push, GitHub Pages. Use when the user says weeklies added, week_N,
  Sunday weekly, ship weekly, or /ship-weekly.
user-invocable: true
---

# Ship Sunday weeklies

Two titles: `impact-weekly` and `ai-health-weekly`. The PDF is the issue. The HTML page is the landing (headline, dek, highlights, iframe, download, LinkedIn). Do not rewrite the paper as an HTML essay.

## Inputs

Take the source folder (usually `weekly/week_N/`) and the two LinkedIn URLs. If either is missing, ask once.

## 1. Template

Read `src/data/weeklies.ts` and the newest `src/pages/weekly/{title}/{date}/index.astro`. Copy that shape. Next `number` is last `No. N` plus one. Date is the Sunday on the PDF masthead.

## 2. Copy PDFs

Hashed files in `weekly/week_N/` stay untracked.

```
cp weekly/week_N/<impact-source>.pdf public/weekly/impact-weekly-YYYY-MM-DD.pdf
cp weekly/week_N/<ai-source>.pdf public/weekly/ai-health-weekly-YYYY-MM-DD.pdf
```

Read page counts from the PDFs (Impact is usually 2 pages, AI Health 5).

## 3. Landing copy

`pdftotext -layout` each PDF. Follow the PDF masthead when it diverges from LinkedIn.

For each title fill `WeeklyIssue`:

- `headline` — Impact: THE WEEK IN CONTEXT; AI Health: THE PRESENTING WEEK
- `dek` — deck under that headline
- `excerpt` — 2–3 sentences
- `description` — 130–160 characters, `{Title} Vol. I No. N — … Prepared end to end by AI.`
- `highlights` — six bullets from WHAT CHANGED / FINDINGS
- `quote` — QUOTE OF THE WEEK
- `dateLabel` — `Sunday, D Mon YYYY`
- `nextIssueLabel` — following Sunday as `Sunday, D Month YYYY`
- `path` — `weekly/{title}/{YYYY-MM-DD}/`
- `pdfPath` — `weekly/{title}-{YYYY-MM-DD}.pdf`

Leave older issues' `nextIssueLabel` as they are. Hub next date is the line in `src/pages/weekly/index.astro`.

## 4. LinkedIn permalinks

Fetch each given URL. A feed URN (`/feed/update/urn:li:activity:{id}/`) resolves to `https://www.linkedin.com/posts/dr-hemant-patel-b842a5143_{slug}-activity-{id}-{suffix}`. Use that permalink. Match URL to title by reading the post, not by order.

## 5. Register and pages

Append both issues to `WEEKLY_ISSUES`.

Add wrappers:

```
---
import WeeklyIssuePage from '../../../../components/WeeklyIssuePage.astro';
import { getWeeklyIssue } from '../../../../data/weeklies';

const issue = getWeeklyIssue('impact-weekly', 'YYYY-MM-DD')!;
---

<WeeklyIssuePage issue={issue} />
```

Same for `ai-health-weekly`.

Set the hub line in `src/pages/weekly/index.astro` to the following Sunday.

In `astro.config.mjs` `LASTMOD_BY_PATH`, set the issue date on `/weekly/`, `/insights/`, both new issue paths, and both previous-issue paths.

Insights teasers already use `latestIssue`; do not edit `src/pages/insights/index.astro` for a weekly ship.

## 6. Build

`npm run build`. Confirm new routes, hub shows the new number, previous issue pages have Read No. N, Insights teasers, sitemap lastmod, and PDF byte sizes.

## 7. Ship

Repo `hemantdoc12/causewave-grok`, branch `main`, workflow `.github/workflows/deploy.yml`, live `https://causewave.in`.

Commit only:

- `public/weekly/impact-weekly-YYYY-MM-DD.pdf`
- `public/weekly/ai-health-weekly-YYYY-MM-DD.pdf`
- `src/data/weeklies.ts`
- `src/pages/weekly/impact-weekly/{date}/index.astro`
- `src/pages/weekly/ai-health-weekly/{date}/index.astro`
- `src/pages/weekly/index.astro`
- `astro.config.mjs`

Leave `weekly/`, `brochure.html`, `causewave_marketing/`, and `seo_results/` out of the commit.

Message: `Add Sunday weeklies Vol. I No. N for {D Mon YYYY}`

Push `main`. Watch the Pages run for this SHA until success. `github__actions_list` can be stale; `https://api.github.com/repos/hemantdoc12/causewave-grok/actions/runs` is current.

## 8. Live check

Confirm needles on `/weekly/`, both new issues, both previous issues (Read No. N), `/insights/`, and `sitemap-0.xml`. GET both PDFs and match local bytes. Click through in the browser when those tools exist.

## 9. Memory

Update workspace topics for weeklies and site-deploy with commit, Pages run id, live paths, LinkedIn permalinks, PDF bytes, and the hub next-issue Sunday.
