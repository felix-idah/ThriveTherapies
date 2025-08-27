import {
  ANIMATION_TIMINGS,
  ASTRO_EVENTS,
  CSS_CLASSES,
  EVENT_OPTIONS,
  HTML_ATTRIBUTES,
  NAVIGATION_DIRECTIONS,
  SCROLL_BEHAVIOR,
  SELECTORS,
  STORAGE_KEYS,
} from '@/constants/transitions';

import type { NavigationDirection } from '@/constants/transitions';

// Navigation event interface
interface NavigationEvent extends Event {
  from?: string;
  to?: string;
}

// Enhanced page transitions
document.addEventListener(ASTRO_EVENTS.PAGE_LOAD, () => {
  // Add animation classes to elements with data-animate attribute
  const animatedElements = document.querySelectorAll(SELECTORS.ANIMATED_ELEMENTS);

  animatedElements.forEach((element, index) => {
    const animationType = element.getAttribute(HTML_ATTRIBUTES.DATA_ANIMATE);
    const delay =
      element.getAttribute(HTML_ATTRIBUTES.DATA_DELAY) ||
      (index * ANIMATION_TIMINGS.DEFAULT_DELAY_INCREMENT).toString();

    // Set animation delay
    (element as HTMLElement).style.animationDelay = `${delay}ms`;

    // Add animation class based on data-animate attribute
    setTimeout(() => {
      if (animationType) {
        element.classList.add(animationType);
        element.classList.add(CSS_CLASSES.ANIMATED);
      }
    }, ANIMATION_TIMINGS.ANIMATION_START_DELAY);
  });

  // Parallax effect for elements with data-parallax attribute
  const parallaxElements = document.querySelectorAll(SELECTORS.PARALLAX_ELEMENTS);

  if (parallaxElements.length > 0) {
    const handleParallax = () => {
      parallaxElements.forEach((element) => {
        const speed = parseFloat(
          element.getAttribute(HTML_ATTRIBUTES.DATA_PARALLAX) ||
            ANIMATION_TIMINGS.DEFAULT_PARALLAX_SPEED.toString()
        );
        const yPos = -(window.scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax, EVENT_OPTIONS.PASSIVE);
  }

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll(SELECTORS.ANCHOR_LINKS);

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = targetId ? document.querySelector(targetId) : null;

      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: offsetTop,
          behavior: SCROLL_BEHAVIOR.SMOOTH,
        });
      }
    });
  });

  // Page transition effects
  const pageTransitionElements = document.querySelectorAll(SELECTORS.PAGE_TRANSITION_ELEMENTS);

  pageTransitionElements.forEach((element) => {
    const transitionType = element.getAttribute(HTML_ATTRIBUTES.DATA_PAGE_TRANSITION);
    if (transitionType) element.classList.add(`transition-${transitionType}`);
  });
});

// Handle navigation events
document.addEventListener(ASTRO_EVENTS.BEFORE_PREPARATION, (event: NavigationEvent) => {
  const { from, to } = event;

  // Store navigation direction in localStorage to use it after page load
  if (from && to) {
    const fromPath = new URL(from).pathname;
    const toPath = new URL(to).pathname;

    // Determine navigation direction based on path depth
    const fromDepth = fromPath.split('/').filter(Boolean).length;
    const toDepth = toPath.split('/').filter(Boolean).length;

    let navDirection: NavigationDirection = NAVIGATION_DIRECTIONS.SAME;

    if (toDepth > fromDepth) {
      navDirection = NAVIGATION_DIRECTIONS.DEEPER;
    } else if (toDepth < fromDepth) {
      navDirection = NAVIGATION_DIRECTIONS.SHALLOWER;
    }

    localStorage.setItem(STORAGE_KEYS.NAVIGATION_DIRECTION, navDirection);
  }
});

// Apply direction-specific transitions
document.addEventListener(ASTRO_EVENTS.PAGE_LOAD, () => {
  const navDirection = localStorage.getItem(STORAGE_KEYS.NAVIGATION_DIRECTION);

  if (navDirection) {
    document.documentElement.setAttribute(HTML_ATTRIBUTES.DATA_NAVIGATION, navDirection);

    // Clean up after transition completes
    setTimeout(() => {
      localStorage.removeItem(STORAGE_KEYS.NAVIGATION_DIRECTION);
    }, ANIMATION_TIMINGS.CLEANUP_DELAY);
  }
});
