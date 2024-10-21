import { createGlobalStyle } from "styled-components";

const GlobalSyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: monospace;
}

body {
    background-color: #0e0e0e;
    color: white;
    a {
    color: white;
  }
}
`;

export default GlobalSyle;
