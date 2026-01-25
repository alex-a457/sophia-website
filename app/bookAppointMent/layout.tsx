"use client";

import HeroBanner from "@/components/AppHeroBanner";
import { AppointmentOverLay } from "@/components/bookAppointMent/BookAppointMentOverlayBanner";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export default function BookAppointmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <HeroBanner
        Overlay={AppointmentOverLay}
        imageUrl={"/assets/bookAppointmentHeroImage.svg"}
      />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
