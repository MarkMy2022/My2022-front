import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul, ol{
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
  
  body {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 30%;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    height: 100vh;
    background-color: white;
    overflow: hidden;

    @media only screen and (max-width: 700px) {
        width: 100vw;
    }
  }
`;

export default GlobalStyle;
