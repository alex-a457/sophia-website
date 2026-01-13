"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { AppButton } from "../ui/AppButton";

type CardHoverActionsProps = {
  onAddToCart?: () => void;
  onQuickView?: () => void;

  hoverOverlaySrc?: string;
  hoverOverlayAlt?: string;

  className?: string;
};

export default function CardHoverActions({
  onAddToCart,
  onQuickView,
  hoverOverlaySrc="/latest-creation-hover.png",
  hoverOverlayAlt = "Hover overlay",
  className,
}: CardHoverActionsProps) {
  const showButtons = !!onAddToCart || !!onQuickView;

  return (
    <div
      className={cn(
        "absolute inset-0",
        "pointer-events-none",
        // the container becomes visible on hover
        "invisible translate-y-2 scale-95",
        "transition-transform duration-200",
        "group-hover:visible group-hover:translate-y-0 group-hover:scale-100",
        className
      )}
    >
      {/* OPTIONAL HOVER OVERLAY IMAGE */}
      {hoverOverlaySrc ? (
        <div
          className={cn(
            "absolute inset-0",
            "opacity-0 transition-opacity duration-200",
            "group-hover:opacity-100"
          )}
        >
          <Image
            src={hoverOverlaySrc}
            alt={hoverOverlayAlt}
            fill
            className="object-cover"
            draggable={false}
          />
          {/* optional: soften / blend it */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ) : null}

      {/* ACTION BUTTONS */}
      {showButtons ? (
        <div className="absolute inset-0 flex items-center justify-center">
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
      ) : null}
    </div>
  );
}
