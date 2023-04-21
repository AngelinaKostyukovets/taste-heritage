import { DownOutlined } from '@ant-design/icons'
import S from './MenuDropdown.styled'

interface MenuDropdownProps {
  nameMenu: string
  list: Array<string>
  menuAdress: string
  listAdresses: Array<string>
  setFilter: React.Dispatch<React.SetStateAction<string>>
  setClear: React.Dispatch<React.SetStateAction<string>>
}

export default function MenuDropdown({
  nameMenu,
  list,
  menuAdress,
  listAdresses,
  setFilter,
  setClear,
}: MenuDropdownProps) {
  return (
    <li>
      <S.linkDropdown className="menu-item" to={`${menuAdress}`}>
        {nameMenu}
        <S.space>
          <DownOutlined />
        </S.space>
        <S.menuDropdown>
          {list.map((item, index) => (
            <li>
              <S.linkDropdown
                onClick={(e) => {
                  e.stopPropagation()
                  setClear('')
                  setFilter(item)
                }}
                to={`${listAdresses[index]}`}
              >
                {item}
              </S.linkDropdown>
            </li>
          ))}
        </S.menuDropdown>
      </S.linkDropdown>
    </li>
  )
}
