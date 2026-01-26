"use client";

import { AppButton } from "@/components/ui/AppButton";
import { PillInput } from "./BookAppointMentInput";
import type { ServiceItem } from "./types";

type ConfirmStepProps = {
  locationLabel: string;
  service: ServiceItem | null;
  dateTimeLabel: string;

  values: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    smsOptIn: boolean;
  };

  onChange: (patch: Partial<ConfirmStepProps["values"]>) => void;
  onSubmit: () => void;
};

export default function ConfirmStep({
  locationLabel,
  service,
  dateTimeLabel,
  values,
  onChange,
  onSubmit,
}: ConfirmStepProps) {
  return (
    <div className="mx-auto w-full max-w-[900px] pb-[38px] pt-[28px]">
      <div className="text-center text-[26px] font-semibold text-[#151515]">
        <h2>Confirm Details</h2>
      </div>

      {/*  Mobile + Tablet: Summary ABOVE | ✅ Desktop(lg+): Summary RIGHT */}
      <div className="mt-[26px] grid grid-cols-1 gap-[28px] lg:grid-cols-2">
        {/*  RIGHT SUMMARY (but shows first on mobile/tablet) */}
        <div className="order-1 h-fit rounded-[12px] border border-[rgba(21,21,21,0.25)] p-[18px] lg:order-2">
          <div className="space-y-[14px]">
            <div>
              <div className="text-[14px] font-semibold text-[#151515]">
                <h4>Location</h4>
              </div>
              <div className="text-[12px] text-[rgba(21,21,21,0.45)]">{locationLabel}</div>
            </div>

            <div>
              <div className="text-[14px] font-semibold text-[#151515]">
                <h4>Service</h4>
              </div>
              <div className="text-[12px] text-[rgba(21,21,21,0.45)]">
                {service?.title ?? "-"}
              </div>
            </div>

            <div>
              <div className="text-[14px] font-semibold text-[#151515]">
                <h4>Date &amp; Time</h4>
              </div>
              <div className="text-[12px] text-[rgba(21,21,21,0.45)]">{dateTimeLabel}</div>
            </div>
          </div>
        </div>

        {/*  LEFT FORM (but shows second on mobile/tablet) */}
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
            <PillInput
              label="First Name"
              placeholder="Enter your first name"
              value={values.firstName}
              onChange={(e) => onChange({ firstName: e.target.value })}
            />
            <PillInput
              label="Last Name"
              placeholder="Enter your last name"
              value={values.lastName}
              onChange={(e) => onChange({ lastName: e.target.value })}
            />
          </div>

          <div className="mt-[14px]">
            <PillInput
              label="Email"
              placeholder="Enter your email"
              value={values.email}
              onChange={(e) => onChange({ email: e.target.value })}
            />
          </div>

          {/* phone row like screenshot */}
          <div className="mt-[14px]">
            <div className="mb-2 text-[12px] font-semibold text-[#151515]">Number Phone</div>
            <div className="flex h-[44px] w-full items-center gap-2 rounded-full border border-[rgba(21,21,21,0.25)] px-4">
              <div className="flex items-center gap-2 text-[12px] text-[rgba(21,21,21,0.55)]">
                <span>US</span>
                <span className="text-[10px]">▼</span>
              </div>
              <div className="h-[18px] w-[1px] bg-[rgba(21,21,21,0.18)]" />
              <input
                value={values.phone}
                onChange={(e) => onChange({ phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="h-full w-full bg-transparent text-[13px] outline-none placeholder:text-[rgba(21,21,21,0.35)]"
              />
            </div>
          </div>

          <div className="mt-[14px] flex items-start gap-3">
            <input
              type="checkbox"
              checked={values.smsOptIn}
              onChange={(e) => onChange({ smsOptIn: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border border-[rgba(21,21,21,0.25)]"
            />
            <div className="text-[11px] leading-[1.5] text-[rgba(21,21,21,0.40)]">
              Text me appointment alerts. Message and data rates may apply.
              <br />
              *By checking this box, you consent to periodic updates (incl. automated) about your
              appointment, order, and experience (incl. surveys). Consent not a condition of
              purchase.
            </div>
          </div>

          <div className="mt-[16px] text-[10px] text-[rgba(21,21,21,0.40)]">
            By clicking Book Appointment, you agree to our{" "}
            <span className="underline">Privacy Policy</span> and{" "}
            <span className="underline">Terms and Conditions</span>.
          </div>

          <div className="mt-[18px]">
            {/*  Full width on mobile/tablet, capped only on lg+ */}
            <AppButton
              type="button"
              onClick={onSubmit}
              className="h-[46px] w-full rounded-full bg-[#151515] text-[14px] text-white lg:max-w-[420px]"
            >
              Book Appointment
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
