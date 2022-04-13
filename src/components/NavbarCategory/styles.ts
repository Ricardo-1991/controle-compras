import styled from "styled-components";

export const NavBar = styled.nav`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    height: 3rem;

    backdrop-filter: blur(3px) saturate(58%);
    -webkit-backdrop-filter: blur(3px) saturate(58%);
    background-color: rgba(231, 239, 231, 0.66);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);

    h3 {
      font-weight: 500;
    }
  }
`;

export const HygieneButton = styled.button`
  padding: 0.5rem;
  background-color: #4866ab;
  border-radius: 0.7rem;
  border: none;
  color: white;
  font-size: 0.9rem;
  margin-left: 3rem;
`;

export const FoodButton = styled.button`
  padding: 0.5rem;
  background-color: #ff3333;
  border-radius: 0.7rem;
  border: none;
  color: white;
  font-size: 0.9rem;
  margin-left: 3rem;
`;

export const CleaningButton = styled.button`
  padding: 0.5rem;
  background-color: #43c74c;
  border-radius: 0.7rem;
  border: none;
  color: white;
  font-size: 0.9rem;
  margin-left: 3rem;
`;
