import React, { useState, FormEvent } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container, AddProductButton, IconButton } from "./styles";

interface NewProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewProductModal({
  isOpen,
  onRequestClose
}: NewProductModalProps) {
  const [amountProduct, setAmountProduct] = useState(1);

  function handleProductIncrement() {
    setAmountProduct(amountProduct + 1);
  }

  function handleProductDecrement() {
    setAmountProduct(amountProduct - 1);
    if (amountProduct <= 1) {
      setAmountProduct(1);
    }
  }

  function handleCreateNewProduct(event: FormEvent) {
    event.preventDefault();
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
        <input type="text" placeholder="exemplo: macarrão..." />
        <label htmlFor="">Categoria</label>
        <select name="" id="">
          <option value="">Selecione uma opção</option>
          <option value="">Higiene Pessoal</option>
          <option value="">Limpeza</option>
          <option value="">Alimentação</option>
        </select>
        <div>
          <label htmlFor="">Quantidade: </label>
          <IconButton className="icon-button" onClick={handleProductDecrement}>
            <MdRemoveCircleOutline size={20} />
          </IconButton>
          <input type="text" readOnly value={amountProduct} />
          <IconButton className="icon-button" onClick={handleProductIncrement}>
            <MdAddCircleOutline size={20} />
          </IconButton>
        </div>
        <label htmlFor="">
          Produto esgotando?
          <input type="checkbox" />
        </label>
        <AddProductButton>
          <button className="send-button">Incluir Produto</button>
        </AddProductButton>
      </Container>
    </Modal>
  );
}
