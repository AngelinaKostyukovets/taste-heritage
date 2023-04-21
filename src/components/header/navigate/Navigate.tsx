import { useEffect, useState } from 'react'
import S from './Navigate.styled'
import MenuDropdown from './menuDropdown/MenuDropdown'
import { useAppDispatch } from '../../../store/store'
import { recipesActions } from '../../../store/recipes/recipesSlice'
import useDebounce from '../../../hooks/useDebounce'
import { useFilterRecipes } from '../../../hooks/useFilterRecipes'

export default function Navigate() {
  const { sortRecipes, setTypeDish, setProductDish } = useFilterRecipes()
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState<string>('')
  const debounceSearch = useDebounce(search, 1000)

  const fetchData = () => {
    dispatch(recipesActions.getRecipesList({ sortRecipes, search }))
  }

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setSearch?.(newValue)
  }

  useEffect(() => {
    fetchData()
  }, [debounceSearch])

  return (
    <S.container>
      <S.menu
        onClick={() => {
          setTypeDish('')
          setProductDish('')
        }}
      >
        <MenuDropdown
          nameMenu="Типы блюд"
          list={['второе', 'закуски', 'салаты', 'десерты', 'выпечка', 'супы']}
          menuAdress="/typeDishes"
          listAdresses={[
            '/typeDishes/main',
            '/typeDishes/appetizer',
            '/typeDishes/salads',
            '/typeDishes/desserts',
            '/typeDishes/bakery',
            '/typeDishes/soups',
          ]}
          setFilter={setTypeDish}
          setClear={setProductDish}
        />
        <MenuDropdown
          nameMenu="Блюда из"
          list={[
            'блюда из мяса',
            'блюда из птицы',
            'блюда из рыбы',
            'овощи',
            'блюда из теста',
            'творог',
            'яйца',
          ]}
          menuAdress="/dishes"
          listAdresses={[
            '/dishes/meat',
            '/dishes/poultry',
            '/dishes/fish',
            '/dishes/vegetables',
            '/dishes/dough',
            '/dishes/curd',
            '/dishes/eggs',
          ]}
          setFilter={setProductDish}
          setClear={setTypeDish}
        />
        <li style={{ padding: '0', flexGrow: '1' }}>
          <S.search
            value={search}
            onChange={onChangeSearch}
            type="text"
            placeholder="Поиск"
          />
        </li>
        <li>
          <S.link to="/login">Войти</S.link>
        </li>
        <li>
          <S.link to="signUp">Регистрация</S.link>
        </li>
      </S.menu>
    </S.container>
  )
}
