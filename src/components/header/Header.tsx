import { useFilterRecipes } from '../../hooks/useFilterRecipes'
import RedTitle from '../redTitle/RedTitle'
import S from './Header.styled'
import Navigate from './navigate/Navigate'

export default function Header() {
  const { setSearchRecipes, setTypeDish, setProductDish } = useFilterRecipes()
  return (
    <>
      <S.container
        onClick={() => {
          setSearchRecipes('')
          setProductDish('')
          setTypeDish('')
        }}
        to="/"
      >
        <RedTitle redText="ВКУСОВОЕ" otherText="НАСЛЕДИЕ" />
      </S.container>
      <Navigate />
    </>
  )
}
