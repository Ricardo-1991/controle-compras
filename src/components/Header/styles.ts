import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 11rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;

  backdrop-filter: blur(3px) saturate(58%);
  -webkit-backdrop-filter: blur(3px) saturate(58%);
  background-color: rgba(231, 239, 231, 0.66);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);

  img {
    width: 11rem;
  }

  button {
    padding: 0.9rem;
    background-color: #e57f4d;
    border-radius: 0.7rem;
    border: none;
    color: white;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    height: 11rem;

    img {
      width: 10rem;
    }

    button {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 845px) {
    height: 10rem;

    img {
      width: 9rem;
    }

    button {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 738px) and (min-width: 350px) {
    height: 8rem;

    img {
      width: 8rem;
    }

    button {
      padding: 0.8rem;
    }
  }

  @media screen and (max-width: 350px) and (min-width: 250px) {
    img {
      width: 7rem;
    }

    button {
      padding: 0.7rem;
    }
  }
`;
