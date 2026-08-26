/**
 * Multi-part insight series (e.g. CSR Ticket Size).
 * Each part remains its own SEO page; the hub lists the series in order.
 */

export type SeriesPart = {
  part: number;
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  datePublished: string;
  dateLabel: string;
  linkedInUrl: string;
};

export type InsightSeries = {
  id: string;
  name: string;
  path: string;
  description: string;
  parts: SeriesPart[];
  upcoming?: string;
};

export const CSR_TICKET_SIZE_SERIES: InsightSeries = {
  id: 'csr-ticket-size',
  name: 'CSR Ticket Size',
  path: 'insights/csr-ticket-size/',
  description:
    'A data series on India’s CSR project economics using National CSR Portal filings: why average cheque size stays flat, who concentrates vs sprays, which sectors run fat or thin tickets, and why high-spend states are not high-ticket states.',
  parts: [
    {
      part: 1,
      slug: 'why-indias-csr-cheque-size-wont-budge',
      path: 'insights/why-indias-csr-cheque-size-wont-budge/',
      title: "Why India's CSR Cheque Size Won't Budge",
      shortTitle: 'Cheque Size',
      excerpt:
        'Spend grew ~3× in a decade. The average project is still about ₹35 lakh. Five forces explain why Indian CSR scales by adding projects — not by raising ticket size.',
      datePublished: '2026-08-05',
      dateLabel: 'Aug 6, 2026',
      linkedInUrl:
        'https://www.linkedin.com/pulse/why-indias-csr-cheque-size-wont-budge-dr-hemant-patel-btz4f',
    },
    {
      part: 2,
      slug: 'concentrators-vs-sprayers-csr-strategies',
      path: 'insights/concentrators-vs-sprayers-csr-strategies/',
      title: 'Concentrators vs Sprayers: Two CSR Strategies Hiding in the Same Data',
      shortTitle: 'Concentrators vs Sprayers',
      excerpt:
        'The national average is produced by two portfolio geometries: rare concentrators with large rows, and common sprayers with many small tickets — same Section 135, opposite design.',
      datePublished: '2026-08-11',
      dateLabel: 'Aug 11, 2026',
      linkedInUrl:
        'https://www.linkedin.com/pulse/concentrators-vs-sprayers-two-csr-strategies-hiding-same-patel-gtu1e',
    },
    {
      part: 3,
      slug: 'csr-sector-ticket-league',
      path: 'insights/csr-sector-ticket-league/',
      title: 'The CSR Sector Ticket League: Why “We Work in Education” Tells You Almost Nothing',
      shortTitle: 'Sector Ticket League',
      excerpt:
        'Rank CSR by average cheque per sector — not total crore — and the podium changes. Education and health dominate spend but sit near the national mean; that is why ticket size will not budge.',
      datePublished: '2026-08-19',
      dateLabel: 'Aug 19, 2026',
      linkedInUrl:
        'https://www.linkedin.com/pulse/csr-sector-ticket-league-why-we-work-education-tells-you-patel-bcfxf/',
    },
    {
      part: 4,
      slug: 'geography-of-the-cheque-csr-states',
      path: 'insights/geography-of-the-cheque-csr-states/',
      title: 'The Geography of the Cheque: High-Spend States Are Not High-Ticket States',
      shortTitle: 'Geography of the Cheque',
      excerpt:
        'Rank CSR by average ticket per geography and the map flips: Pan-India and Odisha run fat cheques; Maharashtra-shaped volume states dominate spend with ordinary tickets.',
      datePublished: '2026-08-26',
      dateLabel: 'Aug 26, 2026',
      linkedInUrl:
        'https://www.linkedin.com/pulse/geography-cheque-high-spend-states-high-ticket-dr-hemant-patel-wo38e/',
    },
  ],
  upcoming:
    'Part 5 — The ₹12 Lakh Company: the typical filer — not TCS, not a 700-row sprayer — the median company-year still near ₹12 lakh a project.',
};

export const INSIGHT_SERIES = [CSR_TICKET_SIZE_SERIES] as const;

export function getSeriesById(id: string): InsightSeries | undefined {
  return INSIGHT_SERIES.find((s) => s.id === id);
}

export function getSeriesPart(seriesId: string, slug: string): SeriesPart | undefined {
  return getSeriesById(seriesId)?.parts.find((p) => p.slug === slug);
}

export function getAdjacentParts(seriesId: string, slug: string) {
  const series = getSeriesById(seriesId);
  if (!series) return { prev: undefined, next: undefined, current: undefined };
  const idx = series.parts.findIndex((p) => p.slug === slug);
  if (idx < 0) return { prev: undefined, next: undefined, current: undefined };
  return {
    current: series.parts[idx],
    prev: idx > 0 ? series.parts[idx - 1] : undefined,
    next: idx < series.parts.length - 1 ? series.parts[idx + 1] : undefined,
    series,
  };
}
