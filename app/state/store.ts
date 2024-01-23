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
        set((state: any) => {
          const findProduct = state.products.map(
            (productState: {
              name: string;
              priceId: string;
              quantity: number;
              size: string;
              url: string;
            }) => {
              if (productState.name === product.name) {
                return {
                  ...product,
                  quantity: product.quantity + productState.quantity,
                };
              }
              return productState;
            }
          );
          const existProduct = state.products.find(
            (findProduct: any) => findProduct.name === product.name
          );
          if (existProduct) {
            return {
              products: [...findProduct],
            };
          }
          return {
            products: [...state.products, { ...product }],
          };
        }),
      //   decrement: () => set((state) => ({ counter: state.counter - 1 })),
    }),
    { name: "cart-storage" }
  )
);
export default useStore;
