import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { styles } from '../../globalStyle'

const S = {
  container: styled.nav`
    ${styles.comfortaa};
    text-align: center;
    font-size: 24px;
    line-height: 27px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 50px;

    @media (max-width: 1200px) {
      font-size: 17px;
      line-height: 20px;
      margin-bottom: 30px;
    }

    @media (max-width: 768px) {
      &.hide {
        display: none;
      }
      border-bottom: none;
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background-color: #f0f0f0;
    }
  `,
  menu: styled.ul`
    ${styles.container};
    display: flex;
    border-right: 1px solid black;
    border-left: 1px solid black;
    @media (max-width: 768px) {
      flex-direction: column;
      border: none;
    }
  `,
  search: styled.input`
    ${styles.comfortaa};
    text-align: center;
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

    @media (max-width: 1200px) {
      font-size: 17px;
      line-height: 20px;
    }
    @media (max-width: 768px) {
      padding: 15px 15px;
      border-bottom: 1px solid black;
    }
  `,
  link: styled(NavLink)`
    display: block;
    color: ${({ theme }) => theme.colors.text};
    border-left: 1px solid black;
    padding: 17px 40px;
    position: relative;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      background: #c95b5b;
      cursor: pointer;
    }

    @media (max-width: 1200px) {
      padding: 15px 15px;
    }

    @media (max-width: 768px) {
      border: none;
      border-top: 1px solid black;
    }
  `,
  auth: styled.div`
    display: block;
    color: ${({ theme }) => theme.colors.text};
    border-left: 1px solid black;
    padding: 17px 40px;
    position: relative;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      background: #c95b5b;
      cursor: pointer;
    }

    @media (max-width: 1200px) {
      padding: 15px 15px;
    }

    @media (max-width: 768px) {
      border: none;
      border-bottom: 1px solid black;
    }
  `,
}

export default S
