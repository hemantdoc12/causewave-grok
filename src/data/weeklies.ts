/**
 * Sunday weeklies: AI-prepared newspaper reviews, distinct from authored insight series.
 * The PDF is the artefact. Issue pages carry a dek, disclaimer, embed, and download.
 */

export type WeeklyTitleId = 'impact-weekly' | 'ai-health-weekly';

export type WeeklyTitle = {
  id: WeeklyTitleId;
  name: string;
  tagline: string;
  description: string;
  masthead: string;
  path: string;
  cardTone: string;
  ogImage: string;
  ogImageAlt: string;
};

export type WeeklyIssue = {
  titleId: WeeklyTitleId;
  date: string;
  dateLabel: string;
  path: string;
  volume: string;
  number: string;
  headline: string;
  dek: string;
  excerpt: string;
  description: string;
  pdfPath: string;
  pageCount: number;
  linkedInUrl: string;
  highlights: string[];
  quote: { text: string; attribution: string };
  nextIssueLabel: string;
};

export const WEEKLY_AUTHOR = {
  name: 'Dr. Hemant L. Patel',
  jobTitle: 'Founder, Causewave Innovations LLP',
} as const;

export const WEEKLY_AI_DISCLAIMER =
  'Prepared end to end by AI. The editorial is Dr. Hemant L. Patel.';

export const WEEKLY_TITLES: WeeklyTitle[] = [
  {
    id: 'impact-weekly',
    name: 'Impact Weekly',
    tagline: 'The Sunday knowledge review',
    masthead: 'A Sunday synthesis of India’s CSR week — context, connections, and what the week’s moves mean.',
    description:
      'Sunday synthesis of India’s CSR week: courts, policy, enforcement, unspent funds, and social-stock windows — with offers recorded as offers.',
    path: 'weekly/impact-weekly/',
    cardTone: 'from-sky-500 to-sky-700',
    ogImage: 'images/og/weekly-impact.jpg',
    ogImageAlt: 'Sunday newspaper and CSR filings on a desk',
  },
  {
    id: 'ai-health-weekly',
    name: 'AI Health Weekly',
    tagline: 'The Sunday evidence review',
    masthead: 'What the week’s evidence supports, and what it does not.',
    description:
      'Sunday evidence review of AI in health: regulators, journals, and hospitals — graded by study type, with company claims labelled as such.',
    path: 'weekly/ai-health-weekly/',
    cardTone: 'from-teal-500 to-teal-700',
    ogImage: 'images/og/weekly-ai-health.jpg',
    ogImageAlt: 'Clinical evidence desk with a journal, stethoscope, and tablet',
  },
];

