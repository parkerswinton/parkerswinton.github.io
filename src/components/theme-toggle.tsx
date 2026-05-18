import { useTheme } from '#/components/theme-provider'
import { Moon, Sun } from 'lucide-react'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      className="absolute top-4 right-4 hover:cursor-pointer"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  )
}
