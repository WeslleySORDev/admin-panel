"use client";
import React, { createContext, useContext, useState } from "react";
import { Product } from "../types";
import { DEFAULT_PRODUCTS } from "../constants";

interface ProductContextType {
  products: Product[];
  createProduct: (product: Product) => void;
  updateProduct: (id: string, product: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(DEFAULT_PRODUCTS);

  const createProduct = (product: Product) => {
    const newProduct: Product = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      stock: product.stock,
      status: product.status,
      image: product.image,
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id: string, product: Product) => {
    const index = products.findIndex((p) => p.id === id);
    let updatedProducts = [...products];
    if (index !== -1) {
      updatedProducts[index] = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        stock: product.stock,
        status: product.status,
        image: product.image,
      };
    }
    setProducts(updatedProducts);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        updateProduct,
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
