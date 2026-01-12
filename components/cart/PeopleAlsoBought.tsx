// components/cart/PeopleAlsoBought.tsx
"use client";

import React from "react";
import ProductCard, { Price } from "@/components/ProductCard";

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
    imageSrc: "/demo/bracelet2.png",
    price: { type: "regular", amount: 8122, currency: "USD" },
  },
  {
    kind: "Earrings",
    title: "HW Logo Yellow Gold",
    imageSrc: "/demo/earrings.png",
    price: { type: "regular", amount: 7984, currency: "USD" },
  },
  {
    kind: "Earrings",
    title: "Lily Cluster Yellow Gold",
    imageSrc: "/demo/earrings2.png",
    price: { type: "regular", amount: 8821, currency: "USD" },
  },
  {
    kind: "Ring",
    title: "Lily Cluster Yellow Gold",
    imageSrc: "/demo/ring2.png",
    price: { type: "regular", amount: 6721, currency: "USD" },
  },
];

export default function PeopleAlsoBought() {
  return (
    <section className="">
      <h2 className="text-center text-2xl font-semibold text-neutral-900">
        People also bought
      </h2>

      <div className="mt-10 grid grid-cols-4 gap-6 ">
        {demo.map((p, idx) => (
          <ProductCard
            key={idx}
            kind={p.kind}
            title={p.title}
            imageSrc={p.imageSrc}
            price={p.price}
            onAddToCart={() => {}}
            onQuickView={() => {}}
          />
        ))}
      </div>
    </section>
  );
}