export const WEEKLY_ISSUES: WeeklyIssue[] = [
  {
    titleId: 'impact-weekly',
    date: '2026-10-11',
    dateLabel: 'Sunday, 11 Oct 2026',
    path: 'weekly/impact-weekly/2026-10-11/',
    volume: 'Vol. I',
    number: 'No. 1',
    headline: 'The week CSR took stock of itself',
    dek: 'NCCSR 2026 asked Indian CSR to move from compliance to commitment. The week’s own evidence showed how large that gap still is.',
    excerpt:
      'Courts left 80G standing on delay, a ₹10 crore trigger awaits winter, unspent CSR showed up in audits, and two ZCZP issues ran thin. Offers are not outcomes.',
    description:
      'Impact Weekly Vol. I No. 1 — the week CSR took stock of itself. NCCSR 2026, 80G Castrol, unspent CSR, ZCZP. Sunday review, prepared end to end by AI.',
    pdfPath: 'weekly/impact-weekly-2026-10-11.pdf',
    pageCount: 2,
    linkedInUrl:
      'https://www.linkedin.com/posts/dr-hemant-patel-b842a5143_impact-weekly-ugcPost-7514945413603311616-2wJQ/',
    highlights: [
      'Courts: the Supreme Court left the Bombay HC Castrol ruling on 80G for CSR donations standing — on delay, not on merits.',
      'Policy: a bill to double the CSR profit trigger to ₹10 crore awaits the Winter Session.',
      'Enforcement: an ED probe into alleged ₹200 crore routing through trusts. Still an allegation.',
      'Compliance: budgeted money left unspent.',
      'Markets: two ZCZP issues on the social stock exchanges, one already extended for thin demand.',
      'Editorial: commitment needs plumbing, not slogans.',
    ],
    quote: {
      text: 'Judge CSR by the difference it makes to lives, not the quantum it spends.',
      attribution: 'Ajit Seth at NCCSR 2026',
    },
    nextIssueLabel: 'Sunday, 18 October 2026',
  },
  {
    titleId: 'ai-health-weekly',
    date: '2026-10-11',
    dateLabel: 'Sunday, 11 Oct 2026',
    path: 'weekly/ai-health-weekly/2026-10-11/',
    volume: 'Vol. I',
    number: 'No. 1',
    headline: 'The week AI in health got audited',
    dek: 'Not launches. Checks.',
    excerpt:
      'The UK accepted 44 of 44 commission recommendations. A clinic chatbot was a safety signal, not proof of better care. A cleared hospital model was uneven by patient group.',
    description:
      'AI Health Weekly Vol. I No. 1 — the week AI in health got audited. UK 44/44, Airlock, AMIE, Epic K260008. Sunday review, prepared end to end by AI.',
    pdfPath: 'weekly/ai-health-weekly-2026-10-11.pdf',
    pageCount: 5,
    linkedInUrl:
      'https://www.linkedin.com/posts/dr-hemant-patel-b842a5143_aihealthweekly-ugcPost-7514946396509061120-3W2v/',
    highlights: [
      'The UK accepted all 44 recommendations of its AI healthcare commission and opened post-market monitoring.',
      'A patient-facing chatbot was tested in clinic — one hallucination, single-centre, single-arm. A safety signal, not proof of better care.',
      'An already-cleared hospital model showed uneven results by patient group.',
      'Note assistants wrote fuller notes that were less factual.',
      'Funding rounds were many, and mostly company-reported.',
      'India: NMC and device-rule notices were press-reported; the notices themselves were not seen.',
    ],
    quote: {
      text: "There's no finish line for what is good enough.",
      attribution: 'Rebecca Soskin Hicks, OpenAI',
    },
    nextIssueLabel: 'Sunday, 18 October 2026',
  },
];

export function getWeeklyTitle(id: WeeklyTitleId): WeeklyTitle {
  const title = WEEKLY_TITLES.find((t) => t.id === id);
  if (!title) throw new Error(`Unknown weekly title: ${id}`);
  return title;
}

export function getWeeklyIssue(titleId: WeeklyTitleId, date: string): WeeklyIssue | undefined {
  return WEEKLY_ISSUES.find((issue) => issue.titleId === titleId && issue.date === date);
}

export function issuesForTitle(titleId: WeeklyTitleId): WeeklyIssue[] {
  return WEEKLY_ISSUES.filter((issue) => issue.titleId === titleId).sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}

export function latestIssue(titleId: WeeklyTitleId): WeeklyIssue {
  const issues = issuesForTitle(titleId);
  if (!issues[0]) throw new Error(`No issues for ${titleId}`);
  return issues[0];
}

export function siblingIssue(issue: WeeklyIssue): WeeklyIssue | undefined {
  return WEEKLY_ISSUES.find((other) => other.titleId !== issue.titleId && other.date === issue.date);
}

export function buildWeeklyIssueJsonLd(issue: WeeklyIssue, title: WeeklyTitle, siteUrl: string) {
  const url = `${siteUrl}${issue.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${title.name}: ${issue.headline}`,
    description: issue.description,
    datePublished: issue.date,
    dateModified: issue.date,
    creditText: WEEKLY_AI_DISCLAIMER,
    author: {
      '@type': 'Person',
      name: WEEKLY_AUTHOR.name,
      jobTitle: WEEKLY_AUTHOR.jobTitle,
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
    image: `${siteUrl}${title.ogImage}`,
    associatedMedia: {
      '@type': 'MediaObject',
      contentUrl: `${siteUrl}${issue.pdfPath}`,
      encodingFormat: 'application/pdf',
      name: `${title.name} ${issue.volume} ${issue.number}`,
    },
  };
}
