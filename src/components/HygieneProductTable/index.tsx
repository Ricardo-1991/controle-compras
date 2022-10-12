import { useContext } from "react";
import { Table } from "./styles";
import { CategoryTitle } from "../Main/styles";
import { GiSoap } from "react-icons/gi";
import { AiOutlineDelete } from "react-icons/ai";
import { ProductContext } from "../ProductContext/ProductContext";

export function HygieneProductTable() {
  const { removeProduct, product } = useContext(ProductContext);

  function handleDeleteRow(id: number) {
    removeProduct(id);
  }

  return (
    <>
      <CategoryTitle>
        <h3>
          HIGIENE PESSOAL
          <GiSoap size={35} color="#4866AB" />{" "}
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
              product.productCategory == "Higiene Pessoal" && (
                <tr key={index}>
                  <td>{product.productName}</td>
                  <td>{product.productAmount}</td>
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
