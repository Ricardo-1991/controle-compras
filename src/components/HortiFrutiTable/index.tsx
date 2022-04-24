import { SetStateAction } from "react";
import { Table } from "./styles";
import { CategoryTitle } from "../Main/styles";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCarrot } from "react-icons/fa";

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

export function HortiFrutiTable({ product, setProduct }: ProductProps) {
  function handleDeleteRow(id: number) {
    const updatedProduct = [...product];
    const productIndex = updatedProduct.findIndex(
      (product, index) => index == id
    );

    if (productIndex >= 0) {
      updatedProduct.splice(productIndex, 1);
      localStorage.setItem("product", JSON.stringify(updatedProduct));
      setProduct(updatedProduct);
    }
  }

  return (
    <>
      <CategoryTitle>
        <h3>
          HORTIFRUTI <FaCarrot size={35} color="#ee8c55" />
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
              product.productCategory == "Hortifruti" && (
                <tr key={index}>
                  <td>{product.productName}</td>
                  <td>{product.productAmount}</td>
                  <td>
                    {product.runningOutProduct == false
                      ? "Completo"
                      : "Esgotado"}
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
