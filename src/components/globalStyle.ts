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
  formContainer: css`
    position: fixed;

    max-width: 540px;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    z-index: 2;
    border-radius: 12px;
  `,
  formTitle: css`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    padding-bottom: 32px;
  `,
  switchForm: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #787878;
    padding: 16px 0;
    background: #f5f5f5;
    border-radius: 0px 0px 16px 16px;
    & span {
      color: #c95b5b;
      cursor: pointer;
    }
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
  lora: css`
    font-family: 'Lora', serif;
    font-style: normal;
    font-weight: 400;
  `,
  manrope: css`
    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 400;
  `,
  close: css`
    position: absolute;
    padding: 7px 10px;
    top: 25px;
    right: 25px;
    border-radius: 12px;
    color: #ffffff;
    background: #d0d0d0;
    cursor: pointer;
    &:hover {
      background: #c95b5b;
    }
  `,
  backdrop: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.5;
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
