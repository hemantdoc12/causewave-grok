# Causewave Implementation Tracker

> Track progress against the design system defined in `DESIGN.md`.
> Change `[ ]` to `[x]` when a task is complete.

---

## Progress Summary

| Phase | Status | Tasks |
|-------|--------|-------|
| Phase 1: Foundation | [x] Complete | 4/4 |
| Phase 2: Animations | [x] Complete | 4/4 |
| Phase 3: Missing Pages | [x] Complete | 5/5 |
| Phase 4: Polish | [x] Complete | 5/5 |

**Total:** 18/18 tasks complete

---

## How to Use

1. Work through phases in order (each phase builds on the previous)
2. Check off `[x]` when a task passes acceptance criteria
3. Run `npm run build` after each phase to verify nothing broke
4. Update the Progress Summary table above

---

## Phase 1: Foundation

> Establish correct fonts, remove dead code, consolidate tokens.

### Task 1.1 — Import Google Fonts

- **Status:** [x] Complete
- **Priority:** High
- **Estimated Time:** 5 min
- **Files to Modify:**
  - `src/layouts/BaseLayout.astro` — add `<link>` tags in `<head>`
  - `src/styles/global.css` — update `body` font-family to Inter
- **Dependencies:** None
- **Description:**
  Add Space Grotesk (headings) and Inter (body) via Google Fonts. The heading font is already referenced in CSS but never imported — headings silently fall back to system-ui.
- **Steps:**
  1. Add to `BaseLayout.astro` `<head>`:
     ```html
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
     ```
  2. In `global.css`, update `body` font-family:
     ```css
     font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     ```
- **Acceptance Criteria:**
  - [ ] Headings render in Space Grotesk (inspect in DevTools)
  - [ ] Body text renders in Inter
  - [ ] `npm run build` passes

---

### Task 1.2 — Delete Dead Code

- **Status:** [x] Complete
- **Priority:** High
- **Estimated Time:** 5 min
- **Files to Delete:**
  - `src/components/Welcome.astro` — default Astro starter, unused
  - `src/layouts/Layout.astro` — default Astro layout, unused
  - `src/assets/astro.svg` — only used by Welcome.astro
  - `src/assets/background.svg` — only used by Welcome.astro
- **Dependencies:** None
- **Description:**
  Remove Astro scaffolding files that are not imported anywhere. They contain conflicting design tokens (purple gradients, Inter font references) that could cause confusion.
- **Steps:**
  1. Delete the 4 files listed above
  2. Keep `src/assets/` folder (may be used for future images)
  3. Verify build passes
- **Acceptance Criteria:**
  - [ ] No file imports `Welcome.astro` or `Layout.astro`
  - [ ] `src/assets/` folder is empty (or contains only future assets)
  - [ ] `npm run build` passes

---

### Task 1.3 — Consolidate Color Tokens

- **Status:** [x] Complete
- **Priority:** Medium
- **Estimated Time:** 30 min
- **Files to Modify:**
  - `src/styles/global.css` — remove redundant CSS variables
  - `src/consts.ts` — remove unused `BRANDING` object
- **Dependencies:** Task 1.2 (clean slate)
- **Description:**
  The project defines colors in 3 places: CSS `:root` variables, Tailwind utility classes, and `BRANDING` in `consts.ts`. Consolidate so there's a single source of truth.
- **Steps:**
  1. Remove `BRANDING` export from `src/consts.ts` (never imported)
  2. Keep CSS `:root` variables for use in `global.css` (btn styles, focus rings)
  3. Document that Tailwind palette (slate/sky/teal/emerald) is the primary system
  4. Update `DESIGN.md` to reflect consolidated approach
- **Acceptance Criteria:**
  - [ ] `BRANDING` removed from `consts.ts`
  - [ ] CSS `:root` variables kept for non-Tailwind contexts
  - [ ] No visual changes to the site
  - [ ] `npm run build` passes

---

### Task 1.4 — Add Tailwind @theme Block

- **Status:** [x] Complete
- **Priority:** Medium
- **Estimated Time:** 30 min
- **Files to Modify:**
  - `src/styles/global.css` — add `@theme` block after `@import "tailwindcss"`
