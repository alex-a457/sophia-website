'use client';

// app/cart/page.tsx
import CartLayout from "@/components/cart/CartLayout";
import Footer from "@/components/Footer";
import Header from "@/components/headerComponents/Header";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CartLayout />
      <Footer />
    </div>
  );
}
