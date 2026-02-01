'use client';

import React from 'react';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
import Footer from '@/components/shared/layout/Footer';
import Header from '@/components/shared/layout/Header';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isOverlayHeader = pathname.includes('our-product');
  const isDarkBg = pathname.includes('our-product');

  return (
    <div className="min-h-screen">
      <Header
        variant={isOverlayHeader ? 'overlay' : 'sticky'}
        isDarkbg={isDarkBg}
      />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
