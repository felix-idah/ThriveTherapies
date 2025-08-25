import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

import { PROCESS_ENV } from '../../config/process-env';
import { ROUTES } from '../../constants/routes';

const { SITE_URL } = PROCESS_ENV;

// imported in astro.config.ts
// !must not use CONFIG, but process-env.ts

/** generated at build-time only */
export const sitemapIntegration = () =>
  sitemap({
    serialize: (item) => {
      if (item.url.endsWith(SITE_URL)) {
        item.priority = 1.0;
        // google can access it with '/'
      } else if (item.url.endsWith(`${SITE_URL}${ROUTES.ABOUT}`)) {
        item.changefreq = 'monthly' as ChangeFreqEnum;
        item.priority = 0.8;
      } else if (item.url.endsWith(`${SITE_URL}${ROUTES.CONTACT}`)) {
        item.changefreq = 'monthly' as ChangeFreqEnum;
        item.priority = 0.7;
      }
      return item;
    },
  });
