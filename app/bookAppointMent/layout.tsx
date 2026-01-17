"use client";

import Footer from "@/components/Footer";
import Header from "@/components/headerComponents/Header";
import type { ReactNode } from "react";

export default function BookAppointmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Header />

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
