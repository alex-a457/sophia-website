'use client';

import Link from 'next/link';
import ImageOverlaySection from './ImageOverlaySection';

type Props = {
  data: {
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
      alt: string;
    };
    eyebrow?: string;
    title: string;
    description?: string;
    cta?: {
      label: string;
      href: string;
    };
  };
  className?: string;
};

export default function EditorialHeroSection({ data, className }: Props) {
  return (
    <ImageOverlaySection
      image={data.image}
      priority
      heightClass="h-[85vh]"
      overlayClass="bg-black/30"
      contentWrapClass="items-center justify-center text-center"
      className={className}
    >
      <div className="text-on-dark-foreground">
        {data.eyebrow && (
          <p className="mb-4 text-sm tracking-widest uppercase opacity-80">
            {data.eyebrow}
          </p>
        )}

        <h1 className="font-playfair w-full text-4xl sm:text-7xl xl:text-[80px]">
          {data.title}
        </h1>

        {data.description && (
          <p className="mx-auto mt-8 max-w-4xl text-sm leading-relaxed text-on-dark-foreground/85 sm:text-base xl:text-xl">
            {data.description}
          </p>
        )}

        {data.cta && (
          <Link
            href={data.cta.href}
            className="mt-8 inline-block rounded-full border border-on-dark-input px-8 py-3 text-sm transition hover:bg-on-dark-input hover:text-foreground"
          >
            {data.cta.label}
          </Link>
        )}
      </div>
    </ImageOverlaySection>
  );
}
