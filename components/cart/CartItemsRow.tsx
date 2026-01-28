// components/cart/CartItemRow.tsx
'use client';

import { useMemo } from 'react';
import { CiTrash } from 'react-icons/ci';
import { formatMoney } from '@/lib/money';
import { useCartStore } from '@/lib/store/cart.store';
import { CartLine } from '@/lib/types/cart';
import AppImage from '@/components/shared/AppImage';
import QuantityStepper from './QuantityStepper';

type Props = { line: CartLine };

export default function CartItemRow({ line }: Props) {
  const { incQty, decQty, removeLine } = useCartStore();
  const _sizes = useMemo(() => ['14 Cm', '16 Cm', '18 Cm'], []);

  return (
    <div className="grid grid-cols-[305px_1fr_auto] items-center gap-5 py-7 sm:grid-cols-1">
      {/* Image */}
      <div className="w-[305px] sm:mx-auto sm:w-full sm:max-w-[343px]">
        <AppImage
          src={line.imageSrc}
          alt={line.title}
          className={{
            wrapperClass: `aspect-[1/1] overflow-hidden rounded-2xl sm:aspect-[343/255]`,
            imageClass: 'rounded-2xl object-contain p-1.5',
            skeletonClass: 'rounded-2xl',
          }}
        />
      </div>

      {/* Details */}
      <div className="min-w-0 sm:mt-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="truncate text-[28px] font-semibold sm:text-2xl">
              {line.title}
            </h2>
            {line.subtitle ? (
              <div className="mt-3 text-base text-foreground">
                {line.subtitle}
              </div>
            ) : null}
          </div>

          <div className="shrink-0 text-[32px] font-semibold text-foreground sm:text-2xl">
            {formatMoney(line.price, line.currency ?? 'USD')}
          </div>
        </div>

        {/* dropdown + checkbox */}
        <div className="mt-4 flex flex-col gap-2">
          <div className="mb-4 max-w-[305px] sm:max-w-full">
            {/* <Select
              aria-label="Select size"
              selectedKeys={line.size ? new Set([line.size]) : new Set([])}
              onSelectionChange={(keys) => {
                const v = Array.from(keys)[0] as string | undefined;

                if (v) setSize(line.id, v);
              }}
              classNames={{
                trigger:
                  "min-h-9 h-13 rounded-full bg-white border border-[#AEAEAE] shadow-none",
                value: "text-lg text-foreground",
              }}
            >
              {sizes.map((s) => (
                <SelectItem key={s}>{s}</SelectItem>
              ))}
            </Select> */}
          </div>

          {/* <Checkbox
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
          </Checkbox> */}
        </div>

        {/* qty + delete */}
        <div className="xs:mt-7 xs:gap-0 xs:justify-between mt-8 flex items-center gap-32">
          <QuantityStepper
            value={line.qty}
            onDecrease={() => decQty(line.id)}
            onIncrease={() => incQty(line.id)}
          />

          <button
            type="button"
            onClick={() => removeLine(line.id)}
            className="inline-flex items-center gap-2 text-[#AEAEAE] hover:text-foreground"
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
