// src/config/site/footer.config.ts
import type { FooterConfig } from './types';

export const footerConfig: FooterConfig = {
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

  // Keep footer logo separate because some brands want a different footer mark
  logoPath: '/brand/logo/brand.svg',

  bottomLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],

  copyrightText: '© 2026 Sophia. All rights reserved.',
} as const;
