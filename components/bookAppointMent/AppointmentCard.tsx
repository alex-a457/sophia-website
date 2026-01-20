import React from "react";
import Image from "next/image";

type BookAppointmentCardProps = {
  url: string;
  headerContent: string;
  textContent: string;
};

function BookAppointmentCard({ url, headerContent, textContent }: BookAppointmentCardProps) {
  return (
    <div className="w-[305px] h-[430px] bg-white">
      <div className="relative w-[305px] h-[300px] overflow-hidden rounded-[12px]">
        <Image
          src={url}
          alt={headerContent}
          fill
          className="object-cover"
          priority
          sizes="305px"
        />
      </div>

      <div className="w-[305px] h-[106px] pt-4">
        <h3 className=" font-semibold text-[24px] leading-[142%] tracking-[-0.02em] text-[#151515]">
          {headerContent}
        </h3>

        <p className="mt-2  font-normal text-[14px] leading-[142%] tracking-[0em] text-[#9B9B9B]">
          {textContent}
        </p>
      </div>
    </div>
  );
}

export default BookAppointmentCard;
