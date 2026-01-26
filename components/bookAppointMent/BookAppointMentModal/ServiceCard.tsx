"use client";

import Image from "next/image";
import type { ServiceItem } from "./types";

type ServiceCardProps = {
  item: ServiceItem;
  onPick: (id: string) => void;
};

export default function ServiceCard({ item, onPick }: ServiceCardProps) {
  return (
    <button
      type="button"
      onClick={() => onPick(item.id)}
      className={[
        "w-full rounded-[14px] border bg-white p-[14px] text-left transition",
        "border-[rgba(21,21,21,0.25)] hover:border-[rgba(21,21,21,0.45)]",
      ].join(" ")}
    >
      <div className="flex gap-[16px]">
        <div className="relative h-[92px] w-[92px] overflow-hidden rounded-[12px] bg-[rgba(0,0,0,0.04)]">
          <Image src={item.imageUrl} alt={item.title} fill className="object-cover" sizes="92px" />
        </div>

        <div className="flex-1 pt-1">
          <div className="text-[16px] font-semibold text-[#151515]">{item.title}</div>
          <div className="mt-1 text-[12px] text-[rgba(21,21,21,0.45)]">{item.durationText}</div>
          <div className="mt-2 text-[12px] leading-[1.6] text-[rgba(21,21,21,0.38)]">
            {item.description}
          </div>
        </div>
      </div>
    </button>
  );
}
