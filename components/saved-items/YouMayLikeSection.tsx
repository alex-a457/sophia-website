'use client';

import { useState } from 'react';
import { demo } from '../cart/PeopleAlsoBought';
import ProductCard from '../product-card/ProductCard';
import ProductSection from '../product-card/ProductSection';
import { AppButton } from '../shared/AppButton';

const YouMayLikeSection = () => {
  const [selectedColors, setSelectedColors] = useState<Record<number, string>>(
    () => Object.fromEntries(demo.map((_, idx) => [idx, 'gold'])),
  );

  return (
    <ProductSection
      title="You May Like"
      footerSlot={
        <AppButton variant="outline" radius="full" className="cursor-pointer">
          See More
        </AppButton>
      }
    >
      {demo.slice(0, 4).map((p) => (
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

export default YouMayLikeSection;
