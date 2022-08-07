import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *:where(:not(html, iframe, canvas, img, svg, video):not(svg *, symbol *)) {
        all: unset;
        display: revert;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    a, button {
        cursor: pointer;
    }

    ol, ul, menu {
        list-style: none;
    }

    img {
        max-width: 100%;
    }

    table {
        border-collapse: collapse;
    }

    input, textarea {
        -webkit-user-select: auto;
    }

    textarea {
        white-space: revert;
    }

    meter {
        -webkit-appearance: revert;
        appearance: revert;
    }

    ::placeholder {
        color: unset;
    }

    :where([hidden]) {
        display: none;
    }

    :where([contenteditable]:not([contenteditable="false"])) {
        -moz-user-modify: read-write;
        -webkit-user-modify: read-write;
        overflow-wrap: break-word;
        -webkit-line-break: after-white-space;
        -webkit-user-select: auto;
    }

    :where([draggable="true"]) {
        -webkit-user-drag: element;
    }

    :root {
        --primary-color: #1976d2;
        --secondary-color: #0257ac;
		--text-color: #697488;
		--text-color-dark: #191919;
		--text-color-gray: #525252;
		--text-color-light: #fff;
    }

    body {
        background: #FAFAFA;
    }

    *::-webkit-scrollbar {
        width: 4px !important;
        height: 6px !important;
    }

    *::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
    }

    *::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
    }

`;

export default GlobalStyle;
