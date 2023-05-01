import styled from 'styled-components'
import { styles } from '../../globalStyle'

const S = {
  button: styled.button`
    ${styles.comfortaa};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    background: #d0d0d0;
    border: none;
    border-radius: 12px;
    padding: 16px 0;
    cursor: pointer;
    &:hover {
      background: #c95b5b;
    }
    &.submit {
      margin-top: 40px;
      width: 100%;
    }
    &.button {
      padding: 16px 30px;
    }
  `,
}

export default S
