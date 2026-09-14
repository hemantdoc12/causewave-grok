// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/** Per-URL lastmod (YYYY-MM-DD). Insights use datePublished; money pages use this SEO pass. */
const LASTMOD_BY_PATH = {
  '/': '2026-09-08',
  '/about/': '2026-09-08',
  '/services/': '2026-09-08',
  '/contact/': '2026-09-08',
  '/insights/': '2026-09-14',
  '/insights/csr-ticket-size/': '2026-09-14',
  '/insights/founder-story/': '2026-01-15',
  '/insights/why-indias-csr-cheque-size-wont-budge/': '2026-08-05',
  '/insights/concentrators-vs-sprayers-csr-strategies/': '2026-08-11',
  '/insights/csr-sector-ticket-league/': '2026-08-19',
  '/insights/geography-of-the-cheque-csr-states/': '2026-08-26',
  '/insights/the-12-lakh-company-csr-median/': '2026-08-31',
  '/insights/education-health-csrs-volume-machines/': '2026-09-08',
  '/insights/what-would-actually-raise-indias-csr-ticket-size/': '2026-09-10',
  '/insights/csr-ticket-size-playbook/': '2026-09-14',
  '/insights/csr-compliance-companies-act-2013/': '2026-09-08',
  '/insights/impactful-csr-programs-healthcare/': '2026-04-01',
  '/insights/measuring-csr-impact-framework/': '2026-03-01',
  '/privacy-policy/': '2026-05-29',
  '/terms-of-service/': '2026-05-29',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://causewave.in',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        const lastmod = LASTMOD_BY_PATH[path] ?? '2026-09-08';
        item.lastmod = lastmod;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});