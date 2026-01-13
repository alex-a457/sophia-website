// ProductGrid.tsx

import { cn } from "@/lib/utils";


export default function ProductGrid({ children,className }: { children: React.ReactNode, className?:string }) {
  return (
    <div className={cn(`grid xs:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-4`,className)}>
      {children}
    </div>
  );
}
