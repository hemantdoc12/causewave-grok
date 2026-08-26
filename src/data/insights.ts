/**
 * Shared metadata for on-site insight articles.
 * Used by the insights hub, breadcrumbs, and Article JSON-LD.
 */

export type InsightPost = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  category: string;
  categoryTone: 'sky' | 'teal' | 'emerald' | 'amber';
  datePublished: string;
  dateLabel: string;
  author: string;
};

export const INSIGHT_AUTHOR = {
  name: 'Dr. Hemant L. Patel',
  jobTitle: 'Founder, Causewave Innovations LLP',
} as const;

export const INSIGHT_POSTS: InsightPost[] = [
  {
    slug: 'founder-story',
    path: 'insights/founder-story/',
    title: 'Dr. Hemant L. Patel — 18+ Years of Public Health Leadership',
    shortTitle: 'Founder Story',
    description:
      "From WHO surveillance to Gujarat's SKOCH Gold Award-winning Chitta Express — how Dr. Hemant L. Patel built 18+ years of public health impact across India.",
    excerpt:
      "From designing Gujarat's award-winning last-mile healthcare models to enabling Bihar's record-breaking 33 lakh+ single-day COVID-19 vaccinations — the journey behind Causewave.",
    category: 'Founder Story',
    categoryTone: 'amber',
    datePublished: '2026-01-15',
    dateLabel: '2026',
    author: INSIGHT_AUTHOR.name,
  },
  {
    slug: 'why-indias-csr-cheque-size-wont-budge',
    path: 'insights/why-indias-csr-cheque-size-wont-budge/',
    title: "Why India's CSR Cheque Size Won't Budge",
    shortTitle: 'Cheque Size',
    description:
      'CSR spend in India roughly tripled over a decade, yet average project size stayed near ₹35 lakh. Analysis of National CSR Portal filings and why the system multiplies projects instead of enlarging them.',
    excerpt:
      'Spend grew ~3× in a decade. The average project is still about ₹35 lakh. Five forces explain why Indian CSR scales by adding projects — not by raising ticket size.',
    category: 'CSR Strategy',
    categoryTone: 'sky',
    datePublished: '2026-08-05',
    dateLabel: 'Aug 2026',
    author: INSIGHT_AUTHOR.name,
  },
  {
    slug: 'concentrators-vs-sprayers-csr-strategies',
    path: 'insights/concentrators-vs-sprayers-csr-strategies/',
    title: 'Concentrators vs Sprayers: Two CSR Strategies Hiding in the Same Data',
    shortTitle: 'Concentrators vs Sprayers',
    description:
      'CSR Ticket Size Part 2: how rare concentrators with large project rows and common sprayers with many small tickets produce India’s stuck national average cheque size.',
    excerpt:
      'Same Section 135 world, opposite geometry: concentrators write large rows; sprayers write many small ones. That split explains the stuck national average.',
    category: 'CSR Strategy',
    categoryTone: 'sky',
    datePublished: '2026-08-11',
    dateLabel: 'Aug 2026',
    author: INSIGHT_AUTHOR.name,
  },
  {
    slug: 'csr-sector-ticket-league',
    path: 'insights/csr-sector-ticket-league/',
    title: 'The CSR Sector Ticket League: Why “We Work in Education” Tells You Almost Nothing',
    shortTitle: 'Sector Ticket League',
    description:
      'CSR Ticket Size Part 3: rank Indian CSR sectors by average project ticket — not total spend — and see why education and health keep the national average near ₹35 lakh.',
    excerpt:
      'Rank CSR by average cheque per sector and the podium changes. Education and health dominate spend but sit near the mean — that is why ticket size will not budge.',
    category: 'CSR Strategy',
    categoryTone: 'sky',
    datePublished: '2026-08-19',
    dateLabel: 'Aug 2026',
    author: INSIGHT_AUTHOR.name,
  },
  {
    slug: 'geography-of-the-cheque-csr-states',
    path: 'insights/geography-of-the-cheque-csr-states/',
    title: 'The Geography of the Cheque: High-Spend States Are Not High-Ticket States',
    shortTitle: 'Geography of the Cheque',
    description:
      'CSR Ticket Size Part 4: pan-India rows averaging over a crore, Odisha vs Kerala, and why Maharashtra-shaped volume states dominate spend without fat tickets.',
    excerpt:
      'High-spend states are the CSR factory floor. High-ticket geographies are fewer: Pan-India, hinterland states, and centralized funds. Volume is not depth.',
    category: 'CSR Strategy',
    categoryTone: 'sky',
    datePublished: '2026-08-26',
    dateLabel: 'Aug 2026',
    author: INSIGHT_AUTHOR.name,
  },
  {
    slug: 'csr-compliance-companies-act-2013',
    path: 'insights/csr-compliance-companies-act-2013/',
    title: 'Understanding CSR Compliance Under Companies Act 2013',
    shortTitle: 'CSR Compliance Guide',
    description:
      'CSR compliance guide for Indian companies: Section 135 applicability, 2% CSR spend, Schedule VII activities, portfolio reporting, unspent CSR, and penalties under the Companies Act 2013.',
    excerpt:
      'CSR compliance for corporates: Section 135 thresholds, board obligations, Schedule VII, annual reporting, and penalties — for CSR leads and company secretaries.',
    category: 'Compliance',
    categoryTone: 'sky',
    datePublished: '2026-05-01',
    dateLabel: 'May 2026',
    author: INSIGHT_AUTHOR.name,
  },
  {
    slug: 'impactful-csr-programs-healthcare',
    path: 'insights/impactful-csr-programs-healthcare/',
    title: 'How to Design Impactful CSR Programs in Healthcare',
    shortTitle: 'Healthcare CSR Design',
    description:
      'Healthcare CSR programme design for India: field-tested principles for public health CSR, community trust, logistics at scale, and partnerships that last beyond the funding cycle.',
    excerpt:
      'Flagship healthcare CSR programme design: community trust, data, logistics at scale, and partnerships that survive beyond the funding cycle.',
    category: 'Healthcare',
    categoryTone: 'teal',
    datePublished: '2026-04-01',
    dateLabel: 'April 2026',
    author: INSIGHT_AUTHOR.name,
  },
  {
    slug: 'measuring-csr-impact-framework',
    path: 'insights/measuring-csr-impact-framework/',
    title: 'Measuring CSR Impact: A Practical Framework',
    shortTitle: 'Impact Measurement',
    description:
      'Impact measurement and assessment for CSR: practical M&E frameworks, baselines, indicators, data collection, and board-ready impact reporting for social impact programmes in India.',
    excerpt:
      'Impact measurement & advisory: a four-step M&E framework with indicator examples, reporting cadence, and board-ready impact practices for CSR teams.',
    category: 'Impact Measurement',
    categoryTone: 'emerald',
    datePublished: '2026-03-01',
    dateLabel: 'March 2026',
    author: INSIGHT_AUTHOR.name,
  },
];

export function getInsightBySlug(slug: string): InsightPost | undefined {
  return INSIGHT_POSTS.find((p) => p.slug === slug);
}

export function buildArticleJsonLd(post: InsightPost, siteUrl: string) {
  const url = `${siteUrl}${post.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: INSIGHT_AUTHOR.jobTitle,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Causewave Innovations LLP',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}images/logos/logo_2.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: `${siteUrl}og-default.jpg`,
  };
}
