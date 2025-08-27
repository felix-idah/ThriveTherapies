// Button size constants based on design system
export const BUTTON_SIZES = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
} as const;

// Button variant constants
export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  DEFAULT: 'default',
  OUTLINE: 'outline',
  GHOST: 'ghost',
  LINK: 'link',
} as const;

// Icon positions
export const ICON_POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right',
  ONLY: 'only',
} as const;

export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
export type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
export type IconPosition = (typeof ICON_POSITIONS)[keyof typeof ICON_POSITIONS];
