// components/cart/CartItemRow.tsx
'use client';

import * as React from 'react';
import { CiTrash } from 'react-icons/ci';
import { formatMoney } from '@/lib/money';
import { useCartStore } from '@/lib/store/cart.store';
import type { CartLine } from '@/lib/types/cart';
import { Checkbox } from '@/components/ui/checkbox';
// ✅ shadcn/ui
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import AppImage from '@/components/shared/AppImage';
import QuantityStepper from './QuantityStepper';

type Props = { line: CartLine };

export default function CartItemRow({ line }: Props) {
  // ✅ include setSize + toggleGiftWrap from store (adjust names if yours differ)
  const { incQty, decQty, removeLine, setSize, toggleGiftWrap } =
    useCartStore();

  const sizes = React.useMemo(() => ['14 cm', '16 cm', '18 cm'], []);

  return (
    <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-[250px_1fr_auto]">
      {/* Image */}
      <div className="mx-auto w-80 sm:max-w-[250px]">
        <AppImage
          src={line.imageSrc}
          alt={line.title}
          className={{
            wrapperClass: `aspect-square overflow-hidden rounded-2xl sm:aspect-250/250`,
            imageClass: 'rounded-2xl object-contain p-1.5',
            skeletonClass: 'rounded-2xl',
          }}
        />
      </div>

      {/* Details */}
      <div className="min-w-0 py-2">
        <div className="flex items-start justify-between">
          <div className="min-w-0">
            <h2 className="truncate text-xl font-semibold sm:text-2xl">
              {line.title}
            </h2>
            {line.subtitle ? (
              <div className="mt-3 text-sm text-foreground sm:text-base">
                {line.subtitle}
              </div>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => removeLine(line.id)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            aria-label="Remove item"
          >
            <CiTrash size={24} />
          </button>
        </div>

        {/* Select + Checkbox */}
        <div className="mt-4 flex flex-col gap-4">
          {/* ✅ Select (shadcn) */}
          <div className="w-full sm:max-w-[170px]">
            <Select
              value={line.size ?? ''}
              onValueChange={(v) => setSize(line.id, v)}
            >
              <SelectTrigger className="h-[52px] min-h-9 w-full gap-8 rounded-full border border-input bg-background text-lg text-muted-foreground shadow-none focus:ring-0 focus:ring-offset-0">
                <SelectValue
                  className="text-lg text-muted-foreground"
                  placeholder="Select size"
                />
              </SelectTrigger>

              <SelectContent>
                {sizes.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* ✅ Checkbox (shadcn) */}
          <div className="flex items-center gap-3">
            <Checkbox
              id={`gift-wrap-${line.id}`}
              checked={!!line.giftWrap}
              onCheckedChange={() => toggleGiftWrap(line.id)}
              className=""
              aria-label="Add gift wrapping"
            />
            <label
              htmlFor={`gift-wrap-${line.id}`}
              className="text-base text-muted-foreground"
            >
              Add Gift Wrapping
            </label>
          </div>
        </div>

        {/* qty + delete */}
        <div className="mt-6 flex items-center justify-between">
          <QuantityStepper
            value={line.qty}
            onDecrease={() => decQty(line.id)}
            onIncrease={() => incQty(line.id)}
          />
          <div className="shrink-0 text-28 font-semibold text-foreground">
            {formatMoney(line.price, line.currency ?? 'USD')}
          </div>
        </div>
      </div>

      {/* spacer column (hide when stacked) */}
      <div className="sm:hidden" />
    </div>
  );
}
