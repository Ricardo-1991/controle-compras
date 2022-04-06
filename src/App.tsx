import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { ProductContext } from "./components/ProductContext/ProductContext";
import { ProductContextProvider } from "./components/ProductContext/ProductContext";
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
    <ProductContextProvider>
      <Header onOpenNewProductModal={handleOpenNewProductModal} />
      <StockFoodTable />
      <GlobalStyle />
      <NewProductModal
        isOpen={isNewProductModalOpen}
        onRequestClose={handleCloseNewProductModal}
      />
    </ProductContextProvider>
  );
}

export default App;
