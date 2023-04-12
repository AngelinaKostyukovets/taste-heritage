import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import UpperHeader from './header/upperHeader/UpperHeader'
import { GlobalStyle } from './globalStyle'
import LowerHeader from './header/lowerHeader/LowerHeader'
import Home from './pages/home/Home'
import { darkTheme, lightTheme } from '../theme/theme'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <UpperHeader />
      <LowerHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
