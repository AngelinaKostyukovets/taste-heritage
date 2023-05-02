import { ErrorMessage, Field } from 'formik'
import styled from 'styled-components'
import { styles } from '../../globalStyle'

const S = {
  container: styled.div`
    margin-bottom: 8px;
    &.acceptTerms {
      display: flex;
      align-items: center;
    }

    #acceptTerms {
      width: 60px;
    }
  `,
  input: styled(Field)`
    ${styles.comfortaa};
    font-size: 14px;
    line-height: 20px;
    color: #9e9e9e;
    background: #f5f5f7;
    border-radius: 12px;
    border: none;
    padding: 15px;
    width: 100%;
    &:focus {
      outline: none;
    }
  `,
  error: styled(ErrorMessage)`
    color: red;
  `,
}

export default S
