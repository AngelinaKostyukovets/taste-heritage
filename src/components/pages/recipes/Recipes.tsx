import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { recipesActions } from '../../../store/recipes/recipesSlice'
import RecipesCard from './card/RecipesCard'
import S from './Recipes.styled'

interface RecipesProps {
  title: string
}

export default function Recipes({ title }: RecipesProps) {
  const dispatch = useAppDispatch()
  const recipes = useAppSelector((state) => state.recipes.recipes)

  useEffect(() => {
    dispatch(recipesActions.getRecipesList())
  }, [])

  return (
    <S.container>
      <S.title>{title}</S.title>
      <S.sortContainer>
        <div>{recipes.length} рецептов</div>
        <div>Релевантные</div>
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
