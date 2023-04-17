import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { recipesActions } from '../../../store/recipes/recipesSlice'

export default function Recipes() {
  const dispatch = useAppDispatch()
  const recipes = useAppSelector((state) => state.recipes.recipes)

  useEffect(() => {
    dispatch(recipesActions.getRecipesList)
  }, [])

  console.log(recipes)

  return <div>recipes</div>
}
