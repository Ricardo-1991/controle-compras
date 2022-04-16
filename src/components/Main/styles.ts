import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 12rem;

  /* grid-template-columns: repeat(2, 1fr); */
  /* border: 1px solid red; */

  table {
    width: 40rem;
    margin: 2rem auto;
    font-size: 1rem;
    backdrop-filter: blur(0px) saturate(200%);
    -webkit-backdrop-filter: blur(0px) saturate(200%);
    background-color: rgba(250, 250, 250, 0.95);
    border-radius: 12px;
    border: 1px solid black;
    border-collapse: collapse;

    thead {
      border: 1px solid red;
    }

    th {
      font-weight: 600;
      padding: 1rem;
    }

    td {
      text-align: center;
      padding: 1rem;
    }
  }

  @media (max-width: 1024px) {
    table {
      width: 34rem;
    }
  }

  @media (max-width: 845px) {
    h3 {
      font-size: 1rem;

      svg {
        top: 0.5rem;
      }
    }
    table {
      font-size: 0.9rem;
    }
    svg {
      width: 1.5rem;
    }
  }

  @media screen and (max-width: 720px) and (min-width: 350px) {
    table {
      width: 20rem;
    }

    svg {
      width: 1.7rem;
    }
  }

  @media screen and (max-width: 350px) and (min-width: 250px) {
    h3 {
      font-size: 0.8rem;
      svg {
        top: 0.6rem;
      }
    }
    table {
      width: 10rem;
      font-size: 0.7rem;
    }

    svg {
      width: 1.3rem;
    }
  }
`;

export const CategoryTitle = styled.div`
  width: 100%;
  text-align: center;
  backdrop-filter: blur(3px) saturate(180%);
  -webkit-backdrop-filter: blur(3px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.48);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);

  svg {
    position: relative;
    top: 0.2rem;
  }

  @media screen and (max-width: 350px) and (min-width: 250px) {
    h3 {
      position: relative;
      bottom: 0.5rem;
    }
  }
`;
