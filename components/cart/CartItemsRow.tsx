// components/cart/CartItemRow.tsx
"use client";

import React, { useMemo } from "react";
import AppImage from "@/components/ui/AppImage";
import QuantityStepper from "./QuantityStepper";
import { formatMoney } from "@/lib/money";
import { Select, SelectItem, Checkbox } from "@heroui/react";
import { useCartStore } from "@/lib/store/cart.store";
import { CartLine } from "@/lib/types/cart";
import { CiTrash } from "react-icons/ci";

type Props = { line: CartLine };

export default function CartItemRow({ line }: Props) {
  const { incQty, decQty, removeLine, setSize, toggleGiftWrap } = useCartStore();
  const sizes = useMemo(() => ["14 Cm", "16 Cm", "18 Cm"], []);

  return (
    <div
      className="
        grid gap-5 py-7 items-center
        grid-cols-[305px_1fr_auto]
        sm:grid-cols-1
      "
    >
      {/* Image */}
      <div
        className="
          w-[305px]
          sm:w-full sm:max-w-[343px]
          sm:mx-auto
        "
      >
        <AppImage
          src={line.imageSrc}
          alt={line.title}
          className={{
            wrapperClass: `
              rounded-2xl overflow-hidden
              aspect-[1/1]
              sm:aspect-[343/255]
            `,
            imageClass: "rounded-2xl object-contain p-1.5",
            skeletonClass: "rounded-2xl",
          }}
        />
      </div>

      {/* Details */}
      <div className="min-w-0 sm:mt-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="truncate sm:text-2xl text-[28px] font-semibold">
              {line.title}
            </h2>
            {line.subtitle ? (
              <div className="mt-3 text-base text-theme">
                {line.subtitle}
              </div>
            ) : null}
          </div>

          <div className="shrink-0 sm:text-2xl text-[32px] font-semibold text-theme">
            {formatMoney(line.price, line.currency ?? "USD")}
          </div>
        </div>

        {/* dropdown + checkbox */}
        <div className="mt-4 flex flex-col gap-2">
          <div className="max-w-[305px] sm:max-w-full mb-4">
            <Select
              aria-label="Select size"
              selectedKeys={line.size ? new Set([line.size]) : new Set([])}
              onSelectionChange={(keys) => {
                const v = Array.from(keys)[0] as string | undefined;

                if (v) setSize(line.id, v);
              }}
              classNames={{
                trigger:
                  "min-h-9 h-13 rounded-full bg-white border border-[#AEAEAE] shadow-none",
                value: "text-lg text-theme",
              }}
            >
              {sizes.map((s) => (
                <SelectItem key={s}>{s}</SelectItem>
              ))}
            </Select>
          </div>

          <Checkbox
            aria-label="Add gift wrapping"
            isSelected={!!line.giftWrap}
            color="default"
            onValueChange={() => toggleGiftWrap(line.id)}
            classNames={{
              label: "text-base text-[#AEAEAE]",
              wrapper: "rounded-md",
            }}
          >
            Add Gift Wrapping
          </Checkbox>
        </div>

        {/* qty + delete */}
        <div className="xs:mt-7 mt-8 flex items-center gap-32 xs:gap-0 xs:justify-between">
          <QuantityStepper
            value={line.qty}
            onDecrease={() => decQty(line.id)}
            onIncrease={() => incQty(line.id)}
          />

          <button
            type="button"
            onClick={() => removeLine(line.id)}
            className="inline-flex items-center gap-2 text-[#AEAEAE] hover:text-theme"
            aria-label="Remove item"
          >
            <CiTrash size={32} />
          </button>
        </div>
      </div>

      {/* spacer column (hide when stacked) */}
      <div className="sm:hidden" />
    </div>
  );
}
