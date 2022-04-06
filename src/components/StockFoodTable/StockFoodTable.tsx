import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
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

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>HIGIENE PESSOAL</th>
          </tr>
          <tr>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>ESTOQUE</th>
          </tr>
        </thead>

        {product.map((product, index) => (
          <>
            {product.productCategory == "Higiene Pessoal" && (
              <CategoryProductTable
                productName={product.productName}
                runningOutProduct={product.runningOutProduct}
                productAmount={product.productAmount}
                key={index}
              />
            )}
          </>
        ))}
      </table>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>PRODUTOS DE LIMPEZA</th>
          </tr>
          <tr>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>ESTOQUE</th>
          </tr>
        </thead>

        {product.map((product, index) => (
          <>
            {product.productCategory == "Limpeza" && (
              <CategoryProductTable
                productName={product.productName}
                runningOutProduct={product.runningOutProduct}
                productAmount={product.productAmount}
                key={index}
              />
            )}
          </>
        ))}
      </table>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>ALIMENTAÇÃO</th>
          </tr>
          <tr>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>ESTOQUE</th>
          </tr>
        </thead>

        {product.map((product, index) => (
          <>
            {product.productCategory == "Alimentação" && (
              <CategoryProductTable
                productName={product.productName}
                runningOutProduct={product.runningOutProduct}
                productAmount={product.productAmount}
                key={index}
              />
            )}
          </>
        ))}
      </table>
    </Container>
  );
}
