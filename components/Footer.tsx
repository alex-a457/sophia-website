import { Button, Input } from "@heroui/react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-[5px]">
      <div className="max-w-7xl w-full pt-[3rem] sm:pt-[1rem] pb-[2rem] grid grid-cols-2 md:grid-cols-1 gap-y-[3rem] gap-x-[1rem] px-[5px]">
        <div className="max-w-[34rem] text-center">
          <h2 className="text-[3rem] font-medium text-theme md:text-[2.5rem]">
            Exclusive Holiday Offer
          </h2>

          <div className="text-center text-text-muted mb-[1.5rem]">
            Get ready to shine this season with our special holiday discount! For a limited time, enjoy 25 % off on selected jewelry pieces.
          </div>

          <div className="flex flex-row gap-[0.25rem]">
            <Input
              type="email"
              variant="bordered"
              radius="full"
              placeholder="Enter your email"
              classNames={{
                inputWrapper: "border border-text-muted hover:border-text-muted focus-within:border-text-muted h-[2.938rem]",
                input: "placeholder:text-text-muted text-base",
              }}
            />

            <Button className="rounded-full bg-theme font-semibold text-white h-[2.938rem]">
              Submit
            </Button>
          </div>

        </div>

        <div className="flex flex-wrap flex-row gap-[2.375rem] md:gap-[2rem]">
          {/* 2nd col */}
          <div>
            <h2 className="text-[1.5rem] font-semibold mb-[1.5rem] text-theme">
              Contact Information
            </h2>

            <div className="text-[1.125rem] text-text-muted">
              <button className="text-left hover:underline focus:underline focus:outline-none cursor-pointer">
                Sophia Fiori Jewelry<br />
                1234 Elegance Avenue,<br />
                Suite 567, <br />
                Diamond District, <br />
                City of Lux, 12345<br />
                United States
              </button>
            </div>
          </div>

          {/* 3rd col */}
          <div>
            <h2 className="text-[1.5rem] font-semibold mb-[1.5rem] text-theme">
              Shop
            </h2>

            <div className="flex flex-col gap-2 text-[1.125rem] text-text-muted">
              <button className="text-left hover:underline focus:underline focus:outline-none crusor-pointer">
                Rings
              </button>
              <button className="text-left hover:underline focus:underline focus:outline-none crusor-pointer">
                Necklaces
              </button>
              <button className="text-left hover:underline focus:underline focus:outline-none crusor-pointer">
                Bracelets
              </button>
              <button className="text-left hover:underline focus:underline focus:outline-none crusor-pointer">
                Earrings
              </button>
            </div>
          </div>

          {/* 4th col */}
          <div>
            <h2 className="text-[1.5rem] font-semibold mb-[1.5rem] text-theme">
              Customer Service
            </h2>

            <div className="flex flex-col gap-2 text-[1.125rem] text-text-muted">
              <button className="text-left hover:underline focus:underline focus:outline-none crusor-pointer">
                FAQ
              </button>
              <button className="text-left hover:underline focus:underline focus:outline-none crusor-pointer">
                Shipping & Returns
              </button>
              <button className="text-left hover:underline focus:underline focus:outline-none crusor-pointer">
                Contact Us
              </button>
              <button className="text-left hover:underline focus:underline focus:outline-none crusor-pointer">
                Craftsmanship
              </button>
              <button className="text-left hover:underline focus:underline focus:outline-none crusor-pointer">
                Sustainability
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl border-b border-text w-full opacity-10" />

      <div className="w-full max-w-7xl text-white my-8 flex flex-wrap justify-between items-center lg:gap-y-[2rem]">
        <div className="flex flex-wrap flex-row gap-[0.25rem]">
          <div className="w-[3rem] h-[3rem] relative">
            <Image
              src="/footer/insta-button.svg"
              alt="instagram"
              fill
            />
          </div>

          <div className="w-[3rem] h-[3rem] relative">
            <Image
              src="/footer/tiktok-button.svg"
              alt="tiktok"
              fill
            />
          </div>

          <div className="w-[3rem] h-[3rem] relative">
            <Image
              src="/footer/fb-button.svg"
              alt="facebook"
              fill
            />
          </div>

          <div className="w-[3rem] h-[3rem] relative">
            <Image
              src="/footer/x-button.svg"
              alt="x"
              fill
            />
          </div>
        </div>

        <div className="relative">
          <div className="w-[12.563rem] h-[2.5rem]">
            <Image src="/logo.svg" alt="add-icon" fill />
          </div>
        </div>

        <div className="flex flex-wrap flex-row text-[1.125rem] text-text-muted gap-[1.5rem]">
          <div className="cursor-pointer">
            Privacy Policy
          </div>

          <div className="cursor-pointer">
            Terms & Conditions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
