import { useNavigate } from 'react-router-dom'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { Formik } from 'formik'
import validationSchema from '../validation/validationSchema'
import S from './SignUp.styled'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import { useAppDispatch } from '../../../store/store'
import { authActions } from '../../../store/auth/authSlice'

interface DataForm {
  name: string
  lastName: string
  email: string
  password: string
  acceptTerms: boolean
}

export default function SignUp() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = (data: DataForm) => {
    const auth = getAuth()
    const userData = `${data.name} ${data.lastName}`
    console.log(userData)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        dispatch(
          authActions.setUser({
            userFI: userData,
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        )
        updateProfile(user, {
          displayName: userData,
        })
        navigate('/account')
      })
      .catch(console.error)
  }

  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    acceptTerms: false,
  }

  return (
    <S.container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid }) => (
          <S.form>
            <S.title>Регистрация</S.title>
            <Input
              idInput="firstName"
              typeInput="text"
              text="Имя"
              name="name"
              errors={errors.name}
              touched={touched.name}
            />
            <Input
              idInput="lastName"
              typeInput="text"
              text="Фамилия"
              name="lastName"
              errors={errors.lastName}
              touched={touched.lastName}
            />
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
            <Input
              idInput="acceptTerms"
              typeInput="checkbox"
              text="Я принимаю условия Конфиденциальности и Пользовательского соглашения"
              name="acceptTerms"
              errors={errors.acceptTerms}
              touched={touched.acceptTerms}
            />
            <div className="form-group">
              <Button
                typeButton="submit"
                textBtn="Зарегестрироваться"
                isValid={isValid}
                classBtn="submit"
              />
            </div>
          </S.form>
        )}
      </Formik>
      <S.login>
        Уже есть аккаунт? <span>Войдите</span>
      </S.login>
    </S.container>
  )
}
