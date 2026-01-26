"use client";

import { useCallback, useMemo, useState } from "react";
import ModalShell from "./ModalShell";
import StepperHeader from "./StepperHeader";
import LocationStep from "./LocationStep";
import ServiceStep from "./ServiceStep";
import ConfirmStep from "./ConfirmStep";

import { SERVICES, STEPS } from "./data";
import type { AppointmentDraft, StepKey } from "./types";
import DateTimeStep from "./dateTimeStep";

type BookAppointmentModalProps = {
  open: boolean;
  onClose: () => void;
};

const initialDraft: AppointmentDraft = {
  locationQuery: "",
  selectedServiceId: null,
  dateISO: null,
  timeLabel: null,

  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  smsOptIn: false,
};

export default function BookAppointmentModal({ open, onClose }: BookAppointmentModalProps) {
  const [step, setStep] = useState<StepKey>("location");
  const [draft, setDraft] = useState<AppointmentDraft>(initialDraft);

  const completed = useMemo(() => {
    return {
      location: draft.locationQuery.trim().length > 0,
      service: Boolean(draft.selectedServiceId),
      datetime: Boolean(draft.dateISO && draft.timeLabel),
      confirm: false,
    } satisfies Record<StepKey, boolean>;
  }, [draft]);

  const selectedService = useMemo(() => {
    return SERVICES.find((s) => s.id === draft.selectedServiceId) ?? null;
  }, [draft.selectedServiceId]);

  const goNext = useCallback(() => {
    setStep((prev) => {
      if (prev === "location") return "service";
      if (prev === "service") return "datetime";
      if (prev === "datetime") return "confirm";
      return prev;
    });
  }, []);

  const onSubmit = () => {
    // TODO: API call later
    onClose();
    setStep("location");
    setDraft(initialDraft);
  };

  return (
    <ModalShell open={open} onClose={onClose}>
      <div className="pb-[26px]">
        <StepperHeader
          steps={STEPS}
          current={step}
          completed={completed}
          onStepClick={(k) => setStep(k)}
        />

        <div className="px-6">
          {step === "location" ? (
            <LocationStep
              value={draft.locationQuery}
              onChange={(v) => setDraft((p) => ({ ...p, locationQuery: v }))}
              onNext={goNext} // click search icon => next
            />
          ) : null}

          {step === "service" ? (
            <ServiceStep
              services={SERVICES}
              onPickServiceAndNext={(id) => {
                setDraft((p) => ({ ...p, selectedServiceId: id }));
                goNext(); // click card => next
              }}
            />
          ) : null}

          {step === "datetime" ? (
            <DateTimeStep
              dateISO={draft.dateISO}
              timeLabel={draft.timeLabel}
              onPickDate={(iso) => setDraft((p) => ({ ...p, dateISO: iso }))}
              onPickTime={(t) => setDraft((p) => ({ ...p, timeLabel: t }))}
              onNext={goNext} // auto next when both selected
            />
          ) : null}

          {step === "confirm" ? (
            <ConfirmStep
              locationLabel="Virtual Appointment"
              service={selectedService}
              dateTimeLabel={
                draft.dateISO && draft.timeLabel ? `${draft.dateISO} ${draft.timeLabel}` : "-"
              }
              values={{
                firstName: draft.firstName,
                lastName: draft.lastName,
                email: draft.email,
                phone: draft.phone,
                smsOptIn: draft.smsOptIn,
              }}
              onChange={(patch) => setDraft((p) => ({ ...p, ...patch }))}
              onSubmit={onSubmit} // book appointment => close
            />
          ) : null}
        </div>
      </div>
    </ModalShell>
  );
}
