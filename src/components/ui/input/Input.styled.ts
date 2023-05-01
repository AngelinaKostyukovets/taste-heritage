import { Field } from 'formik'
import styled from 'styled-components'
import { styles } from '../../globalStyle'

const S = {
  container: styled.div`
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
    margin-bottom: 8px;
  `,
}

export default S
