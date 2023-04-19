import { ThemeProvider } from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import Home from './pages/home/Home'
import { darkTheme, lightTheme } from '../theme/theme'
import Header from './header/Header'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
