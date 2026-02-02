import { siteConfig } from '@/config/site.config';
import EditorialHeroSection from '../shared/layout/HeroSection';
import AboutCraftsmanshipSection from './AboutCraftsmanshipSection';
import AboutStorySection from './AboutStorySection';
import BrandManifestoSection from './BrandManifestoSection';

const AboutUs = () => {
  return (
    <div>
      <EditorialHeroSection data={siteConfig.about.hero} />
      <AboutStorySection />
      <AboutCraftsmanshipSection />
      <BrandManifestoSection data={siteConfig.about.manifesto} />
    </div>
  );
};

export default AboutUs;
