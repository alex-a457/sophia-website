'use client'

import * as React from 'react'
import { Button } from '@heroui/react'
import { cn } from '@/lib/utils'


export type AppButtonVariant = 'solid' | 'outline' | 'glass' | 'ghost'
export type AppButtonTone = 'dark' | 'light' | 'muted' | 'brand'
export type AppButtonSize = 'sm' | 'md' | 'lg'
export type AppButtonRadius = 'sm' | 'md' | 'lg' | 'full'

export type AppButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'variant' | 'size' | 'radius'
> & {
  variant?: AppButtonVariant
  tone?: AppButtonTone
  size?: AppButtonSize
  radius?: AppButtonRadius
  leftIcon?: React.ReactNode
  iconOnly?: boolean
  fullWidth?: boolean
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                    */
/* -------------------------------------------------------------------------- */

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-medium transition-all select-none disabled:opacity-50 disabled:pointer-events-none'

const sizeStyles: Record<AppButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-base',
  lg: 'h-12 px-6 text-base',
}

const radiusStyles: Record<AppButtonRadius, string> = {
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-4xl',
  full: 'rounded-full',
}

/* ---------------------------- Variant + Tone ------------------------------- */

/* SOLID = filled buttons */
const solidToneStyles: Record<AppButtonTone, string> = {
  dark: 'bg-text text-white border border-text hover:bg-text/95 active:bg-text/90',
  light: 'bg-white text-black border border-white hover:bg-zinc-100 active:bg-zinc-200',
  muted: 'bg-zinc-200 text-zinc-700 border border-zinc-200 hover:bg-zinc-300 active:bg-zinc-400',
  brand: 'bg-brand text-white border border-brand hover:bg-brand/90 active:bg-brand/80',
}

/* OUTLINE = transparent outline (navbar style) */
const outlineToneStyles: Record<AppButtonTone, string> = {
  dark: 'bg-transparent border border-text text-theme hover:bg-text/[0.04] active:bg-text/[0.08]',
  light: 'bg-transparent border border-white text-white hover:bg-white/[0.08] active:bg-white/[0.12]',
  muted: 'bg-transparent border border-zinc-400 text-zinc-600 hover:bg-zinc-900/[0.03] active:bg-zinc-900/[0.06]',
  brand: 'bg-transparent border border-brand text-brand hover:bg-brand/[0.08] active:bg-brand/[0.12]',
}

/* GLASS = frosted outline (blur + tiny tint) */
const glassToneStyles: Record<AppButtonTone, string> = {
  dark: 'bg-text/[0.02] border border-text text-theme backdrop-blur-[8px] hover:bg-text/[0.04] active:bg-text/[0.06]',
  light: 'bg-white/[0.02] border border-white text-white backdrop-blur-[8px] hover:bg-white/[0.06] active:bg-white/[0.10]',
  muted: 'bg-white/[0.06] border border-white/20 text-zinc-100 backdrop-blur-[8px] hover:bg-white/[0.10] active:bg-white/[0.14]',
  brand: 'bg-brand/[0.12] border border-brand/60 text-white backdrop-blur-[8px] hover:bg-brand/[0.18] active:bg-brand/[0.24]',
}

/* GHOST = text-only */
const ghostToneStyles: Record<AppButtonTone, string> = {
  dark: 'bg-transparent text-theme hover:bg-text/[0.04] active:bg-text/[0.08]',
  light: 'bg-transparent text-white hover:bg-white/[0.08] active:bg-white/[0.12]',
  muted: 'bg-transparent text-zinc-500 hover:bg-zinc-900/[0.03] active:bg-zinc-900/[0.06]',
  brand: 'bg-transparent text-brand hover:bg-brand/[0.08] active:bg-brand/[0.12]',
}


/* -------------------------------------------------------------------------- */
/*                                AppButton                                   */
/* -------------------------------------------------------------------------- */

export const AppButton = React.forwardRef<
  HTMLButtonElement,
  AppButtonProps
>(
  (
    {
      variant = 'solid',
      tone = 'dark',
      size = 'md',
      radius = 'lg',
      leftIcon,
      iconOnly,
      fullWidth,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        {...props}
        className={cn(
          baseStyles,
          sizeStyles[size],
          radiusStyles[radius],

          variant === 'solid' && solidToneStyles[tone],
          variant === 'outline' && outlineToneStyles[tone],
          variant === 'glass' && glassToneStyles[tone],
          variant === 'ghost' && ghostToneStyles[tone],

          fullWidth && 'w-full',
          iconOnly && 'p-0 aspect-square',

          className
        )}
      >
        {leftIcon && !iconOnly && (
          <span className="inline-flex shrink-0">{leftIcon}</span>
        )}

        {!iconOnly && <span>{children}</span>}

        {iconOnly && children}
      </Button>
    )
  }
)

AppButton.displayName = 'AppButton'
