import { useEffect, useState } from 'react'
import data from '../api/data.json'
import { CountryCard } from './CountryCard'

export const CountryList = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const dataMapped = data.map(item => ({
      alpha3Code: item.alpha3Code,
      name: item.name,
      population: item.population,
      region: item.region,
      capital: item.capital,
      flags: item.flags
    }))
    setCountries(dataMapped)
  }, [])

  return (
    <main className='py-10 px-16 lg:px-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center dark:bg-very-dark-blue-bg transition-colors duration-500'>
      {countries.map(country =>
        <CountryCard
          key={country.alpha3Code}
          country={country}
        />)}
    </main>
  )
}
