interface RedTitleProps {
  redText: string
  otherText?: string
}

export default function RedTitle({ redText, otherText }: RedTitleProps) {
  return (
    <>
      <span style={{ color: '#ff0000' }}>{redText}</span> {otherText}
    </>
  )
}
