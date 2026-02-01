import Image from 'next/image';
import { TiSocialFacebook } from 'react-icons/ti';
import { AppButton } from '../shared/AppButton';

const AdBanner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-3">
      <Image
        src="/home/home-ad-banner.svg"
        alt="Ad Banner"
        width={1200} // ✅ put your SVG natural width
        height={300} // ✅ put your SVG natural height
        className="h-auto w-full"
        priority={false}
      />

      <AppButton
        variant="solid"
        tone="brand"
        className="mt-4 cursor-pointer text-sm sm:mt-6 sm:text-base"
        leftIcon={<TiSocialFacebook className="text-2xl" />}
      >
        Join Our Group
      </AppButton>
    </div>
  );
};

export default AdBanner;
