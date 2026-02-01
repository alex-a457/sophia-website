import EditorialHeroSection from '../shared/layout/HeroSection';

const OurProductHeroSection = () => {
  return (
    <EditorialHeroSection
      data={{
        title: 'Explore Our Exquisite Collection',
        description:
          "Unveil a world of timeless beauty and craftsmanship. Each piece in our collection is designed to celebrate life's most precious moments, blending elegance and sophistication.",
        image: {
          desktop: '/our-product/out-product-hero-desk.svg',
          tablet: '/our-product/out-product-hero-tab.svg',
          mobile: '/our-product/out-product-hero-mob.svg',
          alt: 'Our Products',
        },
      }}
    />
  );
};

export default OurProductHeroSection;
