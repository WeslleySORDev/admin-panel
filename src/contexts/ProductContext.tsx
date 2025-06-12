"use client";
import React, { createContext, useContext, useState } from "react";
import { Product } from "../types";
import { DEFAULT_PRODUCTS } from "../constants";

interface ProductContextType {
  products: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [products, setProduct] = useState<Product[]>(DEFAULT_PRODUCTS);

  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProduct must be used within a ProductProvider");
  return context;
};
