
import React from "react";
import Image from "next/image";
import Header from "./headerComponents/Header";

type HeroBannerProps = {
  /** Left image */
  imageSrc: string;
  imageAlt?: string;

  /** Right side content (text/buttons component) */
  rightContent: React.ReactNode;

  /** Height */
  minHeightClassName?: string; // default matches screenshot

  /** Left image dark fade */
  leftOverlayClassName?: string;

  /** Right background gradient (blue glow + black) */
  rightBgClassName?: string;

  className?: string;
};

export default function HeroBanner() {
  return (
    <div className="w-full">
      {/* Page-only override */}
      <style jsx global>{`
        .about-page header {
          background: transparent !important;
          border-bottom: none !important;
          box-shadow: none !important;
        }

        .about-page header * {
          color: #fff !important;
        }

        .about-page header input {
          color: #fff !important;
          border-bottom-color: rgba(255, 255, 255, 0.35) !important;
        }

        .about-page header > div:first-child {
          background: rgba(0, 0, 0, 0.6) !important;
        }
      `}</style>

      {/* =========================
          SECTION 1: HERO
      ========================== */}
      <section className="about-page relative h-screen w-full">
        {/* Header overlay */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        <Image
          src="/assets/bookAppointmentHeroImage.svg"
          alt="About Us"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex h-full items-center justify-end">
           <div className="flex  h-full w-[50%] border">
            <div>josva</div>
           </div>
        </div>
      </section>
    </div>
  );
}
