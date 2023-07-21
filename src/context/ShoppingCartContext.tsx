import { createContext, useContext, ReactNode } from "react";

type ShoppinCartProviderProps = {
  children: ReactNode;
};
const ShoppinCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppinCartContext);
}

export function ShoppingCartProvider({ children }: ShoppinCartProviderProps) {
  return (
    <ShoppinCartContext.Provider value={{}}>
      {children}
    </ShoppinCartContext.Provider>
  );
}
