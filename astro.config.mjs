import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: change this to your final production URL before launch.
  // For the Netlify subdomain preview, set to e.g. 'https://pveyedocs.netlify.app'
  site: 'https://www.eyedocspv.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
