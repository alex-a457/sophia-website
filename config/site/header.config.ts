// src/config/site/header.config.ts
import type { HeaderConfig } from './types';

export const headerConfig: HeaderConfig = {
  searchPlaceholder: 'Search',
  cartLabel: 'Cart',
  signupLabel: 'Sign Up',
  cartHref: '/cart',
  signupHref: '/signup',
} as const;
