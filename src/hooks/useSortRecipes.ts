import { createContext, useContext } from 'react'

interface SortRecipesContextProps {
  sortRecipes: string
  setSortRecipes: React.Dispatch<React.SetStateAction<string>>
  typeDish: string
  setTypeDish: React.Dispatch<React.SetStateAction<string>>
  productDish: string
  setProductDish: React.Dispatch<React.SetStateAction<string>>
}

export const SortRecipesContext = createContext({} as SortRecipesContextProps)

export const useSortRecipes = () => useContext(SortRecipesContext)
