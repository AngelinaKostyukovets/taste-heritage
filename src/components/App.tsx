import React from 'react'
import UpperHeader from './header/upperHeader/UpperHeader'
import { GlobalStyle } from './globalStyle'
import LowerHeader from './header/lowerHeader/LowerHeader'

function App() {
  return (
    <>
      <GlobalStyle />
      <UpperHeader />
      <LowerHeader />
    </>
  )
}

export default App
