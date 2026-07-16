/**
 * Site-wide constants and configuration.
 * Centralized place for metadata, URLs, and branding.
 */

import { SEO } from './data/seo-keywords';

export const SITE = {
  name: 'Causewave Innovations LLP',
  title: SEO.home.title,
  description: SEO.home.description,
  url: 'https://causewave.in/',
  ogImage: 'og-default.jpg',
  twitterHandle: '',
} as const;

export const NAV_LINKS = [
  { href: 'about/', label: 'About' },
  { href: 'services/', label: 'Services' },
  { href: 'insights/', label: 'Insights' },
  { href: 'contact/', label: 'Contact' },
] as const;

export const CONTACT = {
  email: 'innovate@causewave.in',
  phone: '+91 76005 96053',
  location: 'Ahmedabad, Gujarat, India',
} as const;

export { SEO };
