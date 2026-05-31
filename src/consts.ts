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
  url: 'https://hemantdoc12.github.io/causewave-grok',
  ogImage: '/og-default.jpg', // Replace with proper social image
  twitterHandle: '',
} as const;

export const BRANDING = {
  colors: {
    primaryDark: '#0F172A',
    accentBlue: '#0EA5E9',
    accentTeal: '#14B8A6',
    greenImpact: '#22C55E',
    slate50: '#F8FAFC',
    slate800: '#1E293B',
  },
} as const;

export const NAV_LINKS = [
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/insights/', label: 'Insights' },
  { href: '/contact/', label: 'Contact' },
] as const;

export const CONTACT = {
  email: 'innovate@causewave.in',
  phone: '+91 76005 96053',
  location: 'Ahmedabad, Gujarat, India',
} as const;
