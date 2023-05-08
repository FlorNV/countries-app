import { useEffect, useState } from 'react'
import { IoMoonOutline, IoMoon } from 'react-icons/io5'
import { Outlet } from 'react-router-dom'

export const Navbar = () => {
  const [theme, setTheme] = useState('light')

  const handleThemeSwitch = () => {
    const themeUpdated = theme === 'dark' ? 'light' : 'dark'
    setTheme(themeUpdated)
    window.localStorage.setItem('theme', themeUpdated)
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }

    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <>
      <header className='h-20 bg-white dark:bg-dark-blue dark:text-white shadow-md px-6 transition-colors duration-500'>
        <nav className='container mx-auto h-full flex items-center justify-between'>
          <h1 className='text-2xl font-extrabold'>
            Where in the world?
          </h1>
          <div>
            <button
              type='button'
              className='flex items-center gap-2 font-semibold'
              onClick={handleThemeSwitch}
            >
              {theme === 'dark'
                ? <IoMoon className='text-lg' />
                : <IoMoonOutline className='text-lg' />}
              Dark Mode
            </button>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  )
}
