import { aboutConfig } from '@/config/site/about.config';
import EditorialHeroSection from '../shared/layout/HeroSection';
import AboutCraftsmanshipSection from './AboutCraftsmanshipSection';
import AboutStorySection from './AboutStorySection';
import BrandManifestoSection from './BrandManifestoSection';

const AboutUs = () => {
  return (
    <div>
      <EditorialHeroSection data={aboutConfig.hero} />
      <AboutStorySection />
      <AboutCraftsmanshipSection />
      <BrandManifestoSection data={aboutConfig.manifesto} />
    </div>
  );
};

export default AboutUs;
