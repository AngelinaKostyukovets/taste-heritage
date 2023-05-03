import { NavLink } from 'react-router-dom'
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
      font-size: 30px;
      line-height: 50px;
      padding: 10px 0;
    }
  `,
}

export default S
