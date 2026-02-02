// components/cart/CartLayout.tsx
'use client';

import { useCartStore } from '@/lib/store/cart.store';
import CartItemRow from './CartItemsRow';
import CartSummary from './CartSummary';
import PeopleAlsoBought from './PeopleAlsoBought';

export default function CartLayout() {
  const lines = useCartStore((s) => s.lines);

  return (
    <div className="w-full px-4 py-10 md:px-6 xl:px-20">
      <div className="text-2xl font-medium text-foreground">
        Shopping bag ({lines.length})
      </div>

      {/* Desktop default: side-by-side (70/30) | <=1023px (lg): stacked */}
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[6fr_4fr] xl:gap-40">
        {/* LEFT: items (NO custom scroll) */}
        <div className="min-h-[200px]">
          <div className="flex flex-col gap-12 sm:gap-6">
            {lines.map((line) => (
              <CartItemRow key={line.id} line={line} />
            ))}
          </div>
        </div>

        {/* RIGHT: sticky summary on desktop, normal flow on lg */}
        <div className="static top-36 mt-0 self-start lg:sticky">
          <CartSummary />
        </div>
      </div>

      {/* FULL WIDTH section (as usual) */}
      <PeopleAlsoBought />
    </div>
  );
}
