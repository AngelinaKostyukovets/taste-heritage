import axios from 'axios'
import { RecipesType } from '../../types/recipesTypes'

const getRecipeItem = (id: number) =>
  axios<RecipesType>({
    method: 'GET',
    url: `http://localhost:3001/recipes/${id}`,
  })

export default getRecipeItem
