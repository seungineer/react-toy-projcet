import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Helvetica", "Arial", sans-serif;
        line-height: 1.5;
        font-size: 20px;
        /* background-color: gray; */
        margin: 10px;
        min-width: 450px;
    }
`;

export default GlobalStyle;