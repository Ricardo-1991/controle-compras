import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  SetStateAction,
  Dispatch
} from "react";

interface Product {
  productName: string;
  productCategory: string;
  runningOutProduct: boolean;
  productAmount: number;
}

interface ChildrenProps {
  children: ReactNode;
}

interface ProductTypes {
  product: Product[];
  setProduct: Dispatch<SetStateAction<Product[]>>;
}

export const ProductContext = createContext({} as ProductTypes);

export function ProductContextProvider({ children }: ChildrenProps) {
  const [product, setProduct] = useState<Product[]>([]);

  const updatedLocalStorage = localStorage.getItem("product");

  useEffect(() => {
    if (localStorage.getItem("product") === null) {
      return;
    } else {
      const newProduct = JSON.parse(localStorage.getItem("product") || "");
      setProduct(newProduct);
    }
  }, [updatedLocalStorage]);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
