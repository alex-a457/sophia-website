// components/cart/QuantityStepper.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { AppButton } from '@/components/shared/AppButton';

type Props = {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
  min?: number;
  className?: string;
};

export default function QuantityStepper({
  value,
  onDecrease,
  onIncrease,
  min = 1,
  className,
}: Props) {
  const canDec = value > min;

  const iconBase =
    'grid place-items-center h-full w-full leading-none select-none translate-y-[-0.5px] text-xl';

  return (
    <div className={cn('inline-flex items-center gap-8', className)}>
      {/* MINUS */}
      <AppButton
        type="button"
        onClick={onDecrease}
        disabled={!canDec}
        aria-label="Decrease quantity"
        iconOnly
        size="sm"
        radius="full"
        variant={canDec ? 'solid' : 'outline'}
        tone={canDec ? 'dark' : 'muted'}
        className={cn(
          'h-7 w-7 min-w-0 p-0',
          '[&>span]:grid [&>span]:h-full [&>span]:w-full [&>span]:place-items-center',
          canDec
            ? 'border-[#151515] bg-[#151515] text-white hover:bg-[#151515]/95 active:bg-[#151515]/90'
            : 'border-[#AEAEAE] bg-transparent text-[#AEAEAE] hover:bg-black/4 active:bg-black/8',
        )}
      >
        <span className={iconBase} aria-hidden>
          −
        </span>
      </AppButton>

      {/* VALUE */}
      <div className="min-w-[18px] text-center text-[28px] font-semibold text-foreground">
        {value}
      </div>

      {/* PLUS */}
      <AppButton
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        iconOnly
        size="sm"
        radius="full"
        variant="solid"
        tone="dark"
        className={cn(
          'h-7 w-7 min-w-0 border-[#151515] bg-[#151515] p-0 text-white hover:bg-[#151515]/95 active:bg-[#151515]/90',
          '[&>span]:grid [&>span]:h-full [&>span]:w-full [&>span]:place-items-center',
        )}
      >
        <span className={iconBase} aria-hidden>
          +
        </span>
      </AppButton>
    </div>
  );
}
