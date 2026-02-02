'use client';

import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';
import AppImage from '@/components/shared/AppImage';

type Props = { className?: string };

export default function AboutCraftsmanshipSection({ className }: Props) {
  const data = siteConfig.about.craftsmanshipSection;

  return (
    <section className={cn('w-full bg-background', className)}>
      <div className="mx-auto w-full px-4 py-20 sm:px-6 lg:px-20 lg:py-24">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-5">
          {/* Content */}
          <div className="flex w-full flex-col gap-3 sm:gap-6 xl:flex-1">
            <p className="text-xs text-muted-foreground sm:text-base md:text-xl">
              {data.eyebrow}
            </p>

            <h2 className="font-playfair text-32 leading-[120%] font-medium tracking-[-0.02em] whitespace-pre-line text-foreground sm:text-[40px] lg:text-5xl">
              {data.title}
            </h2>

            <div className="space-y-8 xl:mt-2">
              {data.paragraphs?.map((p, idx) => (
                <p
                  key={idx}
                  className="text-sm leading-[180%] text-muted-foreground sm:text-base md:text-xl"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Image (focus) */}
          <div
            className={cn('w-full', 'xl:h-[630px] xl:w-[630px] xl:shrink-0')}
          >
            <div className="h-[360px] w-full overflow-hidden rounded-2xl sm:h-[460px] xl:h-full">
              <AppImage
                src={data.image}
                alt={data.alt}
                aspectRatio={1}
                className={{
                  wrapperClass: 'h-full w-full',
                  imageClass: 'object-cover',
                  skeletonClass: 'rounded-2xl',
                }}
                sizes="(max-width: 1024px) 100vw, 630px"
                loadingNeeded
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