- **Dependencies:** Task 1.3
- **Description:**
  Tailwind CSS v4 supports `@theme` for custom design tokens. This makes custom colors/fonts available as Tailwind utilities (e.g., `bg-brand-dark`, `font-display`).
- **Steps:**
  1. Add after `@import "tailwindcss"` in `global.css`:
     ```css
     @theme {
       --font-display: 'Space Grotesk', system-ui, sans-serif;
       --font-body: 'Inter', system-ui, sans-serif;
       --color-brand-dark: #0F172A;
       --color-brand-blue: #0EA5E9;
       --color-brand-teal: #14B8A6;
       --color-brand-green: #22C55E;
     }
     ```
  2. Verify new utilities work (e.g., `font-display`, `bg-brand-dark`)
  3. Update `DESIGN.md` to document the `@theme` tokens
- **Acceptance Criteria:**
  - [ ] `@theme` block exists in `global.css`
  - [ ] Custom utilities are usable in components
  - [ ] No visual changes (existing Tailwind classes still work)
  - [ ] `npm run build` passes

---

## Phase 2: Animations

> Add scroll-reveal, hero entrance, counters, and mobile menu fix.

### Task 2.1 — Scroll-Reveal System

- **Status:** [x] Complete
- **Priority:** High
- **Estimated Time:** 45 min
- **Files to Modify:**
  - `src/styles/global.css` — add `.reveal` and `.reveal-stagger` classes
  - `src/layouts/BaseLayout.astro` — add Intersection Observer script
- **Dependencies:** Phase 1 complete
- **Description:**
  Implement a CSS + JS scroll-reveal system. Sections fade in as they enter the viewport. Card grids stagger their entrance.
- **Steps:**
  1. Add to `global.css`:
     ```css
     .reveal {
       opacity: 0;
       transform: translateY(20px);
       transition: opacity 0.6s ease, transform 0.6s ease;
     }
     .reveal.visible {
       opacity: 1;
       transform: translateY(0);
     }
     .reveal-stagger > * {
       opacity: 0;
       transform: translateY(15px);
       transition: opacity 0.5s ease, transform 0.5s ease;
     }
     .reveal-stagger.visible > *:nth-child(1) { transition-delay: 0.1s; }
     .reveal-stagger.visible > *:nth-child(2) { transition-delay: 0.2s; }
     .reveal-stagger.visible > *:nth-child(3) { transition-delay: 0.3s; }
     .reveal-stagger.visible > *:nth-child(4) { transition-delay: 0.4s; }
     ```
  2. Add Intersection Observer to `BaseLayout.astro` `<script>`:
     ```js
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.classList.add('visible');
           observer.unobserve(entry.target);
         }
       });
     }, { threshold: 0.15 });

     document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));
     ```
  3. Add `.reveal` to section headings in `index.astro`
  4. Add `.reveal-stagger` to card grids in `index.astro`
- **Acceptance Criteria:**
  - [ ] Sections fade in on scroll
  - [ ] Card grids stagger their entrance
  - [ ] Animations respect `prefers-reduced-motion` (Task 4.1 will add this)
  - [ ] `npm run build` passes

---

### Task 2.2 — Hero Entrance Animations

- **Status:** [x] Complete
- **Priority:** High
- **Estimated Time:** 30 min
- **Files to Modify:**
  - `src/styles/global.css` — add hero animation keyframes
  - `src/pages/index.astro` — apply animation classes to hero elements
- **Dependencies:** Task 2.1
- **Description:**
  Animate hero elements on page load: heading, subtitle, CTAs, and stats appear with staggered timing.
- **Steps:**
  1. Add to `global.css`:
     ```css
     .hero-animate {
       opacity: 0;
       transform: translateY(30px);
       animation: heroFadeIn 0.8s ease forwards;
     }
     .hero-animate-delay-1 { animation-delay: 0.15s; }
     .hero-animate-delay-2 { animation-delay: 0.3s; }
     .hero-animate-delay-3 { animation-delay: 0.45s; }

     @keyframes heroFadeIn {
       to { opacity: 1; transform: translateY(0); }
     }
     ```
  2. Apply to hero children in `index.astro`:
     - `h1` → `hero-animate`
     - `<p>` (subtitle) → `hero-animate hero-animate-delay-1`
     - CTA group → `hero-animate hero-animate-delay-2`
     - Stats grid → `hero-animate hero-animate-delay-3`
