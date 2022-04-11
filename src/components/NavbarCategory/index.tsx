import { NavBar } from "./styles";
import { HygieneButton, FoodButton, CleaningButton } from "./styles";

export function NavBarCategory() {
  function handleScrollHygieneButton() {}

  function handleScrollFoodButton() {}

  function handleScrollCleaningButton() {}

  return (
    <NavBar>
      <HygieneButton onClick={handleScrollHygieneButton}>
        Higiene Pessoal
      </HygieneButton>
      <FoodButton onClick={handleScrollFoodButton}>
        Produtos Alimentícios
      </FoodButton>
      <CleaningButton onClick={handleScrollCleaningButton}>
        Produtos de Limpeza
      </CleaningButton>
    </NavBar>
  );
}
