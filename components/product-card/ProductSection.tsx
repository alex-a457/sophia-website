// components/products/ProductSection.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';
import ProductGrid from './ProductGrid';

type Props = {
  className?: string;

  // header (optional)
  title?: string;
  subtitle?: string;
  headerAlign?: 'center' | 'left';
  leftSlot?: React.ReactNode; // optional left slot
  rightSlot?: React.ReactNode; // optional right slot

  // footer (optional)
  footerSlot?: React.ReactNode; // "See all products" / "See more" button

  // grid controls
  cols?: {
    base?: 1 | 2 | 3 | 4 | 5 | 6;
    md?: 1 | 2 | 3 | 4 | 5 | 6;
    lg?: 1 | 2 | 3 | 4 | 5 | 6;
    xl?: 1 | 2 | 3 | 4 | 5 | 6;
  };
  gap?: { base?: string; md?: string; lg?: string };

  slotAlign?: boolean;

  children: React.ReactNode; // product cards
};

export default function ProductSection({
  className,
  title,
  subtitle,
  headerAlign = 'center',
  leftSlot,
  rightSlot,
  footerSlot,
  cols,
  gap,
  slotAlign = false, // default alignment below sm
  children,
}: Props) {
  const isHeaderVisible = Boolean(title || subtitle || leftSlot || rightSlot);

  // Conditionally apply margins and gaps based on the presence of leftSlot or rightSlot
  const headerClass = cn(
    'flex flex-col gap-3 sm:gap-6',
    (leftSlot || rightSlot) && 'mb-8',
    !(leftSlot || rightSlot) && 'mb-10 sm:mb-20',
    headerAlign === 'center'
      ? 'items-center text-center'
      : 'items-start text-left',
  );

  return (
    <section className={cn('w-full bg-background', className)}>
      <div className="mx-auto w-full px-4 py-14 sm:px-6 lg:px-20">
        {isHeaderVisible && (
          <div className={headerClass}>
            {/* Title and subtitle rendering */}
            {(title || subtitle) && (
              <div
                className={cn('max-w-4xl', headerAlign === 'left' && 'w-full')}
              >
                {title && (
                  <h2 className="font-playfair text-32 leading-tight sm:text-40 xl:text-5xl">
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground md:text-base xl:text-lg">
                    {subtitle}
                  </p>
                )}
              </div>
            )}

            {/* LeftSlot and RightSlot rendering */}
            {(leftSlot || rightSlot) && (
              <div
                className={cn(
                  'flex w-full justify-between gap-4',
                  `sm:flex-row ${slotAlign ? 'flex-col' : ''}`,
                )}
              >
                {leftSlot && (
                  <div className="flex items-center">{leftSlot}</div>
                )}
                {rightSlot && (
                  <div className="flex items-center self-start sm:justify-end">
                    {rightSlot}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Product Grid */}
        <ProductGrid cols={cols} gap={gap}>
          {children}
        </ProductGrid>

        {/* Footer Slot (optional) */}
        {footerSlot && (
          <div className="mt-12 flex justify-center">{footerSlot}</div>
        )}
      </div>
    </section>
  );
}
