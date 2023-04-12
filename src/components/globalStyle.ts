import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Lora&display=swap');    
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
    }
    body {
        background: ${({ theme }) => theme.colors.background};
    }
`
