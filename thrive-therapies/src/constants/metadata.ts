import { CONFIG_CLIENT } from '@/config/client';

import type { Metadata } from '@/types/common';
import type { ValueUnion } from '@/types/utils';

// can't import getDefaultOpenGraphImagePath here, circular dependency

const { SITE_URL, SITE_DESCRIPTION, SITE_TITLE } = CONFIG_CLIENT;

// TODO: make default og image with png logo

/** Must be url from public folder. */
export const defaultOgImage = `${SITE_URL}/images/default/default-open-graph-image.jpg`;

export const titleSeparator = '-';

export const DEFAULT_METADATA: Required<Metadata> = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  image: defaultOgImage,
} as const;

/**
 * Metadata for all pages that aren't defined in markdown.
 * Add it here for every new page.
 * Reused for ogImage api route.
 */
export const PAGE_METADATA = {
  home: {
    title: 'Home',
    description: 'Home',
  },
  'intelligent-tools': {
    title: 'Intelligent Tools',
    description: 'Intelligent Tools',
  },
  'security&compliance': {
    title: 'Security & Compliance',
    description: 'Security & Compliance',
  },
  'compare-tools': {
    title: 'Compare Tools',
    description: 'Compare Tools',
  },
  'product-support': {
    title: 'Explore',
  },
  'free-trial-for-individual-providers': {
    title: 'Free Trial for Individual Providers',
  },
  'results-driven-services': {
    title: 'Results-Driven Services',
  },
  about: {
    title: 'About Us',
    description: 'About Us',
  },
  'join-our-team': {
    title: 'Join Our Team',
    description: 'Join Our Team',
  },
  'contact-us': {
    title: 'Contact Us',
    description: 'Contact Us',
  },
} as const;

export type PageMetadataKey = keyof typeof PAGE_METADATA;

export const OG_IMAGE_PREFIXES = {
  OG_INTELLIGENT_TOOLS: 'intelligent-tools',
  OG_SECURITY_COMPLIANCE: 'security-compliance',
  OG_COMPARE_TOOLS: 'compare-tools',
  OG_PRODUCT_SUPPORT: 'product-support',
  OG_FREE_TRIAL_FOR_INDIVIDUAL_PROVIDERS: 'free-trial-for-individual-providers',
  OG_RESULTS_DRIVEN_SERVICES: 'results-driven-services',
  OG_ABOUT: 'about',
  OG_JOIN_OUR_TEAM: 'join-our-team',
  OG_CONTACT_US: 'contact-us',
} as const;

export type OgImagePrefixType = ValueUnion<typeof OG_IMAGE_PREFIXES>;
