import { useRef, SetStateAction } from "react";
import { Table } from "./styles";
import { CategoryTitle } from "../Main/styles";
import { GiSoap } from "react-icons/gi";
import { AiOutlineDelete } from "react-icons/ai";

interface Product {
  productName: string;
  productCategory: string;
  runningOutProduct: boolean;
  productAmount: number;
}

interface CatchFuncProps {
  catchRefs: () => void;
}

interface ProductProps {
  product: Product[];
  setProduct: React.Dispatch<SetStateAction<Product[]>>;
}

export function HygieneProductTable(
  { product, setProduct }: ProductProps,
  { catchRefs }: CatchFuncProps
) {
  const tableHygieneRef = useRef<HTMLTableElement>(null);

  function handleDeleteRow(id: number) {
    const getLocalStorage = JSON.parse(localStorage.getItem("product") || "");
    const productIndex = product.findIndex((product, index) => index == id);

    if (productIndex >= 0) {
      getLocalStorage.splice(productIndex, 1);
      localStorage.setItem("product", JSON.stringify(getLocalStorage));
      setProduct(getLocalStorage);
    }
  }

  // if (null !== tableHygieneRef.current) {
  //   tableHygieneRef.current.focus();
  // }

  return (
    <>
      <CategoryTitle>
        <h3>
          HIGIENE PESSOAL
          <GiSoap size={35} color="#4866AB" />{" "}
        </h3>
      </CategoryTitle>
      <Table ref={tableHygieneRef}>
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
