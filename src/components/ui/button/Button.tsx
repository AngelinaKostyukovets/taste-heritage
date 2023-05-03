import S from './Button.styled'

interface ButtonProps {
  textBtn: string
  classBtn?: string
  onClick?: () => void
  typeButton: 'button' | 'submit' | 'reset' | undefined
}

export default function Button({
  textBtn,
  classBtn,
  onClick,
  typeButton,
}: ButtonProps) {
  return (
    <S.button type={typeButton} onClick={onClick} className={classBtn}>
      {textBtn}
    </S.button>
  )
}
