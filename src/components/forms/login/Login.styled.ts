import { Form } from 'formik'
import styled from 'styled-components'
import { styles } from '../../globalStyle'

const S = {
  container: styled.div`
    ${styles.formContainer};
  `,
  form: styled(Form)`
    padding: 70px 70px 0;
  `,
  title: styled.h2`
    ${styles.comfortaa};
    ${styles.formTitle};
  `,
  signUp: styled.div`
    ${styles.comfortaa};
    ${styles.switchForm};
    margin-top: 100px;
  `,
}

export default S