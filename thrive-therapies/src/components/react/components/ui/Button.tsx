import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { BUTTON_SIZES, BUTTON_VARIANTS, ICON_POSITIONS } from '@/constants/button';
import { cn } from '@/utils/ui/styles';

import type { IconPosition } from '@/constants/button';
import type { VariantProps } from 'class-variance-authority';

import { Spinner } from '@/assets/icons/react/spinner';

const buttonVariants = cva('btn', {
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
      {loading && <Spinner />}

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
