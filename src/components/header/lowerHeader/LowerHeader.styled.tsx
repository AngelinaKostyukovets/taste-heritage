import styled from 'styled-components'

const S = {
  container: styled.nav`
    font-family: 'Comfortaa', cursive;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;
    border: 1px solid black;
  `,
  menu: styled.ul`
    max-width: 1400px;
    display: flex;
    margin: 0 auto;

    & > li {
      border-left: 1px solid black;
      padding: 16px 50px;
      position: relative;
      transition: 0.3s;
    }
    & > li:hover {
      transition: 0.3s;
      background: #c95b5b;
      cursor: pointer;
    }
    & > li:last-child {
      border-right: 1px solid black;
    }

    & > li:hover > ul {
      display: inherit;
      transition: 0.3s;
    }
  `,
  search: styled.input`
    font-family: 'Comfortaa', cursive;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    border: none;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  `,
}

export default S
