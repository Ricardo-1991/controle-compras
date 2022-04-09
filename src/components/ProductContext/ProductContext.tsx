import React, { createContext, ReactNode, useState } from "react";

interface ChildrenProps {
  children: ReactNode;
}

interface ProductTypes {
  setProductCategoryContext: (arg: string) => void;
  productCategoryContext: string;
}

export const ProductContext = createContext({} as ProductTypes);


export function ProductContextProvider({ children }: ChildrenProps) {
  const [productCategoryContext, setProductCategoryContext] = useState("");
  
  // function CreateDataForm(ProductInput: ProductInput) {
  //   setProductCategory(ProductInput.productCategory);
  // }

  return (
    <ProductContext.Provider
      value={{ setProductCategoryContext, productCategoryContext }}
    >
      {children}
    </ProductContext.Provider>
  );
}
