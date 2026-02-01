'use client';

import { cn } from '@/lib/utils';
import ResponsiveAppImage from '../ResponsiveAppImage';

type Props = {
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
    alt: string;
  };

  /** height like: "h-screen", "h-[520px]", "min-h-[560px]" */
  heightClass?: string;

  /** overlay like: "bg-black/30", "bg-gradient-to-b ..." */
  overlayClass?: string;

  /** content wrapper positioning like: "items-center justify-center text-center" */
  contentWrapClass?: string;

  className?: string;
  priority?: boolean;

  children: React.ReactNode;
};

export default function ImageOverlaySection({
  image,
  heightClass = 'h-[520px] sm:h-[600px] lg:h-[680px]',
  overlayClass = 'bg-black/30',
  contentWrapClass = 'items-center justify-center text-center',
  className,
  priority,
  children,
}: Props) {
  return (
    <section className={cn('relative w-full overflow-hidden', className)}>
      {/* background image */}
      <div className={cn('relative w-full', heightClass)}>
        <ResponsiveAppImage
          image={image}
          priority={priority}
          className={{
            wrapperClass: 'h-full w-full',
            imageClass: 'object-cover',
          }}
        />
      </div>

      {/* overlay */}
      <div className={cn('absolute inset-0', overlayClass)} />

      {/* content */}
      <div
        className={cn(
          'absolute inset-0 flex px-4 md:px-6 xl:px-20',
          contentWrapClass,
        )}
      >
        {children}
      </div>
    </section>
  );
}
