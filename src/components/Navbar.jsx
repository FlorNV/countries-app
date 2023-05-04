import { IoMoonOutline } from 'react-icons/io5'

export const Navbar = () => {
  return (
    <header className='h-16 bg-white shadow-md px-6'>
      <nav className='container mx-auto h-full flex items-center justify-between'>
        <h1 className='text-2xl font-extrabold'>
          Where in th world?
        </h1>
        <div>
          <button type='button' className='flex items-center gap-2 font-semibold'>
            <IoMoonOutline className='text-lg' />
            <span>Dark Mode</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
