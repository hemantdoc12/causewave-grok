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
  /** Tailwind gradient for listing cards, matching on-site guide cards */
  cardTone: string;
  parts: SeriesPart[];
  upcoming?: string;
};

export const CSR_TICKET_SIZE_SERIES: InsightSeries = {
  id: 'csr-ticket-size',
  name: 'CSR Ticket Size',
  path: 'insights/csr-ticket-size/',
  cardTone: 'from-sky-500 to-sky-700',
  description:
    'Why India’s CSR cheque stays near ₹35 lakh — concentrators vs sprayers, education and health as volume machines, and a playbook to design for depth.',
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
    {
      part: 5,
      slug: 'the-12-lakh-company-csr-median',
      path: 'insights/the-12-lakh-company-csr-median/',
      title: 'The ₹12 Lakh Company: Most of Corporate India Is Not in the Average',
      shortTitle: 'The ₹12 Lakh Company',
      excerpt:
        '₹35 lakh is the spend-weighted average. The typical company-year files ~₹11–12 lakh per project and ~₹23 lakh for the whole year. Meet the median — and why it cannot move the national ticket.',
      datePublished: '2026-08-31',
      dateLabel: 'Aug 31, 2026',
      linkedInUrl:
        'https://www.linkedin.com/pulse/12-lakh-company-most-corporate-india-average-dr-hemant-patel-abujc/',
    },
    {
      part: 6,
      slug: 'education-health-csrs-volume-machines',
      path: 'insights/education-health-csrs-volume-machines/',
      title: 'Education and Health Are CSR’s Volume Machines',
      shortTitle: 'Volume Machines',
      excerpt:
        'Education and health are ~52% of CSR spent and ~48% of rows, at ~₹37–40 lakh a ticket. They are not the fat causes — they are the volume machines that are the average.',
      datePublished: '2026-09-08',
      dateLabel: 'Sep 8, 2026',
      linkedInUrl:
        'https://www.linkedin.com/pulse/education-health-csrs-volume-machines-dr-hemant-patel-uzjuf/',
    },
    {
      part: 7,
      slug: 'what-would-actually-raise-indias-csr-ticket-size',
      path: 'insights/what-would-actually-raise-indias-csr-ticket-size/',
      title: 'What Would Actually Raise India’s CSR Ticket Size',
      shortTitle: 'Raise the Average',
      excerpt:
        'Average ticket = spend ÷ rows. Five counterfactuals that would move ₹35 lakh — and five that look busy while leaving the mean exactly where it is.',
      datePublished: '2026-09-10',
      dateLabel: 'Sep 10, 2026',
      linkedInUrl:
        'https://www.linkedin.com/pulse/what-would-actually-raise-indias-csr-ticket-size-dr-hemant-patel-et5bf/',
    },
    {
      part: 8,
      slug: 'csr-ticket-size-playbook',
      path: 'insights/csr-ticket-size-playbook/',
      title: 'The CSR Ticket Size Playbook',
      shortTitle: 'The Playbook',
      excerpt:
        'Part 7 was physics. This is Monday: diagnose your geometry, playbook by annual CSR budget, and a 90-day plan that does not need a new Schedule VII.',
      datePublished: '2026-09-14',
      dateLabel: 'Sep 14, 2026',
      linkedInUrl:
        'https://www.linkedin.com/pulse/csr-ticket-size-playbook-dr-hemant-patel-xrkhf/',
    },
  ],
};

export const POSHAN_TRACKER_SERIES: InsightSeries = {
  id: 'poshan-tracker',
  name: 'The Poshan Tracker File',
  path: 'insights/poshan-tracker/',
  cardTone: 'from-teal-500 to-teal-700',
  description:
    'Poshan Tracker vs NFHS-6: stunting is a family argument, wasting is two countries. A five-part series on India’s nutrition dashboard.',
  parts: [
    {
      part: 1,
      slug: 'two-nutrition-numbers',
      path: 'insights/two-nutrition-numbers/',
      title: 'Two nutrition numbers',
      shortTitle: 'Two Numbers',
      excerpt:
        'NFHS-6: ~29% stunted, ~19% wasted. Poshan Tracker’s August 2026 district average: 25% and 3%. Stunting is a family argument. Wasting is two countries.',
      datePublished: '2026-09-21',
      dateLabel: 'Sep 21, 2026',
      linkedInUrl: 'https://www.linkedin.com/pulse/two-nutrition-numbers-dr-hemant-patel-maqjf/',
    },
    {
      part: 2,
      slug: '132-districts',
      path: 'insights/132-districts/',
      title: '132 districts',
      shortTitle: '132 Districts',
      excerpt:
        'West Singhbhum 66% stunted. Nandurbar 63%. 132 districts the dashboard itself still puts in very high risk — 38 of them in Madhya Pradesh.',
      datePublished: '2026-09-28',
      dateLabel: 'Sep 28, 2026',
      linkedInUrl: 'https://www.linkedin.com/pulse/132-districts-dr-hemant-patel-thkxc/',
    },
  ],
  upcoming:
    'Part 3 — Who moved since 2023. Some of these names have been falling for three years and remain. Some — Delhi, Telangana — have been rising.',
};

export const INSIGHT_SERIES = [POSHAN_TRACKER_SERIES, CSR_TICKET_SIZE_SERIES] as const;

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
