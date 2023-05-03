import { Space } from 'antd'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const S = {
  menuDropdown: styled.ul`
    display: none;
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid black;
    border-bottom: none;
    background-color: ${({ theme }) => theme.colors.background};
    @media (max-width: 768px) {
      position: sticky;
      margin-top: 15px;
      border: none;
    }
  `,
  linkDropdown: styled(NavLink)`
    color: ${({ theme }) => theme.colors.text};
    display: inline-block;
    width: 100%;
    padding: 16px 0;
    border-bottom: 1px solid black;
    transition: 0.3s;
    position: relative;
    @media (max-width: 768px) {
      border: none;
    }
    &.menu-item {
      padding: 16px 40px;
      border-bottom: none;
      border-right: 1px solid black;
      @media (max-width: 1200px) {
        padding: 15px 15px;
      }
      @media (max-width: 768px) {
        border: none;
        border-bottom: 1px solid black;
      }
    }
    &:hover {
      cursor: pointer;
      transition: 0.3s;
      background: #c95b5b;
      @media (max-width: 768px) {
        background: none;
      }
    }
    &:hover > ul {
      display: inherit;
      transition: 0.3s;
    }
  `,
  space: styled(Space)`
    padding-left: 10px;
  `,
}

export default S
