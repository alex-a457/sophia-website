// src/config/site/brand.config.ts
import type { BrandConfig } from './types';

export const brandConfig: BrandConfig = {
  brandName: 'Sophia',
  logoPath: '/brand/logo/brand.svg',
  logoPathDark: '/brand/logo/dark-brand.svg',
} as const;
