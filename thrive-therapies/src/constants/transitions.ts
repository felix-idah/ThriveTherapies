// Animation types
export const ANIMATION_TYPES = {
  FADE_IN: 'fadeIn',
  FADE_IN_UP: 'fadeInUp',
  FADE_IN_DOWN: 'fadeInDown',
  FADE_IN_LEFT: 'fadeInLeft',
  FADE_IN_RIGHT: 'fadeInRight',
  SLIDE_IN_UP: 'slideInUp',
  SLIDE_IN_DOWN: 'slideInDown',
  SLIDE_IN_LEFT: 'slideInLeft',
  SLIDE_IN_RIGHT: 'slideInRight',
  SCALE_IN: 'scaleIn',
  SCALE_IN_UP: 'scaleInUp',
  BOUNCE_IN: 'bounceIn',
  BOUNCE_IN_UP: 'bounceInUp',
} as const;

// Page transition types
export const PAGE_TRANSITION_TYPES = {
  SLIDE: 'slide',
  FADE: 'fade',
  SCALE: 'scale',
} as const;

// Navigation directions
export const NAVIGATION_DIRECTIONS = {
  DEEPER: 'deeper',
  SHALLOWER: 'shallower',
  SAME: 'same',
} as const;

// Astro page events (from Astro's ClientRouter)
export const ASTRO_EVENTS = {
  PAGE_LOAD: 'astro:page-load',
  BEFORE_PREPARATION: 'astro:before-preparation',
  AFTER_PREPARATION: 'astro:after-preparation',
  BEFORE_SWAP: 'astro:before-swap',
  AFTER_SWAP: 'astro:after-swap',
} as const;

// Animation timing constants
export const ANIMATION_TIMINGS = {
  DEFAULT_DELAY_INCREMENT: 100,
  DEFAULT_PARALLAX_SPEED: 0.1,
  CLEANUP_DELAY: 1000,
  ANIMATION_START_DELAY: 10,
} as const;

// CSS class names
export const CSS_CLASSES = {
  ANIMATED: 'animated',
  PARALLAX_CONTAINER: 'parallax-container',
  PARALLAX_ELEMENT: 'parallax-element',
  PAGE_CONTENT: 'page-content',
} as const;

// HTML attributes
export const HTML_ATTRIBUTES = {
  DATA_ANIMATE: 'data-animate',
  DATA_DELAY: 'data-delay',
  DATA_PARALLAX: 'data-parallax',
  DATA_PAGE_TRANSITION: 'data-page-transition',
  DATA_NAVIGATION: 'data-navigation',
} as const;

// Selectors
export const SELECTORS = {
  ANIMATED_ELEMENTS: `[${HTML_ATTRIBUTES.DATA_ANIMATE}]`,
  PARALLAX_ELEMENTS: `[${HTML_ATTRIBUTES.DATA_PARALLAX}]`,
  PAGE_TRANSITION_ELEMENTS: `[${HTML_ATTRIBUTES.DATA_PAGE_TRANSITION}]`,
  ANCHOR_LINKS: 'a[href^="#"]:not([href="#"])',
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  NAVIGATION_DIRECTION: 'navigationDirection',
} as const;

// Scroll behavior
export const SCROLL_BEHAVIOR = {
  SMOOTH: 'smooth',
  AUTO: 'auto',
  INSTANT: 'instant',
} as const;

// Event options
export const EVENT_OPTIONS = {
  PASSIVE: { passive: true },
} as const;

export type AnimationType = (typeof ANIMATION_TYPES)[keyof typeof ANIMATION_TYPES];
export type PageTransitionType = (typeof PAGE_TRANSITION_TYPES)[keyof typeof PAGE_TRANSITION_TYPES];
export type NavigationDirection =
  (typeof NAVIGATION_DIRECTIONS)[keyof typeof NAVIGATION_DIRECTIONS];
export type AstroEvent = (typeof ASTRO_EVENTS)[keyof typeof ASTRO_EVENTS];
