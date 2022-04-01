import { useEffect, useState } from "react";
import { Container } from "./styles";
import { CategoryProductTable } from "../CategoryProductTable/CategoryProductTable";

interface Product {
  productName: string;
  productCategory: string;
  runningOutProduct: boolean;
  productAmount: number;
}

export function StockFoodTable() {
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
    <Container>
      <table>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>CATEGORIA</th>
            <th>STATUS ESTOQUE</th>
          </tr>
        </thead>

        {product.map((product, index) => (
          <>
            {product.productCategory == "Higiene Pessoal" && (
              <CategoryProductTable
                productName={product.productName}
                runningOutProduct={product.runningOutProduct}
                productAmount={product.productAmount}
                productCategory={product.productCategory}
                key={index}
              />
            )}
          </>
        ))}
      </table>

      <table>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>CATEGORIA</th>
            <th>STATUS ESTOQUE</th>
          </tr>
        </thead>

        {product.map((product, index) => (
          <>
            {product.productCategory == "Limpeza" && (
              <CategoryProductTable
                productName={product.productName}
                runningOutProduct={product.runningOutProduct}
                productAmount={product.productAmount}
                productCategory={product.productCategory}
                key={index}
              />
            )}
          </>
        ))}
      </table>

      <table>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>CATEGORIA</th>
            <th>STATUS ESTOQUE</th>
          </tr>
        </thead>

        {product.map((product, index) => (
          <>
            {product.productCategory == "Alimentação" && (
              <CategoryProductTable
                productName={product.productName}
                runningOutProduct={product.runningOutProduct}
                productAmount={product.productAmount}
                productCategory={product.productCategory}
                key={index}
              />
            )}
          </>
        ))}
      </table>
    </Container>
  );
}
