import { Table } from "./styles";
import { MdCleanHands } from "react-icons/md";

interface Product {
  productName: string;
  productCategory: string;
  runningOutProduct: boolean;
  productAmount: number;
}

interface ProductProps {
  product: Product[];
}

export function CleaningProductTable({ product }: ProductProps) {
  return (
    <Table>
      <thead>
        <tr className="category-head">
          <th></th>
          <th>
            PRODUTOS DE LIMPEZA <br />{" "}
            <MdCleanHands size={35} color="#43C74C" />
          </th>
          <th></th>
        </tr>
        <tr>
          <th>PRODUTO</th>
          <th>QUANTIDADE</th>
          <th>ESTOQUE</th>
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
              </tr>
            )
        )}
      </tbody>
    </Table>
  );
}
