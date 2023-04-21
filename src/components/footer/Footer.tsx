import RedTitle from '../redTitle/RedTitle'
import S from './Footer.styled'

interface LinksType {
  text: string
  adress: string
}

const links: Array<LinksType> = [
  {
    text: 'Контакты',
    adress: '/contacts',
  },
  {
    text: 'О нас',
    adress: '/aboutUs',
  },
  {
    text: 'Конфиденциальность',
    adress: '/confidentiality',
  },
]

export default function Footer() {
  return (
    <S.container>
      <S.logo>
        <RedTitle redText="ВКУСОВОЕ" otherText="НАСЛЕДИЕ" />
      </S.logo>
      <div>
        {links.map((link) => (
          <S.link to={link.adress}>{link.text}</S.link>
        ))}
      </div>
    </S.container>
  )
}
