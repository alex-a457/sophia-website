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
import "@/styles/globals.css";

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

  const [products, setProducts] = useState([
    {
      id: 1,
      product_type: 'Ring',
      tag: '25% Leaving Season',
      product_name: 'Lily Rubby Diamond',
      original_price: '8,122',
      final_price: '8,122',
      currency: '$',
      product_img: '/product-1.png',
      isLiked: false
    },
    {
      id: 2,
      product_type: 'Ring',
      tag: '50% Christmas Sale',
      product_name: 'Nappy Diamond Rose Blue',
      original_price: '32,122',
      final_price: '19,213',
      currency: '$',
      product_img: '/product-2.png',
      isLiked: false
    },
    {
      id: 3,
      product_type: 'Ring',
      tag: '',
      product_name: 'Diamond Mockin Bird',
      original_price: '',
      final_price: '40,213',
      currency: '$',
      product_img: '/product-3.png',
      isLiked: true
    },
    {
      id: 4,
      product_type: 'Ring',
      tag: '',
      product_name: 'Crion Wedding Diamond',
      original_price: '',
      final_price: '39,712',
      currency: '$',
      product_img: '/product-4.png',
      isLiked: false
    }
  ]);

  const toggleLike = (id: any) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, isLiked: !product.isLiked }
          : product
      )
    );
  };

  const [latestCreations, setLatestCreations] = useState([
    {
      id: 1,
      product_type: 'Bracelet',
      product_name: 'Lily Cluster Yellow Gold',
      product_price: '8,122',
      currency: '$',
      product_img: '/latest-creation-1.png',
      isLiked: false
    },
    {
      id: 2,
      product_type: 'Earrings',
      product_name: 'HW Logo Yellow Gold',
      product_price: '7,984',
      currency: '$',
      product_img: '/latest-creation-2.png',
      isLiked: false
    },
    {
      id: 3,
      product_type: 'Earrings',
      product_name: 'Lily Cluster Yellow Gold',
      product_price: '6,821',
      currency: '$',
      product_img: '/latest-creation-3.png',
      isLiked: false
    },
    {
      id: 4,
      product_type: 'Ring',
      product_name: 'Lily Cluster Yellow Gold',
      product_price: '6,972',
      currency: '$',
      product_img: '/latest-creation-4.png',
      isLiked: true
    },
    {
      id: 5,
      product_type: 'Earrings',
      product_name: 'Winston Candy Spessartite',
      product_price: '4,543',
      currency: '$',
      product_img: '/latest-creation-5.png',
      isLiked: false
    },
    {
      id: 6,
      product_type: 'Bracelet',
      product_name: 'Forget-Me-Not Ruby',
      product_price: '7,231',
      currency: '$',
      product_img: '/latest-creation-7.png',
      isLiked: false
    },
  ]);

  const latestCreationToggleLike = (id: any) => {
    setLatestCreations(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, isLiked: !product.isLiked }
          : product
      )
    );
  };

  const perfectMatch = [
    {
      name: 'Earrings',
      image: '/image-4.png'
    },
    {
      name: 'Necklaces',
      image: '/image-3.png'
    },
    {
      name: 'Bracelets',
      image: '/image-2.png'
    },
    {
      name: 'Rings',
      image: '/image-1.png'
    }
  ]

  return (
    <div>
      <Header />
      {/* <img src="watchLanding/banner-1.png" className="w-full" alt="Banner" /> */}

      {/* 1. Banner section*/}
      <div className="max-w-7xl mx-auto text-center mt-[2.813rem] mb-[2.5rem] lg:px-[10px] px-[5px]">
        <div className="relative w-full overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[508px] lg:h-[400px] xs:h-[320px] w-full rounded-3xl"
              style={{
                backgroundImage: `url(${slides[index].image})`,
                backgroundSize: "cover",       // 🔥 zoom + fit
                backgroundPosition: "center",  // center maintain
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center px-10 md:px-8 sm:5">
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-xl text-white text-left"
                >
                  <h1 className="mb-4 text-4xl font-semibold md:text-5xl lg:text-3xl">
                    {slides[index].title}
                  </h1>

                  <p className="mb-6 text-sm md:text-base text-white/90 lg:text-[16px] sm:text-[14px]">
                    {slides[index].description}
                  </p>

                  <button className="rounded-full border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition backdrop-blur-sm cursor-pointer lg:text-[14px] sm:text-[12px]">
                    {slides[index].button}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex flex-row gap-[0.75rem] justify-center mt-[2.5rem]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-[0.875rem] w-[0.875rem] rounded-[0.25rem] cursor-pointer transition ${i === index ? "bg-black" : "bg-black/30"
                }`}
            />
          ))}
        </div>
      </div>

      {/* 2. Timeless eligance, most loved */}
      <div className="max-w-7xl mx-auto text-center mb-[6.313rem] md:mb-[3.1rem]">
        <div className="text-center mb-[5rem]">
          <h1 className="text-[3rem] font-semibold text-[#121212] mb-[1rem] lg:text-[2.5rem]">
            Timeless Elegance, Most Loved
          </h1>

          <div className="text-[#AEAEAE]">
            Discover our most sought-after jewelry, celebrated for unmatched beauty and craftsmanship.
          </div>
        </div>

        {/* Product list */}
        <div className="grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:!grid-cols-1 justify-items-center gap-x-5 gap-y-14 md:gap-y-2 text-left mb-[2rem] px-[5px]">
          {products.map((product: any) => (
            <div key={product.id} className="max-w-[21.25rem] mx-auto">
              <div>
                <div className="relative">
                  <Image
                    src={product.product_img}
                    alt={product.product_name}
                    height={305}
                    width={300}
                    className="object-cover rounded-3xl bg-transparent"

                  />

                  <div role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleLike(product.id); } }} className="absolute top-[0.75rem] right-[0.75rem] rounded-full border-1 border-[#AEAEAE] p-[0.75rem] cursor-pointer" onClick={() => toggleLike(product.id)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={product.isLiked ? "#E0245E" : "None"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                        stroke={product.isLiked ? "#E0245E" : "#AEAEAE"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-row justify-between text-[0.875rem]">
                  <div className="text-[#AEAEAE]">
                    {product.product_type}
                  </div>

                  <div className="text-[#EA4335]">
                    {product.tag}
                  </div>
                </div>

                <h2 className="text-[1.5rem] text-[#151515] font-semibold max-w-[18.5rem] truncate">
                  {product.product_name}
                </h2>

                <div className="font-semibold flex flex-row gap-[0.75rem]">
                  {product.original_price && (
                    <div className="line-through">
                      {product.currency}{product.original_price}
                    </div>
                  )}

                  <div className="text-[#EA4335]">
                    {product.currency}{product.final_price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Button className="text-[#121212] border-1 border-[#121212] p-[0.75rem] rounded-[2.5rem] bg-transparent">
            See all best seller
          </Button>
        </div>
      </div>

      {/* 3. Watch ur live stream */}
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-[6.25rem] md:mb-[3rem]">
        <div className="relative mb-[1.5rem] px-[5px]"> {/* height must */}
          <Image
            src="/upscale-image.png"
            alt="Banner"
            width={1200}
            height={675}
            className="rounded-[0.75rem] w-full h-auto"
          />
        </div>

        <Button className="bg-[#0F71CD] rounded-[0.75rem] flex flex-row gap-[0.5rem] py-[0.75rem] px-[1.2rem] mb-[27px]">
          <Image
            src="/image_facebook.svg"
            alt="Facebook"
            width={15}
            height={26}
          />

          <div className="text-white font-medium">
            Join Our Group
          </div>
        </Button>
      </div>

      {/* 4. Latest creations */}
      <div className="max-w-7xl mx-auto text-center mb-[6.313rem]">
        <div className="flex flex-col items-center mb-[3.375rem]">
          <h1 className="text-[3rem] text-[#151515] font-medium mb-[1.5rem] lg:text-[2.5rem]">
            Our latest creations
          </h1>

          <div className="text-[1.125rem] text-[#AEAEAE] max-w-[59.688rem] text-center md:text-[1rem]">
            Our collections are designed for those who seek perfection in every detail. From radiant diamond rings to breathtaking necklaces, each piece is crafted using the finest materials and techniques.
          </div>
        </div>

        {/* Product list */}
        <div className="grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:!grid-cols-1 justify-items-center gap-x-[1.25rem] gap-y-14 md:gap-y-2 text-left mb-[2rem]">
          {latestCreations.map((product: any) => (
            <div key={product.id}>
              <div>
                <div className="relative group">
                  {/* Initial image (default show) */}
                  <Image
                    src={product.product_img}
                    alt={product.product_name}
                    height={305}
                    width={300}
                    className="object-cover rounded-3xl bg-transparent transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {/* Hover image + icons */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative">
                      <Image
                        src="/latest-creation-hover.png"
                        alt="latest-creation"
                        height={305}
                        width={300}
                        className="object-cover rounded-3xl bg-transparent"
                      />

                      {/* Center icons */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-row gap-[0.5rem]">
                          <div className="rounded-full border border-[#AEAEAE] p-[0.75rem] backdrop-blur-md cursor-pointer">
                            <Image src="/cart.svg" alt="cart" height={19} width={20} />
                          </div>

                          <div className="rounded-full border border-[#AEAEAE] p-[0.75rem] backdrop-blur-md cursor-pointer">
                            <Image src="/Search.svg" alt="search" height={19} width={19} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Like icon (always visible) */}
                  <div
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); latestCreationToggleLike(product.id); } }}
                    className="absolute top-[0.75rem] right-[0.75rem] rounded-full border border-[#AEAEAE] p-[0.75rem] cursor-pointer z-10 backdrop-blur-md"
                    onClick={() => latestCreationToggleLike(product.id)}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={product.isLiked ? "#E0245E" : "none"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                        stroke={product.isLiked ? "#E0245E" : "#AEAEAE"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-row justify-between text-[0.875rem]">
                  <div className="text-[#AEAEAE]">
                    {product.product_type}
                  </div>

                  <div className="text-[#EA4335]">
                    {product.tag}
                  </div>
                </div>

                <h2 className="text-[1.5rem] text-[#151515] font-semibold">
                  {product.product_name}
                </h2>

                <div className="font-semibold flex flex-row gap-[0.75rem]">
                  <div className="text-[#151515] font-semibold text-[1.125rem]">
                    {product.currency}{product.product_price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Button className="text-[#121212] border-1 border-[#121212] p-[0.75rem] rounded-[2.5rem] bg-transparent">
            See all best Product
          </Button>
        </div>
      </div>

      {/* 5. Explore our history */}
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-[6.25rem] md:mb-[3rem] px-[5px]">
        <div className="relative w-full h-[32.625rem] mb-[1.5rem] rounded-[0.75rem]"> {/* height must */}
          <Image
            src="/upscale-image-2.png"
            alt="Banner"
            fill
            className="object-cover rounded-[0.75rem]"
            priority
          />

          <div className="absolute text-white inset-0 flex flex-col items-center justify-center bg-[#00000052] rounded-[0.75rem]">
            <div className="mb-[0.75rem] md:text-[12px]">
              About Lunara
            </div>

            <h2 className="max-w-[59.688rem] text-center mb-[1.5rem] text-[3rem] font-medium md:text-[1.5rem]">
              We believe that jewelry is more than just an accessory it’s a reflection of individuality, emotion, and heritage.
            </h2>

            <div>
              <Button className="text-white border-1 border-white p-[0.75rem] rounded-[2.5rem] backdrop-blur-sm bg-transparent">
                Explore Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Discover your perfect match */}
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-[6.25rem] md:mb-[3rem] px-[5px] text-center">
        <h1 className="text-[3rem] text-[#151515] font-medium mb-[1.5rem]">
          Discover Your Perfect Match
        </h1>

        <div className="text-[#AEAEAE] mb-[5rem]">
          Explore our curated collections designed to suit every style and occasion.
        </div>

        <div className="grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:!grid-cols-1 justify-items-center gap-[1.25rem]">
          {perfectMatch.map((item: any) => (
            <div key={item.name}>
              <div className="h-[21.25rem] w-[19.063rem] relative mb-[1.5rem]">
                <Image
                  src={item.image}
                  alt="latest-creation"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>

              <h3 className="text-[1.75rem] text-[#151515] font-semibold text-center md:text-[1.4rem]">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>

      {/* 7. Celebrate the Season with Tanzanite Gems */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-[6.25rem] md:mb-[3rem] px-[5px]">
        <div className="relative w-full h-[32.625rem] mb-[1.5rem]"> {/* height must */}
          <Image
            src="/celebrate-the-season.png"
            alt="Banner"
            fill
            className="object-cover rounded-[0.75rem]"
            priority
          />

          <div className="absolute text-white w-full flex flex-col items-center justify-center bg-[#00000052] mt-[7rem] px-[20px]">
            <h2 className="mb-[1.25rem] text-[3rem] font-medium md:text-[2rem]">
              Celebrate the Season with Tanzanite Gems
            </h2>

            <div className="max-w-[59.688rem] text-center mb-[1.5rem]">
              This festive season, we invite you to indulge in the magic of the holidays with our limited-edition Tanzanite Collection. Each piece has been carefully crafted to bring warmth, joy, and a touch of sparkle to your celebrations.
            </div>

            <div>
              <Button className="text-white border-1 border-white p-[0.75rem] rounded-[2.5rem] backdrop-blur-sm bg-transparent">
                See Collection
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
