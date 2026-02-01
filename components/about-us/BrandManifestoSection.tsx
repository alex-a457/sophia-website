'use client';

import { cn } from '@/lib/utils';
import ImageOverlaySection from '../shared/layout/ImageOverlaySection';

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
    smallNote?: string;
  };
  className?: string;
};

export default function BrandManifestoSection({ data, className }: Props) {
  return (
    <div className={cn('w-full px-3', className)}>
      <ImageOverlaySection
        image={data.image}
        heightClass="h-[570px] sm:h-[620px] "
        overlayClass="bg-black/20"
        contentWrapClass="items-center justify-center text-center"
        className="overflow-hidden rounded-2xl"
      >
        <div className="w-full px-6 text-on-dark-foreground sm:px-8 xl:max-w-5xl xl:px-0">
          <h2 className="font-playfair text-2xl leading-tight sm:text-[40px] lg:text-5xl">
            {data.title}
          </h2>

          {data.description && (
            <p className="mx-auto mt-5 text-sm leading-relaxed text-on-dark-foreground/85 sm:text-base xl:max-w-4xl">
              {data.description}
            </p>
          )}

          {data.smallNote && (
            <p className="mx-auto mt-4 max-w-3xl text-xs leading-relaxed text-on-dark-foreground/70">
              {data.smallNote}
            </p>
          )}
        </div>
      </ImageOverlaySection>
    </div>
  );
}
