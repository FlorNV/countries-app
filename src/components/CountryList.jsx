import { CountryCard } from './CountryCard'

export const CountryList = ({ countries }) => {
  return (
    <section className='px-10 sm:px-0 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
      {countries.map(country =>
        <CountryCard
          key={country.alpha3Code}
          country={country}
        />)}
    </section>
  )
}
