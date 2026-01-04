"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export default function AppFooter() {
  return (
    <footer className="w-full border-t border-[#EAEAEA] bg-white">
      {/* ✅ Put back the container so footer always measures correctly */}
      <div className="mx-auto w-full max-w-[1416px] px-3">
        <div className="py-14">
          {/* ✅ Use flex-wrap so it stays horizontal when space exists,
              and only wraps if truly needed */}
          <div className="flex flex-wrap items-start justify-between gap-16">
            {/* Left: Newsletter */}
            <div className="min-w-[520px] flex-1">
              <h3 className="font-serif text-[44px] leading-[1.05] tracking-[-0.02em] text-[#151515]">
                Exclusive Holiday Offer
              </h3>

              <p className="mt-4 max-w-[520px] text-[13px] leading-[20px] text-[#151515]/55">
                Get ready to shine this season with our special holiday discount!
                <br />
                For a limited time, enjoy 25 % off on selected jewelry pieces.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[40px] w-[320px] max-w-full rounded-full border border-[#D9D9D9] bg-white px-5 text-[12px] text-[#151515] outline-none placeholder:text-[#151515]/40"
                />
                <button className="h-[40px] rounded-full bg-[#151515] px-7 text-[12px] font-medium text-white">
                  Submit
                </button>
              </div>
            </div>

            {/* Right: ✅ FORCE 3 columns ALWAYS */}
            <div className="min-w-[560px] flex-1">
              <div className="grid grid-cols-3 gap-12">
                {/* Contact Information */}
                <div>
                  <p className="text-[14px] font-semibold text-[#151515]">
                    Contact Information
                  </p>
                  <div className="mt-5 space-y-1 text-[12px] leading-[18px] text-[#151515]/55">
                    <p>Sophia Fiori Jewelry</p>
                    <p>1234 Elegance Avenue,</p>
                    <p>Suite 567,</p>
                    <p>Diamond District,</p>
                    <p>City of Lux, 12345</p>
                    <p>United States</p>
                  </div>
                </div>

                {/* Shop */}
                <div>
                  <p className="text-[14px] font-semibold text-[#151515]">Shop</p>
                  <div className="mt-5 space-y-2 text-[12px] text-[#151515]/55">
                    {["Rings", "Necklaces", "Bracelets", "Earrings"].map(
                      (item) => (
                        <p
                          key={item}
                          className="cursor-pointer hover:text-[#151515]"
                        >
                          {item}
                        </p>
                      )
                    )}
                  </div>
                </div>

                {/* Customer Service */}
                <div>
                  <p className="text-[14px] font-semibold text-[#151515]">
                    Customer Service
                  </p>
                  <div className="mt-5 space-y-2 text-[12px] text-[#151515]/55">
                    {[
                      "FAQ",
                      "Shipping & Returns",
                      "Contact Us",
                      "Craftsmanship",
                      "Sustainability",
                    ].map((item) => (
                      <p
                        key={item}
                        className="cursor-pointer hover:text-[#151515]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 h-px w-full bg-[#EAEAEA]" />

          {/* Bottom bar */}
          <div className="py-8">
            <div className="grid grid-cols-3 items-center">
              {/* Socials */}
              <div className="flex items-center gap-3">
                <button className="grid h-10 w-10 place-items-center rounded-full border border-[#EAEAEA] text-[#151515] hover:bg-[#151515]/5">
                  <FaInstagram size={15} />
                </button>
                <button className="grid h-10 w-10 place-items-center rounded-full border border-[#EAEAEA] text-[#151515] hover:bg-[#151515]/5">
                  <FaTiktok size={15} />
                </button>
                <button className="grid h-10 w-10 place-items-center rounded-full border border-[#EAEAEA] text-[#151515] hover:bg-[#151515]/5">
                  <FaFacebookF size={15} />
                </button>
                <button className="grid h-10 w-10 place-items-center rounded-full border border-[#EAEAEA] text-[#151515] hover:bg-[#151515]/5">
                  <FaXTwitter size={15} />
                </button>
              </div>

              {/* Logo */}
              <div className="flex justify-center">
                <div className="relative h-[34px] w-[220px]">
                  <Image
                    src="/logo.svg"
                    alt="Sophia Fiori"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Links */}
              <div className="flex justify-end gap-8 text-[12px] text-[#151515]/55">
                <span className="cursor-pointer hover:text-[#151515]">
                  Privacy Policy
                </span>
                <span className="cursor-pointer hover:text-[#151515]">
                  Terms &amp; Conditions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
