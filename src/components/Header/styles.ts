import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 13.5rem;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  backdrop-filter: blur(3px) saturate(58%);
  -webkit-backdrop-filter: blur(3px) saturate(58%);
  background-color: rgba(231, 239, 231, 0.66);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);

  img {
    width: 13rem;
  }

  div button {
    padding: 0.9rem;
    background-color: #e57f4d;
    border-radius: 0.7rem;
    border: none;
    color: white;
    font-size: 1rem;
    margin-left: 2rem;
  }
`;
