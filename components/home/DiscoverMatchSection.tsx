'use client';

import ImageTitleCard from '@/components/shared/ImageTitleCard';
import ProductSection from '../product-card/ProductSection';

const CATEGORIES = [
  {
    title: 'Earrings',
    href: '/collections/earrings',
    image: '/home/category-earrings.svg',
  },
  {
    title: 'Necklaces',
    href: '/collections/necklaces',
    image: '/home/category-necklaces.svg',
  },
  {
    title: 'Bracelets',
    href: '/collections/bracelets',
    image: '/home/category-bracelets.svg',
  },
  {
    title: 'Rings',
    href: '/collections/rings',
    image: '/home/category-rings.svg',
  },
];

export default function DiscoverMatchSection() {
  return (
    <ProductSection
      title="Discover Your Perfect Match"
      subtitle="Explore our curated collections designed to suit every style and occasion."
      headerAlign="center"
      cols={{
        base: 1,
        md: 2,
        lg: 4,
      }}
      gap={{
        base: 'gap-6',
        md: 'md:gap-8',
        lg: 'lg:gap-5',
      }}
    >
      {CATEGORIES.map((item) => (
        <ImageTitleCard
          key={item.title}
          title={item.title}
          href={item.href}
          image={{
            src: item.image,
            alt: item.title,
            aspectRatio: 1,
          }}
        />
      ))}
    </ProductSection>
  );
}
