import { Tbody } from "./styles";

interface ProductProps {
  productName: string;
  runningOutProduct: boolean;
  productAmount: number;
}
export function CategoryProductTable({
  productName,
  runningOutProduct,
  productAmount
}: ProductProps) {
  return (
    <Tbody>
      <tr>
        <td>{productName}</td>
        <td>{productAmount}</td>
        <td>{runningOutProduct == false ? "Completo" : "Esgotando"}</td>
      </tr>
    </Tbody>
  );
}