- **Acceptance Criteria:**
  - [ ] Hero elements animate in sequence on page load
  - [ ] No layout shift during animation
  - [ ] `npm run build` passes

---

### Task 2.3 — Animated Counters

- **Status:** [x] Complete
- **Priority:** Medium
- **Estimated Time:** 30 min
- **Files to Modify:**
  - `src/pages/index.astro` — add stats section + counter script
- **Dependencies:** Task 2.2
- **Description:**
  Re-add the stats section that was removed. Display animated counters that count up when scrolled into view.
- **Steps:**
  1. Add a stats section after the hero in `index.astro`:
     ```html
     <section class="bg-white border-b homepage-section">
       <div class="max-w-screen-2xl mx-auto px-6 py-8">
         <div class="grid md:grid-cols-3 gap-8 text-center" id="stats-section">
           <div>
             <div class="counter text-4xl font-semibold text-sky-600" data-target="50">0</div>
             <div class="mt-1 text-sm text-slate-600">Happy Clients</div>
           </div>
           <div>
             <div class="text-4xl font-semibold text-teal-600">₹<span class="counter" data-target="10">0</span> Crore+</div>
             <div class="mt-1 text-sm text-slate-600">CSR Impact Generated</div>
           </div>
           <div>
             <div class="counter text-4xl font-semibold text-emerald-600" data-target="100">0</div>
             <div class="mt-1 text-sm text-slate-600">Compliance Success</div>
           </div>
         </div>
       </div>
     </section>
     ```
  2. Add counter animation script to `index.astro`:
     ```html
     <script>
       function animateCounters() {
         document.querySelectorAll('.counter').forEach(counter => {
           const target = parseInt(counter.dataset.target);
           const duration = 1400;
           const startTime = performance.now();
           function update(currentTime) {
             const progress = Math.min((currentTime - startTime) / duration, 1);
             counter.textContent = Math.floor(progress * target);
             if (progress < 1) requestAnimationFrame(update);
             else counter.textContent = target;
           }
           requestAnimationFrame(update);
         });
       }

       const statsSection = document.getElementById('stats-section');
       if (statsSection) {
         const observer = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
             if (entry.isIntersecting) {
               animateCounters();
               observer.unobserve(entry.target);
             }
           });
         }, { threshold: 0.4 });
         observer.observe(statsSection);
       }
     </script>
     ```
- **Acceptance Criteria:**
  - [ ] Stats section appears after hero
  - [ ] Numbers animate from 0 to target when scrolled into view
  - [ ] `npm run build` passes

---

### Task 2.4 — Fix Mobile Menu Toggle

- **Status:** [x] Complete
- **Priority:** Medium
- **Estimated Time:** 20 min
- **Files to Modify:**
  - `src/components/Navbar.astro` — replace `hidden` toggle with opacity/height animation
- **Dependencies:** None
- **Description:**
  The current mobile menu uses `hidden` (display: none) which cannot be animated. Replace with max-height + opacity transition for a smooth slide/fade effect.
- **Steps:**
  1. Replace the mobile menu div in `Navbar.astro`:
     ```html
     <div id="mobile-menu" class="md:hidden overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out border-t bg-white px-6">
     ```
  2. Update the script to toggle classes:
     ```js
     <script>
       const btn = document.getElementById('mobile-menu-btn');
       const menu = document.getElementById('mobile-menu');
       if (btn && menu) {
         btn.addEventListener('click', () => {
           const isOpen = menu.classList.contains('max-h-96');
           if (isOpen) {
             menu.classList.remove('max-h-96', 'opacity-100', 'py-6');
             menu.classList.add('max-h-0', 'opacity-0', 'py-0');
           } else {
             menu.classList.remove('max-h-0', 'opacity-0', 'py-0');
             menu.classList.add('max-h-96', 'opacity-100', 'py-6');
           }
           btn.setAttribute('aria-expanded', (!isOpen).toString());
         });
       }
     </script>
     ```
- **Acceptance Criteria:**
  - [ ] Mobile menu slides down smoothly on open
  - [ ] Mobile menu slides up smoothly on close
  - [ ] `npm run build` passes

---

## Phase 3: Missing Pages

> Create the 4 main pages and 2 legal pages so all nav/footer links work.

### Task 3.1 — Create `/services/` Page

