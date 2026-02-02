'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
// shadcn/ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { AppButton } from '../shared/AppButton';

type ClaimDiscountModalProps = {
  trigger?: React.ReactNode; // optional custom trigger
  className?: string;
};

export default function ClaimDiscountModal({
  trigger,
  className,
}: ClaimDiscountModalProps) {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const canSubmit = name.trim().length > 1 && email.trim().includes('@');

  const handleSubmit = async () => {
    if (!canSubmit) return;

    // TODO: call API / mutation here
    // await claimDiscount({ name, email })

    // close modal
    setOpen(false);

    // reset if you want
    // setName(""); setEmail("");
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
      ) : (
        <AppButton
          type="button"
          variant="outline"
          tone="muted"
          radius="full"
          size="sm"
          className={cn(
            'h-12 text-base font-normal text-muted-foreground sm:text-lg',
            className,
          )}
          onClick={() => setOpen(true)}
        >
          Claim discount
        </AppButton>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={cn(
            'rounded-2xl p-0 sm:max-w-[520px]',
            // remove default close button spacing issues
            '[&>button]:hidden',
          )}
        >
          <div className="relative">
            {/* backdrop blur feel (dialog overlay already exists; this is just content styling) */}
            {/* custom close (top-right X) */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-full hover:bg-black/5 active:bg-black/10"
            >
              ✕
            </button>

            <DialogHeader className="flex flex-col items-center gap-3 pt-12">
              <DialogTitle className="xs:text-[32px] text-4xl font-medium text-foreground">
                Claim Discount
              </DialogTitle>
              <p className="xs:text-xs text-sm font-normal text-[#AEAEAE]">
                Up to 30% OFF · Rewards
              </p>
            </DialogHeader>

            <div className="px-8 pb-8">
              <div className="mt-6 space-y-2">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className={cn(
                    'h-12 rounded-full border-neutral-200 bg-white text-foreground',
                    'placeholder:text-muted-foreground',
                    'focus-visible:ring-0 focus-visible:ring-offset-0',
                    'hover:border-neutral-300 focus:border-neutral-400',
                  )}
                />

                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    'h-12 rounded-full border-neutral-200 bg-white text-foreground',
                    'placeholder:text-muted-foreground',
                    'focus-visible:ring-0 focus-visible:ring-offset-0',
                    'hover:border-neutral-300 focus:border-neutral-400',
                  )}
                />

                <AppButton
                  type="button"
                  variant="solid"
                  tone="dark"
                  radius="full"
                  fullWidth
                  className="mt-7.5 h-11"
                  disabled={!canSubmit}
                  onClick={handleSubmit}
                >
                  Claim Now
                </AppButton>

                <p className="xs:text-xs mt-7.5 text-center text-sm font-normal text-[#AEAEAE]">
                  By signing up, you agree to receive marketing texts from
                  Johnny Dang &amp; Co at the number provided. Consent is not
                  required for purchase. Reply STOP to unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
