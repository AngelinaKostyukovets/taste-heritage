import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Formik } from 'formik'
import { CloseOutlined } from '@ant-design/icons'
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

interface LoginProps {
  onClick: (value: (prev: boolean) => boolean) => void
  onSwitch: (value: (prev: boolean) => boolean) => void
}

export default function Login({ onClick, onSwitch }: LoginProps) {
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
        onClick((prev) => !prev)
        navigate('/account')
      })
      .catch(() => console.log('error'))
  }

  const initialValues = {
    email: '',
    password: '',
  }

  return (
    <>
      <S.backdrope />
      <S.container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaLogin}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <S.form>
              <S.close
                onClick={(event) => {
                  event.preventDefault()
                  onClick((prev) => !prev)
                }}
              >
                <CloseOutlined />
              </S.close>
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
                <Button typeButton="submit" textBtn="Войти" classBtn="submit" />
              </div>
            </S.form>
          )}
        </Formik>
        <S.signUp>
          Нет аккаунта?{' '}
          <span
            role="link"
            tabIndex={0}
            onClick={(event) => {
              event.preventDefault()
              onClick((prev) => !prev)
              onSwitch((prev) => !prev)
            }}
          >
            Зарегестрируйтесь
          </span>
        </S.signUp>
      </S.container>
    </>
  )
}
