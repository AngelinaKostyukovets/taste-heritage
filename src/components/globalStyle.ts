import { createGlobalStyle, css } from 'styled-components'

export const styles = {
  comfortaa: css`
    font-family: 'Comfortaa', cursive;
    font-style: normal;
    font-weight: 400;
  `,
  container: css`
    max-width: 1400px;
    margin: 0 auto;
  `,
  radius: '24px',
  roboto: css`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
  `,
  montserrat: css`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
  `,
}

export const GlobalStyle = createGlobalStyle`  
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
    }
    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }
`
