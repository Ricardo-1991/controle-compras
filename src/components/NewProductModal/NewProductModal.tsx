import React, { useState, FormEvent, useContext } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { ProductContext } from "../ProductContext/ProductContext";
import { Container, AddProductButton, IconButton } from "./styles";

interface NewProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewProductModal({
  isOpen,
  onRequestClose
}: NewProductModalProps) {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [runningOutProduct, setRunningOutProduct] = useState(false);
  const [productAmount, setProductAmount] = useState(1);

  const { setProductCategoryContext } = useContext(ProductContext);


  function handleProductIncrement(event: FormEvent) {
    event.preventDefault();
    setProductAmount(productAmount + 1);
  }

  function handleProductDecrement(event: FormEvent) {
    event.preventDefault();
    setProductAmount(productAmount - 1);
    if (productAmount <= 1) {
      setProductAmount(1);
    }
  }

  function handleOutProduct() {
    !runningOutProduct
      ? setRunningOutProduct(true)
      : setRunningOutProduct(false);
  }

  function handleCreateNewProduct(event: FormEvent) {
    event.preventDefault();

    const Product = {
      productName,
      productCategory,
      runningOutProduct,
      productAmount
    };

    setProductCategoryContext(productCategory);

    if (localStorage.getItem("product") === null) {
      localStorage.setItem("product", JSON.stringify([Product]));
    } else {
      const getProducts = JSON.parse(localStorage.getItem("product") || "");
      localStorage.setItem(
        "product",
        JSON.stringify([...getProducts, Product])
      );
    }

    setProductAmount(1);
    setProductCategory("");
    setProductName("");
    setRunningOutProduct(false);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Botão de Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewProduct}>
        <h2>Adicionar novo produto</h2>
        <label htmlFor="">Nome do produto</label>
        <input
          value={productName}
          type="text"
          placeholder="exemplo: macarrão..."
          onChange={event => setProductName(event.target.value)}
        />
        <label htmlFor="">Categoria</label>
        <select
          name=""
          id=""
          value={productCategory}
          onChange={event => setProductCategory(event.target.value)}
        >
          <option value="">Selecione uma opção</option>
          <option value="Higiene Pessoal">Higiene Pessoal</option>
          <option value="Limpeza">Limpeza</option>
          <option value="Alimentação">Alimentação</option>
        </select>
        <div>
          <label htmlFor="">Quantidade: </label>
          <IconButton className="icon-button" onClick={handleProductDecrement}>
            <MdRemoveCircleOutline size={20} />
          </IconButton>
          <input type="text" readOnly value={productAmount} />
          <IconButton className="icon-button" onClick={handleProductIncrement}>
            <MdAddCircleOutline size={20} />
          </IconButton>
        </div>
        <label htmlFor="">
          Produto esgotando?
          <input
            type="checkbox"
            checked={runningOutProduct}
            onChange={handleOutProduct}
          />
        </label>
        <AddProductButton>
          <button type="submit" className="send-button">
            Incluir Produto
          </button>
        </AddProductButton>
      </Container>
    </Modal>
  );
}
