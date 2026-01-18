"use client";
import React from "react";
import Header from "@/components/headerComponents/Header";
import Footer from "@/components/Footer";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
