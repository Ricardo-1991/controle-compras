import { Table } from "./styles";
import { CategoryTitle } from "../Main/styles";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCarrot } from "react-icons/fa";
import { ProductContext } from "../ProductContext/ProductContext";
import { useContext } from "react";

export function HortiFrutiTable() {
  const { removeProduct, product } = useContext(ProductContext);

  function handleDeleteRow(id: string) {
    removeProduct(id);
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
            (product) =>
              product.productCategory == "Hortifruti" && (
                <tr key={product.id}>
                  <td>{product.productName}</td>
                  <td>{product.productAmount}</td>
                  <td>
                    {product.runningOutProduct == false
                      ? "Completo"
                      : "Esgotado"}
                  </td>
                  <td>
                    <AiOutlineDelete
                      onClick={() => handleDeleteRow(product.id)}
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
