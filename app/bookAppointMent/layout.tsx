"use client";

import HeroBanner from "@/components/AppHeroBanner";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export default function BookAppointmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <HeroBanner/>

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
