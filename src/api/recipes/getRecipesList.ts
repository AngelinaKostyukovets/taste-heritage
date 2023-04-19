import axios from 'axios'
import { RecipesFilterType, RecipesType } from '../../types/recipesTypes'

const getRecipesList = (filter: RecipesFilterType) =>
  axios<Array<RecipesType>>({
    method: 'GET',
    url: 'http://localhost:3001/recipes',
    params: {
      _sort: filter.sortRecipes,
      _order: 'desc',
    },
  })

export default getRecipesList
