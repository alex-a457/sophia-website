// components/cart/CartLayout.tsx
"use client";

import React from "react";
import CartSummary from "./CartSummary";
import PeopleAlsoBought from "./PeopleAlsoBought";
import CartItemRow from "./CartItemsRow";
import { useCartStore } from "@/lib/store/cart.store";

export default function CartLayout() {
  const lines = useCartStore((s) => s.lines);

  return (
    <div className="w-full px-6 py-10">
      <div className="text-2xl font-medium text-[#151515]">
        Shopping bag ({lines.length})
      </div>

      {/* Desktop default: side-by-side (70/30) | <=1023px (lg): stacked */}
      <div className="mt-6 grid grid-cols-[7fr_3fr] gap-10 lg:grid-cols-1 lg:gap-8">
        {/* LEFT: items (NO custom scroll) */}
        <div className="min-h-[200px]">
          <div className="">
            {lines.map((line) => (
              <CartItemRow key={line.id} line={line} />
            ))}
          </div>
        </div>

        {/* RIGHT: sticky summary on desktop, normal flow on lg */}
        <div className="self-start sticky top-36 mt-0 lg:static">
          <CartSummary />
        </div>
      </div>

      {/* FULL WIDTH section (as usual) */}
      <PeopleAlsoBought />
    </div>
  );
}
