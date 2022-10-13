import { Table } from "./styles";
import { CategoryTitle } from "../Main/styles";
import { MdCleanHands } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { ProductContext } from "../ProductContext/ProductContext";
import { useContext } from "react";

export function CleaningProductTable() {
  const { removeProduct, product } = useContext(ProductContext);
  function handleDeleteRow(id: string) {
    removeProduct(id);
  }

  return (
    <>
      <CategoryTitle>
        <h3>
          PRODUTOS DE LIMPEZA <MdCleanHands size={35} color="#43C74C" />
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
              product.productCategory == "Limpeza" && (
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
