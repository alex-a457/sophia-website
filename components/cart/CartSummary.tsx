// components/cart/CartSummary.tsx
'use client';

import { formatMoney } from '@/lib/money';
import { useCartStore } from '@/lib/store/cart.store';
import { cn } from '@/lib/utils';
import { AppButton } from '@/components/shared/AppButton';
import ClaimDiscountModal from './ClaimDiscountModal';
import PurchaseSuccessModal from './PurchaseSuccessModal';

export default function CartSummary({ className }: { className?: string }) {
  const { deliveryFee, taxes, getSubtotal, getTotal } = useCartStore();

  const subtotal = getSubtotal();
  const total = getTotal();

  return (
    <aside className={cn('w-full', className)}>
      <div className="rounded-2xl">
        <h3 className="text-28 font-semibold text-foreground">
          Detail Summary
        </h3>

        <div className="mt-12 space-y-2 text-xl sm:text-22">
          <div className="flex items-center justify-between text-foreground">
            <span>Subtotal Price</span>
            <span>{formatMoney(subtotal)}</span>
          </div>

          <div className="flex items-center justify-between text-foreground">
            <span>Price Delivery</span>
            <span>{deliveryFee === 0 ? 'Free' : formatMoney(deliveryFee)}</span>
          </div>

          <div className="flex items-center justify-between text-foreground">
            <span>Taxes</span>
            <span>{formatMoney(taxes)}</span>
          </div>

          <div className="my-8 h-px border-b border-border" />

          <div className="flex items-center justify-between text-28 font-semibold text-foreground">
            <span>Total</span>
            <span>{formatMoney(total)}</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ClaimDiscountModal />
          <PurchaseSuccessModal
            defaultOpen={false}
            onContinueShopping={() => {}}
          />
          <AppButton
            type="button"
            variant="outline"
            tone="muted"
            radius="full"
            size="sm"
            className="h-12 text-base font-normal text-muted-foreground sm:text-lg"
          >
            Redeem promo
          </AppButton>
        </div>

        <div className="mt-6">
          <AppButton
            fullWidth
            radius="full"
            variant="solid"
            tone="dark"
            className="h-12 text-base font-semibold sm:text-lg"
          >
            Checkout
          </AppButton>
        </div>
      </div>
    </aside>
  );
}
