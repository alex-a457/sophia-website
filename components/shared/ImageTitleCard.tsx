'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import AppImage from '@/components/shared/AppImage';

type ImageTitleCardProps = {
  title: string;

  image: {
    src: string;
    alt: string;
    aspectRatio?: number;
    priority?: boolean;
    sizes?: string;
  };

  href?: string;
  onClick?: () => void;

  className?: {
    wrapper?: string;
    imageWrap?: string;
    title?: string;
    link?: string;
  };
};

export default function ImageTitleCard({
  title,
  image,
  href,
  onClick,
  className,
}: ImageTitleCardProps) {
  const CardInner = (
    <div
      className={cn(
        'group flex w-full flex-col items-center', // ✅ w-full (not w-fit)
        className?.wrapper,
      )}
      onClick={href ? undefined : onClick}
      role={href ? undefined : onClick ? 'button' : undefined}
      tabIndex={href ? undefined : onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (!href && onClick && (e.key === 'Enter' || e.key === ' ')) onClick();
      }}
    >
      <AppImage
        src={image.src}
        alt={image.alt}
        priority={image.priority}
        aspectRatio={image.aspectRatio ?? 1}
        sizes={image.sizes ?? '(max-width: 640px) 100vw, 25vw'}
        className={{
          wrapperClass: cn(
            'w-full overflow-hidden rounded-2xl',
            'transition-transform duration-300 group-hover:scale-[1.01]',
            className?.imageWrap,
          ),
          imageClass: 'object-cover',
          skeletonClass: 'rounded-2xl',
        }}
      />

      <p
        className={cn(
          'mt-5 w-full text-center font-serif text-xl leading-none text-foreground', // ✅ w-full
          className?.title,
        )}
      >
        {title}
      </p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={cn('block w-full', className?.link)}>
        {/* ✅ block + w-full */}
        {CardInner}
      </Link>
    );
  }

  return <div className="w-full">{CardInner}</div>;
}
