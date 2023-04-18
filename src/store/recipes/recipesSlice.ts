import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import recipesApi from '../../api/recipes/recipesApi'
import { RecipesType } from '../../types/recipesTypes'

interface RecipesStateType {
  recipes: Array<RecipesType>
  error?: string
  loading: boolean
}

const initialState: RecipesStateType = {
  recipes: [],
  error: undefined,
  loading: false,
}

const getRecipesList = createAsyncThunk<
  Array<RecipesType>,
  void,
  { rejectValue: string }
>('recipes/getRecipesList', async (data, thunksApi) => {
  try {
    const response = await recipesApi.getRecipesList()
    return response.data
  } catch {
    return thunksApi.rejectWithValue('Server error')
  }
})

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipesList.pending, (state) => {
      state.loading = true
      state.error = undefined
      // state.recipes = []
    })
    builder.addCase(getRecipesList.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    builder.addCase(getRecipesList.fulfilled, (state, { payload }) => {
      state.loading = false
      state.recipes = payload
    })
  },
})

export const recipesActions = {
  ...recipesSlice.actions,
  getRecipesList,
}

const recipesReducer = recipesSlice.reducer
export default recipesReducer
