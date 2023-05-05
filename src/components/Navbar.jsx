import { useEffect, useState } from 'react'
import { IoMoonOutline, IoMoon } from 'react-icons/io5'

export const Navbar = () => {
  const [theme, setTheme] = useState('light')

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <header className='h-16 bg-white dark:bg-slate-800 dark:text-white shadow-md px-6'>
      <nav className='container mx-auto h-full flex items-center justify-between'>
        <h1 className='text-2xl font-extrabold'>
          Where in th world?
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
            <span>Dark Mode</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
