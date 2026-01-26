export type StepKey = "location" | "service" | "datetime" | "confirm";

export type StepItem = {
  key: StepKey;
  label: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  durationText: string;
  description: string;
  imageUrl: string;
};

export type AppointmentDraft = {
  locationQuery: string;
  selectedServiceId: string | null;
  dateISO: string | null;
  timeLabel: string | null;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  smsOptIn: boolean;
};
