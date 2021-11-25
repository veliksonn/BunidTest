import { createGlobalStyle } from 'styled-components';

import theme from 'theme';


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
    }

    html, body, #root {
        width: 100%;
        margin: 0;

        font-family: ${ theme.font.family.primary };

        overflow-x: hidden;
        background: ${ theme.color.background };
    }

    a {
        font-size: 16px;
        font-weight: ${ theme.font.weight.highlight };
        text-decoration: none;

        color: ${ theme.color.primary};
    }

    p {
        margin: 0;

        font-size: 24px;
        font-weight: ${ theme.font.weight.highlight };

        &:not(:first-child) {
            margin-top: 12px;
        }
    }

    li {
        font-size: 24px;
        font-weight: ${ theme.font.weight.highlight };

    }

    strong {
        font-weight: 400;
    }

    em {
        font-style: normal;
    }

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;


    /* ---- Selection highlight ---- */
    ::-moz-selection {
        background-color: rgba(41, 41, 41);
        color: #fff;
    }

    ::selection {
        background-color: rgb(41, 41, 41);
        color: #fff;
    }

    ::-webkit-selection {
        background-color: rgb(41, 41, 41);
        color: #fff;
    }

    /* Disable focus highlight */
    button:focus,  textarea:focus, input:focus, select:focus {
        outline: none;
    }

    /* ---- Buttons / Input ---- */
    button, input, textarea, select {
        margin: 0;
        padding: 0;

        appearance: none;
        border-radius: 0;

        border: none;
        background: none;

        cursor: pointer;

        font-family: ${ theme.font.family.primary };
        font-size: 16px;
    }


    /* ---- Scrollbars ---- */
    ::-webkit-scrollbar {
        width: 0px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(18, 18, 18, 0.25);
    }


    /* ---- Titles ---- */
    h1, h2, h3, h4 {
        margin: 0;
        font-weight: ${ theme.font.weight.bold };
    }

    h1 {
        font-size: 68px;
        text-transform: uppercase;
        text-align: center;
    }

    h2 {
        font-size: 44px;
    }

    h2 {
        font-size: 38px;
    }

    h4 {
        font-size: 32px;
    }
`;


export default GlobalStyle;
