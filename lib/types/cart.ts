// types/cart.ts
export type CartCurrency = "USD";

export type CartLine = {
  id: string; // cartLineId
  productId: string;

  title: string;
  subtitle?: string; // e.g., "Yellow Gold"
  imageSrc: string;

  price: number; // per-unit
  currency?: CartCurrency;

  qty: number;

  // options
  size?: string; // e.g., "16 Cm"
  giftWrap?: boolean;
};
