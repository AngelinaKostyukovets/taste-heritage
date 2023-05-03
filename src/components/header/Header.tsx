import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useFilterRecipes } from '../../hooks/useFilterRecipes'
import RedTitle from '../redTitle/RedTitle'
import S from './Header.styled'
import Navigate from './navigate/Navigate'

export default function Header() {
  const { setSearchRecipes, setTypeDish, setProductDish, setShowMenu } =
    useFilterRecipes()
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
        <S.burger
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            setShowMenu((prev) => !prev)
          }}
          icon={faBars}
          style={{ color: '#000000' }}
        />
        <RedTitle redText="ВКУСОВОЕ" otherText="НАСЛЕДИЕ" />
      </S.container>
      <Navigate />
    </>
  )
}
