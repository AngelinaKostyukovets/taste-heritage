import { Form } from 'formik'
import { Space } from 'antd'
import styled from 'styled-components'
import { styles } from '../../globalStyle'

const S = {
  container: styled.div`
    ${styles.formContainer};
  `,
  form: styled(Form)`
    padding: 70px 70px 0;
    @media (max-width: 1200px) {
      padding: 50px 50px 0;
    }
    @media (max-width: 768px) {
      padding: 30px 30px 0;
    }
  `,
  title: styled.h2`
    ${styles.comfortaa};
    ${styles.formTitle};
  `,
  signUp: styled.div`
    ${styles.comfortaa};
    ${styles.switchForm};
    margin-top: 100px;
    @media (max-width: 768px) {
      margin-top: 50px;
    }
  `,
  close: styled(Space)`
    ${styles.close};
  `,
  backdrope: styled.div`
    ${styles.backdrop};
    position: fixed;
  `,
}

export default S
