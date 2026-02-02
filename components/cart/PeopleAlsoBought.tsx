// components/cart/PeopleAlsoBought.tsx
'use client';

import React, { useState } from 'react';
import ProductCard, { Price } from '@/components/product-card/ProductCard';
import ProductGrid from '../product-card/ProductGrid';

type Item = {
  id: number;
  kind: string;
  title: string;
  imageSrc: string;
  price: Price;
};

export const demo: Item[] = [
  {
    id: 1,
    kind: 'Bracelet',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct1.png',
    price: { type: 'regular', amount: 8122, currency: 'USD' },
  },
  {
    id: 2,
    kind: 'Earrings',
    title: 'HW Logo Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct2.png',
    price: { type: 'regular', amount: 7984, currency: 'USD' },
  },
  {
    id: 3,
    kind: 'Earrings',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct3.png',
    price: { type: 'regular', amount: 8821, currency: 'USD' },
  },
  {
    id: 4,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 5,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 6,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 7,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 8,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 9,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 10,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 11,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 12,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 13,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 14,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 15,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 16,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 17,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 18,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 19,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
  {
    id: 20,
    kind: 'Ring',
    title: 'Lily Cluster Yellow Gold',
    imageSrc: '/productDemo/cartAlsoProduct4.png',
    price: { type: 'regular', amount: 6721, currency: 'USD' },
  },
];

export default function PeopleAlsoBought() {
  const [selectedColors, setSelectedColors] = useState<Record<number, string>>(
    () => Object.fromEntries(demo.map((_, idx) => [idx, 'gold'])),
  );

  return (
    <section className="mt-20 xl:mt-24">
      <div className="mb-6 flex flex-col gap-3 md:mb-16 md:gap-6 xl:mb-8">
        <h2 className="xs:hidden text-center text-32 font-medium text-foreground md:text-[40px] xl:text-5xl">
          People also bought
        </h2>

        <h2 className="xs:block hidden text-center text-32 font-medium text-foreground md:text-[40px] xl:text-5xl">
          Related Creations
        </h2>

        <p className="text-center text-xs text-muted-foreground sm:text-lg">
          Get inspired by the other unique designs.
        </p>
      </div>

      <ProductGrid>
        {demo.map((p, idx) => (
          <ProductCard
            key={idx}
            kind={p.kind}
            title={p.title}
            imageSrc={p.imageSrc}
            price={p.price}
            selectedColorId={selectedColors[idx]} // ✅ controlled
            onColorChange={(colorId) => {
              setSelectedColors((prev) => ({ ...prev, [idx]: colorId }));
              // ✅ now you have the value here
              // later: map colorId -> imageSrc and update image
              // console.log("Selected color:", idx, colorId);
            }}
            onAddToCart={() => {}}
            onQuickView={() => {}}
          />
        ))}
      </ProductGrid>
    </section>
  );
}
