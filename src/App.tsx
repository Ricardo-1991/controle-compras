import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { StockFoodTable } from "./components/StockFoodTable/StockFoodTable";
import { NewProductModal } from "./components/NewProductModal/NewProductModal";
import Modal from "react-modal";

Modal.setAppElement("#root");
function App() {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);

  function handleOpenNewProductModal() {
    setIsNewProductModalOpen(true);
  }

  function handleCloseNewProductModal() {
    setIsNewProductModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewProductModal={handleOpenNewProductModal} />
      <StockFoodTable />
      <GlobalStyle />
      <NewProductModal
        isOpen={isNewProductModalOpen}
        onRequestClose={handleCloseNewProductModal}
      />
    </>
  );
}

export default App;
