// components/sections/AboutHeroSection.tsx
'use client';

import { cn } from '@/lib/utils';
import ImageOverlaySection from '@/components/shared/layout/ImageOverlaySection';
import { AppButton } from '../shared/AppButton';

type Props = {
  className?: string;
};

export default function AboutHomeSection({ className }: Props) {
  return (
    <div className={cn('w-full px-3', className)}>
      <ImageOverlaySection
        image={{
          desktop: '/home/home-about-banner.svg',
          tablet: '/home/home-about-banner.svg',
          mobile: '/home/home-about-banner.svg',
          alt: 'Jewelry hero background',
        }}
        // ✅ match screenshot-ish height
        heightClass="h-[560px] md:h-[720px] xl:h-[506px]"
        // ✅ dark overlay + slight gradient for readability
        overlayClass="bg-linear-to-r from-black/65 via-black/35 to-black/10"
        // ✅ content in the center
        contentWrapClass="items-center justify-center text-center"
        className="rounded-2xl"
        priority
      >
        <div className="mx-auto w-full max-w-4xl px-2 text-on-dark-foreground">
          {/* small eyebrow */}
          <p className="text-sm text-on-dark-foreground sm:text-base">
            About Lunara
          </p>

          {/* main heading */}
          <h1 className="font-playfair mt-3 text-2xl leading-[1.15] md:text-40 xl:text-5xl">
            We believe that jewelry is more than just an accessory it’s a
            reflection of individuality, emotion, and heritage.
          </h1>

          {/* button */}
          <div className="mt-6 flex justify-center">
            <AppButton
              variant="outline"
              tone="light"
              radius="full"
              className="cursor-pointer"
            >
              Explore Our Story
            </AppButton>
          </div>
        </div>
      </ImageOverlaySection>
    </div>
  );
}
