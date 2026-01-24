// components/cart/CartSummary.tsx
"use client";

import React from "react";
import { formatMoney } from "@/lib/money";
import { AppButton } from "@/components/shared/AppButton";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store/cart.store";
import ClaimDiscountModal from "./ClaimDiscountModal";
import PurchaseSuccessModal from "./PurchaseSuccessModal";

export default function CartSummary({ className }: { className?: string }) {
  const { deliveryFee, taxes, getSubtotal, getTotal } = useCartStore();

  const subtotal = getSubtotal();
  const total = getTotal();

  return (
    <aside className={cn("w-full", className)}>
      <div className="rounded-2xl">
        <h3 className="xs:text-[28px] text-[32px] leading-[40px] font-semibold text-#151515">
          Detail Summary
        </h3>

        <div className="xs:mt-6 mt-13 space-y-2 xs:text-xl text-2xl">
          <div className="flex items-center justify-between text-#151515">
            <span className="text-#151515">Subtotal Price</span>
            <span className="text-#151515">{formatMoney(subtotal)}</span>
          </div>

          <div className="flex items-center justify-between text-#151515">
            <span className="text-#151515">Price Delivery</span>
            <span className="text-#151515">
              {deliveryFee === 0 ? "Free" : formatMoney(deliveryFee)}
            </span>
          </div>

          <div className="flex items-center justify-between text-#151515">
            <span className="text-#151515">Taxes</span>
            <span className="text-#151515">{formatMoney(taxes)}</span>
          </div>

          <div className="xs:pt-10 pt-16" />

          <div className="flex items-center justify-between">
            <span className="xs:text-[28px] text-[32px] leading-[40px] font-semibold text-#151515">
              Total
            </span>
            <span className="xs:text-[28px] text-[32px] leading-[40px] font-semibold text-#151515">
              {formatMoney(total)}
            </span>
          </div>
        </div>

        <div className="xs:mt-6 mt-8 grid grid-cols-2 xs:grid-cols-1 gap-3">
        <ClaimDiscountModal />
          <PurchaseSuccessModal
      defaultOpen = {false}
      onContinueShopping={() => {}}
    />
          <AppButton
            type="button"
            variant="outline"
            tone="muted"
            radius="full"
            size="sm"
            className="h-12 text-lg font-normal text-[#AEAEAE]"
          >
            Redeem promo
          </AppButton>
        </div>

        <div className="xs:mt-6 mt-6">
          <AppButton
            fullWidth
            radius="full"
            variant="solid"
            tone="dark"
            className="h-12 text-lg font-semibold"
          >
            Checkout
          </AppButton>
        </div>
      </div>
    </aside>
  );
}
