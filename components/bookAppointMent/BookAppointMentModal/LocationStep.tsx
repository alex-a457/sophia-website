"use client";

import { PillInput } from "./BookAppointMentInput";

type LocationStepProps = {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
};

function SearchIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M21 21l-4.3-4.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function LocationStep({ value, onChange, onNext }: LocationStepProps) {
  return (
    <div className="mx-auto w-full max-w-[860px] pb-[36px] pt-[36px]">
      <div className="text-center text-[26px] font-semibold text-[#151515]">
        <h3>Select a location</h3>
      </div>

      <div className="mx-auto mt-[22px] w-full max-w-[860px]">
        <div className="relative">
          {/* icon inside input like screenshot */}
          <button
            type="button"
            aria-label="Search"
            onClick={onNext}
            className="absolute left-[22px] top-1/2 -translate-y-1/2 text-[rgba(21,21,21,0.45)]"
          >
            <SearchIcon size={18} />
          </button>

          <PillInput
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search City, State, or Zip Code"
            className="pl-[54px]"
          />
        </div>

        <div className="mt-[14px] text-[13px] text-[#151515]">
          We&apos;re sorry, there are no Lunara stores within 500 miles. Please try another search
          or book a <span className="underline">Virtual Appointment</span>.
        </div>
      </div>
    </div>
  );
}
