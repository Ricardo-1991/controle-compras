import { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { NavBarCategory } from "../NavbarCategory";
import { Container } from "./styles";
import { HygieneProductTable } from "../HygieneProductTable";
import { NonPerishableFoodTable } from "../NonPerishableFoodTable";
import { CleaningProductTable } from "../CleaningProductTable";
import { HortiFrutiTable } from "../HortiFrutiTable";
import { FruitTable } from "../FruitTable";

export function Main() {
  const { productCategoryContext, product, setProduct } =
    useContext(ProductContext);

  const isShowHygieneTable = product.find(
    product => product.productCategory == "Higiene Pessoal"
  );
  const isShowCleaningTable = product.find(
    product => product.productCategory == "Limpeza"
  );
  const isShowNonPerishableFoodTable = product.find(
    product => product.productCategory == "Alimentos não perecíveis"
  );
  const isShowFruitTable = product.find(
    product => product.productCategory == "Frutas"
  );

  const isShowHortiFrutiTable = product.find(
    product => product.productCategory == "Hortifruti"
  );

  // function CatchRefs() {}

  return (
    <Container>
      {isShowHygieneTable && (
        <HygieneProductTable
          product={product}
          setProduct={setProduct}
          // catchRefs={CatchRefs}
        />
      )}

      {isShowNonPerishableFoodTable && (
        <NonPerishableFoodTable product={product} setProduct={setProduct} />
      )}

      {isShowCleaningTable && (
        <CleaningProductTable product={product} setProduct={setProduct} />
      )}

      {isShowHortiFrutiTable && (
        <HortiFrutiTable product={product} setProduct={setProduct} />
      )}

      {isShowFruitTable && (
        <FruitTable product={product} setProduct={setProduct} />
      )}
    </Container>
  );
}
