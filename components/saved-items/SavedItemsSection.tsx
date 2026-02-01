'use client';

import { useState } from 'react';
import { ListFilter, Search } from 'lucide-react';
import { demo } from '../cart/PeopleAlsoBought';
import ProductCard from '../product-card/ProductCard';
import ProductSection from '../product-card/ProductSection';
import { AppButton } from '../shared/AppButton';
import { Input } from '../ui/input';

const SavedItemsSection = () => {
  const [selectedColors, setSelectedColors] = useState<Record<number, string>>(
    () => Object.fromEntries(demo.map((_, idx) => [idx, 'gold'])),
  );

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ProductSection
      title="Saved Items"
      headerAlign="left"
      slotAlign={true}
      leftSlot={
        <div className="flex w-full items-center justify-start">
          <div className="relative w-full sm:w-[365px]">
            <Input
              placeholder="Search Something"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-border px-12 py-2 text-sm placeholder:text-foreground"
            />
            <span className="absolute top-1/2 left-4 -translate-y-1/2 transform text-foreground">
              <Search size={20} />
            </span>
          </div>
        </div>
      }
      rightSlot={
        <div className="flex w-full items-center justify-end gap-2">
          <ListFilter size={24} />
          <span className="text-base font-medium sm:text-2xl">
            Sort and Filter
          </span>
        </div>
      }
      footerSlot={
        <AppButton variant="outline" radius="full" className="cursor-pointer">
          See More
        </AppButton>
      }
      gap={{ base: 'gap-8', md: 'md:gap-10', lg: 'lg:gap-12' }}
    >
      {demo.slice(0, 8).map((p) => (
        <ProductCard
          key={p.id}
          kind={p.kind}
          title={p.title}
          imageSrc={p.imageSrc}
          price={p.price}
          selectedColorId={selectedColors[p.id]}
          onColorChange={(colorId) => {
            setSelectedColors((prev) => ({ ...prev, [p.id]: colorId }));
          }}
          onAddToCart={() => {}}
          onQuickView={() => {}}
        />
      ))}
    </ProductSection>
  );
};

export default SavedItemsSection;
