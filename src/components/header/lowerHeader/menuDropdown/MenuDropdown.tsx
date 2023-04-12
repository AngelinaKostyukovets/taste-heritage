import S from './MenuDropdown.styled'

interface MenuDropdownProps {
  nameMenu: string
  list: Array<string>
  menuAdress: string
  listAdresses: Array<string>
}

export default function MenuDropdown({
  nameMenu,
  list,
  menuAdress,
  listAdresses,
}: MenuDropdownProps) {
  return (
    <li>
      <S.linkDropdown className="menu-item" to={`${menuAdress}`}>
        {nameMenu}
        <S.menuDropdown>
          {list.map((item, index) => (
            <li>
              <S.linkDropdown to={`${listAdresses[index]}`}>
                {item}
              </S.linkDropdown>
            </li>
          ))}
        </S.menuDropdown>
      </S.linkDropdown>
    </li>
  )
}
