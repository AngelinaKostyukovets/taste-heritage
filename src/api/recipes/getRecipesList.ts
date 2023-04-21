import axios from 'axios'
import { RecipesFilterType, RecipesType } from '../../types/recipesTypes'

const getRecipesList = (filter: RecipesFilterType) =>
  axios<Array<RecipesType>>({
    method: 'GET',
    url: 'http://localhost:3001/recipes',
    params: {
      _sort: filter.sortRecipes,
      _order: 'desc',
      q: filter.search,
      _page: filter.page,
      _limit: filter.limit,
      typeDish_like: filter.typeDish,
      productDish_like: filter.productDish,
    },
  })

export default getRecipesList
