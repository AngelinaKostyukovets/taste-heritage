import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Formik } from 'formik'
import validationSchemaLogin from '../validation/validationSchemaLogin'
import S from './Login.styled'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import { useAppDispatch } from '../../../store/store'
import { authActions } from '../../../store/auth/authSlice'

interface DataForm {
  email: string
  password: string
}

export default function SignUp() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = (data: DataForm) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        dispatch(
          authActions.setUser({
            userFI: user.displayName,
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        )
        navigate('/account')
      })
      .catch(() => console.log('error'))
  }

  const initialValues = {
    email: '',
    password: '',
  }

  return (
    <S.container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaLogin}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid }) => (
          <S.form>
            <S.title>Вход</S.title>
            <Input
              idInput="email"
              typeInput="email"
              text="E-mail"
              name="email"
              errors={errors.email}
              touched={touched.email}
            />
            <Input
              idInput="password"
              typeInput="password"
              text="Пароль"
              name="password"
              errors={errors.password}
              touched={touched.password}
            />
            <div className="form-group">
              <Button
                typeButton="submit"
                textBtn="Войти"
                isValid={isValid}
                classBtn="submit"
              />
            </div>
          </S.form>
        )}
      </Formik>
      <S.signUp>
        Нет аккаунта? <span>Зарегестрируйтесь</span>
      </S.signUp>
    </S.container>
  )
}
