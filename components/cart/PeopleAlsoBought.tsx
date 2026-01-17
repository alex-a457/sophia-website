// components/cart/PeopleAlsoBought.tsx
"use client";

import React, { useState } from "react";
import ProductCard, { Price } from "@/components/product-card/ProductCard";
import ProductGrid from "../product-card/ProductGrid";

type Item = {
  kind: string;
  title: string;
  imageSrc: string;
  price: Price;
};

const demo: Item[] = [
  {
    kind: "Bracelet",
    title: "Lily Cluster Yellow Gold",
    imageSrc: "/productDemo/cartAlsoProduct1.png",
    price: { type: "regular", amount: 8122, currency: "USD" },
  },
  {
    kind: "Earrings",
    title: "HW Logo Yellow Gold",
    imageSrc: "/productDemo/cartAlsoProduct2.png",
    price: { type: "regular", amount: 7984, currency: "USD" },
  },
  {
    kind: "Earrings",
    title: "Lily Cluster Yellow Gold",
    imageSrc: "/productDemo/cartAlsoProduct3.png",
    price: { type: "regular", amount: 8821, currency: "USD" },
  },
  {
    kind: "Ring",
    title: "Lily Cluster Yellow Gold",
    imageSrc: "/productDemo/cartAlsoProduct4.png",
    price: { type: "regular", amount: 6721, currency: "USD" },
  },
];

export default function PeopleAlsoBought() {
  // store selected color per card (key by index for demo; later use productId)
  const [selectedColors, setSelectedColors] = useState<Record<number, string>>(
    () => Object.fromEntries(demo.map((_, idx) => [idx, "gold"]))
  );

  return (
    <section className="xs:mt-20 mt-24">
      <div className="xs:mb-6.5 md:mb-20 mb-8 flex flex-col xs:gap-3 gap-6">
        <h2 className="xs:hidden text-center md:text-[40px] text-5xl font-medium text-theme">
          People also bought
        </h2>

        <h2 className="hidden xs:block text-center xs:text-[32px] font-medium text-theme">
          Related Creations
        </h2>

        <p className="xs:text-xs text-center text-lg text-[#AEAEAE]">
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
