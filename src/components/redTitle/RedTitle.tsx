interface RedTitleProps {
  redText: string
  otherText?: string
}

export default function RedTitle({ redText, otherText }: RedTitleProps) {
  return (
    <div>
      <span style={{ color: '#ff0000' }}>{redText}</span> {otherText}
    </div>
  )
}
