import RedTitle from '../redTitle/RedTitle'
import S from './Header.styled'
import Navigate from './navigate/Navigate'

export default function Header() {
  return (
    <>
      <S.container to="/">
        <RedTitle redText="ВКУСОВОЕ" otherText="НАСЛЕДИЕ" />
      </S.container>
      <Navigate />
    </>
  )
}
