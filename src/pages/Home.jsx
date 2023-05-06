import { CountryList, Searcher } from '../components/index'
import { useSearch, useCountries } from '../hooks/index'

export const Home = () => {
  const { query, handleChange } = useSearch()
  const { countries } = useCountries({ query })

  return (
    <div className='py-10 px-10 md:px-12 dark:bg-very-dark-blue-bg transition-colors duration-500'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-10 lg:gap-0 mb-10'>
        <Searcher query={query} handleChange={handleChange} />
        <h2 className='w-60 bg-white dark:bg-dark-blue shadow-3xl dark:shadow-md dark:text-white rounded-md px-6 py-4'>Filter by Region</h2>
      </div>
      <CountryList countries={countries} />
    </div>
  )
}
