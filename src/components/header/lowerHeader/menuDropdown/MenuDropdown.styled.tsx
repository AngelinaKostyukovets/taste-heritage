import styled from 'styled-components'

const S = {
  menuDropdown: styled.ul`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid black;
    border-bottom: none;
    & > li {
      padding: 16px 0;
      border-bottom: 1px solid black;
      transition: 0.3s;
    }
    & > li:hover {
      cursor: pointer;
      transition: 0.3s;
      background: #c95b5b;
    }
  `,
}

export default S
