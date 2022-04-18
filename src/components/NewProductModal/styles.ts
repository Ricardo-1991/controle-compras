import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  color: #994d00;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  label {
    padding: 0.5rem 0;
  }

  input {
    border: 1px solid #ddd;
    padding: 0.5rem 0;
    font-size: 1rem;

    &::placeholder {
      font-size: 0.9rem;
    }

    &:focus {
      outline-color: #e57f4d;
    }
  }

  select {
    width: 100%;
    border: 1px solid #ddd;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
    background-color: #fff;

    &:focus {
      outline-color: #e57f4d;
    }
  }

  div input {
    border: 1px solid #ddd;
    border-radius: 0.2rem;
    color: #666;
    padding: 0.35rem;
    width: 2.4rem;
    text-align: center;
  }

  svg {
    color: #0d5940;
    transition: color 0.2s;
  }

  label input[type="checkbox"] {
    margin-top: 1rem;
  }

  input[type="text"] {
    padding: 0.5rem;
  }

  input[type="checkbox"] {
    margin-left: 0.5rem;
    position: relative;
    bottom: 0.2rem;
  }

  input[type="checkbox"]::before {
    content: " ";
    width: 1.1rem;
    height: 1.1rem;
    position: absolute;
    background-color: #fff;
    border: 1px solid #0d5940;
  }
  input[type="checkbox"]:checked::after {
    content: " ";
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.3rem;
    border-style: solid;
    border-width: 0 3px 3px 0;
    position: absolute;
    transform: rotate(45deg);
    color: #994d00;
  }

  @media screen and (max-width: 738px) and (min-width: 300px) {
    font-size: 1rem;

    input[type="checkbox"] {
      top: 0rem;
    }
  }
`;

export const IconButton = styled.button`
  border: 0;
  padding: 0.4rem;
  margin: 0 0.3rem;
  background: none;
`;

export const AddProductButton = styled.div`
  margin: 0 auto;
  button {
    width: 10rem;
    padding: 0.9rem;
    background-color: #e57f4d;
    border-radius: 0.7rem;
    border: none;
    color: #fff;
    font-size: 1rem;
    margin-top: 1rem;

    @media screen and (max-width: 738px) and (min-width: 300px) {
      font-size: 0.8rem;
      padding: 0.7rem;
    }
  }
`;
