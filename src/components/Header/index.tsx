import { Container } from "./styles";
import logo from "../../assets/foodstock-novo.png";

interface newProductModalProps {
  onOpenNewProductModal: () => void;
}

export function Header({ onOpenNewProductModal }: newProductModalProps) {
  return (
    <Container>
      <img src={logo} alt="imagem do logo" />
      <button onClick={onOpenNewProductModal}>Adicionar novo produto</button>
    </Container>
  );
}
