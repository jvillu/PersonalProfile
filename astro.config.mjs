import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  site: process.env.CUSTOM_DOMAIN ? 'https://javiervillullas.es' : 'https://jvillullas.github.io',
  base: process.env.CUSTOM_DOMAIN ? '/' : (process.env.NODE_ENV === 'production' ? '/PersonalProfile' : '/'),
  output: 'static'
});
