import React from "react";
import Image from "next/image";
import Header from "./headerComponents/Header";
import { Button } from "@heroui/react";

type HeroBannerProps = {
  imageUrl:string,
  Overlay: React.ComponentType;
};

export default function HeroBanner({imageUrl, Overlay }: HeroBannerProps) {
  return (
    <div className="w-full">
      <section className="Hero-page relative h-screen w-full">
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        <Image
          src={imageUrl}
          alt="About Us"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />

        <Overlay />
      </section>
    </div>
  );
}
