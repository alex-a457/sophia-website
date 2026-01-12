"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@heroui/react";


const Header: React.FC<any> = () => {
  const router = useRouter();

  const inputWrapperStyle = "border border-[#F0F0F0] focus-within:border-blue-500 rounded-md cursor-pointer";
  const [searchTerm, setSearchTerm] = useState("");

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200 text-[#1C1F25]">
      <div className="bg-[#151515] text-[0.875rem] text-white flex justify-center py-[0.75rem]">
        Exclusive Offer: Enjoy Complimentary Engraving and Worldwide Shipping on All Orders | Limited Time Only!
      </div>

      <div className="pt-[1.813rem] pb-[1rem]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-row justify-between items-center">
            {/* Search input */}
            <div>
              <div className="relative w-[15.938rem] max-w-sm">

                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  {searchTerm ? (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      aria-label="Clear search"
                    >
                      <IoClose size={18} />
                    </button>
                  ) : (
                    <img src="/search-icon.svg" />
                  )}
                </div>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border-b-2 border-[#cecece7a] pr-10 pl-[3rem] py-3 h-11 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <Image src="/logo.svg" alt="add-icon" width={171} height={34} />
            </div>

            <div className="flex flex-row items-center gap-[1.25rem]">
              <div className="text-[#151515] cursor-pointer" onClick={() => router.push("/cart")}>
                Cart (0)
              </div>

              <Button className="rounded flex items-center justify-center bg-[#F9FAFB] flex-1 border-1 border-[#151515] rounded-[2.5rem] bg-transparent px-[2rem] py-[0.5rem] text-[#151515]">
                Sign up
              </Button>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className="text-[#151515] gap-[1.25rem] flex flex-row pt-4">
              <div>
                Home
              </div>

              <div>
                Shop
              </div>

              <div>
                Collections
              </div>

              <div>
                Gems of the World
              </div>

              <div>
                Signature Collection
              </div>

              <div>
                Engagement Collections
              </div>

              <div>
                Blog
              </div>

              <div>
                About Us
              </div>

              <div>
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
