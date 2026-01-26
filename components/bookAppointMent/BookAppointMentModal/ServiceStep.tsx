"use client";

import type { ServiceItem } from "./types";
import ServiceCard from "./ServiceCard";

type ServiceStepProps = {
  services: ServiceItem[];
  onPickServiceAndNext: (id: string) => void;
};

export default function ServiceStep({ services, onPickServiceAndNext }: ServiceStepProps) {
  return (
    <div className="mx-auto w-full max-w-[560px] pb-[36px] pt-[30px]">
      <div className="text-center text-[26px] font-semibold text-[#151515]">
       <h2>Select a service</h2> 
      </div>

      <div className="mt-[22px] space-y-[14px]">
        {services.map((s) => (
          <ServiceCard key={s.id} item={s} onPick={onPickServiceAndNext} />
        ))}
      </div>

      <div className="mt-[18px] text-center text-[13px] text-[#151515] underline">
        Switch to In-Person
      </div>
    </div>
  );
}
