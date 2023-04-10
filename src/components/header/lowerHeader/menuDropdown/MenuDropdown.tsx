import S from './MenuDropdown.styled'

interface MenuDropdownProps {
  nameMenu: string
  list: Array<string>
}

export default function MenuDropdown({ nameMenu, list }: MenuDropdownProps) {
  return (
    <li>
      {nameMenu}
      <S.menuDropdown>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </S.menuDropdown>
    </li>
  )
}
