import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { styles } from '../globalStyle'

const S = {
  container: styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    background: #161616;
    padding: 50px 0px 36px;
  `,
  logo: styled.div`
    ${styles.lora};
    font-size: 43px;
    line-height: 55px;
  `,
  link: styled(NavLink)`
    display: block;
    ${styles.lora};
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    padding-bottom: 14px;
  `,
}

export default S
