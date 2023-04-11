import { NavLink } from 'react-router-dom'
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
  `,
  linkDropdown: styled(NavLink)`
    color: black;
    display: inline-block;
    width: 100%;
    padding: 16px 0;
    border-bottom: 1px solid black;
    transition: 0.3s;
    position: relative;
    &.menu-item {
      padding: 16px 50px;
      border-bottom: none;
      border-right: 1px solid black;
    }
    &:hover {
      cursor: pointer;
      transition: 0.3s;
      background: #c95b5b;
    }
    &:hover > ul {
      display: inherit;
      transition: 0.3s;
    }
  `,
}

export default S
