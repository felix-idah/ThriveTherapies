import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { BUTTON_SIZES, BUTTON_VARIANTS, ICON_POSITIONS } from '@/constants/button';
import { cn } from '@/utils/ui/styles';

import type { IconPosition } from '@/constants/button';
import type { VariantProps } from 'class-variance-authority';

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      [BUTTON_VARIANTS.PRIMARY]: 'btn-primary',
      [BUTTON_VARIANTS.DEFAULT]: 'btn-default',
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

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  loading?: boolean;
  cursor?: 'pointer' | 'default';
}

function Button({
  className,
  variant,
  size,
  iconPosition,
  icon,
  loading = false,
  asChild = false,
  cursor = 'pointer',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  const showIcon = icon && !loading;
  const showChildren = children && iconPosition !== ICON_POSITIONS.ONLY;

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, iconPosition, className }))}
      disabled={disabled || loading}
      style={{ cursor }}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {showIcon && iconPosition !== ICON_POSITIONS.RIGHT && (
        <span className="flex items-center justify-center w-4 h-4">{icon}</span>
      )}

      {showChildren && children}

      {showIcon && iconPosition === ICON_POSITIONS.RIGHT && (
        <span className="flex items-center justify-center w-4 h-4">{icon}</span>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
