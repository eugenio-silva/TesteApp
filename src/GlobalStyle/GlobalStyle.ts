import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }

    h1, h2, h3, h4, p {
        font-family: 'Roboto', sans-serif;
    }
`;