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
  `,
}

export default S
