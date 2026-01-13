// store/cart.store.ts
"use client";

import { create } from "zustand";
import { CartLine } from "../types/cart";


type CartState = {
  lines: CartLine[];

  // summary fields (can come from API later)
  deliveryFee: number; // 0 = Free
  taxes: number;

  setLines: (lines: CartLine[]) => void;

  setQty: (lineId: string, qty: number) => void;
  incQty: (lineId: string) => void;
  decQty: (lineId: string) => void;

  setSize: (lineId: string, size: string) => void;
  toggleGiftWrap: (lineId: string) => void;

  removeLine: (lineId: string) => void;

  getSubtotal: () => number;
  getTotal: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  // demo seed (replace with API fetch)
  lines: [
    {
      id: "line_1",
      productId: "p_ring_1",
      title: "Lily Cluster Ring",
      subtitle: "Yellow Gold",
      imageSrc: "/productDemo/cartProduct1.png",
      price: 7350,
      currency: "USD",
      qty: 1,
      size: "16 Cm",
      giftWrap: false,
    },
    {
      id: "line_2",
      productId: "p_bracelet_1",
      title: "Lily Cluster Bracelet",
      subtitle: "Yellow Gold",
      imageSrc: "/productDemo/cartProduct2.png",
      price: 7350,
      currency: "USD",
      qty: 2,
      size: "16 Cm",
      giftWrap: false,
    },
        {
      id: "line_3",
      productId: "p_bracelet_1",
      title: "Lily Cluster Bracelet",
      subtitle: "Yellow Gold",
      imageSrc: "/productDemo/cartProduct3.png",
      price: 7350,
      currency: "USD",
      qty: 2,
      size: "16 Cm",
      giftWrap: false,
    },
        {
      id: "line_4",
      productId: "p_bracelet_1",
      title: "Lily Cluster Bracelet",
      subtitle: "Yellow Gold",
      imageSrc: "/productDemo/cartProduct4.png",
      price: 7350,
      currency: "USD",
      qty: 2,
      size: "16 Cm",
      giftWrap: false,
    },
        {
      id: "line_5",
      productId: "p_bracelet_1",
      title: "Lily Cluster Bracelet",
      subtitle: "Yellow Gold",
      imageSrc: "/productDemo/cartProduct5.png",
      price: 7350,
      currency: "USD",
      qty: 2,
      size: "16 Cm",
      giftWrap: false,
    },
        {
      id: "line_6",
      productId: "p_bracelet_1",
      title: "Lily Cluster Bracelet",
      subtitle: "Yellow Gold",
      imageSrc: "/productDemo/cartProduct6.png",
      price: 7350,
      currency: "USD",
      qty: 2,
      size: "16 Cm",
      giftWrap: false,
    },
        {
      id: "line_7",
      productId: "p_bracelet_1",
      title: "Lily Cluster Bracelet",
      subtitle: "Yellow Gold",
      imageSrc: "/productDemo/cartProduct7.png",
      price: 7350,
      currency: "USD",
      qty: 2,
      size: "16 Cm",
      giftWrap: false,
    },
        {
      id: "line_8",
      productId: "p_bracelet_1",
      title: "Lily Cluster Bracelet",
      subtitle: "Yellow Gold",
      imageSrc: "/productDemo/cartProduct8.png",
      price: 7350,
      currency: "USD",
      qty: 2,
      size: "16 Cm",
      giftWrap: false,
    },
        {
      id: "line_9",
      productId: "p_bracelet_1",
      title: "Lily Cluster Bracelet",
      subtitle: "Yellow Gold",
      imageSrc: "/productDemo/cartProduct9.png", 
      price: 7350,
      currency: "USD",
      qty: 2,
      size: "16 Cm",
      giftWrap: false,
    },
  ],

  deliveryFee: 0,
  taxes: 5,

  setLines: (lines) => set({ lines }),

  setQty: (lineId, qty) =>
    set((s) => ({
      lines: s.lines.map((l) =>
        l.id === lineId ? { ...l, qty: Math.max(1, qty) } : l
      ),
    })),

  incQty: (lineId) =>
    set((s) => ({
      lines: s.lines.map((l) => (l.id === lineId ? { ...l, qty: l.qty + 1 } : l)),
    })),

  decQty: (lineId) =>
    set((s) => ({
      lines: s.lines.map((l) =>
        l.id === lineId ? { ...l, qty: Math.max(1, l.qty - 1) } : l
      ),
    })),

  setSize: (lineId, size) =>
    set((s) => ({
      lines: s.lines.map((l) => (l.id === lineId ? { ...l, size } : l)),
    })),

  toggleGiftWrap: (lineId) =>
    set((s) => ({
      lines: s.lines.map((l) =>
        l.id === lineId ? { ...l, giftWrap: !l.giftWrap } : l
      ),
    })),

  removeLine: (lineId) =>
    set((s) => ({ lines: s.lines.filter((l) => l.id !== lineId) })),

  getSubtotal: () => {
    const { lines } = get();
    return lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  },

  getTotal: () => {
    const { deliveryFee, taxes } = get();
    return get().getSubtotal() + deliveryFee + taxes;
  },
}));
