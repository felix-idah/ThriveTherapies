import * as React from 'react';

import { cva } from 'class-variance-authority';

import { BUTTON_SIZES, BUTTON_VARIANTS, ICON_POSITIONS } from '@/constants/button';
import { cn } from '@/utils/ui/styles';

import type { IconPosition } from '@/constants/button';
import type { VariantProps } from 'class-variance-authority';

const linkVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 no-underline',
  {
    variants: {
      variant: {
        [BUTTON_VARIANTS.PRIMARY]: 'bg-[#3A3A5C] text-white hover:bg-[#2D2D47] shadow-sm',
        [BUTTON_VARIANTS.DEFAULT]:
          'bg-[#F2F2F5] text-[#3A3A3C] hover:bg-[#E8E8EB] border border-[#E0E0E3]',
        [BUTTON_VARIANTS.OUTLINE]:
          'border border-[#E0E0E3] bg-transparent hover:bg-[#F2F2F5] text-[#3A3A3C]',
        [BUTTON_VARIANTS.GHOST]: 'hover:bg-[#F2F2F5] text-[#3A3A3C]',
        [BUTTON_VARIANTS.LINK]: 'text-[#3A3A5C] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        [BUTTON_SIZES.SMALL]: 'h-9 px-6 py-3 text-sm', // 12px vertical + 24px horizontal + 14px font
        [BUTTON_SIZES.MEDIUM]: 'h-11 px-8 py-3.5 text-base', // 14px vertical + 32px horizontal + 16px font
        [BUTTON_SIZES.LARGE]: 'h-12 px-12 py-4 text-lg', // 16px vertical + 48px horizontal + 18px font
      },
      iconPosition: {
        [ICON_POSITIONS.LEFT]: 'flex-row',
        [ICON_POSITIONS.RIGHT]: 'flex-row-reverse',
        [ICON_POSITIONS.ONLY]: 'px-3',
      },
    },
    defaultVariants: {
      variant: BUTTON_VARIANTS.PRIMARY,
      size: BUTTON_SIZES.MEDIUM,
    },
  }
);

export interface LinkProps extends React.ComponentProps<'a'>, VariantProps<typeof linkVariants> {
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  external?: boolean;
}

/**
 * Link component following design system specifications
 * Styled like a button but renders as an anchor tag
 *
 * @param variant - Link style variant (primary, default, outline, ghost, link)
 * @param size - Link size (sm, md, lg)
 * @param icon - Icon element to display
 * @param iconPosition - Position of icon (left, right, only)
 * @param external - Whether link opens in new tab
 * @param className - Additional CSS classes
 * @param props - Additional anchor props
 */
function Link({
  className,
  variant,
  size,
  iconPosition,
  icon,
  external = false,
  children,
  href,
  ...props
}: LinkProps) {
  const showIcon = !!icon;
  const showChildren = children && iconPosition !== ICON_POSITIONS.ONLY;

  const externalProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <a
      className={cn(linkVariants({ variant, size, iconPosition, className }))}
      href={href}
      {...externalProps}
      {...props}
    >
      {showIcon && iconPosition !== ICON_POSITIONS.RIGHT && (
        <span className="flex items-center justify-center w-4 h-4">{icon}</span>
      )}

      {showChildren && children}

      {showIcon && iconPosition === ICON_POSITIONS.RIGHT && (
        <span className="flex items-center justify-center w-4 h-4">{icon}</span>
      )}

      {external && !icon && (
        <span className="flex items-center justify-center w-4 h-4">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </span>
      )}
    </a>
  );
}

export { Link, linkVariants };
