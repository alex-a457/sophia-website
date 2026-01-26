"use client";

type CalendarMockProps = {
  valueISO: string | null;
  onPick: (iso: string) => void;
};

export default function CalendarMock({ valueISO, onPick }: CalendarMockProps) {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <div className="w-full rounded-[14px] border border-[rgba(21,21,21,0.25)] p-4">
      <div className="mb-3 text-[14px] font-semibold text-[#151515]">Choose a date</div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((d) => {
          const iso = `2026-01-${String(d).padStart(2, "0")}`;
          const active = valueISO === iso;

          return (
            <button
              key={iso}
              type="button"
              onClick={() => onPick(iso)}
              className={[
                "h-9 rounded-md border text-[12px]",
                "border-[rgba(21,21,21,0.20)]",
                active ? "bg-[#151515] text-white" : "bg-white",
              ].join(" ")}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}
