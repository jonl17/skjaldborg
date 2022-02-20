import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
    }
  
    ::selection {
        color: #9DD79A;
        background-color: #E64746;
    }
    .selected > span {
        transform: scale(1);
    }
    .tl-edges {
        overflow: inherit !important;
    }
    a {
        text-decoration: none; 
        color: inherit;
    }
    p {
        letter-spacing: -0.5px;
    }
`
