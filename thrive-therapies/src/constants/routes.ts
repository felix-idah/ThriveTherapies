const ROUTES = {
  HOME: '/',
  ABOUT: '/about/',
  CONTACT: '/contact/',
  JOIN_OUR_TEAM: '/join-our-team/',
  FREE_TRIAL_FOR_INDIVIDUAL_PROVIDERS: '/free-trial-for-individual-providers/',
  RESULTS_DRIVEN_SERVICES: '/results-driven-services/',
  INTELLIGENT_TOOLS: '/intelligent-tools/',
  SECURITY_COMPLIANCE: '/security-compliance/',
  COMPARE_TOOLS: '/compare-tools/',
  PRODUCT_SUPPORT: '/product-support/',
  _404: '/404/',
  _500: '/500/',
  STATIC: {
    IMAGES: '/images/',
    FAVICONS: '/images/favicons/',
    /** generated at build-time only */
    SITEMAP: '/sitemap-index.xml',
  },
  API: {
    OG_IMAGES: '/api/open-graph/',
    FEED_JSON: '/api/feed.json',
    FEED_RSS: '/api/feed.xml',
  },
} as const;

export { ROUTES };
