"use client";
import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
} from "@heroui/react";
import { Slider } from "@heroui/react";
import Header from "@/components/headerComponents/Header";
import Footer from "@/components/Footer";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Cyber Monday",
    description:
      "Discover handcrafted luxury jewelry, designed to celebrate every moment of your journey with 40% off",
    button: "Shop Cyber Monday Sale",
    image: "/slide-1.png",
  },
  {
    id: 2,
    title: "Best Sellers",
    description:
      "Take advantage of our best-selling collections with exclusive offers.",
    button: "Shop Collection",
    image: "/slide-2.png",
  },
  {
    id: 3,
    title: "New Arrivals",
    description:
      "Explore our newest designs crafted with elegance and precision.",
    button: "Explore Now",
    image: "/slide-3.png",
  },
];

type SliderComponentProps = {
  value: number[];
  setValue: (val: number[]) => void;
};

const SliderComponent: React.FC<SliderComponentProps> = ({
  value,
  setValue,
}) => {
  // Helper to format currency without trailing .00
  const formatValue = (val: number) => {
    // Round to integer and add dollar sign
    return `$${Math.round(val)}`;
  };

  return (
    <div className="flex flex-col w-full h-full max-w-md items-start justify-center px-4 py-2 bg-white">
      <div className="text-black font-medium mb-6 flex flex-row gap-11">
        <div>Price Range</div>

        <div className="text-[#1F2A37] font-normal">
          {`${formatValue(value[0])} – ${formatValue(value[1])}`}
        </div>
      </div>

      <Slider
        className="max-w-md"
        formatOptions={{ style: "currency", currency: "USD" }} // optional, can remove since we format ourselves
        maxValue={1000}
        minValue={0}
        step={10}
        value={value}
        onChange={(val) => {
          if (Array.isArray(val)) setValue(val);
        }}
        classNames={{
          label: "mb-6", // 24px gap below label
          track: "bg-[#E5E7EB] h-1", // light grey track with 4px height
          filler: "bg-black", // black filled part
        }}
        renderThumb={(props) => (
          <div
            {...props}
            className="w-3 h-3 bg-black rounded-full border-none cursor-pointer transition-all duration-200 hover:scale-110 data-[dragging=true]:w-4 data-[dragging=true]:h-4 data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20 mt-[2px]"
          />
        )}
      />
    </div>
  );
};

export default function Page() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Header />
      {/* <img src="watchLanding/banner-1.png" className="w-full" alt="Banner" /> */}

      <div className="max-w-7xl mx-auto text-center">
        <div className="relative w-full overflow-hidden rounded-3xl mt-[2.813rem] mb-[2.5rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[508px] w-full"
            >
              {/* Background Image */}
              <Image
                src={slides[index].image}
                alt={slides[index].title}
                fill
                className="object-cover rounded-3xl bg-transparent"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center px-10 md:px-20">
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-xl text-white"
                >
                  <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
                    {slides[index].title}
                  </h1>

                  <p className="mb-6 text-sm md:text-base text-white/90">
                    {slides[index].description}
                  </p>

                  <button className="rounded-full border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition">
                    {slides[index].button}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${i === index ? "bg-black" : "bg-black/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer showPoweredBy={true} />
    </div>
  );
}
