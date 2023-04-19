import { useAppSelector } from '../../../store/store'
import RecipesCard from './card/RecipesCard'
import S from './Recipes.styled'
import RedTitle from '../../redTitle/RedTitle'
import RecipesFilter from './filter/RecipesFilter'

interface RecipesProps {
  redTitle: string
  otherTitle?: string
}

export default function Recipes({ redTitle, otherTitle }: RecipesProps) {
  const recipes = useAppSelector((state) => state.recipes.recipes)

  return (
    <S.container>
      <S.title>
        <RedTitle redText={redTitle} otherText={otherTitle} />
      </S.title>
      <S.sortContainer>
        <div>{recipes.length} рецептов</div>
        <RecipesFilter />
      </S.sortContainer>
      <S.cards>
        {recipes.map((recipe) => (
          <RecipesCard
            img={recipe.image_url}
            category={recipe.category[0]}
            name={recipe.name}
            description={recipe.description}
            likes={recipe.likes}
            comments={recipe.comments.length}
          />
        ))}
      </S.cards>
    </S.container>
  )
}
