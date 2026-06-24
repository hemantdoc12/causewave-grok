/**
 * Site-wide constants and configuration.
 * Centralized place for metadata, URLs, and branding.
 * Update these values when moving to a custom domain.
 */

export const SITE = {
  name: 'Causewave Innovations LLP',
  title: 'Causewave | CSR Strategy, Implementation & Measurable Impact',
  description:
    'Causewave helps companies deliver compliant, measurable, and community-trusted CSR programs. Backed by deep public health leadership and last-mile expertise across India.',
  url: 'https://hemantdoc12.github.io/causewave-grok/',
  ogImage: '/og-default.svg',
  twitterHandle: '',
} as const;

export const NAV_LINKS = [
  { href: 'services/', label: 'Services' },
  { href: 'about/', label: 'About' },
  { href: 'insights/', label: 'Insights' },
  { href: 'contact/', label: 'Contact' },
] as const;

export const CONTACT = {
  email: 'innovate@causewave.in',
  phone: '+91 76005 96053',
  location: 'Ahmedabad, Gujarat, India',
} as const;
