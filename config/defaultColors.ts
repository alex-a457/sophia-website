import { ColorSwatchOption } from "@/components/product-card/ProductColorSwatches";

export const DEFAULT_COLOR_OPTIONS: ColorSwatchOption[] = [
  {
    id: "gold",
    label: "Gold",
    gradientStops: [
      { color: "#D4A041", at: "0%" },
      { color: "#FBE67B", at: "28%" },
      { color: "#FCFBF7", at: "52%" },
      { color: "#F7D14E", at: "76%" },
      { color: "#D4A041", at: "100%" },
    ],
  },
  {
    id: "silver",
    label: "Silver",
    gradientStops: [
      { color: "#BFC2C7", at: "0%" },
      { color: "#F2F3F5", at: "35%" },
      { color: "#FFFFFF", at: "55%" },
      { color: "#D5D7DB", at: "78%" },
      { color: "#BFC2C7", at: "100%" },
    ],
  },
  {
    id: "rose",
    label: "Rose Gold",
    gradientStops: [
      { color: "#D8A7A4", at: "0%" },
      { color: "#F6D7D6", at: "35%" },
      { color: "#FFF7F7", at: "55%" },
      { color: "#E8B6B3", at: "78%" },
      { color: "#D8A7A4", at: "100%" },
    ],
  },
];
