/** Outreach landing: /services/ai-video/ — Causewave sells and briefs; production is off-page. */

export const AI_VIDEO = {
  path: 'services/ai-video/',
  sampleCaption: 'Sample film',
  vimeoId: '1229554881',
  playerSrc: 'https://player.vimeo.com/video/1229554881?title=0&byline=0&portrait=0',
  thumbnailUrl:
    'https://i.vimeocdn.com/video/2204244839-34ff5943b4f95c6d0152076f4a2690c2a156bc67a7fedf5748852975b4fc4a18-d_640?region=us',
  durationIso: 'PT5M38S',
  uploadDate: '2026-09-23T10:20:30+00:00',
  width: 1920,
  height: 1080,
} as const;

export function buildAiVideoJsonLd(siteUrl: string) {
  const pageUrl = `${siteUrl}${AI_VIDEO.path}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI-powered impact films',
      serviceType: 'AI-assisted video for CSR and NGO programmes',
      description:
        'Impact films for CSR boards, donors, frontline training, and programme stories. Causewave takes the brief through to delivery.',
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
      name: AI_VIDEO.sampleCaption,
      description: 'Sample AI-assisted film for Causewave impact communication.',
      embedUrl: `https://player.vimeo.com/video/${AI_VIDEO.vimeoId}`,
      thumbnailUrl: AI_VIDEO.thumbnailUrl,
      uploadDate: AI_VIDEO.uploadDate,
      duration: AI_VIDEO.durationIso,
      width: AI_VIDEO.width,
      height: AI_VIDEO.height,
      publisher: {
        '@type': 'Organization',
        name: 'Causewave Innovations LLP',
        url: siteUrl,
      },
    },
  ];
}
