"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AppButton } from "./ui/AppButton";
import { IoCartOutline, IoSearch } from "react-icons/io5";

type CardHoverActionsProps = {
  onAddToCart?: () => void;
  onQuickView?: () => void;
  className?: string;
};

export default function CardHoverActions({
  onAddToCart,
  onQuickView,
  className,
}: CardHoverActionsProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center",
        "pointer-events-none",
        // Hidden by default without opacity-based painting issues:
        "invisible translate-y-2 scale-95",
        "transition-transform duration-200",
        "group-hover:visible group-hover:translate-y-0 group-hover:scale-100",
        className
      )}
    >
      <div className="pointer-events-auto flex gap-3">
        {onAddToCart && (
          <AppButton
            type="button"
            variant="glass"
            iconOnly
            tone="light"
            radius="full"
            onPress={onAddToCart}
            className="h-12 w-12 min-w-0 p-0 shadow-sm transform-gpu"
            aria-label="Add to cart"
          >
            <IoCartOutline size={24} />
          </AppButton>
        )}

        {onQuickView && (
          <AppButton
            iconOnly
            radius="full"
            variant="glass"
            tone="light"
            onPress={onQuickView}
            className="h-12 w-12 min-w-0 p-0 shadow-sm transform-gpu"
            aria-label="Quick view"
          >
            <IoSearch size={24} />
          </AppButton>
        )}
      </div>
    </div>
  );
}
