'use client';

import React from 'react';
import Footer from '@/components/shared/layout/Footer';
import Header from '@/components/shared/layout/Header';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
