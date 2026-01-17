// components/cart/QuantityStepper.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AppButton } from "@/components/ui/AppButton";

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
    "grid place-items-center h-full w-full leading-none select-none translate-y-[-0.5px] text-xl";

  return (
    <div className={cn("inline-flex items-center gap-8", className)}>
      {/* MINUS */}
      <AppButton
        type="button"
        onPress={onDecrease}
        isDisabled={!canDec}
        aria-label="Decrease quantity"
        iconOnly
        size="sm"
        radius="full"
        variant={canDec ? "solid" : "outline"}
        tone={canDec ? "dark" : "muted"}
        className={cn(
          "h-7 w-7 min-w-0 p-0",
          "[&>span]:h-full [&>span]:w-full [&>span]:grid [&>span]:place-items-center",
          canDec
            ? "bg-theme border-theme text-white hover:bg-theme/95 active:bg-theme/90"
            : "bg-transparent border-[#AEAEAE] text-[#AEAEAE] hover:bg-black/[0.04] active:bg-black/[0.08]"
        )}
      >
        <span className={iconBase} aria-hidden>
          −
        </span>
      </AppButton>

      {/* VALUE */}
      <div className="min-w-[18px] text-center text-[28px] font-semibold text-theme">
        {value}
      </div>

      {/* PLUS */}
      <AppButton
        type="button"
        onPress={onIncrease}
        aria-label="Increase quantity"
        iconOnly
        size="sm"
        radius="full"
        variant="solid"
        tone="dark"
        className={cn(
          "h-7 w-7 min-w-0 p-0 bg-theme border-theme text-white hover:bg-theme/95 active:bg-theme/90",
          "[&>span]:h-full [&>span]:w-full [&>span]:grid [&>span]:place-items-center"
        )}
      >
        <span className={iconBase} aria-hidden>
          +
        </span>
      </AppButton>
    </div>
  );
}
