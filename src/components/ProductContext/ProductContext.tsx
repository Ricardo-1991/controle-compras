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
  setProductCategoryContext: (arg: string) => void;
  productCategoryContext: string;
  product: Product[];
  setProduct: Dispatch<SetStateAction<Product[]>>;
}

export const ProductContext = createContext({} as ProductTypes);

export function ProductContextProvider({ children }: ChildrenProps) {
  const [productCategoryContext, setProductCategoryContext] = useState("");

  const [product, setProduct] = useState<Product[]>([]);

  const updatedLocalStorage = localStorage.getItem("product");

  useEffect(() => {
    if (localStorage.getItem("product") == null) {
      return;
    } else {
      const newProduct = JSON.parse(localStorage.getItem("product") || "");
      setProduct(newProduct);
    }
  }, [updatedLocalStorage]);

  return (
    <ProductContext.Provider
      value={{
        setProductCategoryContext,
        productCategoryContext,
        product,
        setProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
