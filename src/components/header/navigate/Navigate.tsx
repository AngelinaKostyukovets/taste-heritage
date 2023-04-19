import S from './Navigate.styled'
import MenuDropdown from './menuDropdown/MenuDropdown'

export default function Navigate() {
  return (
    <S.container>
      <S.menu>
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
        />
        <li style={{ padding: '0', flexGrow: '1' }}>
          <S.search type="text" placeholder="Поиск" />
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
