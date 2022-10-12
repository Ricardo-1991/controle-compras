import { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { Container } from "./styles";
import { HygieneProductTable } from "../HygieneProductTable";
import { NonPerishableFoodTable } from "../NonPerishableFoodTable";
import { CleaningProductTable } from "../CleaningProductTable";
import { HortiFrutiTable } from "../HortiFrutiTable";
import { FruitTable } from "../FruitTable";

export function Main() {
  const { product } = useContext(ProductContext);

  const isShowHygieneTable = product.find(
    (product) => product.productCategory === "Higiene Pessoal"
  );

  const isShowCleaningTable = product.find(
    (product) => product.productCategory === "Limpeza"
  );
  const isShowNonPerishableFoodTable = product.find(
    (product) => product.productCategory === "Alimentos não perecíveis"
  );
  const isShowFruitTable = product.find(
    (product) => product.productCategory === "Frutas"
  );

  const isShowHortiFrutiTable = product.find(
    (product) => product.productCategory === "Hortifruti"
  );

  return (
    <Container>
      {isShowHygieneTable && <HygieneProductTable />}

      {isShowNonPerishableFoodTable && <NonPerishableFoodTable />}

      {isShowCleaningTable && <CleaningProductTable />}

      {isShowHortiFrutiTable && <HortiFrutiTable />}

      {isShowFruitTable && <FruitTable />}
    </Container>
  );
}
