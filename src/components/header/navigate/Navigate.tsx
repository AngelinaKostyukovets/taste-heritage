import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import S from './Navigate.styled'
import MenuDropdown from './menuDropdown/MenuDropdown'
import { useAppDispatch } from '../../../store/store'
import { authActions } from '../../../store/auth/authSlice'
import { useFilterRecipes } from '../../../hooks/useFilterRecipes'
import { useAuth } from '../../../hooks/useAuth'
import SignUp from '../../forms/signUp/SignUp'
import Login from '../../forms/login/Login'

export default function Navigate() {
  const { setSearchRecipes, setTypeDish, setProductDish } = useFilterRecipes()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [search, setSearch] = useState<string>('')
  const [signUp, setSignUp] = useState<boolean>(false)
  const [login, setLogin] = useState<boolean>(false)
  const { isAuth, userFI } = useAuth()

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setSearch?.(newValue)
  }

  const onKeyDownSearch = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.code === 'Enter') {
      navigate('/recipes/search')
      setProductDish('')
      setTypeDish('')
      setSearchRecipes(search)
      setSearch('')
    }
  }

  return (
    <>
      <S.container>
        <S.menu
          onClick={() => {
            setTypeDish('')
            setProductDish('')
            setSearchRecipes('')
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
              onClick={(event) => event.stopPropagation()}
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
                    event.stopPropagation()
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
                    event.stopPropagation()
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
