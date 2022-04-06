import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  place-items: center;

  table {
    width: 36rem;
    margin: 2rem auto;
    border-spacing: 2rem;
    font-size: 1rem;
    border: 1px solid red;

    thead th {
      line-height: 1.9rem;
    }
  }
`;
