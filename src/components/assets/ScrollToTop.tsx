import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollToTopProps {
  children: React.ReactNode
}

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
