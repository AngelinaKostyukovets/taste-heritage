import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UpperHeader from './header/upperHeader/UpperHeader'
import { GlobalStyle } from './globalStyle'
import LowerHeader from './header/lowerHeader/LowerHeader'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <GlobalStyle />
      <UpperHeader />
      <LowerHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
