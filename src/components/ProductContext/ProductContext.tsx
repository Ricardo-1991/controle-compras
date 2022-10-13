import { createContext, ReactNode, useState, useEffect } from "react";
import { toast } from "react-toastify";

interface Product {
  productName: string;
  productCategory: string;
  runningOutProduct: boolean;
  productAmount: number;
  id: string;
}

interface ChildrenProps {
  children: ReactNode;
}

interface ProductTypes {
  product: Product[];
  createLocalStorageData: (AllProducts: Product) => void;
  removeProduct: (productId: string) => void;
}

export const ProductContext = createContext({} as ProductTypes);

export function ProductContextProvider({ children }: ChildrenProps) {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    if (localStorage.getItem("product") === null) {
      return;
    } else {
      const newProduct = JSON.parse(localStorage.getItem("product") || "");
      setProduct(newProduct);
    }
  }, []);

  function createLocalStorageData(AllProducts: Product) {
    setProduct((prevValues) => [...prevValues, AllProducts]);
    if (localStorage.getItem("product") === null) {
      localStorage.setItem("product", JSON.stringify([AllProducts]));
    } else {
      const getProducts = JSON.parse(localStorage.getItem("product") || "");
      const newProduct = [...getProducts, AllProducts];
      localStorage.setItem("product", JSON.stringify(newProduct));
      setProduct(newProduct);
    }

    /* Caso o usuário tente cadastrar um produto com o mesmo nome já cadastrado no Array*/
    const updatedProduct = [...product];
    const productNameExists = updatedProduct.find(
      (product: Product) => product.productName === AllProducts.productName
    );
    if (productNameExists) {
      productNameExists.productAmount += AllProducts.productAmount;
      localStorage.setItem("product", JSON.stringify(updatedProduct));
      setProduct(updatedProduct);
      toast.success("Alterado o estoque do produto já cadastrado com sucesso");
    } else {
      toast.success("Producto adicionado com sucesso!");
    }
  }

  function removeProduct(productId: string) {
    const updatedProduct = [...product];
    const productIndexExist = updatedProduct.findIndex(
      (product) => product.id == productId
    );

    if (productIndexExist >= 0) {
      updatedProduct.splice(productIndexExist, 1);
      localStorage.setItem("product", JSON.stringify(updatedProduct));
      setProduct(updatedProduct);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        product,
        createLocalStorageData,
        removeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
