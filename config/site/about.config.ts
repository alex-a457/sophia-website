// src/config/site/about.config.ts
import type { AboutConfig } from './types';

export const aboutConfig: AboutConfig = {
  hero: {
    image: {
      desktop: '/brand/hero/about-us-hero-desk.svg',
      tablet: '/brand/hero/about-us-hero-tab.svg',
      mobile: '/brand/hero/about-us-hero-mob.svg',
      alt: 'Luxury jewelry craftsmanship',
    },
    title: 'A Celebration of Timeless Elegance, Meets Meaningful Stories Woven',
    description:
      "At Lunara, we create more than jewelry—we craft heirlooms of enduring beauty, designed to honor life's most cherished memories and to inspire the dreams of tomorrow.",
  },

  storySection: {
    eyebrow: 'The Journey of Lunara',
    title:
      'Inspired by the radiant glow of the moon and the brilliance of the stars, Lunara was founded to create treasures that transcend time, blending modern elegance with a touch of classic sophistication.',
    description:
      "At Lunara, we craft jewelry that transcends time—blending modern elegance with classic sophistication. Every piece is a celebration of life's most precious moments, designed to tell your story with timeless beauty and radiant craftsmanship.",
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
    description:
      'Our mission is simple yet profound: to craft meaningful pieces that honor life’s milestones, reflect the unique stories of those who wear them, and contribute positively to the world. With every creation, we strive to blend artistry with purpose, ensuring that beauty and responsibility go hand in hand.',
  },

  craftsmanshipSection: {
    eyebrow: 'The Art of Craftsmanship',
    title: 'Crafted to Perfection, Inspired\nby Eternity',
    paragraphs: [
      'At Lunara, every piece begins as an idea—a vision of elegance, precision, and meaning. Our artisans transform this vision into reality through a meticulous process that combines time-honored techniques with modern innovation.',
      "From selecting the finest materials to the final polishing touch, each step reflects our unwavering dedication to excellence. It's not just about creating jewelry; it's about crafting heirlooms that tell stories, preserve memories, and radiate beauty for generations to come.",
    ],
    image: '/about/about-craftsman-section.svg',
    alt: 'Jewelry craftsmanship close-up',
    aspectRatio: 4 / 3,
  },
} as const;
