import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { styles } from '../globalStyle'

const S = {
  container: styled(NavLink)`
    display: block;
    ${styles.lora};
    color: black;
    text-align: center;
    font-size: 70px;
    line-height: 90px;
    padding: 15px 0;
    @media (max-width: 1200px) {
      font-size: 50px;
      line-height: 70px;
    }
    @media (max-width: 768px) {
      position: sticky;
      top: 0;
      left: 0;
      z-index: 3;
      display: flex;
      align-items: center;
      font-size: 30px;
      line-height: 50px;
      padding: 10px 20px;
      background-color: #f0f0f0;
      & div {
        flex-grow: 1;
      }
    }
    @media (max-width: 423px) {
      font-size: 24px;
      line-height: 40px;
    }
  `,
  burger: styled(FontAwesomeIcon)`
    display: none;
    @media (max-width: 768px) {
      display: block;
      padding-right: 10px;
    }
  `,
}

export default S
