// src/config/site/navigation.config.ts
import type { NavItem } from './types';

export const navigationConfig: readonly NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/our-product' },
  { name: 'Collections', href: '/loyalty-points' },
  { name: 'Gems of the world', href: '/saved-items' },
  { name: 'Signature Collection', href: '/signature' },
  { name: 'Engagement Collections', href: '/engagement' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact' },
] as const;
