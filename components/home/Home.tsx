'use client';

import { useState } from 'react';
import { SEASONAL_COLLECTION_DATA } from '@/config/seasonal-data.config';
import { demo } from '../cart/PeopleAlsoBought';
import ProductCard from '../product-card/ProductCard';
import ProductSection from '../product-card/ProductSection';
import { AppButton } from '../shared/AppButton';
import SeasonalCollectionBannerSection from '../shared/layout/SeasonalCollectionBannerSection';
import AboutHomeSection from './AboutHomeSection';
import AdBanner from './AdBanner';
import BannerSlider from './BannerSlider';
import DiscoverMatchSection from './DiscoverMatchSection';

const Home = () => {
  const bannerImages = [
    '/brand/banners/banner1.png',
    '/brand/banners/banner2.png',
    '/brand/banners/banner3.png',
  ];
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
      <ProductSection
        title="Timeless Elegance, Most Loved"
        subtitle="Discover our most sought-after jewelry, celebrated for unmatched beauty and craftsmanship."
        footerSlot={
          <AppButton variant="outline" radius="full" className="cursor-pointer">
            Shop all Deals
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

      <AdBanner />

      <ProductSection
        title="Our latest creations"
        subtitle="Our collections are designed for those who seek perfection in every detail. From radiant diamond rings to breathtaking necklaces, each piece is crafted using the finest materials and techniques."
        footerSlot={
          <AppButton variant="outline" radius="full" className="cursor-pointer">
            See all Products
          </AppButton>
        }
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
      <AboutHomeSection />
      <DiscoverMatchSection />
      <SeasonalCollectionBannerSection data={SEASONAL_COLLECTION_DATA} />
    </div>
  );
};

export default Home;
