import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 16rem;
  /* grid-template-columns: repeat(2, 1fr); */
  /* border: 1px solid red; */

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

  @media (max-width: 1024px) {
    table {
      width: 34rem;
      font-size: 0.8rem;
    }
    /* 
    .category-head {
      position: relative;
      left: 12rem;
    } */
  }

  @media (max-width: 845px) {
    table {
      width: 28rem;
      font-size: 0.6rem;
    }
    svg {
      width: 1.5rem;
    }

    /* .category-head {
      position: relative;
      left: 10.5rem;
    } */
  }

  @media screen and (max-width: 738px) and (min-width: 300px) {
    table {
    }

    svg {
      width: 1.7rem;
    }
  }
`;
