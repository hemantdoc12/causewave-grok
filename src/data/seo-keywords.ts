/**
 * Competitive keyword map for Causewave SEO.
 * Benchmarked against category leaders (e.g. Sattva Consulting) and
 * India CSR buyer search intent — used for titles, meta, schema, and copy.
 *
 * Primary clusters (own these phrases in titles/H1s where natural):
 * - CSR consulting firm India / impact consulting India
 * - Corporate CSR strategy & programme design
 * - CSR compliance / Companies Act / Section 135
 * - Impact measurement, impact assessment, M&E
 * - CSR portfolio advisory & social audit
 * - Healthcare / public health CSR (Causewave differentiator)
 * - Sustainability & ESG advisory (adjacent; only where we deliver)
 */

export const SEO = {
  brand: 'Causewave',
  legalName: 'Causewave Innovations LLP',

  /** Homepage / default */
  home: {
    title: 'Causewave | CSR Consulting Firm India — Strategy, Impact & Compliance',
    description:
      'CSR consulting firm in India helping corporates with CSR strategy, programme design, impact measurement, Section 135 compliance, and community-trusted social impact programmes. Public health leadership across India.',
    ogTitle: 'Causewave | Corporate CSR Strategy, Impact Measurement & Advisory',
    ogDescription:
      'Impact consulting for India Inc: CSR strategy, flagship programme design, portfolio advisory, impact assessment, and compliance under the Companies Act 2013.',
    h1Lead: 'CSR Consulting That',
    h1Accent: 'Delivers Impact',
    h1Sub:
      'Corporate CSR strategy, programme design, impact measurement, and compliance — backed by 18+ years of public health and last-mile delivery across India.',
  },

  about: {
    title: 'About Causewave | Impact & CSR Consulting Firm in India',
    description:
      'Causewave is an India-based impact and CSR consulting firm. We bridge corporate social responsibility compliance with measurable community impact — rooted in 18+ years of public health leadership.',
    ogTitle: 'About Causewave | CSR & Social Impact Consulting',
    ogDescription:
      'Learn how Causewave helps companies and partners design CSR programmes that satisfy boards, regulators, and communities across India.',
  },

  services: {
    title: 'CSR Services | Strategy, Programme Design, Impact Measurement & Advisory',
    description:
      'Corporate CSR and sustainability support: CSR strategy, flagship programme design, portfolio advisory, compliance, impact measurement, resource mobilisation, and technology for social impact programmes in India.',
    ogTitle: 'CSR Strategy, Advisory & Impact Consulting | Causewave',
    ogDescription:
      'End-to-end CSR consulting: strategy, programme design, implementation, impact assessment, compliance, and AI-powered impact communication for corporates and NGOs.',
    h1: 'Corporate CSR Strategy, Advisory & Impact Consulting',
    h1Sub:
      'From CSR strategy and programme design to impact measurement, compliance, and resource mobilisation — services mapped to your sector and geography in India.',
  },

  contact: {
    title: 'Contact Causewave | CSR & Impact Consulting in India',
    description:
      'Talk to Causewave about CSR strategy, impact measurement, programme design, or Section 135 compliance. CSR consulting firm based in Ahmedabad, serving companies and NGOs across India.',
    ogTitle: 'Contact Causewave | Book a CSR Strategy Conversation',
    ogDescription:
      'Get in touch for corporate CSR advisory, impact assessment, and social impact programme design across India.',
  },

  insights: {
    title: 'CSR Insights & Thought Leadership | Impact Consulting India',
    description:
      'Insights on corporate CSR strategy, Companies Act compliance, healthcare CSR programme design, and impact measurement for companies and non-profits in India.',
    ogTitle: 'CSR Insights | Strategy, Compliance & Impact Measurement',
    ogDescription:
      'Practical guidance on CSR compliance, social impact programmes, and evidence-based impact assessment from Causewave.',
  },

  /** Entity / schema helpers */
  categoryKeywords: [
    'CSR consulting firm India',
    'impact consulting India',
    'corporate CSR strategy',
    'CSR programme design',
    'impact measurement',
    'impact assessment',
    'CSR compliance',
    'Section 135 Companies Act',
    'social impact programmes',
    'CSR portfolio advisory',
    'sustainability consulting',
    'public health CSR',
    'resource mobilisation CSR',
  ] as const,

  serviceTypes: [
    'CSR Strategy and Planning',
    'Corporate Social Responsibility Consulting',
    'Impact Measurement and Advisory',
    'CSR Programme Design and Implementation',
    'CSR Compliance and Reporting',
    'Resource Mobilisation and Partner Mapping',
    'Social Impact Technology Solutions',
  ] as const,
} as const;
