// src/config/site/types.ts

export type ResponsiveImage = {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type EditorialHeroConfig = {
  image: ResponsiveImage;
  title: string;
  description?: string;
  cta?: CtaLink;
};

export type AboutStorySectionConfig = {
  eyebrow: string;
  title: string;
  description?: string;
  image: ResponsiveImage & {
    aspectRatio?: number;
  };
};

export type AboutCraftsmanshipSectionConfig = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  aspectRatio?: number;
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
  iconSrc: string;
};

export type HeaderConfig = {
  searchPlaceholder: string;
  cartLabel: string;
  signupLabel: string;
  cartHref: string;
  signupHref: string;
};

export type BrandConfig = {
  brandName: string;
  logoPath: string;
  logoPathDark: string;
};

export type AboutConfig = {
  hero: EditorialHeroConfig;
  storySection: AboutStorySectionConfig;
  manifesto: EditorialHeroConfig;
  craftsmanshipSection: AboutCraftsmanshipSectionConfig;
};

export type FooterConfig = {
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
  contact: {
    title: string;
    addressLines: string[];
  };
  columns: FooterColumn[];
  socialLinks: SocialLink[];
  bottomLinks: { label: string; href: string }[];
  logoPath: string;
  copyrightText: string;
};
