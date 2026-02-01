'use client';

import * as React from 'react';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { AppButton } from '../shared/AppButton';

type PropType = {
  bannerImages: string[];
  altText: string[];
  options?: EmblaOptionsType;
};

const BannerSlider = ({ bannerImages, altText, options }: PropType) => {
  const autoplay = React.useRef(
    Autoplay({
      delay: 8000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    autoplay.current,
  ]);

  // ✅ optional: restart autoplay after route changes / re-render
  React.useEffect(() => {
    if (!emblaApi) return;
    autoplay.current.reset();
  }, [emblaApi]);

  return (
    <div className="embla px-3 md:px-6 lg:px-0">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {bannerImages.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number relative h-[250px] md:h-[500px]">
                <div className="absolute top-1/2 left-6 -translate-y-1/2 md:left-12">
                  <h1 className="mb-2 text-2xl font-medium text-on-dark-foreground sm:mb-4 sm:text-5xl">
                    Cyber Monday
                  </h1>
                  <p className="max-w-48 text-sm font-normal text-on-dark-foreground sm:max-w-full md:text-base">
                    Discover handcrafted luxury jewelry designed to <br />
                    celebrate every moment of our journey with 40% off
                  </p>

                  <AppButton
                    variant="glass"
                    tone="light"
                    radius="full"
                    className="mt-4 px-5 py-1.5 text-xs font-normal sm:px-6 sm:py-3 md:text-base lg:mt-6"
                  >
                    Shop Cyber Monday Sale
                  </AppButton>
                </div>

                <Image
                  src={image}
                  alt={altText[index] ?? 'Banner'}
                  width={1920}
                  height={1080}
                  className="h-full w-full rounded-4xl object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
