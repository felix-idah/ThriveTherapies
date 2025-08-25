const ROUTES = {
    HOME: "/",
    ABOUT: "/about/",
    CONTACT: "/contact/",
    _404: "/404/",
    _500: "/500/",
    STATIC: {
      IMAGES: "/images/",
      FAVICONS: "/images/favicons/",
      /** generated at build-time only */
      SITEMAP: "/sitemap-index.xml",
    },
    API: {
      OG_IMAGES: "/api/open-graph/",
      FEED_JSON: "/api/feed.json",
      FEED_RSS: "/api/feed.xml",
    },
  } as const;
  
  export { ROUTES };