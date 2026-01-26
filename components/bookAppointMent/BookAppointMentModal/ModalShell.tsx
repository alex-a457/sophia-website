"use client";

import type { ReactNode } from "react";

type ModalShellProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function ModalShell({ open, onClose, children }: ModalShellProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      {/* backdrop */}
      <button
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* center */}
      <div className="relative z-[1000] flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-[1040px] rounded-[12px] bg-white shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
