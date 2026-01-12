// components/cart/CartSummary.tsx
"use client";

import React from "react";

import { formatMoney } from "@/lib/money";
import { AppButton } from "@/components/ui/AppButton";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store/cart.store";

export default function CartSummary({ className }: { className?: string }) {
  const { deliveryFee, taxes, getSubtotal, getTotal } = useCartStore();

  const subtotal = getSubtotal();
  const total = getTotal();

  return (
    <aside className={cn("w-full", className)}>
      <div className="rounded-2xl">
        <h3 className="text-[32px] leading-[40px] font-semibold text-#151515">Detail Summary</h3>

        <div className="mt-13 space-y-2 text-2xl">
          <div className="flex items-center justify-between text-#151515">
            <span className="text-#151515">Subtotal Price</span>
            <span className="text-#151515">
              {formatMoney(subtotal)}
            </span>
          </div>

          <div className="flex items-center justify-between text-#151515">
            <span className="text-#151515">Price Delivery</span>
            <span className="text-#151515">
              {deliveryFee === 0 ? "Free" : formatMoney(deliveryFee)}
            </span>
          </div>

          <div className="flex items-center justify-between text-#151515">
            <span className="text-#151515">Taxes</span>
            <span className="text-#151515">
              {formatMoney(taxes)}
            </span>
          </div>

          <div className="pt-16" />

          <div className="flex items-center justify-between">
            <span className="text-[32px] leading-[40px] font-semibold text-#151515">Total</span>
            <span className="text-[32px] leading-[40px] font-semibold text-#151515">
              {formatMoney(total)}
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="h-10 rounded-full border border-neutral-200 text-xs text-neutral-600 hover:bg-neutral-50"
          >
            Claim discount
          </button>
          <button
            type="button"
            className="h-10 rounded-full border border-neutral-200 text-xs text-neutral-600 hover:bg-neutral-50"
          >
            Redeem promo
          </button>
        </div>

        <div className="mt-6">
          <AppButton fullWidth radius="full" variant="solid" tone="dark" className="h-12">
            Checkout
          </AppButton>
        </div>
      </div>
    </aside>
  );
}
