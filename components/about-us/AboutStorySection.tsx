'use client';

import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';
import ResponsiveAppImage from '@/components/shared/ResponsiveAppImage';

type Props = {
  className?: string;
};

export default function AboutStorySection({ className }: Props) {
  const data = siteConfig.about.storySection;

  return (
    <section className={cn('w-full', className)}>
      <div className="mx-auto w-full px-3 py-20 sm:py-24">
        {/* Text block */}
        <div className="mx-auto flex w-full flex-col items-center gap-3 text-center sm:max-w-4xl lg:gap-6">
          {/* Eyebrow */}
          <p className="text-xs text-muted-foreground sm:text-base lg:text-xl">
            {data.eyebrow}
          </p>

          {/* Big title */}
          <h2 className="font-playfair text-32 leading-[120%] font-medium tracking-[-0.02em] text-foreground sm:text-[40px] lg:mb-2 lg:text-5xl">
            {data.title}
          </h2>

          {/* Description */}
          {data.description ? (
            <p className="mx-auto max-w-3xl text-xs text-muted-foreground sm:text-base lg:text-xl">
              {data.description}
            </p>
          ) : null}
        </div>

        {/* Image */}
        <div className="mt-10 sm:mt-12">
          <div className="h-[500px] overflow-hidden rounded-2xl">
            <ResponsiveAppImage
              image={{
                desktop: data.image.desktop,
                tablet: data.image.tablet,
                mobile: data.image.mobile,
                alt: data.image.alt,
              }}
              className={{
                wrapperClass: 'h-full w-full',
                imageClass: 'object-cover',
                skeletonClass: 'rounded-2xl',
              }}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
