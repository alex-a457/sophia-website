"use client";

import type { InputHTMLAttributes } from "react";

type BaseProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function PillInput({ label, className = "", ...props }: BaseProps) {
  return (
    <div className="w-full">
      {label ? <div className="mb-2 text-[12px] font-semibold text-[#151515]">{label}</div> : null}

      <input
        {...props}
        className={[
          "h-[44px] w-full rounded-full border px-5 text-[13px] outline-none",
          "border-[rgba(21,21,21,0.25)] placeholder:text-[rgba(21,21,21,0.35)]",
          className,
        ].join(" ")}
      />
    </div>
  );
}
