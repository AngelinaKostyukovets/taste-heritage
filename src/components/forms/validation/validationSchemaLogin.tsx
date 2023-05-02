import * as Yup from 'yup'

export default function validationSchema() {
  return Yup.object().shape({
    email: Yup.string()
      .required('Введите электронную почту')
      .email('Электронная почта неверна'),
    password: Yup.string()
      .required('Введите пароль')
      .min(8, 'Пароль должен состоять не менее чем из 8 символов')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Пароль должен состоять по крайней мере из одной заглавной буквы, одной строчной буквы и одной цифры.'
      )
      .max(40, 'Пароль не должен превышать 40 символов'),
  })
}
