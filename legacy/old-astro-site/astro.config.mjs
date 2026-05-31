import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://hemantdoc12.github.io',
  base: '/causewave-site/',
  trailingSlash: 'always',
});