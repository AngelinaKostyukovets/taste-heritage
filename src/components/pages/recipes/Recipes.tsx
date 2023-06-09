import { useEffect, useState } from 'react'
import { PaginationProps } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import RecipesCard from './card/RecipesCard'
import S from './Recipes.styled'
import RedTitle from '../../redTitle/RedTitle'
import RecipesFilter from './filter/RecipesFilter'
import { useFilterRecipes } from '../../../hooks/useFilterRecipes'
import { recipesActions } from '../../../store/recipes/recipesSlice'
import Loader from '../../ui/loader/Loader'

interface RecipesProps {
  redTitle: string
  otherTitle?: string
}

export default function Recipes({ redTitle, otherTitle }: RecipesProps) {
  const recipes = useAppSelector((state) => state.recipes.recipes)
  const loading = useAppSelector((state) => state.recipes.loading)
  const dispatch = useAppDispatch()
  const [page, setPage] = useState<number>(1)
  const { sortRecipes, typeDish, productDish, searchRecipes } =
    useFilterRecipes()

  const fetchData = () => {
    dispatch(
      recipesActions.getRecipesList({
        sortRecipes,
        limit: 18,
        page,
        typeDish,
        productDish,
        searchRecipes,
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
  }, [page, typeDish, productDish, sortRecipes, searchRecipes])

  return (
    <S.container>
      {loading && <Loader />}
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
            id={recipe.id}
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
        total={66}
        pageSize={18}
      />
    </S.container>
  )
}
