import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import { astroFont } from 'astro-font/integration';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import { astroEnvSchema, PROCESS_ENV } from './src/config/process-env';
import { sitemapIntegration } from './src/libs/integrations/sitemap';

const { SITE_URL } = PROCESS_ENV;

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  env: astroEnvSchema,
  compressHTML: true,
  devToolbar: { enabled: false },

  // viewTransitions: false,

  integrations: [
    react({
      include: ['**/*.tsx'],
    }),
    icon({ iconDir: './src/assets/icons' }),
    partytown({ config: { forward: ['dataLayer.push'] } }),
    sitemapIntegration(),
  ],
  vite: {
    build: {
      sourcemap: false,
    },

    server: {
      allowedHosts: ['localhost', 'thrive-therapies.com'],
      // develop mode, hot module replacement
      hmr: true,
    },

    // develop mode
    optimizeDeps: {
      force: true,
    },

    resolve: {
      alias: {
        '@/assets': '/src/assets',
        '@/components': '/src/components',
        '@/modules': '/src/modules',
        '@/constants': '/src/constants',
        '@/content': '/src/content',
        '@/layouts': '/src/layouts',
        '@/features': '/src/features',
        '@/libs': '/src/libs',
        '@/pages': '/src/pages',
        '@/schemas': '/src/schemas',
        '@/styles': '/src/styles',
        '@/types': '/src/types',
        '@/utils': '/src/utils',
        '@/config': '/src/config',
        '@/scripts': '/src/scripts',
      },
    },
    plugins: [
      // @ts-expect-error
      tailwindcss(),
      astroFont(),
    ],
  },
  output: 'static',
});