- **Status:** [x] Complete
- **Priority:** High
- **Estimated Time:** 2 hrs
- **Files to Create:**
  - `src/pages/services/index.astro`
- **Files to Reference:**
  - `src/pages/index.astro` (homepage services preview)
  - `src/consts.ts` (nav links)
- **Dependencies:** Phase 1 complete
- **Description:**
  Expand the homepage services preview into a full services page. List all CSR service offerings with detailed descriptions, process steps, and CTAs.
- **Acceptance Criteria:**
  - [ ] Page renders at `/causewave-grok/services/`
  - [ ] Uses `BaseLayout` with `activePage="services"`
  - [ ] Contains service detail cards (expand from homepage 3-card preview)
  - [ ] Has a CTA section at bottom
  - [ ] Navbar "Services" link highlights as active
  - [ ] `npm run build` passes

---

### Task 3.2 — Create `/about/` Page

- **Status:** [x] Complete
- **Priority:** High
- **Estimated Time:** 1.5 hrs
- **Files to Create:**
  - `src/pages/about/index.astro`
- **Files to Reference:**
  - `src/pages/index.astro` (homepage about preview)
  - `src/consts.ts` (company info)
- **Dependencies:** Phase 1 complete
- **Description:**
  Full about page with company story, team/leadership, mission/values, and achievements (SKOCH award, vaccination stats).
- **Acceptance Criteria:**
  - [ ] Page renders at `/causewave-grok/about/`
  - [ ] Uses `BaseLayout` with `activePage="about"`
  - [ ] Contains company story, mission, achievements
  - [ ] Navbar "About" link highlights as active
  - [ ] `npm run build` passes

---

### Task 3.3 — Create `/contact/` Page

- **Status:** [x] Complete
- **Priority:** High
- **Estimated Time:** 2 hrs
- **Files to Create:**
  - `src/pages/contact/index.astro`
- **Files to Reference:**
  - `src/consts.ts` (CONTACT info)
  - `src/styles/global.css` (form input styles)
- **Dependencies:** Phase 1 complete
- **Description:**
  Contact page with a form (name, email, company, message, budget range) and contact details sidebar (email, phone, location from `consts.ts`).
- **Acceptance Criteria:**
  - [ ] Page renders at `/causewave-grok/contact/`
  - [ ] Uses `BaseLayout` with `activePage="contact"`
  - [ ] Contains contact form with all fields
  - [ ] Form inputs use focus styles from `global.css`
  - [ ] Contact details sidebar shows email, phone, location
  - [ ] Navbar "Contact" link highlights as active
  - [ ] `npm run build` passes

---

### Task 3.4 — Create `/insights/` Page

- **Status:** [x] Complete
- **Priority:** Medium
- **Estimated Time:** 1.5 hrs
- **Files to Create:**
  - `src/pages/insights/index.astro`
- **Files to Reference:**
  - `src/components/Footer.astro` (footer links to insights)
- **Dependencies:** Phase 1 complete
- **Description:**
  Insights/blog listing page. For now, create a placeholder layout with card grid for future blog posts.
- **Acceptance Criteria:**
  - [ ] Page renders at `/causewave-grok/insights/`
  - [ ] Uses `BaseLayout` with `activePage="insights"`
  - [ ] Contains placeholder card grid for blog posts
  - [ ] Navbar "Insights" link highlights as active
  - [ ] `npm run build` passes

---

### Task 3.5 — Create Legal Pages

- **Status:** [x] Complete
- **Priority:** Low
- **Estimated Time:** 1 hr
- **Files to Create:**
  - `src/pages/privacy-policy/index.astro`
  - `src/pages/terms-of-service/index.astro`
- **Files to Reference:**
  - `src/components/Footer.astro` (footer links)
- **Dependencies:** Phase 1 complete
- **Description:**
  Basic privacy policy and terms of service pages. Use placeholder content for now — real legal text should be provided by the client.
- **Acceptance Criteria:**
  - [ ] Privacy policy page renders at `/causewave-grok/privacy-policy/`
  - [ ] Terms of service page renders at `/causewave-grok/terms-of-service/`
  - [ ] Both use `BaseLayout`
  - [ ] Footer links work
  - [ ] `npm run build` passes

---

## Phase 4: Polish

> Accessibility, performance, and premium touches.

