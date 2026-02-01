'use client';

import AppImage from './AppImage';

type Props = {
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
    alt: string;
  };
  className?: {
    wrapperClass?: string;
    imageClass?: string;
    skeletonClass?: string;
  };
  priority?: boolean;
};

export default function ResponsiveAppImage({
  image,
  className,
  priority,
}: Props) {
  const common = {
    alt: image.alt,
    sizes: '100vw',
    className: {
      wrapperClass: className?.wrapperClass ?? '',
      imageClass: className?.imageClass ?? 'object-cover',
      skeletonClass: className?.skeletonClass ?? '',
    },
  };

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 hidden lg:block">
        <AppImage src={image.desktop} priority={priority} {...common} />
      </div>

      <div className="absolute inset-0 hidden sm:block lg:hidden">
        <AppImage src={image.tablet} {...common} />
      </div>

      <div className="absolute inset-0 block sm:hidden">
        <AppImage src={image.mobile} {...common} />
      </div>
    </div>
  );
}
