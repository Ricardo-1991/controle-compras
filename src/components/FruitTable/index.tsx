import { useContext } from "react";
import { Table } from "./styles";
import { CategoryTitle } from "../Main/styles";
import { GiShinyApple } from "react-icons/gi";
import { AiOutlineDelete } from "react-icons/ai";
import { ProductContext } from "../ProductContext/ProductContext";

export function FruitTable() {
  const { removeProduct, product } = useContext(ProductContext);

  function handleDeleteRow(id: string) {
    removeProduct(id);
  }

  return (
    <>
      <CategoryTitle>
        <h3>
          FRUTAS <GiShinyApple size={35} color="#FF3333" />
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
              product.productCategory == "Frutas" && (
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
