import { CountryList, Filters, Searcher } from '../components/index'
import { useSearch, useCountries } from '../hooks/index'

export const Home = () => {
  const { query, option, handleChange, handleChangeOption } = useSearch()
  const { countries } = useCountries({ query, option })

  return (
    <main className='min-h-[calc(100vh-5rem)] py-10 dark:bg-very-dark-blue-bg transition-colors duration-500'>
      <div className='px-10 md:px-12'>
        <section className='flex flex-col md:flex-row md:justify-between md:items-center gap-10 lg:gap-0 mb-10'>
          <Searcher query={query} handleChange={handleChange} />
          <Filters option={option} handleChangeOption={handleChangeOption} />
        </section>
        <CountryList countries={countries} />
      </div>
    </main>
  )
}
