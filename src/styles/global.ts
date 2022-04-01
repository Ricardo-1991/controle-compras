import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    } 

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    } 
  } 


  body, input, textarea, button  {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
  .react-modal-overlay{
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  margin-left: 2.2rem;
  width: 100%;
  max-width: 38rem;
  background: #fff;
  padding: 3rem;
  position: relative;
  border-radius: 1rem;
}

.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: none;
  background: transparent;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
}

`;
