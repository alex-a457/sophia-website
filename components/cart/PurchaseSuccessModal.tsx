'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
// shadcn/ui
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AppButton } from '../shared/AppButton';

type PurchaseSuccessModalProps = {
  trigger?: React.ReactNode;
  className?: string;

  /** Optional callbacks */
  onContinueShopping?: () => void;

  /** Optional: if you want to open it programmatically from parent */
  defaultOpen?: boolean;
};

export default function PurchaseSuccessModal({
  trigger,
  className,
  onContinueShopping,
  defaultOpen = false,
}: PurchaseSuccessModalProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  const handleContinue = () => {
    onContinueShopping?.();
    setOpen(false);
  };

  return (
    <>
      {trigger ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-block"
        >
          {trigger}
        </button>
      ) : null}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={cn(
            'rounded-2xl',
            'w-[92vw] max-w-[605px]',
            'bg-white text-foreground',
            'p-0',
            // hide default shadcn close button
            '[&>button]:hidden',
            className,
          )}
        >
          <div className="relative">
            {/* close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className={cn(
                'absolute top-4 right-4 z-10',
                'grid h-8 w-8 place-items-center rounded-full',
                'text-foreground/70',
                'hover:bg-black/5 active:bg-black/10',
              )}
            >
              ✕
            </button>

            <div className="px-6 pt-10 pb-7 sm:px-10 sm:pt-12 sm:pb-9">
              {/* Title */}
              <h3
                className={cn(
                  'text-center',
                  'xs:text-[32px] text-4xl',
                  'font-medium',
                )}
              >
                Thank You for Your Purchase!
              </h3>

              {/* Description */}
              <p
                className={cn(
                  'mx-auto mt-3 max-w-[460px] text-center',
                  'text-[#AEAEAE]',
                  'xs:text-xs text-sm',
                )}
              >
                Your payment was successful, and your Lumina piece is now on its
                way to you. We are thrilled to be a part of your jewelry and
                can’t wait for you to experience the timeless elegance of our
                jewelry.
              </p>

              {/* CTA */}
              <div className="mt-8 flex justify-center sm:mt-7">
                <AppButton
                  type="button"
                  variant="solid"
                  tone="dark"
                  radius="full"
                  onClick={handleContinue}
                  className={cn(
                    'xs:w-full w-[401px]',
                    'h-11 sm:h-12',
                    'px-8',
                    'text-sm',
                  )}
                >
                  Continue Shopping
                </AppButton>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
