import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  background-color: #0d5940;
  height: 13.5rem;

  img {
    width: 13rem;
  }

  button {
    padding: 0.9rem;
    background-color: #20df9f;
    border-radius: 0.7rem;
    border: none;
    color: white;
    font-size: 1rem;
    margin-left: 2rem;
    margin-bottom: 0.9rem;
  }
`;
