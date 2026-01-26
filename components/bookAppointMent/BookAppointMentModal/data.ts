import type { ServiceItem, StepItem } from "./types";

export const STEPS: StepItem[] = [
  { key: "location", label: "Location" },
  { key: "service", label: "Service" },
  { key: "datetime", label: "Date & Time" },
  { key: "confirm", label: "Confirm" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "engagement",
    title: "Engagement Ring",
    durationText: "50 minutes",
    description: "Find your ideal ring setting and center diamond or gemstone pairing.",
    imageUrl: "/assets/bookAppointment/appointMentCard-1.svg",
  },
  {
    id: "wedding",
    title: "Wedding Ring",
    durationText: "50 Minutes",
    description: "Our experts will help you and your partner select the perfect wedding bands.",
    imageUrl: "/assets/bookAppointment/appointMentCard-2.svg",
  },
  {
    id: "fine",
    title: "Fine Jewelry & Gifts",
    durationText: "50 Minutes",
    description:
      "Discover our assortment of necklaces, bracelets, earrings, and more, for gifting—or wearing.",
    imageUrl: "/assets/bookAppointment/appointMentCard-3.svg",
  },
];
