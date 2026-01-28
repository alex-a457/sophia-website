'use client';

import { useState } from 'react';
import { demo } from '@/components/cart/PeopleAlsoBought';
import BannerSlider from '@/components/home/BannerSlider';
import ProductCard from '@/components/product-card/ProductCard';
import ProductGrid from '@/components/product-card/ProductGrid';

const HomePage = () => {
  const bannerImages = ['/banner1.png', '/banner2.png', '/banner3.png'];
  const altText = [
    'Cyber Monday Sale',
    'Timeless Elegance',
    'Best Collections',
  ];

  const [selectedColors, setSelectedColors] = useState<Record<number, string>>(
    () => Object.fromEntries(demo.map((_, idx) => [idx, 'gold'])),
  );

  return (
    <div className="">
      <BannerSlider bannerImages={bannerImages} altText={altText} />
      <div className="px-20">
        <ProductGrid>
          {demo.map((p, idx) => (
            <ProductCard
              key={idx}
              kind={p.kind}
              title={p.title}
              imageSrc={p.imageSrc}
              price={p.price}
              selectedColorId={selectedColors[idx]}
              onColorChange={(colorId) => {
                setSelectedColors((prev) => ({ ...prev, [idx]: colorId }));
              }}
              onAddToCart={() => {}}
              onQuickView={() => {}}
            />
          ))}
        </ProductGrid>
      </div>
    </div>
  );
};

export default HomePage;
