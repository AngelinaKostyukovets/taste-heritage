import S from './LowerHeader.styled'
import MenuDropdown from './menuDropdown/MenuDropdown'

export default function LowerHeader() {
  return (
    <S.container>
      <S.menu>
        <MenuDropdown
          nameMenu="Типы блюд"
          list={['второе', 'закуски', 'салаты', 'десерты', 'выпечка', 'супы']}
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
        />
        <li style={{ padding: '0', flexGrow: '1' }}>
          <S.search type="text" placeholder="Поиск" />
        </li>
        <li>Войти</li>
        <li>Регистрация</li>
      </S.menu>
    </S.container>
  )
}
