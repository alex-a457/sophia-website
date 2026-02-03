'use client';

import * as React from 'react';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { AppButton } from '../../AppButton';

type PropType = {
  bannerImages: string[];
  altText: string[];
  options?: EmblaOptionsType;
};

const BannerSlider = ({ bannerImages, altText, options }: PropType) => {
  const autoplay = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    autoplay.current,
  ]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // ✅ optional: restart autoplay after route changes / re-render
  React.useEffect(() => {
    if (!emblaApi) return;
    autoplay.current.reset();
  }, [emblaApi]);

  // Sync selected index with Embla's selected index
  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const onDotButtonClick = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <div className="embla px-3 sm:px-6 lg:px-0">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {bannerImages.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number relative h-[250px] sm:h-[500px]">
                {/* Slide Content */}
                <div className="absolute top-1/2 left-6 -translate-y-1/2 sm:left-12">
                  <h1 className="mb-2 text-2xl font-medium text-on-dark-foreground sm:mb-4 sm:text-5xl">
                    Cyber Monday
                  </h1>
                  <p className="max-w-48 text-sm font-normal text-on-dark-foreground sm:max-w-full sm:text-base">
                    Discover handcrafted luxury jewelry designed to <br />
                    celebrate every moment of our journey with 40% off
                  </p>

                  {/* App Button */}
                  <AppButton
                    variant="glass"
                    tone="light"
                    radius="full"
                    className="mt-4 px-5 py-1.5 text-xs font-normal sm:px-6 sm:py-3 sm:text-base lg:mt-6"
                  >
                    Shop Cyber Monday Sale
                  </AppButton>
                </div>

                {/* Image Component */}
                <Image
                  src={image}
                  alt={altText[index] ?? 'Banner'}
                  width={1920}
                  height={508}
                  className="h-full w-full rounded-4xl object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="embla__dots mt-5 flex justify-center gap-3 sm:mt-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`h-3 w-3 rounded-[5px] transition-all duration-300 sm:h-3.5 sm:w-3.5 ${index === selectedIndex ? 'bg-foreground' : 'bg-muted-foreground/20'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
