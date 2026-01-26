"use client";

import { useEffect } from "react";
import CalendarMock from "./calander";

type DateTimeStepProps = {
  dateISO: string | null;
  timeLabel: string | null;
  onPickDate: (iso: string) => void;
  onPickTime: (t: string) => void;
  onNext: () => void;
};

const TIMES = ["9:30 AM (PT)", "10:00 AM (PT)", "10:30 AM (PT)", "11:00 AM (PT)"];

export default function DateTimeStep({
  dateISO,
  timeLabel,
  onPickDate,
  onPickTime,
  onNext,
}: DateTimeStepProps) {
  // auto move next when both set
  useEffect(() => {
    if (dateISO && timeLabel) onNext();
  }, [dateISO, timeLabel, onNext]);

  return (
    <div className="mx-auto w-full max-w-[560px] pb-[36px] pt-[30px]">
      <div className="text-center text-[26px] font-semibold text-[#151515]">
       <h2>Date &amp; Time</h2> 
      </div>

      <div className="mt-[22px] space-y-[14px]">
        <CalendarMock valueISO={dateISO} onPick={onPickDate} />

        <div className="w-full rounded-[14px] border border-[rgba(21,21,21,0.25)] p-4">
          <div className="mb-3 text-[14px] font-semibold text-[#151515]">Choose a time</div>

          <div className="grid grid-cols-2 gap-2">
            {TIMES.map((t) => {
              const active = timeLabel === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => onPickTime(t)}
                  className={[
                    "h-10 rounded-md border text-[12px]",
                    "border-[rgba(21,21,21,0.20)]",
                    active ? "bg-[#151515] text-white" : "bg-white",
                  ].join(" ")}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* no Next button intentionally */}
      <div className="mt-[14px] text-center text-[12px] text-[rgba(21,21,21,0.45)]">
        Pick a date and time to continue.
      </div>
    </div>
  );
}
