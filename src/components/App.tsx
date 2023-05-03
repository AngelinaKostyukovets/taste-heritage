import { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Navigate, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'

import Home from './pages/home/Home'
import RecipeItem from './pages/recipeItem/RecipeItem'
import Recipes from './pages/recipes/Recipes'
import { darkTheme, lightTheme } from '../theme/theme'
import Header from './header/Header'
import { SortRecipesContext } from '../hooks/useFilterRecipes'
import Footer from './footer/Footer'
import Account from './pages/account/Account'
import { useAuth } from '../hooks/useAuth'

function App() {
  const [sort, setSort] = useState<string>('likes')
  const [type, setType] = useState<string>('')
  const [product, setProduct] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const { isAuth } = useAuth()
  const sortValue = useMemo(
    () => ({
      sortRecipes: sort,
      setSortRecipes: setSort,
      typeDish: type,
      setTypeDish: setType,
      productDish: product,
      setProductDish: setProduct,
      searchRecipes: search,
      setSearchRecipes: setSearch,
    }),
    [sort, type, product, search]
  )
  return (
    <ThemeProvider theme={lightTheme}>
      <SortRecipesContext.Provider value={sortValue}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {isAuth ? (
            <Route path="/account" element={<Account />} />
          ) : (
            <Route path="/account" element={<Navigate to="/" />} />
          )}
          <Route path="/recipes/:id" element={<RecipeItem />} />
          <Route
            path="/recipes/search"
            element={
              <Recipes redTitle="Результаты поиска" otherTitle={search} />
            }
          />
          <Route
            path="/typeDishes"
            element={<Recipes redTitle="Типы" otherTitle="блюд" />}
          />
          <Route
            path="/typeDishes/main"
            element={<Recipes redTitle="Второе" />}
          />
          <Route
            path="/typeDishes/appetizer"
            element={<Recipes redTitle="Закуски" />}
          />
          <Route
            path="/typeDishes/salads"
            element={<Recipes redTitle="Салаты" />}
          />
          <Route
            path="/typeDishes/desserts"
            element={<Recipes redTitle="Десерты" />}
          />
          <Route
            path="/typeDishes/bakery"
            element={<Recipes redTitle="Выпечка" />}
          />
          <Route
            path="/typeDishes/soups"
            element={<Recipes redTitle="Супы" />}
          />
          <Route
            path="/dishes"
            element={<Recipes redTitle="Блюда" otherTitle="из" />}
          />
          <Route
            path="/dishes/meat"
            element={<Recipes redTitle="Блюда" otherTitle="из мяса" />}
          />
          <Route
            path="/dishes/poultry"
            element={<Recipes redTitle="Блюда" otherTitle="из птицы" />}
          />
          <Route
            path="/dishes/fish"
            element={<Recipes redTitle="Блюда" otherTitle="из рыбы" />}
          />
          <Route
            path="/dishes/vegetables"
            element={<Recipes redTitle="Овощи" />}
          />
          <Route
            path="/dishes/dough"
            element={<Recipes redTitle="Блюда" otherTitle="из теста" />}
          />
          <Route path="/dishes/curd" element={<Recipes redTitle="Творог" />} />
          <Route path="/dishes/eggs" element={<Recipes redTitle="Яйца" />} />
        </Routes>
        <Footer />
      </SortRecipesContext.Provider>
    </ThemeProvider>
  )
}

export default App
