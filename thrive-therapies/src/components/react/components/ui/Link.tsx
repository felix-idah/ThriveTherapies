import * as React from 'react';

import { cva } from 'class-variance-authority';

import { BUTTON_SIZES, BUTTON_VARIANTS, ICON_POSITIONS } from '@/constants/button';
import { cn } from '@/utils/ui/styles';

import type { IconPosition } from '@/constants/button';
import type { VariantProps } from 'class-variance-authority';

import { Spinner } from '@/assets/icons/react/spinner';

const linkVariants = cva('btn', {
  variants: {
    variant: {
      [BUTTON_VARIANTS.PRIMARY]: 'btn-primary',
      [BUTTON_VARIANTS.SECONDARY]: 'btn-secondary',
      [BUTTON_VARIANTS.OUTLINE]: 'btn-outline',
      [BUTTON_VARIANTS.GHOST]: 'btn-ghost',
      [BUTTON_VARIANTS.LINK]: 'btn-link',
    },
    size: {
      [BUTTON_SIZES.SMALL]: 'btn-sm',
      [BUTTON_SIZES.MEDIUM]: 'btn-md',
      [BUTTON_SIZES.LARGE]: 'btn-lg',
    },
    iconPosition: {
      [ICON_POSITIONS.LEFT]: 'btn-icon-left',
      [ICON_POSITIONS.RIGHT]: 'btn-icon-right',
      [ICON_POSITIONS.ONLY]: 'btn-icon-only',
    },
  },
  defaultVariants: {
    variant: BUTTON_VARIANTS.PRIMARY,
    size: BUTTON_SIZES.MEDIUM,
  },
});

export interface LinkProps extends React.ComponentProps<'a'>, VariantProps<typeof linkVariants> {
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  external?: boolean;
}

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
          <Spinner />
        </span>
      )}
    </a>
  );
}

export { Link, linkVariants };
