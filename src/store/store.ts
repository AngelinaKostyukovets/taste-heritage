import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import recipesReducer from './recipes/recipesSlice'
import recipeReducer from './recipe/recipeSlice'
import authReducer from './auth/authSlice'

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    recipe: recipeReducer,
    auth: authReducer,
  },
})

type AppDispatchType = typeof store.dispatch

export const useAppDispatch: () => AppDispatchType = useDispatch

type RootStateType = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
