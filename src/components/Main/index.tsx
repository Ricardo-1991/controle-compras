import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { NavBarCategory } from "../NavbarCategory";
import { Container } from "./styles";
import { HygieneProductTable } from "../HygieneProductTable";
import { FoodProductTable } from "../FoodProductTable";
import { CleaningProductTable } from "../CleaningProductTable";

interface Product {
  productName: string;
  productCategory: string;
  runningOutProduct: boolean;
  productAmount: number;
}

export function Main() {
  const [product, setProduct] = useState<Product[]>([]);

  const { productCategoryContext } = useContext(ProductContext);

  const updatedLocalStorage = localStorage.getItem("product");

  useEffect(() => {
    if (localStorage.getItem("product") == null) {
      return;
    } else {
      const newProduct = JSON.parse(localStorage.getItem("product") || "");
      setProduct(newProduct);
    }
  }, [updatedLocalStorage]);

  const isShowHygieneTable = product.find(
    product => product.productCategory == "Higiene Pessoal"
  );
  const isShowCleaningTable = product.find(
    product => product.productCategory == "Limpeza"
  );
  const isShowFoodTable = product.find(
    product => product.productCategory == "Alimentação"
  );

  function CatchRefs() {}

  return (
    <Container>
      <NavBarCategory />
      {isShowHygieneTable && (
        <HygieneProductTable product={product} catchRefs={CatchRefs} />
      )}

      {isShowFoodTable && <FoodProductTable product={product} />}

      {isShowCleaningTable && <CleaningProductTable product={product} />}
    </Container>
  );
}
