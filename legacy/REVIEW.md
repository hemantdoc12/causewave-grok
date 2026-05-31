# Project Review: CauseWave Innovations LLP Website

**Date**: 2026-04 (review performed)  
**Repository**: https://github.com/hemantdoc12/causewave-site  
**Local path**: grokwave_test (note: directory name does not match project)  
**Stack**: Astro 4.5 + Tailwind 3.4 + vanilla JS (static site)  
**Deployment**: GitHub Pages via GitHub Actions

---

## Summary

This is a clean, professional static marketing website for a CSR consulting firm. The codebase is small (~13 source files), well-organized into layouts/components/pages, and demonstrates solid understanding of Astro and Tailwind. Content is rich and storytelling-focused, which aligns with the business.

**Overall verdict**: The site is functional and visually coherent. However, it has accumulated technical debt in CSS, JavaScript organization, deployment configuration, and content maintenance. The most serious issues are in CI/CD reliability and sitemap correctness. No security vulnerabilities found, but several maintainability and correctness problems exist.

**Dominant risk areas**:
- Fragile and incorrect deployment workflow
- Outdated/mismatched content artifacts (sitemap, README)
- CSS specificity hacks (`!important`)
- Large monolithic client-side scripts

---

## Issues

### Issue 1 -- Severity: bug
- File: .github/workflows/deploy.yml:22-23
- Description: The workflow unconditionally deletes `node_modules` and the committed `package-lock.json` on every CI run before `npm install`. This defeats npm caching, makes builds slower and less reproducible, and risks installing different dependency versions than what was tested locally.
- Suggestion: Remove the `rm -rf` step entirely. Rely on `actions/setup-node` with proper caching (`cache: 'npm'` is already present). Only force clean installs for specific dependency update workflows.
- Status: open

### Issue 2 -- Severity: bug
- File: .github/workflows/deploy.yml:17,19
- Description: Uses `actions/checkout@v5` and `actions/setup-node@v5`. These versions are either non-existent or extremely new/unstable as of early 2026. The standard stable versions are v4 for both actions.
- Suggestion: Pin to known-good versions: `actions/checkout@v4` and `actions/setup-node@v4` (or the latest v4 patch). Add an explicit `actions/configure-pages` step for proper GitHub Pages setup if not already handled by the deploy action.
- Status: open

### Issue 3 -- Severity: bug
- File: public/sitemap.xml:22-26
- Description: Sitemap references `/founder` (which no longer exists) and is missing several current routes (`/insights`, `/insights/chitta-express-innovation`, `/privacy-policy`, `/terms-of-service`). All `<lastmod>` dates are in the future (2026-05-27). URLs do not consistently use trailing slashes despite `trailingSlash: 'always'` in astro.config.
- Suggestion: Generate the sitemap dynamically in Astro (using `astro-sitemap` integration or a small script in the build step) instead of maintaining a static file. Or at minimum, update it to match the actual route table and use current dates.
- Status: open

### Issue 4 -- Severity: suggestion
- File: src/styles/global.css:25-38
- Description: Extensive use of `!important` to override Tailwind padding utilities (`.py-20`, `.py-16`, `.py-12`). This is a sign of design changes being applied after initial component markup and creates brittle, hard-to-reason-about styling.
- Suggestion: Refactor to use consistent semantic section spacing via Tailwind or a small set of component classes (e.g. `.section`, `.section-compact`). Remove the `!important` declarations.
- Status: open

### Issue 5 -- Severity: suggestion
- File: src/pages/services.astro:215-332
- Description: A 118-line JavaScript block containing a large data object (`services`) and full modal implementation lives inside a single `.astro` page. This makes the file ~330 lines long, hurts maintainability, and mixes concerns (content + presentation + behavior).
- Suggestion: Extract the modal logic and service data into a separate component (e.g. `ServiceModal.astro` + `services.ts` data file) or use Astro's partial hydration / client directives more deliberately. At minimum, move the script to its own `.js` file imported as a module.
- Status: open

### Issue 6 -- Severity: suggestion
- File: src/pages/index.astro:162-166 (counter script)
- Description: The IntersectionObserver targets only the first `.counter` element's closest `section`. This is fragile; if the DOM structure changes or multiple counter sections exist, the animation may not trigger reliably.
- Suggestion: Observe the actual stats container (`.stats-strip` or the grid) directly instead of deriving from a child `.counter`.
- Status: open

