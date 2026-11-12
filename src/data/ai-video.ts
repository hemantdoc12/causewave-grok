import { SEO } from './seo-keywords';

/** Special page: /ai-video/ — Causewave sells and briefs; production is off-page. */

export const AI_VIDEO = {
  path: 'ai-video/',
  legacyPath: 'services/ai-video/',
  sampleCaption: 'Sample film',
  sampleTitle: 'Sample AI-assisted impact film for CSR',
  vimeoId: '1229554881',
  playerSrc: 'https://player.vimeo.com/video/1229554881?title=0&byline=0&portrait=0',
  poster: 'images/og/ai-video.jpg',
  durationIso: 'PT5M38S',
  uploadDate: '2026-09-23T10:20:30+00:00',
  width: 1920,
  height: 1080,
  productionPartner: {
    name: 'Orange Frame Production',
    logo: 'images/partners/orange-frame.png',
    logoAlt: 'Orange Frame Production',
    headline: 'Film craft behind every frame.',
    blurb:
      'Causewave takes the brief, the client conversation, and delivery. Orange Frame Production shapes and produces the film. One team to talk to.',
    crafts: ['Scriptwriting', 'Direction', 'Production', 'AI video'],
  },
} as const;

export function buildAiVideoJsonLd(siteUrl: string) {
  const pageUrl = `${siteUrl}${AI_VIDEO.path}`;
  const posterUrl = `${siteUrl}${AI_VIDEO.poster}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: SEO.aiVideo.title,
      description: SEO.aiVideo.description,
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Causewave',
        url: siteUrl,
      },
      primaryImageOfPage: posterUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI video for CSR',
      alternateName: 'AI-powered impact films',
      serviceType: 'AI-assisted impact films for CSR and NGO programmes',
      category: 'Impact communication',
      description:
        'Impact films for CSR boards, donors, frontline training, and programme stories in India. Causewave takes the brief through to delivery.',
      url: pageUrl,
      provider: {
        '@type': 'Organization',
        name: 'Causewave Innovations LLP',
        url: siteUrl,
      },
      areaServed: { '@type': 'Country', name: 'India' },
      audience: {
        '@type': 'Audience',
        audienceType: 'CSR teams, non-profits, and implementing partners',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: AI_VIDEO.sampleTitle,
      description: 'Sample AI-assisted impact film for CSR boards, donors, and programme communication.',
      url: pageUrl,
      embedUrl: `https://player.vimeo.com/video/${AI_VIDEO.vimeoId}`,
      thumbnailUrl: posterUrl,
      uploadDate: AI_VIDEO.uploadDate,
      duration: AI_VIDEO.durationIso,
      width: AI_VIDEO.width,
      height: AI_VIDEO.height,
      inLanguage: 'en-IN',
      isFamilyFriendly: true,
      publisher: {
        '@type': 'Organization',
        name: 'Causewave Innovations LLP',
        url: siteUrl,
      },
    },
  ];
}
