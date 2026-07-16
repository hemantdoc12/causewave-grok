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
