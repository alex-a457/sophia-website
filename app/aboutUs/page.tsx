"use client";

import AppFooter from "@/components/AppFooter";
import Header from "@/components/headerComponents/Header";
import Image from "next/image";

export default function AboutUsPage() {
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
          src="/assets/aboutUs-backgroundBanner.svg"
          alt="About Us"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-5xl px-6 text-center text-white">
            <h1 className="font-serif text-[2.8rem] leading-tight md:text-[4rem]">
              A Celebration of Timeless Elegance,
              <br />
              Meets Meaningful Stories Woven
            </h1>

            <p className="mt-6 text-sm md:text-base text-white/90 max-w-3xl mx-auto">
              At Lunara, we create more than jewelry—we craft heirlooms of enduring
              beauty, designed to honor life’s most cherished memories and to
              inspire the dreams of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 2: JOURNEY TEXT
      ========================== */}
      <section className="w-full bg-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="text-[0.875rem] text-[#151515] tracking-wide">
            The Journey of Lunara
          </p>

          <h2 className="mt-6 font-serif text-[#151515] text-[2.2rem] leading-tight md:text-[3.2rem]">
            Inspired by the radiant glow of the moon and
            <br />
            the brilliance of the stars, Lunara was founded
            <br />
            to create treasures that transcend time,
            <br />
            blending modern elegance with a touch of
            <br />
            classic sophistication.
          </h2>

          <p className="mt-10 mx-auto max-w-3xl text-[0.95rem] leading-relaxed text-[#151515]/80">
            At Lunara, we craft jewelry that transcends time—blending modern
            elegance with classic sophistication. Every piece is a celebration
            of life’s most precious moments, designed to tell your story with
            timeless beauty and radiant craftsmanship
          </p>
        </div>
      </section>

      {/* =========================
          SECTION 3: EARRINGS IMAGE (Figma)
      ========================== */}
      <section className="w-full bg-white pb-24">
        <div className="px-3">
          <div className=" mx-auto">
            <div className="relative w-full h-[500px] rounded-[12px] overflow-hidden bg-[#f3f3f3]">
              <Image
                src="/assets/aboutUs-earRing.svg" // public/assets/aboutUs-earrings.jpg
                alt="Earrings"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

{/* =========================
    SECTION: CRAFTSMANSHIP (Figma exact)
    background: #FFFFFF
    width: 1440
    height: 830
========================== */}
<section className="w-full bg-white">
  {/* Canvas exactly 1440x830 */}
  <div className="relative mx-auto w-[1440px] h-[830px] bg-white">
    {/* TEXT FRAME (630x504) at top:163 left:80 */}
    <div className="absolute left-[80px] top-[163px] w-[630px] h-[504px] flex flex-col gap-[32px]">
      <p className="text-[14px] text-[#151515]/70">The Art of Craftsmanship</p>

      <h3 className="font-serif text-[#151515] text-[44px] leading-[52px]">
        Crafted to Perfection, Inspired
        <br />
        by Eternity
      </h3>

      <p className="text-[14px] leading-[22px] text-[#151515]/75">
        At Lunara, every piece begins as an idea—a vision of elegance, precision,
        and meaning. Our artisans transform this vision into reality through a
        meticulous process that combines time-honored techniques with modern
        innovation.
      </p>

      <p className="text-[14px] leading-[22px] text-[#151515]/75">
        From selecting the finest materials to the final polishing touch, each
        step reflects our unwavering dedication to excellence. It’s not just about
        creating jewelry; it’s about crafting heirlooms that tell stories, preserve
        memories, and radiate beauty for generations to come.
      </p>
    </div>

    {/* IMAGE FRAME (630x630) at top:100 left:730 */}
    <div className="absolute left-[730px] top-[100px] w-[630px] h-[630px] rounded-[12px] overflow-hidden bg-[#f3f3f3]">
      <Image
        src="/assets/aboutUs-craftsmanShip.svg"
        alt="Craftsmanship"
        fill
        className="object-contain"
      />
    </div>
  </div>
</section>

{/* =========================
    SECTION: VISION / MISSION BANNER (like your screenshot)
========================== */}
<section className="w-full bg-white pb-24">
  {/* 12px side padding like your earlier sections */}
  <div className="px-3">
    {/* Keep same canvas width */}
    <div className="mx-auto">
      <div className="relative w-full h-[560px] rounded-[12px] overflow-hidden">
        {/* Background image */}
        <Image
          src="/assets/aboutUs-earRingBanner.svg" // put in public/assets/aboutUs-vision.jpg
          alt="Vision"
          fill
          className="object-cover"
          priority={false}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Center text */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="max-w-[900px] px-6 text-center text-white">
            <h3 className="font-serif text-[34px] leading-[42px] md:text-[44px] md:leading-[54px]">
              Our vision is to redefine luxury by creating
              <br />
              jewelry that transcends time, inspires
              <br />
              connection, and celebrates individuality.
            </h3>

            <p className="mt-6 text-[12px] leading-[18px] text-white/85 max-w-[820px] mx-auto md:text-[13px] md:leading-[20px]">
              Our mission is simple yet profound: to craft meaningful pieces that
              honor life’s milestones, reflect the unique stories of those who
              wear them, and contribute positively to the world. With every
              creation, we strive to blend artistry with purpose, ensuring that
              beauty and responsibility go hand in hand.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<AppFooter/>



     
    </div>
  );
}
