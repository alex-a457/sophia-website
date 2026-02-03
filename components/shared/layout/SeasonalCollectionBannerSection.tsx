'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import ImageOverlaySection from '@/components/shared/layout/ImageOverlaySection';
import { AppButton } from '../AppButton';
import ResponsiveAppImage from '../ResponsiveAppImage';

type Props = {
  data: {
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
      alt: string;
    };

    title: string;
    description?: string;

    cta?: {
      label: string;
      href: string;
    };

    // ✅ bottom decorative image (responsive)
    bottomImage?: {
      desktop: string;
      tablet: string;
      mobile: string;
      alt: string;
    };
  };

  className?: string;
  topPaddingClass?: string;
};

export default function SeasonalCollectionBannerSection({
  data,
  className,
  topPaddingClass = 'pt-10 sm:pt-14 lg:pt-18',
}: Props) {
  return (
    <div className={cn('w-full px-3', className)}>
      <ImageOverlaySection
        image={data.image}
        heightClass="h-[400px] sm:h-[570px]"
        overlayClass="bg-black/35"
        contentWrapClass={cn(
          'items-start justify-center text-center',
          topPaddingClass,
        )}
        className="overflow-hidden rounded-2xl"
      >
        <div className="relative h-full w-full text-on-dark-foreground">
          {/* ✅ Bottom decorative image OVER the background */}
          {data.bottomImage && (
            <div className="pointer-events-none absolute bottom-0 left-0 h-[120px] w-full sm:h-[190px] xl:h-[250px]">
              <ResponsiveAppImage
                image={data.bottomImage}
                priority
                className={{
                  wrapperClass: 'h-full w-full',
                  imageClass: 'object-contain object-bottom',
                }}
              />
            </div>
          )}

          {/* ✅ Text content stays above */}
          <div className="relative z-10 w-full">
            <h2 className="font-playfair text-2xl leading-tight sm:text-40 lg:text-5xl">
              {data.title}
            </h2>

            {data.description && (
              <p className="mx-auto mt-3 max-w-4xl text-xs leading-relaxed text-on-dark-foreground/85 sm:mt-4 sm:text-sm lg:text-base">
                {data.description}
              </p>
            )}

            {data.cta && (
              <div className="mt-5 flex justify-center sm:mt-6">
                <AppButton variant="outline" radius="full" tone="light">
                  <Link href={data.cta.href}>{data.cta.label}</Link>
                </AppButton>
              </div>
            )}
          </div>
        </div>
      </ImageOverlaySection>
    </div>
  );
}
