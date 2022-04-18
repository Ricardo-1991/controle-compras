import { SetStateAction } from "react";
import { Table } from "./styles";
import { CategoryTitle } from "../Main/styles";

import { GiShinyApple } from "react-icons/gi";
import { AiOutlineDelete } from "react-icons/ai";

interface Product {
  productName: string;
  productCategory: string;
  runningOutProduct: boolean;
  productAmount: number;
}

interface ProductProps {
  product: Product[];
  setProduct: React.Dispatch<SetStateAction<Product[]>>;
}

export function FoodProductTable({ product, setProduct }: ProductProps) {
  function handleDeleteRow(id: number) {
    const getLocalStorage = JSON.parse(localStorage.getItem("product") || "");
    const productIndex = product.findIndex((product, index) => index === id);

    if (productIndex >= 0) {
      getLocalStorage.splice(productIndex, 1);
      localStorage.setItem("product", JSON.stringify(getLocalStorage));
      setProduct(getLocalStorage);
    }
  }
  return (
    <>
      <CategoryTitle>
        <h3>
          PRODUTOS ALIMENTÍCIOS <GiShinyApple size={30} color="#FF3333" />
        </h3>
      </CategoryTitle>
      <Table>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>ESTOQUE</th>
            <th>EMBALAGEM</th>
            <th>DELETAR</th>
          </tr>
        </thead>
        <tbody>
          {product.map(
            (product, index) =>
              product.productCategory == "Alimentação" && (
                <tr key={index}>
                  <td>{product.productName}</td>
                  <td> {product.productAmount}</td>
                  <td>
                    {product.runningOutProduct == false
                      ? "Completa"
                      : "Esgotando"}
                  </td>
                  <td>
                    <AiOutlineDelete
                      onClick={() => handleDeleteRow(index)}
                      size={25}
                    />
                  </td>
                </tr>
              )
          )}
        </tbody>
      </Table>
    </>
  );
}
