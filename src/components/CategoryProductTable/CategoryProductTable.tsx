import { Tbody } from "./styles";

interface ProductProps {
  productName: string;
  runningOutProduct: boolean;
  productAmount: number;
  productCategory: string;
}
export function CategoryProductTable({
  productName,
  runningOutProduct,
  productAmount,
  productCategory
}: ProductProps) {
  return (
    <Tbody>
      <tr>
        <th>{productName}</th>
        <th>{productAmount}</th>
        <th>{productCategory}</th>
        <th>{runningOutProduct == false ? "Completo" : "Esgotado"}</th>
      </tr>
    </Tbody>
  );
}
