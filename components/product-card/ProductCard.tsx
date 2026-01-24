// ProductCard.tsx
"use client";

import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import AppImage from "../shared/AppImage";
import ProductColorSwatches, { ColorSwatchOption } from "./ProductColorSwatches";
import { DEFAULT_COLOR_OPTIONS } from "@/config/defaultColors";
import WishlistButton from "./WishlistButton";
import CardHoverActions from "./CardHoverActions";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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
  badgeText?: string;

  colorOptions?: ColorSwatchOption[];
  defaultColorId?: string;

  selectedColorId?: string;
  onColorChange?: (colorId: string) => void;

  onToggleWish?: () => void;
  onAddToCart?: () => void;
  onQuickView?: () => void;

  className?: string;
};

function formatMoney(amount: number, currency: "USD" = "USD") {
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
          <span className="text-lg text-[#696868] line-through">
            {formatMoney(price.original, currency)}
          </span>
          <span className="text-lg font-medium text-[#EA4335]">
            {formatMoney(price.sale, currency)}
          </span>
        </div>
      );

    case "startingAt":
      return (
        <div className="text-lg font-medium text-[#696868]">
          <span className="text-[#696868]">Starting at: </span>
          <span className="font-medium">
            {formatMoney(price.amount, currency)}
          </span>
        </div>
      );

    case "range":
      return (
        <div className="text-lg font-medium text-[#696868]">
          {formatMoney(price.min, currency)} - {formatMoney(price.max, currency)}
        </div>
      );

    case "regular":
      return (
        <div className="text-lg font-medium text-[#696868]">
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

  colorOptions,
  defaultColorId,
  selectedColorId,
  onColorChange,

  onToggleWish,
  onAddToCart,
  onQuickView,
  className,
}: ProductCardProps) {
  const options = colorOptions?.length ? colorOptions : DEFAULT_COLOR_OPTIONS;

  const initialId =
    defaultColorId && options.some((o) => o.id === defaultColorId)
      ? defaultColorId
      : options[0]?.id ?? "gold";

  const [internalColorId, setInternalColorId] = useState(initialId);
  const currentColorId = selectedColorId ?? internalColorId;

  const setColor = (id: string) => {
    if (selectedColorId === undefined) setInternalColorId(id);
    onColorChange?.(id);
  };

  useMemo(() => {
    if (!options.some((o) => o.id === currentColorId)) setColor(initialId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  return (
    <div className={cn("w-full", className)}>
      {/* ✅ IMAGE AREA (ONLY THIS is group) */}
      <div className="group relative overflow-hidden rounded-2xl">
        <AppImage
          src={imageSrc}
          alt={title}
          aspectRatio={1}
          className={{
            wrapperClass: "rounded-2xl",
            imageClass:
              "rounded-2xl transition-transform duration-300 group-hover:scale-[1.03]",
          }}
        />

        <WishlistButton isActive={isWished} onToggle={onToggleWish} />

        {/* ✅ Now hover actions trigger ONLY when hovering image wrapper */}
        <CardHoverActions onAddToCart={onAddToCart} onQuickView={onQuickView} />
      </div>

      {/* color circles (NOT part of hover group) */}
      <div className="mt-3 flex items-center justify-center">
        <ProductColorSwatches
          options={options}
          valueId={currentColorId}
          onChange={setColor}
        />
      </div>

      {/* TEXT AREA */}
      <div className="pt-3">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm text-[#AEAEAE]">{kind}</div>
          {badgeText ? (
            <span className="shrink-0 text-sm text-[#EA4335]">{badgeText}</span>
          ) : null}
        </div>

        <div className="mt-1">
          <Tooltip>
            <TooltipTrigger>
              <h3 className="max-w-full truncate text-2xl font-semibold text-[#151515]">
                {title}
              </h3>
            </TooltipTrigger>
            <TooltipContent>
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="mt-1">
          <PriceView price={price} />
        </div>
      </div>
    </div>
  );
}
