import { Container } from "./styles";
import logo from "../../assets/cart_logo.png";

interface newProductModalProps {
  onOpenNewProductModal: () => void;
}

export function Header({ onOpenNewProductModal }: newProductModalProps) {
  return (
    <Container>
      <div>
        <img src={logo} alt="imagem do logo" />
      </div>
      <div>
        <button onClick={onOpenNewProductModal}>Adicionar novo produto</button>
      </div>
    </Container>
  );
}
