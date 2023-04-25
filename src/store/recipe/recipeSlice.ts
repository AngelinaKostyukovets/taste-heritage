import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import recipesApi from '../../api/recipes/recipesApi'
import { RecipesType } from '../../types/recipesTypes'

interface RecipeStateType {
  recipe: RecipesType | null
  error: string | null
  loading: boolean
}

const initialState: RecipeStateType = {
  recipe: null,
  error: null,
  loading: false,
}

const getRecipe = createAsyncThunk<
  RecipesType,
  number,
  { rejectValue: string }
>('recipes/getRecipe', async (recipeId, thunksApi) => {
  try {
    const response = await recipesApi.getRecipeItem(recipeId)
    return response.data
  } catch {
    return thunksApi.rejectWithValue('Server error')
  }
})

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipe.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getRecipe.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload ?? null
    })
    builder.addCase(getRecipe.fulfilled, (state, { payload }) => {
      state.loading = false
      state.recipe = payload
    })
  },
})

export const recipeActions = {
  ...recipeSlice.actions,
  getRecipe,
}

const recipeReducer = recipeSlice.reducer
export default recipeReducer
