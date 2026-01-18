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

const INK = '#151515'
const FB = '#0F71CD'

/* SOLID = filled buttons */
const solidToneStyles: Record<AppButtonTone, string> = {
  // Primary black buttons (Submit / Buy Now)
  dark: `bg-[${INK}] text-white border border-[${INK}] hover:bg-[${INK}]/95 active:bg-[${INK}]/90`,

  light: 'bg-white text-black border border-white hover:bg-zinc-100 active:bg-zinc-200',

  muted: 'bg-zinc-200 text-zinc-700 border border-zinc-200 hover:bg-zinc-300 active:bg-zinc-400',

  // Facebook / Brand solid
  brand: `bg-[${FB}] text-white border border-[${FB}] hover:bg-[${FB}]/90 active:bg-[${FB}]/80`,
}

/* OUTLINE = transparent outline (navbar style) */
const outlineToneStyles: Record<AppButtonTone, string> = {
  // Dark ink outline (Sign up on white navbar)
  dark: `bg-transparent border border-[${INK}] text-[${INK}] hover:bg-[${INK}]/[0.04] active:bg-[${INK}]/[0.08]`,

  // White ink outline (when placed on images)
  light: 'bg-transparent border border-white text-white hover:bg-white/[0.08] active:bg-white/[0.12]',

  muted:
    'bg-transparent border border-zinc-400 text-zinc-600 hover:bg-zinc-900/[0.03] active:bg-zinc-900/[0.06]',
    
  brand: `bg-transparent border border-[${FB}] text-[${FB}] hover:bg-[${FB}]/[0.08] active:bg-[${FB}]/[0.12]`,
}

/* GLASS = frosted outline (blur + tiny tint) */
const glassToneStyles: Record<AppButtonTone, string> = {
  // Frosted for LIGHT surfaces (used even on white bg)
  // Looks like: subtle dark tint + dark border/text + blur
  dark: `bg-[${INK}]/[0.02] border border-[${INK}] text-[${INK}] backdrop-blur-[8px] hover:bg-[${INK}]/[0.04] active:bg-[${INK}]/[0.06]`,

  // Frosted for DARK/IMAGE surfaces
  // Looks like: subtle white tint + white border/text + blur
  light:
    'bg-white/[0.02] border border-white text-white backdrop-blur-[8px] hover:bg-white/[0.06] active:bg-white/[0.10]',

  muted:
    'bg-white/[0.06] border border-white/20 text-zinc-100 backdrop-blur-[8px] hover:bg-white/[0.10] active:bg-white/[0.14]',

  // Frosted brand (rare)
  brand: `bg-[${FB}]/[0.12] border border-[${FB}]/60 text-white backdrop-blur-[8px] hover:bg-[${FB}]/[0.18] active:bg-[${FB}]/[0.24]`,
}

/* GHOST = text-only */
const ghostToneStyles: Record<AppButtonTone, string> = {
  dark: `bg-transparent text-[${INK}] hover:bg-[${INK}]/[0.04] active:bg-[${INK}]/[0.08]`,
  light: 'bg-transparent text-white hover:bg-white/[0.08] active:bg-white/[0.12]',
  muted: 'bg-transparent text-zinc-500 hover:bg-zinc-900/[0.03] active:bg-zinc-900/[0.06]',
  brand: `bg-transparent text-[${FB}] hover:bg-[${FB}]/[0.08] active:bg-[${FB}]/[0.12]`,
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
