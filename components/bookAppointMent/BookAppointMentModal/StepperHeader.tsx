"use client";

import React from "react";
import type { StepItem, StepKey } from "./types";

type StepperHeaderProps = {
  steps: StepItem[];
  current: StepKey;
  completed: Record<StepKey, boolean>;
  onStepClick?: (key: StepKey) => void;
};

const GOLD = "#C9A23A";
const GOLD_BORDER = "#B88A22";
const GREY_LINE = "rgba(0,0,0,0.10)";
const GREY_TEXT = "rgba(21,21,21,0.35)";

export default function StepperHeader({
  steps,
  current,
  completed,
  onStepClick,
}: StepperHeaderProps) {
  const currentIndex = steps.findIndex((s) => s.key === current);

  const canClick = (idx: number, key: StepKey) =>
    Boolean(onStepClick) && (completed[key] || idx <= currentIndex);

  const dotStyle = (idx: number, key: StepKey): React.CSSProperties => {
    const isActive = key === current;
    const isDone = completed[key];
    const isFilled = isActive || isDone;

    return {
      backgroundColor: isFilled ? GOLD : "#fff",
      borderColor: isFilled ? GOLD_BORDER : GREY_LINE,
      cursor: canClick(idx, key) ? "pointer" : "default",
    };
  };

  const labelStyle = (key: StepKey): React.CSSProperties => {
    const isActive = key === current;
    const isDone = completed[key];
    return { color: isActive || isDone ? "#151515" : GREY_TEXT };
  };

  const lineStyle = (fromIdx: number): React.CSSProperties => {
    // segment becomes gold only after passing that step
    const filled = fromIdx < currentIndex;
    return { backgroundColor: filled ? GOLD : GREY_LINE };
  };

  return (
    <div className="w-full bg-white">
      {/* Mobile: scrollable | Tablet/Laptop: normal */}
      <div className="w-full overflow-x-auto md:overflow-visible">
        <div className="min-w-max md:min-w-0">
          <div className="mx-auto w-[90%] px-14 pt-4">
            {/* TOP: dots + segmented lines (FLEX) */}
            <div className="flex items-start">
              {steps.map((s, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === steps.length - 1;

                return (
                  <React.Fragment key={s.key}>
                    {/* Step: dot + label */}
                    <div className="flex flex-col">
                      {/* dot */}
                      <button
                        type="button"
                        aria-label={`Go to ${s.label}`}
                        onClick={() =>
                          canClick(idx, s.key) && onStepClick?.(s.key)
                        }
                        className="relative z-10 self-center"
                        style={{
                          cursor: canClick(idx, s.key) ? "pointer" : "default",
                        }}
                      >
                        <span
                          className="block h-5 w-5 rounded-full border-2"
                          style={dotStyle(idx, s.key)}
                        />
                      </button>

                      {/* label */}
                      <div
                        className={[
                          "mt-2",
                          isFirst ? "text-left" : "",
                          !isFirst && !isLast ? "text-center" : "",
                          isLast ? "text-right" : "",
                        ].join(" ")}
                      >
                        <h3
                          className="whitespace-nowrap text-[15px] font-semibold leading-tight"
                          style={labelStyle(s.key)}
                        >
                          {s.label}
                        </h3>
                      </div>
                    </div>

                    {/* Line segment between steps */}
                    {!isLast ? (
                      <div className="flex-1 min-w-16 px-0 md:min-w-0">
                        {/* position line to align with dot center */}
                        <div
                          className="mt-2.5 h-0.5 w-full"
                          style={lineStyle(idx)}
                        />
                      </div>
                    ) : null}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Divider line under header */}
            <div className="mt-4 h-px w-full bg-black/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
