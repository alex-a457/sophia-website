// components/products/ProductGrid.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

type GridCols = 1 | 2 | 3 | 4 | 5 | 6;
type Props = {
  children: React.ReactNode;
  className?: string;

  cols?: {
    base?: GridCols;
    md?: GridCols;
    lg?: GridCols;
    xl?: GridCols;
  };

  gap?: {
    base?: string;
    md?: string;
    lg?: string;
  };
};

const BASE_COLS: Record<GridCols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
};

const MD_COLS: Record<GridCols, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
};

const LG_COLS: Record<GridCols, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
};
const XL_COLS: Record<GridCols, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
};

function getColsClass(cols?: Props['cols']) {
  const base: GridCols = cols?.base ?? 2;
  const md: GridCols = cols?.md ?? 3;
  const lg: GridCols = cols?.lg ?? 4;
  const xl = cols?.xl;

  return cn(BASE_COLS[base], MD_COLS[md], LG_COLS[lg], xl ? XL_COLS[xl] : '');
}

export default function ProductGrid({ children, className, cols, gap }: Props) {
  const gapBase = gap?.base ?? 'gap-6';
  const gapMd = gap?.md ?? 'md:gap-8';
  const gapLg = gap?.lg ?? 'lg:gap-10';

  return (
    <div
      className={cn(
        'grid',
        getColsClass(cols),
        gapBase,
        gapMd,
        gapLg,
        className,
      )}
    >
      {children}
    </div>
  );
}
