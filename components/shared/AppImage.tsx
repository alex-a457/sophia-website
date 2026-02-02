// AppImage.tsx
'use client';

import { ReactNode, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type AppImageProps = {
  aspectRatio?: number; // 1 (square), 4/5 (portrait), 16/9 (landscape)
  className?: {
    wrapperClass?: string;
    imageClass?: string;
    skeletonClass?: string;
  };
  fallback?: ReactNode;
  loadingNeeded?: boolean;
} & Omit<ImageProps, 'fill' | 'className'> & {
    fill?: true; // we always use fill internally
  };

export default function AppImage({
  aspectRatio = 1,
  className,
  fallback,
  loadingNeeded = true,
  onLoad,
  onError,
  sizes = '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw',
  alt,
  ...props
}: AppImageProps) {
  const { wrapperClass, imageClass, skeletonClass } = className || {};
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError && fallback) {
    return (
      <div
        className={cn('relative overflow-hidden', wrapperClass)}
        style={{ aspectRatio: String(aspectRatio) }}
      >
        {fallback}
      </div>
    );
  }

  return (
    <div
      className={cn('relative overflow-hidden', wrapperClass)}
      style={{ aspectRatio: String(aspectRatio) }}
    >
      {isLoading && loadingNeeded ? (
        <div
          className={cn(
            'absolute inset-0 animate-pulse rounded-xl bg-neutral-200',
            skeletonClass,
          )}
        />
      ) : null}

      <Image
        fill
        sizes={sizes}
        alt={alt}
        className={cn('h-full w-full object-cover', imageClass)}
        onLoad={(img) => {
          setIsLoading(false);
          onLoad?.(img);
        }}
        onError={(e) => {
          setHasError(true);
          onError?.(e);
        }}
        {...props}
      />
    </div>
  );
}
