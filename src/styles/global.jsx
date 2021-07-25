import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body, main, section, form, input, div, button, a, span, p, h1, h2, h3 {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #FFF;
        --gray: #AAA;
        --black: #000;
        --yellow: #FF0;
    }

    html, body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    body, p, input, button {
        font-size: 1rem;
    }

    h1, h2, h3, p {
        margin-bottom: 1rem;
    }

    button {
        cursor: pointer;
        & hover {
            color: var(--yellow);
            text-decoration: underline;
        }
    }

    a {
        text-decoration: none;
    }
`;
