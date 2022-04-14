import { SetStateAction } from "react";
import { Table } from "./styles";
import { MdCleanHands } from "react-icons/md";
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

export function CleaningProductTable({ product, setProduct }: ProductProps) {
  function handleDeleteRow(id: number) {
    const getLocalStorage = JSON.parse(localStorage.getItem("product") || "");
    const productIndex = product.findIndex((product, index) => index == id);

    if (productIndex >= 0) {
      getLocalStorage.splice(productIndex, 1);
      localStorage.setItem("product", JSON.stringify(getLocalStorage));
      setProduct(getLocalStorage);
    }
  }

  return (
    <Table>
      <thead>
        <tr className="category-head">
          <th>
            PRODUTOS DE LIMPEZA <br />{" "}
            <MdCleanHands size={35} color="#43C74C" />
          </th>
        </tr>
        <tr>
          <th>PRODUTO</th>
          <th>QUANTIDADE</th>
          <th>ESTOQUE</th>
          <th>DELETAR</th>
        </tr>
      </thead>
      <tbody>
        {product.map(
          (product, index) =>
            product.productCategory == "Limpeza" && (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.productAmount}</td>
                <td>
                  {product.runningOutProduct == false ? "Completo" : "Esgotado"}
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
  );
}
