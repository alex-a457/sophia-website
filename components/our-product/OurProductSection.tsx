'use client';

import { useState } from 'react';
import { ListFilter } from 'lucide-react';
import { demo } from '../cart/PeopleAlsoBought';
import ProductCard from '../product-card/ProductCard';
import ProductSection from '../product-card/ProductSection';
import { AppButton } from '../shared/AppButton';

const OurProductSection = () => {
  const [selectedColors, setSelectedColors] = useState<Record<number, string>>(
    () => Object.fromEntries(demo.map((_, idx) => [idx, 'gold'])),
  );

  return (
    <ProductSection
      leftSlot={
        <div className="flex w-full items-center justify-start text-base font-medium sm:text-2xl">
          All collection (1022)
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

export default OurProductSection;
