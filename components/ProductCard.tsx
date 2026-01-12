// ProductCard.tsx
"use client";

import React from "react";
import { Tooltip} from "@heroui/react";
import { cn } from "@/lib/utils";
import AppImage from "./AppImage";
import WishlistButton from "./ui/WishlistButton";
import CardHoverActions from "./CardHoverActions";

export type Price =
  | { type: "sale"; original: number; sale: number; currency?: "USD" }
  | { type: "startingAt"; amount: number; currency?: "USD" }
  | { type: "range"; min: number; max: number; currency?: "USD" }
  | { type: "regular"; amount: number; currency?: "USD" };

type ProductCardProps = {
  kind: "Ring" | "Earrings" | string;
  title: string;
  imageSrc: string;
  isWished?: boolean;

  price: Price;

  // optional badge like: "25% Leaving Season"
  badgeText?: string;

  onToggleWish?: () => void;
  onAddToCart?: () => void;
  onQuickView?: () => void;

  className?: string;
};

function formatMoney(amount: number, currency: "USD" = "USD") {
  // You can later swap to Intl with locale if needed
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function PriceView({ price }: { price: Price }) {
  const currency = price.currency ?? "USD";

  switch (price.type) {
    case "sale":
      return (
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-neutral-400 line-through">
            {formatMoney(price.original, currency)}
          </span>
          <span className="text-sm font-semibold text-red-500">
            {formatMoney(price.sale, currency)}
          </span>
        </div>
      );

    case "startingAt":
      return (
        <div className="text-sm text-neutral-800">
          <span className="text-neutral-500">Starting at: </span>
          <span className="font-semibold">{formatMoney(price.amount, currency)}</span>
        </div>
      );

    case "range":
      return (
        <div className="text-sm font-semibold text-neutral-800">
          {formatMoney(price.min, currency)} - {formatMoney(price.max, currency)}
        </div>
      );

    case "regular":
      return (
        <div className="text-sm font-semibold text-neutral-800">
          {formatMoney(price.amount, currency)}
        </div>
      );
  }
}

export default function ProductCard({
  kind,
  title,
  imageSrc,
  isWished = false,
  price,
  badgeText,
  onToggleWish,
  onAddToCart,
  onQuickView,
  className,
}: ProductCardProps) {
  return (
    <div className={cn("group w-full", className)}>
      {/* IMAGE AREA */}
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
        <AppImage
          src={imageSrc}
          alt={title}
          aspectRatio={1} // change to 4/5 if you want portrait
          className={{
            wrapperClass: "rounded-2xl",
            imageClass: "rounded-2xl transition-transform duration-300 group-hover:scale-[1.03]",
          }}
        />

        {/* WISHLIST */}
  <WishlistButton isActive={isWished} onToggle={onToggleWish}/>

        {/* HOVER ACTIONS */}
    <CardHoverActions onAddToCart={onAddToCart} onQuickView={onQuickView} />
      </div>

      {/* TEXT AREA */}
<div className="pt-3">
  {/* kind + badge row */}
  <div className="flex items-center justify-between gap-3">
    <div className="text-xs text-neutral-400">{kind}</div>

    {badgeText ? (
      <span className="shrink-0 text-xs font-semibold text-red-500">
        {badgeText}
      </span>
    ) : null}
  </div>

  {/* title row (only title) */}
  <div className="mt-1">
    <Tooltip content={title} placement="top-start">
      <h3 className="max-w-full truncate text-base font-semibold text-neutral-900">
        {title}
      </h3>
    </Tooltip>
  </div>

  {/* price */}
  <div className="mt-1">
    <PriceView price={price} />
  </div>
</div>
    </div>
  );
}
