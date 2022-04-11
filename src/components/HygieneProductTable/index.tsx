import { Table } from "./styles";
import { GiSoap } from "react-icons/gi";

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
}

export function HygieneProductTable(
  { product }: ProductProps,
  { catchRefs }: CatchFuncProps
) {
  return (
    <Table>
      <thead>
        <tr className="category-head">
          <th></th>
          <th>
            HIGIENE PESSOAL <br />
            <GiSoap size={35} color="#4866AB" />{" "}
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
            product.productCategory == "Higiene Pessoal" && (
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
