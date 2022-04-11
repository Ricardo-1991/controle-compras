import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  place-items: center;
  margin-top: 15rem;
  /* grid-template-columns: repeat(2, 1fr); */

  table {
    width: 40rem;
    margin: 2rem auto;
    font-size: 1rem;
    border-collapse: collapse;

    backdrop-filter: blur(0px) saturate(200%);
    -webkit-backdrop-filter: blur(0px) saturate(200%);
    background-color: rgba(250, 250, 250, 0.95);
    border-radius: 12px;
    border: 1px solid black;

    th {
      font-weight: 600;
      padding: 2rem;
    }

    td {
      text-align: center;
      padding: 1rem 2rem;
    }
  }
`;
