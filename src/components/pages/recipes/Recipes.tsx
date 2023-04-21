import { useEffect, useState } from 'react'
import { PaginationProps } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import RecipesCard from './card/RecipesCard'
import S from './Recipes.styled'
import RedTitle from '../../redTitle/RedTitle'
import RecipesFilter from './filter/RecipesFilter'
import { useFilterRecipes } from '../../../hooks/useFilterRecipes'
import { recipesActions } from '../../../store/recipes/recipesSlice'

interface RecipesProps {
  redTitle: string
  otherTitle?: string
}

export default function Recipes({ redTitle, otherTitle }: RecipesProps) {
  const recipes = useAppSelector((state) => state.recipes.recipes)
  const dispatch = useAppDispatch()
  const [page, setPage] = useState<number>(1)
  const { sortRecipes, typeDish, productDish } = useFilterRecipes()

  const fetchData = () => {
    dispatch(
      recipesActions.getRecipesList({
        sortRecipes,
        limit: 18,
        page,
        typeDish,
        productDish,
      })
    )
  }

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    setPage(pageNumber)
  }

  useEffect(() => {
    setPage(1)
  }, [sortRecipes])

  useEffect(() => {
    fetchData()
  }, [page, typeDish, productDish, sortRecipes])

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
            category={recipe.typeDish}
            name={recipe.name}
            description={recipe.description}
            likes={recipe.likes}
            comments={recipe.comments.length}
          />
        ))}
      </S.cards>
      <S.pagination
        current={page}
        onChange={onChange}
        total={40}
        pageSize={18}
      />
    </S.container>
  )
}
