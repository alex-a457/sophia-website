import { SEASONAL_COLLECTION_DATA } from '@/config/seasonal-data.config';
import SeasonalCollectionBannerSection from '../shared/layout/SeasonalCollectionBannerSection';
import OurProductHeroSection from './OurProductHeroSection';
import OurProductSection from './OurProductSection';

const OurProduct = () => {
  return (
    <div>
      <OurProductHeroSection />
      <OurProductSection />
      <SeasonalCollectionBannerSection data={SEASONAL_COLLECTION_DATA} />
    </div>
  );
};

export default OurProduct;
