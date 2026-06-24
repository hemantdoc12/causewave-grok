# Causewave Design System

> Single source of truth for all visual and interaction patterns across the Causewave website.

**Tech Stack:** Astro 6.4.2 · Tailwind CSS 4.3 · Vite  
**Site:** `https://hemantdoc12.github.io/causewave-grok/`  
**Last Updated:** June 2026

---

## Table of Contents

1. [Color System](#1-color-system)
2. [Typography](#2-typography)
3. [Spacing & Layout](#3-spacing--layout)
4. [Component Specs](#4-component-specs)
5. [Shadows & Radius](#5-shadows--radius)
6. [Transitions & Animation](#6-transitions--animation)
7. [Responsive Breakpoints](#7-responsive-breakpoints)
8. [Do's & Don'ts](#8-dos--donts)
9. [Known Issues to Fix](#9-known-issues-to-fix)
10. [Enhancement Roadmap](#10-enhancement-roadmap)

---

## 1. Color System

### Design Tokens (CSS Variables)

```css
:root {
  --color-primary-dark: #0F172A;   /* Primary actions, dark backgrounds */
  --color-accent-blue: #0EA5E9;    /* Focus rings, interactive highlights */
  --color-accent-teal: #14B8A6;    /* Secondary accent */
  --color-green-impact: #22C55E;   /* Success, impact metrics */
  --color-slate-50: #F8FAFC;       /* Page background */
  --color-slate-800: #1E293B;      /* Body text */
}
```

### Tailwind Palette Mapping

| Role | Tailwind Class | Hex | Usage |
|------|---------------|-----|-------|
| **Page Background** | `bg-slate-50` | `#F8FAFC` | `<body>`, default section bg |
| **Surface** | `bg-white` | `#FFFFFF` | Cards, navbar, modal backgrounds |
| **Body Text** | `text-slate-800` | `#1E293B` | Paragraphs, general content |
| **Muted Text** | `text-slate-600` | `#475569` | Descriptions, labels, secondary info |
| **Subtle Text** | `text-slate-500` | `#64748B` | Timestamps, copyright |
| **Footer Text** | `text-slate-400` | `#94A3B8` | Footer body copy |
| **Dark Background** | `bg-slate-900` | `#0F172A` | Footer, dark sections |
| **Hero Overlay** | `bg-slate-950/45` | `#020617 @ 45%` | Hero image overlay |

### Three-Color Accent System

Used consistently across services, stats, and interactive elements:

| Accent | Light (bg) | Dark (text/icon) | Usage |
|--------|-----------|-------------------|-------|
| **Sky** | `bg-sky-100` | `text-sky-600` | Primary accent, active nav, CTAs |
| **Teal** | `bg-teal-100` | `text-teal-600` | Secondary accent, alternating cards |
| **Emerald** | `bg-emerald-100` | `text-emerald-600` | Tertiary accent, impact/growth |

**Rule:** When using the 3-color system, always cycle Sky → Teal → Emerald in order. Never skip or repeat.

### Button Colors

| Variant | Background | Text | Border | Hover BG | Hover Border |
|---------|-----------|------|--------|----------|-------------|
| `.btn-primary` | `#0F172A` | `white` | none | `#1E293B` | none |
| `.btn-outline` | transparent | `#1E293B` | `#CBD5E1` | `#F1F5F9` | `#94A3B8` |
| Hero outline | transparent | `white` | `white/40` | `white/10` | `white/40` |

---

## 2. Typography

### Font Families

| Token | Font | Fallback | Usage |
|-------|------|----------|-------|
| **Headings** | Space Grotesk | `system-ui, -apple-system, sans-serif` | h1–h6 |
| **Body** | System UI | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | Paragraphs, nav, buttons |

**IMPORTANT:** Both fonts must be imported via Google Fonts in `BaseLayout.astro`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
```

Update `global.css` body font to Inter:
```css
body {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Type Scale

| Element | Mobile | Tablet/Desktop | Tailwind Classes |
|---------|--------|---------------|------------------|
| **Hero H1** | `text-4xl` (36px) | `text-5xl` → `text-6xl` (48→60px) | `text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-tight` |
| **Section H2** | `text-3xl` (30px) | `text-4xl` (36px) | `text-3xl md:text-4xl font-semibold tracking-tight` |
| **Card H3** | `text-xl` (20px) | `text-xl` (20px) | `text-xl font-semibold` |
| **Body Large** | `text-lg` (18px) | `text-lg` (18px) | `text-lg` |
| **Body Default** | `text-base` (16px) | `text-base` (16px) | `text-base` or no class |
| **Body Small** | `text-sm` (14px) | `text-sm` (14px) | `text-sm` |
| **Caption** | `text-xs` (12px) | `text-xs` (12px) | `text-xs` |

### Font Weights

| Weight | Tailwind | Usage |
|--------|----------|-------|
| 400 | `font-normal` | Body text, paragraphs |
| 500 | `font-medium` | Nav links, card CTAs, labels |
| 600 | `font-semibold` | Headings, buttons, stat numbers, section labels |
| 700 | `font-bold` | Avoid — use `font-semibold` for emphasis |

### Letter Spacing

| Class | Value | Usage |
|-------|-------|-------|
| `tracking-tighter` | `-0.05em` | Hero H1 only |
| `tracking-tight` | `-0.025em` | Section H2, all headings (via CSS) |
| `tracking-widest` | `0.1em` | Section labels ("WHAT WE DELIVER"), footer column headers |

### Line Heights

| Context | Value | Source |
|---------|-------|--------|
| Body text | `1.6` | CSS `body` rule |
| Headings | `1.15` | CSS `h1-h6` rule |
| Hero H1 | `1.25` | `leading-tight` class |
| Relaxed paragraphs | `1.625` | `leading-relaxed` class |

---

## 3. Spacing & Layout

### Container Pattern

Every section uses this wrapper:
```html
<div class="max-w-screen-2xl mx-auto px-6">
  <!-- content -->
</div>
```

| Token | Value | Usage |
|-------|-------|-------|
| Max width | `max-w-screen-2xl` (1536px) | All section content |
| Horizontal padding | `px-6` (24px) | Universal |
| Hero subtitle cap | `max-w-lg` (512px) | Hero description text |
| Footer brand cap | `max-w-xs` (320px) | Footer description text |

### Section Spacing

| Class | Mobile | Desktop (≥768px) | Usage |
|-------|--------|-------------------|-------|
| `.section` | `py-12` (48px) | `py-18` (72px) | Standard content sections |
| `.homepage-section` | `py-11` (44px) | `py-14` (56px) | Homepage sections (tighter) |

### Grid Patterns

| Layout | Classes | Context |
|--------|---------|---------|
| Hero | `grid md:grid-cols-12 gap-8` | 7-col text + 5-col logo |
| Service cards | `grid md:grid-cols-3 gap-6` | 3-card row |
| About section | `grid md:grid-cols-2 gap-10` | Text + stat cards |
| Stat cards | `grid grid-cols-2 gap-4` | 2x2 stat grid |
| Hero stats | `grid grid-cols-3 gap-4` | 3 inline stats |
| Footer | `grid md:grid-cols-12 gap-y-10` | 5 + 3 + 4 columns |

### Flex Patterns

| Pattern | Usage |
|---------|-------|
| `flex items-center justify-between` | Navbar, footer bottom bar |
| `flex flex-col sm:flex-row gap-4` | CTA button groups (stack → row) |
| `flex flex-col md:flex-row justify-between items-center` | Footer copyright row |
| `inline-flex items-center` | Buttons, card CTA links |

### Element Spacing (Margin/Padding Reference)

| Element | Margin | Padding |
|---------|--------|---------|
| Section header → content | `mb-10` | — |
| Card icon → title | `mb-4` | — |
| Card title → description | `mt-2` | — |
| Card description → CTA | `mt-4` | — |
| Hero h1 → subtitle | `mb-4` | — |
| Hero subtitle → CTAs | `mb-5` | — |
| Hero CTAs → stats | `mb-8` | — |
| Footer logo → description | `mb-3` | — |
| Footer section header → links | `mb-3` | — |
| Footer content → bottom bar | `mt-12` | `pt-8` |

---

## 4. Component Specs

### Buttons

```css
/* Base .btn */
display: inline-flex;
align-items: center;
justify-content: center;
font-weight: 600;
border-radius: 9999px;  /* pill shape */
transition: all 0.2s ease;
```

| Variant | Classes | Size |
|---------|---------|------|
| Primary (hero) | `btn btn-primary px-8 py-3 text-base` | Large |
| Primary (section) | `btn btn-primary px-6 py-3 text-sm` | Medium |
| Primary (navbar) | `btn btn-primary px-5 py-2 text-sm` | Small |
| Outline (hero) | `btn btn-outline border-white/40 text-white px-8 py-3 text-base hover:bg-white/10` | Large |
| Outline (section) | `btn btn-outline px-6 py-3 text-sm` | Medium |
| Outline (navbar) | `btn btn-outline px-5 py-2 text-sm` | Small |
| Mobile CTA | `btn btn-primary py-3 text-center` | Full width |

### Cards

```css
/* Base .card */
transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgb(15 23 42 / 0.1),
              0 8px 10px -6px rgb(15 23 42 / 0.1);
}
```

**Card anatomy:**
```html
<a href="..." class="card group block rounded-2xl border bg-white p-6 hover:border-{accent}-200">
  <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-{accent}-100 text-{accent}-600">
    <i class="fa-solid fa-{icon} text-2xl"></i>
  </div>
  <h3 class="text-xl font-semibold">{title}</h3>
  <p class="mt-2 text-sm text-slate-600">{description}</p>
  <span class="mt-4 inline-flex items-center text-sm font-medium text-{accent}-600 group-hover:underline">
    Learn more →
  </span>
</a>
```

**Accent cycling:** Card 1 = sky, Card 2 = teal, Card 3 = emerald.

### Navbar

- **Position:** `sticky top-0 z-50`
- **Background:** `bg-white/95 backdrop-blur-md`
- **Border:** `border-b border-slate-100`
- **Height:** ~52px (py-3 + content)
- **Logo:** `h-7 w-auto`
- **Desktop nav:** `hidden md:flex items-center gap-x-8 text-sm font-medium`
- **Active state:** `text-sky-600 font-semibold`
- **Mobile menu:** Toggle via `hidden` class on `#mobile-menu`

### Footer

- **Background:** `bg-slate-900`
- **Text color:** `text-slate-400` (body), `text-white` (headers)
- **Logo:** `h-6 w-auto brightness-0 invert` (white)
- **Layout:** 12-col grid (5 + 3 + 4)
- **Bottom bar:** `border-t border-slate-800`, `text-xs text-slate-500`

### Form Inputs

```css
input, textarea, select {
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--color-accent-blue);
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}
```

---

## 5. Shadows & Radius

### Shadow Scale

| Level | Value | Usage |
|-------|-------|-------|
| None | — | Default cards, inputs |
| Focus ring | `0 0 0 3px rgba(14, 165, 233, 0.1)` | Form input focus |
| Card hover | `0 20px 25px -5px rgb(15 23 42 / 0.1), 0 8px 10px -6px rgb(15 23 42 / 0.1)` | `.card:hover` |
| Elevated | `shadow-lg` | Back-to-top FAB |
| Image | `drop-shadow-2xl` | Hero logo |

### Border Radius Scale

| Token | Tailwind | Value | Usage |
|-------|----------|-------|-------|
| Small | `rounded-xl` | 12px | Card icon containers |
| Medium | `rounded-2xl` | 16px | Cards, stat blocks |
| Full | `rounded-full` | 9999px | Buttons (pill), FAB |

**Rule:** Never use `rounded-lg` (8px) or `rounded-md` (6px) — stick to the 3-tier scale.

---

## 6. Transitions & Animation

### Existing Transitions

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| `.card` | `transform`, `box-shadow` | 0.2s | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `.btn` | `all` | 0.2s | `ease` |
| Form inputs | `border-color`, `box-shadow` | 0.15s | `ease` |
| `#back-to-top` | `opacity`, `transform` | 0.2s | `ease` |
| Nav links | `color` | via `transition-colors` | — |
| Footer links | `color` | via `transition-colors` | — |

### Planned Animation System

#### Scroll Reveal (Intersection Observer)

All sections and cards should fade-in on scroll:

```css
/* Add to global.css */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered children */
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

**Usage:**
- `.reveal` on section headings, paragraphs, CTA groups
- `.reveal-stagger` on card grids, stat grids

#### Hero Entrance

```css
.hero-animate {
  opacity: 0;
  transform: translateY(30px);
  animation: heroFadeIn 0.8s ease forwards;
}

.hero-animate-delay-1 { animation-delay: 0.2s; }
.hero-animate-delay-2 { animation-delay: 0.4s; }
.hero-animate-delay-3 { animation-delay: 0.6s; }

@keyframes heroFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Apply to hero children:** h1 → subtitle → CTA group → stats (staggered)

#### Animated Counters

```js
// Re-add to homepage stats section
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
```

#### Section Divider Animation (optional polish)

```css
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-accent-blue), transparent);
  opacity: 0;
  transition: opacity 0.8s ease;
}

.section-divider.visible {
  opacity: 0.3;
}
```

### Animation Rules

1. **Duration:** 0.2s for micro-interactions (hover, focus), 0.5–0.8s for scroll reveals
2. **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` for movement, `ease` for opacity
3. **Stagger delay:** 0.1s increments, max 0.4s
4. **Performance:** Only animate `transform` and `opacity` — never `width`, `height`, or `margin`
5. **Reduced motion:** Wrap in `@media (prefers-reduced-motion: no-preference)` for accessibility

---

## 7. Responsive Breakpoints

| Prefix | Min Width | Usage |
|--------|-----------|-------|
| (none) | 0px | Mobile-first base styles |
| `sm:` | 640px | Hero heading upgrade (`sm:text-5xl`) |
| `md:` | 768px | **Primary breakpoint.** Nav switch, grid columns, section spacing |
| `lg:` | 1024px | Available but rarely used |
| `xl:` | 1280px | Available but rarely used |
| `2xl:` | 1536px | Container max-width |

**Design rule:** Design mobile-first. Use `md:` as the primary desktop switch. Avoid `lg:`/`xl:` unless necessary.

---

## 8. Do's & Don'ts

### Do

- ✅ Use `max-w-screen-2xl mx-auto px-6` for all section content wrappers
- ✅ Cycle accents as Sky → Teal → Emerald for multi-item patterns
- ✅ Use `tracking-widest` for section labels and column headers
- ✅ Use `rounded-2xl` for cards, `rounded-full` for buttons
- ✅ Keep hero stats inline (3-col grid) not as separate section
- ✅ Use `text-sm text-slate-600` for card descriptions
- ✅ Use `.homepage-section` on homepage, `.section` on inner pages
- ✅ Import Space Grotesk + Inter via Google Fonts
- ✅ Add `group` class to cards for `group-hover:` effects

### Don't

- ❌ Don't use `rounded-lg` or `rounded-md` — only `rounded-xl`, `rounded-2xl`, `rounded-full`
- ❌ Don't mix accent colors out of order (e.g., emerald before sky)
- ❌ Don't use `font-bold` — use `font-semibold`
- ❌ Don't hardcode hex colors in Tailwind — use the defined palette
- ❌ Don't add sections without the `max-w-screen-2xl mx-auto px-6` wrapper
- ❌ Don't use inline styles for backgrounds — use CSS classes
- ❌ Don't animate `width`, `height`, `margin`, or `padding`
- ❌ Don't use `Welcome.astro` or `Layout.astro` — they are dead code
- ❌ Don't load fonts from multipleCDN sources — use Google Fonts only

---

## 9. Known Issues to Fix

### Critical

| Issue | File | Fix |
|-------|------|-----|
| Space Grotesk not imported | `BaseLayout.astro` | Add Google Fonts `<link>` tags |
| Body font doesn't use Inter | `global.css` | Update `body` font-family to include Inter |

### Cleanup

| Issue | File | Fix |
|-------|------|-----|
| `Welcome.astro` is dead code | `src/components/Welcome.astro` | Delete file |
| `Layout.astro` is unused | `src/layouts/Layout.astro` | Delete file |
| `src/assets/` has unused SVGs | `src/assets/astro.svg`, `background.svg` | Delete files (keep folder for future assets) |
| CSS vars duplicate Tailwind palette | `global.css` | Consolidate — either use `@theme` block or CSS vars, not both |
| `BRANDING` in consts.ts never imported | `src/consts.ts` | Remove or use it |
| Mobile menu toggle doesn't animate | `Navbar.astro` | Use classList with opacity/height instead of `hidden` |

---

## 10. Enhancement Roadmap

### Phase 1: Foundation (Priority: High)

| Task | Impact | Effort |
|------|--------|--------|
| Import Space Grotesk + Inter fonts | Typography polish | 5 min |
| Delete dead code (Welcome, Layout, assets) | Code hygiene | 5 min |
| Consolidate CSS vars / Tailwind theme | Maintainability | 30 min |
| Add Tailwind `@theme` block for custom tokens | Consistency | 30 min |

### Phase 2: Animations (Priority: High)

| Task | Impact | Effort |
|------|--------|--------|
| Add scroll-reveal system (`.reveal` + observer) | Professional feel | 45 min |
| Add hero entrance animations | First impression | 30 min |
| Re-add animated counters on homepage | Engagement | 30 min |
| Fix mobile menu toggle animation | Polish | 20 min |

### Phase 3: Missing Pages (Priority: Medium)

| Task | Impact | Effort |
|------|--------|--------|
| Create `/services/` page | Nav links work | 2 hrs |
| Create `/about/` page | Nav links work | 1.5 hrs |
| Create `/contact/` page | Lead generation | 2 hrs |
| Create `/insights/` page | Content marketing | 1.5 hrs |
| Create `/privacy-policy/` and `/terms-of-service/` | Footer links work | 1 hr |

### Phase 4: Polish (Priority: Low)

| Task | Impact | Effort |
|------|--------|--------|
| Add `prefers-reduced-motion` media query | Accessibility | 15 min |
| Add OG image generation | Social sharing | 1 hr |
| Optimize Font Awesome (subset or replace with SVGs) | Performance | 1 hr |
| Add smooth scroll behavior | UX polish | 10 min |
| Add page transition animations (View Transitions API) | Premium feel | 1 hr |

---

## Appendix: File Reference

| File | Purpose |
|------|---------|
| `src/styles/global.css` | Design tokens, base styles, component CSS |
| `src/layouts/BaseLayout.astro` | HTML shell, meta tags, font imports |
| `src/components/Navbar.astro` | Sticky nav with mobile menu |
| `src/components/Footer.astro` | Site footer with links |
| `src/consts.ts` | Site metadata, nav links, contact info |
| `astro.config.mjs` | Site URL, base path, Tailwind plugin |
| `package.json` | Dependencies and scripts |
