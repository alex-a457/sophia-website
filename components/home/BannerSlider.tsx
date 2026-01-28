'use client';

import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { AppButton } from '../shared/AppButton';

type PropType = {
  bannerImages: string[];
  altText: string[];
  options?: EmblaOptionsType;
};

const BannerSlider = (props: PropType) => {
  const { bannerImages, altText, options } = props;
  const [emblaRef, _emblaApi] = useEmblaCarousel({ loop: true, ...options });

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {bannerImages.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number relative">
                <div className="absolute top-1/2 left-12 -translate-y-1/2">
                  <h1 className="mb-4 text-5xl font-medium text-on-dark-foreground">
                    Cyber Monday
                  </h1>
                  <p className="text-base font-normal text-on-dark-foreground">
                    Discover handcrafted luxury jewelry designed to <br />
                    celebrate every moment of our journey with 40% off
                  </p>
                  <AppButton
                    variant="glass"
                    tone="light"
                    radius="full"
                    className="mt-6 font-normal"
                  >
                    Shop Cyber Monday Sale
                  </AppButton>
                </div>
                <Image
                  src={image}
                  alt={altText[index]}
                  width={1920}
                  height={1080}
                  className="h-full w-full rounded-4xl object-cover"
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
