import fs from 'node:fs';
import path from 'node:path';

export const BRAND_FILM = {
  name: 'Causewave brand film',
  path: 'brand-film/',
  durationIso: 'PT1M2S',
  durationLabel: '1:02',
  uploadDate: '2026-10-14T00:00:00+05:30',
  width: 1920,
  height: 1080,
  description:
    'Causewave brand film (1:02): CSR strategy, last-mile public health delivery, and impact work across India.',
  pageTitle: 'Causewave brand film | Causewave',
  pageDescription:
    'Watch the Causewave brand film: 62 seconds on CSR consulting, last-mile public health, and impact delivery across India.',
} as const;

export function resolveBrandFilm() {
  const videosDir = path.join(process.cwd(), 'public', 'videos');
  const videoFiles = fs.existsSync(videosDir) ? fs.readdirSync(videosDir) : [];
  const filmFile = videoFiles.find((f) => /\.(mp4|webm|mov)$/i.test(f));
  const filmPosterFile = videoFiles.find((f) => /\.(jpe?g|webp|png)$/i.test(f));
  const src = filmFile ? `videos/${filmFile}` : null;
  const poster = filmPosterFile ? `videos/${filmPosterFile}` : 'images/og/home.jpg';
  const mime = src?.endsWith('.webm') ? 'video/webm' : 'video/mp4';
  return { src, poster, mime };
}

export function buildBrandFilmJsonLd(
  siteUrl: string,
  film: ReturnType<typeof resolveBrandFilm>,
) {
  if (!film.src) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: BRAND_FILM.name,
    description: BRAND_FILM.description,
    thumbnailUrl: `${siteUrl}${film.poster}`,
    contentUrl: `${siteUrl}${film.src}`,
    embedUrl: `${siteUrl}${BRAND_FILM.path}`,
    uploadDate: BRAND_FILM.uploadDate,
    duration: BRAND_FILM.durationIso,
    encodingFormat: film.mime,
    width: BRAND_FILM.width,
    height: BRAND_FILM.height,
    publisher: {
      '@type': 'Organization',
      name: 'Causewave Innovations LLP',
      url: siteUrl,
    },
  };
}
