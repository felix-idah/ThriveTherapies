import type { OG_IMAGE_PREFIXES, PAGE_METADATA } from '@/constants/metadata';
import type { NAVIGATION_ITEMS } from '@/constants/navigation';
import type { ValueUnion } from '@/types/utils';
import type { LocalImageProps } from 'astro:assets';

/**
 * @description type for navigation item
 */
type NavigationItem = (typeof NAVIGATION_ITEMS)[number];

/**
 * @description type for metadata
 */
type PageMetadataKey = keyof typeof PAGE_METADATA;

/**
 * @description type for individual fixed image configuration
 */
type FixedImageConfig = Required<Pick<LocalImageProps, 'width' | 'height'>> & {
  quality?: 'low' | 'mid' | 'high' | 'max' | number;
  loading?: LocalImageProps['loading'];
};

/**
 * @description type for individual responsive image configuration
 */
type ResponsiveImageConfig = Required<Pick<LocalImageProps, 'widths' | 'sizes'>> & {
  quality?: 'low' | 'mid' | 'high' | 'max' | number;
  loading?: LocalImageProps['loading'];
  // for debugging
  debugClass?: string;
};

/**
 * @description type for individual remote image configuration
 * Used for images in public directory that require explicit dimensions
 */
type RemoteImageConfig = Required<Pick<LocalImageProps, 'width' | 'height'>> & {
  quality?: 'low' | 'mid' | 'high' | 'max' | number;
  loading?: LocalImageProps['loading'];
};

/**
 * @description type for image
 */
type ImageSizes = {
  FIXED: Record<string, FixedImageConfig>;
  RESPONSIVE: Record<string, ResponsiveImageConfig>;
  REMOTE: Record<string, RemoteImageConfig>;
};

/**
 * @description type for open graph image prefix
 */
type OgImagePrefixType = ValueUnion<typeof OG_IMAGE_PREFIXES>;

export type { PageMetadataKey, ImageSizes, OgImagePrefixType, NavigationItem };
