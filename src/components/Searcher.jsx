import { IoSearch } from 'react-icons/io5'

export const Searcher = ({ query, handleChange }) => {
  return (
    <>
      <form onSubmit={(event) => event.preventDefault()} className='flex-1 lg:flex-none lg:w-2/5'>
        <div className='w-full inline-flex items-center bg-white dark:bg-dark-blue px-8 shadow-3xl dark:shadow-md rounded-md text-dark-gray dark:text-white gap-6'>
          <IoSearch />
          <input
            name='query'
            value={query}
            onChange={handleChange}
            type='search'
            placeholder='Search for a country...'
            className='bg-inherit focus:outline-none w-full py-4 placeholder:text-dark-gray dark:placeholder:text-white'
          />
        </div>
      </form>
    </>
  )
}
