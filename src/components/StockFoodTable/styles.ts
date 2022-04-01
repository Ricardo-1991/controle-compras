import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  table {
    width: 36rem;
    margin: 2rem auto;
    border-spacing: 0 2rem;
    font-size: 0.9rem;
    border: 1px solid red;

    thead th {
      line-height: 1.9rem;
    }
  }
`;
