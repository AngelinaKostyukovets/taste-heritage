import axios from 'axios'
import { RecipesType } from '../../types/recipesTypes'

const getRecipesList = () =>
  axios<Array<RecipesType>>({
    method: 'GET',
    url: 'http://localhost:3001/recipes',
  })

export default getRecipesList
