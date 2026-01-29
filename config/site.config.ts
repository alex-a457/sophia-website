// config/site.config.ts

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

    copyrightText: string;
  };
};

export const siteConfig: SiteConfig = {
  brandName: 'Sophia',

  logoPath: '/brand/logo/brand.svg',
  logoPathDark: '/brand/logo/dark-brand.svg',

  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'Gems of the world', href: '/gems' },
    { name: 'Signature Collection', href: '/signature' },
    { name: 'Engagement Collections', href: '/engagement' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ],

  header: {
    searchPlaceholder: 'Search',
    cartLabel: 'Cart',
    signupLabel: 'Sign Up',
    cartHref: '/cart',
    signupHref: '/signup',
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

    bottomLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],

    copyrightText: '© 2026 Sophia. All rights reserved.',
  },
} as const;
