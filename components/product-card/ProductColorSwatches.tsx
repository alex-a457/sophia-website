"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type GradientStop = {
  color: string;
  at?: string; // "0%" etc
};

export type ColorSwatchOption = {
  id: string;       // "gold" | "silver" | "rose" | "green" etc
  label?: string;   // optional
  gradientStops?: GradientStop[];
  gradientCss?: string;
  solid?: string;
};

function buildGradientCss(opt: ColorSwatchOption) {
  if (opt.gradientCss) return opt.gradientCss;

  const stops = opt.gradientStops?.length
    ? opt.gradientStops
        .map((s) => `${s.color}${s.at ? ` ${s.at}` : ""}`)
        .join(", ")
    : opt.solid ?? "#E5E7EB";

  if (!opt.gradientStops?.length) return `linear-gradient(180deg, ${stops}, ${stops})`;

  return `linear-gradient(180deg, ${stops})`;
}

type Props = {
  options: ColorSwatchOption[];
  valueId: string;
  onChange: (id: string) => void;
  className?: string;
};

export default function ProductColorSwatches({
  options,
  valueId,
  onChange,
  className,
}: Props) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {options.map((opt) => {
        const selected = opt.id === valueId;

        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            aria-label={opt.label ?? opt.id}
            className={cn(
              "relative grid place-items-center rounded-full transition",
              "h-8 w-8",
              selected ? "ring-1 ring-[#151515]" : "ring-1 ring-[#D7D7D7]"
            )}
          >
            <span
              className="block h-[26px] w-[26px] rounded-full ring-1 ring-black/5"
              style={{ background: buildGradientCss(opt) }}
            />
          </button>
        );
      })}
    </div>
  );
}