### Issue 7 -- Severity: suggestion
- File: README.md (throughout)
- Description: Documentation is stale. It lists a `founder.astro` page that no longer exists, describes a different page structure than what is currently in `src/pages/`, and does not mention the insights section or legal pages.
- Suggestion: Update README to accurately reflect current routes, add screenshots or a short architecture note, and document the custom domain setup steps more clearly.
- Status: open

### Issue 8 -- Severity: suggestion
- File: src/layouts/BaseLayout.astro:44-47 + script
- File: src/components/Navbar.astro:58-68
- Description: Mix of inline `onclick` handlers, `getElementById` + manual class toggling, and duplicate mobile menu logic. No progressive enhancement or focus trap on mobile menu.
- Suggestion: Consider a small shared client-side module for UI primitives (back-to-top, mobile nav) or migrate simple interactions to Astro islands if interactivity grows. Add `aria-expanded` and focus management to the mobile menu button.
- Status: open

### Issue 9 -- Severity: nit
- File: Root directory + package.json
- Description: Local working directory is named `grokwave_test` while the actual project, npm package, and GitHub repo are all `causewave-site`. This creates confusion for anyone cloning or maintaining the project.
- Suggestion: Rename the local folder to `causewave-site` (or match whatever the intended product name is).
- Status: open

### Issue 10 -- Severity: nit
- File: src/pages/contact.astro:184-223 (form handler)
- Description: The contact form only constructs a `mailto:` link. After "submit", the user sees an alert and must manually send the email. No visual success state, no spam protection, and the form data is lost if the user closes the email client without sending.
- Suggestion: For a static site, this is acceptable, but improve UX: show a persistent "message prepared" state, pre-fill the email body more cleanly, or add a note that they must click send in their client. Consider a free form service (Formspree, Netlify Forms, etc.) for production.
- Status: open

### Issue 11 -- Severity: nit
- File: astro.config.mjs + multiple pages
- Description: Site URL, base path, and social image URLs are hardcoded in multiple places (config, BaseLayout, pages). Changing the deployment target requires edits in several files.
- Suggestion: Centralize site metadata in `src/consts.ts` (or Astro's `import.meta.env` + a config object) and import it everywhere.
- Status: open

### Issue 12 -- Severity: nit
- File: _old/ directory (11 tracked files)
- Description: A full legacy HTML/CSS/JS version of the site is committed to the repository. This increases repo size and creates ambiguity about which code is authoritative.
- Suggestion: Remove `_old/` from git history (using `git rm -r --cached _old/` + a follow-up commit, or filter-branch/BFG if desired). Keep a local backup or zip if historical reference is needed.
- Status: open

### Issue 13 -- Severity: nit
- File: src/pages/privacy-policy.astro:17 and terms-of-service.astro:17 + sitemap
- Description: Legal pages and sitemap contain future dates ("May 29, 2026", "2026-05-27"). While possibly intentional for a planned launch, this looks like placeholder data that was never updated.
- Suggestion: Set realistic "last updated" dates that reflect actual content changes.
- Status: open

---

## Positive Observations

- Clear component/layout separation and consistent prop drilling for `activePage` and `base`.
- Good use of Astro's `define:vars` for passing data to scripts.
- Thoughtful focus management in the services modal (stores `lastFocusedElement`, restores on close, Escape key support).
- Rich, authentic content that effectively communicates expertise and impact.
- Proper canonical URLs and Open Graph tags in BaseLayout.
- `.gitignore` correctly excludes `dist/`, `node_modules/`, and `.astro/`.
- Responsive design with a functional mobile menu.
- Consistent visual language and color tokens.

---

## Recommended Next Steps (Prioritized)

1. **Fix the deployment workflow** (Issues 1-2) — this is the highest risk item.
2. **Regenerate or fix the sitemap** (Issue 3) and add a build step to keep it current.
3. **Address the CSS `!important` debt** (Issue 4) before more pages are added.
4. **Refactor the services modal** into a reusable component (Issue 5).
5. **Clean up documentation and legacy directories** (Issues 7, 9, 12).
6. Consider adding a proper 404 page (`src/pages/404.astro`) and an RSS feed for the insights section.

---

**Review artifacts**:
- This file: `REVIEW.md`
- No diff was reviewed (working tree was clean at time of review).

**Reviewer note**: The project shows clear ownership and domain expertise from the founder. Most issues are maintainability and configuration hygiene rather than functional defects. With the deployment and sitemap fixes, the site would be in excellent shape for a professional corporate presence.
