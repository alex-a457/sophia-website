// config/site.config.ts

export type EditorialHeroConfig = {
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
    alt: string;
  };
  title: string;
  description?: string;
  cta?: { label: string; href: string };
};

export type AboutStorySectionConfig = {
  eyebrow: string;
  title: string;
  description?: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
    alt: string;
    aspectRatio?: number; // optional override, default provided
  };
};

export type AboutCraftsmanshipSectionConfig = {
  eyebrow: string;
  title: string;
  paragraphs: string[]; // 1..n paragraphs
  image: string;
  alt: string;
  aspectRatio?: number; // optional
};

export type NavItem = {
  name: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export type SocialLink = {
  label: string;
  href: string;
  iconSrc: string; // you can map to /footer/*.svg
};

export type SiteConfig = {
  brandName: string;

  // header
  logoPath: string; // used for dark bg (your code uses this when isDarkbg true)
  logoPathDark: string; // used for light bg
  navigation: NavItem[];

  // header CTAs (so you don’t hardcode “Cart (0)” “Sign Up”)
  header: {
    searchPlaceholder: string;
    cartLabel: string; // "Cart"
    signupLabel: string; // "Sign Up"
    cartHref: string;
    signupHref: string;
  };

  about: {
    hero: EditorialHeroConfig;
    storySection: AboutStorySectionConfig;
    manifesto: EditorialHeroConfig;
    craftsmanshipSection: AboutCraftsmanshipSectionConfig;
  };

  // footer
  footer: {
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      buttonText: string;
    };

    contact: {
      title: string;
      addressLines: string[]; // easier than splitting \n in component
    };

    columns: FooterColumn[];

    socialLinks: SocialLink[];

    bottomLinks: { label: string; href: string }[];

    logoPath: string;

    copyrightText: string;
  };
};

export const siteConfig: SiteConfig = {
  brandName: 'Sophia',

  logoPath: '/brand/logo/brand.svg',
  logoPathDark: '/brand/logo/dark-brand.svg',

  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/our-product' },
    { name: 'Collections', href: '/loyalty-points' },
    { name: 'Gems of the world', href: '/saved-items' },
    { name: 'Signature Collection', href: '/signature' },
    { name: 'Engagement Collections', href: '/engagement' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact' },
  ],

  header: {
    searchPlaceholder: 'Search',
    cartLabel: 'Cart',
    signupLabel: 'Sign Up',
    cartHref: '/cart',
    signupHref: '/signup',
  },
  about: {
    hero: {
      image: {
        desktop: '/brand/hero/about-us-hero-desk.svg',
        tablet: '/brand/hero/about-us-hero-tab.svg',
        mobile: '/brand/hero/about-us-hero-mob.svg',
        alt: 'Luxury jewelry craftsmanship',
      },

      title:
        'A Celebration of Timeless Elegance, Meets Meaningful Stories Woven',
      description: `At Lunara, we create more than jewelry—we craft heirlooms of enduring beauty, designed to honor life's most cherished memories and to inspire the dreams of tomorrow.`,
    },

    storySection: {
      eyebrow: 'The Journey of Lunara',
      title:
        'Inspired by the radiant glow of the moon and the brilliance of the stars, Lunara was founded to create treasures that transcend time, blending modern elegance with a touch of classic sophistication.',
      description: `At Lunara, we craft jewelry that transcends time—blending modern elegance with classic sophistication. Every piece is a celebration of life's most precious moments, designed to tell your story with timeless beauty and radiant craftsmanship.`,
      image: {
        desktop: '/about/about-story-section-desk.svg',
        tablet: '/about/about-story-section-tab.svg',
        mobile: '/about/about-story-section-mob.svg',
        alt: 'Luxury jewelry craftsmanship',
        aspectRatio: 16 / 7,
      },
    },

    manifesto: {
      image: {
        desktop: '/about/about-manifesto-desk.svg',
        tablet: '/about/about-manifesto-tab.svg',
        mobile: '/about/about-manifesto-tab.svg',
        alt: 'Vision manifesto background',
      },
      title:
        'Our vision is to redefine luxury by creating jewelry that transcends time, inspires connection, and celebrates individuality.',
      description: `Our mission is simple yet profound: to craft meaningful pieces that honor life’s milestones, reflect the unique stories of those who wear them, and contribute positively to the world. With every creation, we strive to blend artistry with purpose, ensuring that beauty and responsibility go hand in hand.`,
    },

    craftsmanshipSection: {
      eyebrow: 'The Art of Craftsmanship',
      title: 'Crafted to Perfection, Inspired\nby Eternity',
      paragraphs: [
        `At Lunara, every piece begins as an idea—a vision of elegance, precision, and meaning. Our artisans transform this vision into reality through a meticulous process that combines time-honored techniques with modern innovation.`,
        `From selecting the finest materials to the final polishing touch, each step reflects our unwavering dedication to excellence. It's not just about creating jewelry; it's about crafting heirlooms that tell stories, preserve memories, and radiate beauty for generations to come.`,
      ],
      image: '/about/about-craftsman-section.svg',
      alt: 'Jewelry craftsmanship close-up',
      aspectRatio: 4 / 3,
    },
  },

  footer: {
    newsletter: {
      title: 'Exclusive Holiday Offer',
      description:
        'Get ready to shine this season with our special holiday discount! For a limited time, enjoy 25% off on selected jewelry pieces.',
      placeholder: 'Enter your email',
      buttonText: 'Submit',
    },

    contact: {
      title: 'Contact Information',
      addressLines: [
        'Sophia Fiori Jewelry',
        '1234 Elegance Avenue, Suite 567',
        'Diamond District, City of Lux, 12345',
        'United States',
      ],
    },

    columns: [
      {
        title: 'Shop',
        links: [
          { label: 'Rings', href: '/products?cat=rings' },
          { label: 'Necklaces', href: '/products?cat=necklaces' },
          { label: 'Bracelets', href: '/products?cat=bracelets' },
          { label: 'Earrings', href: '/products?cat=earrings' },
        ],
      },
      {
        title: 'Customer Service',
        links: [
          { label: 'FAQ', href: '/faq' },
          { label: 'Shipping & Returns', href: '/shipping' },
          { label: 'Contact Us', href: '/contact' },
          { label: 'Craftsmanship', href: '/craftsmanship' },
          { label: 'Sustainability', href: '/sustainability' },
        ],
      },
    ],

    socialLinks: [
      {
        label: 'Instagram',
        href: 'https://instagram.com/',
        iconSrc: '/footer/insta-button.svg',
      },
      {
        label: 'TikTok',
        href: 'https://tiktok.com/',
        iconSrc: '/footer/tiktok-button.svg',
      },
      {
        label: 'Facebook',
        href: 'https://facebook.com/',
        iconSrc: '/footer/fb-button.svg',
      },
      { label: 'X', href: 'https://x.com/', iconSrc: '/footer/x-button.svg' },
    ],

    logoPath: '/brand/logo/brand.svg',

    bottomLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],

    copyrightText: '© 2026 Sophia. All rights reserved.',
  },
} as const;
