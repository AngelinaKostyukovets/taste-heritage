import { createContext, useContext } from 'react'

interface FilterRecipesContextProps {
  sortRecipes: string
  setSortRecipes: React.Dispatch<React.SetStateAction<string>>
  typeDish: string
  setTypeDish: React.Dispatch<React.SetStateAction<string>>
  productDish: string
  setProductDish: React.Dispatch<React.SetStateAction<string>>
  searchRecipes: string
  setSearchRecipes: React.Dispatch<React.SetStateAction<string>>
  showMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const SortRecipesContext = createContext({} as FilterRecipesContextProps)

export const useFilterRecipes = () => useContext(SortRecipesContext)
