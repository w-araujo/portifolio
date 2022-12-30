import { createGlobalStyle } from 'styled-components';

const GlobalSyle =  createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: monospace;
}

body {
    background-color: #000123;
    color: white;
}
`;

export default GlobalSyle;