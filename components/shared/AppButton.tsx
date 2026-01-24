'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

export type AppButtonVariant = 'solid' | 'outline' | 'glass' | 'ghost'
export type AppButtonTone = 'dark' | 'light' | 'muted' | 'brand'
export type AppButtonSize = 'sm' | 'md' | 'lg'
export type AppButtonRadius = 'sm' | 'md' | 'lg' | 'full'

export type AppButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'variant' | 'size'
> & {
  variant?: AppButtonVariant
  tone?: AppButtonTone
  size?: AppButtonSize
  radius?: AppButtonRadius
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  iconOnly?: boolean
  fullWidth?: boolean
  loading?: boolean
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const sizeStyles: Record<AppButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-base',
  lg: 'h-12 px-6 text-base',
}

const iconOnlySizeStyles: Record<AppButtonSize, string> = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-12 w-12',
}

const radiusStyles: Record<AppButtonRadius, string> = {
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
}

/* ---------------------------- Variant + Tone ------------------------------- */

const solidToneStyles: Record<AppButtonTone, string> = {
  dark: 'bg-primary text-primary-foreground border border-primary hover:bg-primary/95 active:bg-primary/90 focus-visible:ring-primary/50',
  light: 'bg-on-dark-foreground text-foreground border border-on-dark-foreground hover:bg-on-dark-foreground/90 active:bg-on-dark-foreground/85 focus-visible:ring-on-dark-foreground/50',
  muted: 'bg-secondary text-secondary-foreground border border-secondary hover:bg-secondary/85 active:bg-secondary/75 focus-visible:ring-secondary/50',
  brand: 'bg-brand text-brand-foreground border border-brand hover:bg-brand/90 active:bg-brand/80 focus-visible:ring-brand/50',
}

const outlineToneStyles: Record<AppButtonTone, string> = {
  dark: 'bg-transparent border border-foreground text-foreground hover:bg-foreground/[0.04] active:bg-foreground/[0.08] focus-visible:ring-foreground/50',
  light: 'bg-transparent border border-on-dark-foreground text-on-dark-foreground hover:bg-on-dark-foreground/[0.08] active:bg-on-dark-foreground/[0.12] focus-visible:ring-on-dark-foreground/50',
  muted: 'bg-transparent border border-muted-foreground text-foreground hover:bg-foreground/[0.03] active:bg-foreground/[0.06] focus-visible:ring-muted-foreground/50',
  brand: 'bg-transparent border border-brand text-brand hover:bg-brand/[0.08] active:bg-brand/[0.12] focus-visible:ring-brand/50',
}

const glassToneStyles: Record<AppButtonTone, string> = {
  dark: 'bg-foreground/[0.02] border border-foreground/20 text-foreground backdrop-blur-sm hover:bg-foreground/[0.04] active:bg-foreground/[0.06] focus-visible:ring-foreground/50',
  light: 'bg-on-dark-foreground/[0.06] border border-on-dark-foreground/30 text-on-dark-foreground backdrop-blur-sm hover:bg-on-dark-foreground/[0.10] active:bg-on-dark-foreground/[0.14] focus-visible:ring-on-dark-foreground/50',
  muted: 'bg-on-dark-foreground/[0.06] border border-on-dark-foreground/20 text-on-dark-foreground backdrop-blur-sm hover:bg-on-dark-foreground/[0.10] active:bg-on-dark-foreground/[0.14] focus-visible:ring-muted-foreground/50',
  brand: 'bg-brand/[0.12] border border-brand/60 text-brand-foreground backdrop-blur-sm hover:bg-brand/[0.18] active:bg-brand/[0.24] focus-visible:ring-brand/50',
}

const ghostToneStyles: Record<AppButtonTone, string> = {
  dark: 'bg-transparent text-foreground hover:bg-foreground/[0.04] active:bg-foreground/[0.08] focus-visible:ring-foreground/50',
  light: 'bg-transparent text-on-dark-foreground hover:bg-on-dark-foreground/[0.08] active:bg-on-dark-foreground/[0.12] focus-visible:ring-on-dark-foreground/50',
  muted: 'bg-transparent text-muted-foreground hover:bg-foreground/[0.03] active:bg-foreground/[0.06] focus-visible:ring-muted-foreground/50',
  brand: 'bg-transparent text-brand hover:bg-brand/[0.08] active:bg-brand/[0.12] focus-visible:ring-brand/50',
}

/* -------------------------------------------------------------------------- */
/*                             Loading Spinner                                */
/* -------------------------------------------------------------------------- */

const LoadingSpinner = ({ size = 'md' }: { size?: AppButtonSize }) => {
  const sizeClass = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }[size]

  return (
    <svg
      className={cn('animate-spin', sizeClass)}
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
  )
}

/* -------------------------------------------------------------------------- */
/*                                AppButton                                   */
/* -------------------------------------------------------------------------- */

export const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  (
    {
      variant = 'solid',
      tone = 'dark',
      size = 'md',
      radius = 'lg',
      leftIcon,
      rightIcon,
      iconOnly,
      fullWidth,
      loading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = React.useMemo(() => {
      switch (variant) {
        case 'solid':
          return solidToneStyles[tone]
        case 'outline':
          return outlineToneStyles[tone]
        case 'glass':
          return glassToneStyles[tone]
        case 'ghost':
          return ghostToneStyles[tone]
        default:
          return solidToneStyles[tone]
      }
    }, [variant, tone])

    return (
      <Button
        ref={ref}
        disabled={disabled || loading}
        {...props}
        className={cn(
          baseStyles,
          iconOnly ? iconOnlySizeStyles[size] : sizeStyles[size],
          radiusStyles[radius],
          variantStyles,
          fullWidth && 'w-full',
          className
        )}
      >
        {loading && <LoadingSpinner size={size} />}
        
        {!loading && leftIcon && !iconOnly && (
          <span className="inline-flex shrink-0 -ml-0.5">{leftIcon}</span>
        )}

        {!iconOnly && !loading && <span>{children}</span>}
        {!iconOnly && loading && <span className="opacity-0">{children}</span>}

        {!loading && rightIcon && !iconOnly && (
          <span className="inline-flex shrink-0 -mr-0.5">{rightIcon}</span>
        )}

        {iconOnly && !loading && children}
        {iconOnly && loading && <span className="opacity-0">{children}</span>}
      </Button>
    )
  }
)

AppButton.displayName = 'AppButton'