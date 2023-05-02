import S from './Input.styled'

interface FormInputProps {
  idInput: string
  typeInput: string
  text: string
  name: string
  errors: string | undefined
  touched: boolean | undefined
}

export default function Input({
  idInput,
  typeInput,
  text,
  name,
  errors,
  touched,
}: FormInputProps) {
  return (
    <S.container className={`form-group ${name}`}>
      <S.input
        name={name}
        type={typeInput}
        id={idInput}
        placeholder={name !== 'acceptTerms' ? text : ''}
        className={`form-control${errors && touched ? ' is-invalid' : ''}`}
      />
      {name === 'acceptTerms' && <label htmlFor={idInput}>{text}</label>}
      <S.error name={name} component="div" className="invalid-feedback" />
    </S.container>
  )
}
