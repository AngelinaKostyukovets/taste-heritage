import { CommentOutlined, HeartOutlined } from '@ant-design/icons'
import S from './RecipesCard.styled'

interface RecipesCardProps {
  img: string
  category: string
  name: string
  description: string
  likes: number
  comments: number
}

export default function RecipesCard({
  img,
  category,
  name,
  description,
  likes,
  comments,
}: RecipesCardProps) {
  const needCategory = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <S.container>
      <S.image>
        <img src={img} alt={name} />
      </S.image>
      <S.textContent>
        <S.category>{needCategory}</S.category>
        <S.title>{name}</S.title>
        <S.describtion>{description}</S.describtion>
        <S.space>
          <HeartOutlined />
          <S.number>{likes}</S.number>
          <CommentOutlined />
          <S.number>{comments}</S.number>
        </S.space>
      </S.textContent>
    </S.container>
  )
}
