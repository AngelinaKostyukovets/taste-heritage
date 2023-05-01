import * as Yup from 'yup'

export default function validationSchema() {
  return Yup.object().shape({
    name: Yup.string()
      .required('First name is required')
      .min(3, 'First name must be at least 3 characters')
      .max(20, 'First name must not exceed 20 characters'),
    lastName: Yup.string()
      .required('Last Name is required')
      .min(3, 'Last Name must be at least 3 characters')
      .max(20, 'Last Name must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Password must be at least one uppercase letter, one lowercase letter and one number.'
      )
      .max(40, 'Password must not exceed 40 characters'),
    // confirmPassword: Yup.string()
    // .required('Repeat Password is required')
    // .oneOf([Yup.ref('password'), null], 'Repeat Password does not match'),
  })
}
