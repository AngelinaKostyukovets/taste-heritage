import Button from '../../ui/button/Button'
import S from './Account.styled'
import userSvg from './assets/image/user.svg'
import recipesEmpty from './assets/image/recipes-empty.svg'
import { useAuth } from '../../../hooks/useAuth'

export default function Account() {
  const { userFI } = useAuth()
  return (
    <S.container>
      <S.user>
        <S.fio>
          <img src={userSvg} alt="icon" /> <p>{userFI}</p>
        </S.fio>
        <Button
          typeButton="button"
          textBtn="Настройки профиля"
          classBtn="button"
        />
      </S.user>
      <S.myData>
        <S.recipe>
          Мои рецепты <S.counter>0</S.counter>
        </S.recipe>
        <S.recipe>
          Избранное <S.counter>0</S.counter>
        </S.recipe>
        <S.recipe>
          Понравившееся <S.counter>0</S.counter>
        </S.recipe>
      </S.myData>
      <S.recipesNone>
        <img src={recipesEmpty} alt="no recipes" />
        <p className="empty">Здесь пока пусто</p>
        <p className="willRecipes">Здесь будут отображаться рецепты.</p>
      </S.recipesNone>
    </S.container>
  )
}
