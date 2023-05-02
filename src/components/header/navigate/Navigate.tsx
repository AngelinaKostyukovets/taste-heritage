import { useEffect, useState } from 'react'
import S from './Navigate.styled'
import MenuDropdown from './menuDropdown/MenuDropdown'
import { useAppDispatch } from '../../../store/store'
import { recipesActions } from '../../../store/recipes/recipesSlice'
import { authActions } from '../../../store/auth/authSlice'
// import useDebounce from '../../../hooks/useDebounce'
import { useFilterRecipes } from '../../../hooks/useFilterRecipes'
import { useAuth } from '../../../hooks/useAuth'
import SignUp from '../../forms/signUp/SignUp'
import Login from '../../forms/login/Login'

export default function Navigate() {
  const { sortRecipes, setTypeDish, setProductDish } = useFilterRecipes()
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState<string>('')
  const [signUp, setSignUp] = useState<boolean>(false)
  const [login, setLogin] = useState<boolean>(false)
  // const debounceSearch = useDebounce(search, 1000)
  const { isAuth, userFI } = useAuth()

  const fetchData = () => {
    dispatch(recipesActions.getRecipesList({ sortRecipes, search }))
  }

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setSearch?.(newValue)
  }

  const onKeyDownSearch = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.code === 'Enter') fetchData()
  }

  return (
    <>
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
              onKeyDown={onKeyDownSearch}
              type="text"
              placeholder="Поиск"
            />
          </li>
          {isAuth ? (
            <>
              <li>
                <S.link to="/account">{userFI}</S.link>
              </li>
              <li>
                <S.auth onClick={() => dispatch(authActions.removeUser())}>
                  Выйти
                </S.auth>
              </li>
            </>
          ) : (
            <>
              <li>
                <S.auth
                  onClick={(event) => {
                    event.preventDefault()
                    setLogin((prev) => !prev)
                  }}
                >
                  Войти
                </S.auth>
              </li>
              <li>
                <S.auth
                  onClick={(event) => {
                    event.preventDefault()
                    setSignUp((prev) => !prev)
                  }}
                >
                  Регистрация
                </S.auth>
              </li>
            </>
          )}
        </S.menu>
      </S.container>
      {signUp && <SignUp onClick={setSignUp} onSwitch={setLogin} />}
      {login && <Login onClick={setLogin} onSwitch={setSignUp} />}
    </>
  )
}
