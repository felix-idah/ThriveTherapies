import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';

/**
 * combine clsx and tailwind-merge
 * for conditionally combining class names and solving Tailwind CSS class name conflicts
 *
 * @param inputs - class name input (string, object, array, etc.)
 * @returns processed class name string
 *
 * @example
 * ```ts
 * cn("px-4 py-2", condition && "bg-blue-500", { "text-white": isActive })
 * ```
 *
 * @example
 * ```ts
 * cn(buttonVariants({ variant, size }), className)
 * ```
 */
const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export { cn, cva, type VariantProps };
