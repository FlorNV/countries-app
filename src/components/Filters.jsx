import { useRef, useState } from 'react'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'

const continents = ['', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']

export const Filters = ({ option, handleChangeOption }) => {
  const [show, setShow] = useState(false)
  const buttonRef = useRef()
  const menuRef = useRef()

  const handleClick = () => setShow(prev => !prev)

  window.addEventListener('click', (e) => {
    if (e.target !== buttonRef.current && e.target !== menuRef.current) {
      setShow(false)
    }
  })

  return (
    <div className='relative'>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className='w-60 flex items-center justify-between bg-white dark:bg-dark-blue shadow-3xl dark:shadow-md dark:text-white rounded-md px-6 py-4'
      >
        {option || 'Filter by Region'}
        {show
          ? <IoChevronUpOutline className='text-xl' />
          : <IoChevronDownOutline className='text-xl' />}
      </button>
      {show &&
        <div ref={menuRef} className='absolute z-10 bg-white dark:bg-dark-blue dark:text-light-gray top-16 inset-x-0 rounded-md shadow-lg px-6 py-4'>
          <ul className='flex flex-col gap-1'>
            {continents.map(continent =>
              <li
                key={continent}
                onClick={() => {
                  handleClick()
                  handleChangeOption(continent)
                }}
                className='cursor-pointer hover:text-dark-gray'
              >{continent || 'All'}
              </li>)}
          </ul>
        </div>}
    </div>
  )
}
