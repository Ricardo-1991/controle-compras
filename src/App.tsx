import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global";
import { ProductContext } from "./components/ProductContext/ProductContext";
import { ProductContextProvider } from "./components/ProductContext/ProductContext";
import { Header } from "./components/Header/index";
import { Main } from "./components/Main";
import { NewProductModal } from "./components/NewProductModal/NewProductModal";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function App() {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);

  function handleOpenNewProductModal() {
    setIsNewProductModalOpen(true);
  }

  function handleCloseNewProductModal() {
    setIsNewProductModalOpen(false);
  }

  return (
    <ProductContextProvider>
      <Header onOpenNewProductModal={handleOpenNewProductModal} />
      <Main />
      <GlobalStyle />
      <NewProductModal
        isOpen={isNewProductModalOpen}
        onRequestClose={handleCloseNewProductModal}
      />
      <ToastContainer autoClose={3000} />
    </ProductContextProvider>
  );
}
