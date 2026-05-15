import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme.js'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    // 1. Check for saved user preference in localStorage
    const savedTheme = localStorage.getItem("themeMode")
    if (savedTheme) {
      return savedTheme
    }
    // 2. Fallback to system preference if no saved preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark"
    }
    // 3. Default to light theme
    return "light"
  })

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
  }

  // actual change in theme

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("light", "dark")
    htmlElement.classList.add(themeMode)
    
    // Persist user preference to localStorage
    localStorage.setItem("themeMode", themeMode)
  }, [themeMode])

  // Optional: Listen for system theme changes in real-time
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleSystemThemeChange = (e) => {
      // Only react to system changes if the user hasn't manually overridden it
      // For this simple project, we'll just respect the system change if they toggle system wide
      setThemeMode(e.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])
  

  return (
    <ThemeProvider value={{themeMode, toggleTheme}}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-900 transition-colors duration-200">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App