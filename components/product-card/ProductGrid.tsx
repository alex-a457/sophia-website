// ProductGrid.tsx

import { cn } from '@/lib/utils';

export default function ProductGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4`,
        className,
      )}
    >
      {children}
    </div>
  );
}