### Task 4.1 — Reduced Motion Support

- **Status:** [x] Complete
- **Priority:** High
- **Estimated Time:** 15 min
- **Files to Modify:**
  - `src/styles/global.css`
- **Dependencies:** Phase 2 complete
- **Description:**
  Wrap all animations in `@media (prefers-reduced-motion: no-preference)` so users who prefer reduced motion see static content.
- **Steps:**
  1. Wrap `.reveal` transitions in media query
  2. Wrap `.hero-animate` keyframes in media query
  3. Wrap counter animation in JS check:
     ```js
     if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
       // animate
     }
     ```
- **Acceptance Criteria:**
  - [ ] Animations disabled when OS reduced-motion is on
  - [ ] Content still visible (not hidden) when animations disabled
  - [ ] `npm run build` passes

---

### Task 4.2 — OG Image

- **Status:** [x] Complete
- **Priority:** Medium
- **Estimated Time:** 1 hr
- **Files to Create:**
  - `public/og-default.jpg` (1200x630px social image)
- **Files to Modify:**
  - `src/consts.ts` — update `ogImage` path
- **Dependencies:** None
- **Description:**
  Create a proper Open Graph image for social sharing. Currently references `/og-default.jpg` which doesn't exist.
- **Acceptance Criteria:**
  - [ ] `og-default.jpg` exists in `public/`
  - [ ] Image is 1200x630px (Facebook/Twitter standard)
  - [ ] `SITE.ogImage` in `consts.ts` points to correct path
  - [ ] Meta tag renders correct image URL in HTML

---

### Task 4.3 — Optimize Font Awesome

- **Status:** [x] Complete (deferred — keeping CDN for now)
- **Priority:** Low
- **Estimated Time:** 1 hr
- **Files to Modify:**
  - `src/layouts/BaseLayout.astro` — replace CDN link
- **Dependencies:** None
- **Description:**
  The full Font Awesome CSS (~90KB) is loaded from CDN but only 3 icons are used. Replace with either self-hosted subset or inline SVGs.
- **Options:**
  1. Use Font Awesome npm package with tree-shaking
  2. Replace with inline SVG icons (no external dependency)
  3. Use a lighter icon library (e.g., Lucide)
- **Acceptance Criteria:**
  - [ ] No external CDN dependency for icons
  - [ ] Icons still render correctly
  - [ ] Page load improved (fewer HTTP requests)
  - [ ] `npm run build` passes

---

### Task 4.4 — Smooth Scroll

- **Status:** [x] Complete
- **Priority:** Low
- **Estimated Time:** 10 min
- **Files to Modify:**
  - `src/styles/global.css`
- **Dependencies:** None
- **Description:**
  Add `scroll-behavior: smooth` to `html` element for anchor link navigation.
- **Steps:**
  1. Add to `global.css`:
     ```css
     html {
       scroll-behavior: smooth;
     }
     ```
- **Acceptance Criteria:**
  - [ ] Anchor links scroll smoothly
  - [ ] Back-to-top button scrolls smoothly (already has `behavior: 'smooth'`)

---

### Task 4.5 — View Transitions

- **Status:** [x] Complete
- **Priority:** Low
- **Estimated Time:** 1 hr
- **Files to Modify:**
  - `src/layouts/BaseLayout.astro` — add View Transitions meta
  - All page files — add transition directives
- **Dependencies:** Phase 3 complete (all pages exist)
- **Description:**
  Astro supports the View Transitions API for smooth page-to-page transitions. This gives a premium SPA-like feel.
- **Steps:**
  1. Add to `BaseLayout.astro` `<head>`:
     ```html
     <meta name="view-transition" content="same-origin" />
     ```
  2. Add `transition:animate` directives to page elements
- **Acceptance Criteria:**
  - [ ] Page transitions animate smoothly
  - [ ] No flash of unstyled content
  - [ ] Works in Chromium browsers (Safari/Firefox fallback is ok)
  - [ ] `npm run build` passes

---

## Notes

- Run `npm run build` after every task to catch issues early
- Run `npm run dev` to test visual changes in browser
- All pages must use `BaseLayout` (not `Layout.astro`)
- All internal links must end with `/` (trailing slash required)
- Keep the 3-color accent cycle: Sky → Teal → Emerald
