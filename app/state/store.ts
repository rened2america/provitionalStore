import { create } from "zustand";
import { persist } from "zustand/middleware";
const useStore = create(
  persist(
    (set) => ({
      products: [],
      addProduct: (product: {
        name: string;
        priceId: string;
        quantity: number;
        size: string;
        url: string;
      }) =>
        set((state: any) => ({
          products: [...state.products, { ...product }],
        })),
      //   decrement: () => set((state) => ({ counter: state.counter - 1 })),
    }),
    { name: "cart-storage" }
  )
);
export default useStore;
