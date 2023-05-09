import { Link, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { useCountry } from '../hooks/index'

export const CountryDetail = () => {
  const { id } = useParams()
  const { country } = useCountry({ id })

  return (
    <main className='min-h-[calc(100vh-5rem)] py-10 dark:bg-very-dark-blue-bg dark:text-white transition-colors duration-500'>
      <div className='container mx-auto px-10'>
        <Link to='/' className='inline-flex gap-2 items-center py-2 px-10 rounded-md mb-10  shadow-3xl border-2 dark:shadow-4xl dark:border-transparent'>
          <BsArrowLeft />Back
        </Link>
        {!!country &&
          <div className='flex gap-20'>
            <div className='flex-1 shadow-sm'>
              <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                className='w-full'
              />
            </div>
            <div className='flex-1'>
              <h2 className='text-3xl font-extrabold my-6'>{country.name.common}</h2>
              <div className='flex justify-between mb-12 font-extralight'>
                <div>
                  <div>
                    <span className='font-bold leading-8'>Native Name: </span>
                    {Object.values(country.name.nativeName)[0].common}
                  </div>
                  <div>
                    <span className='font-bold leading-8'>Population: </span>
                    {country.population.toLocaleString('en-US')}
                  </div>
                  <div>
                    <span className='font-bold leading-8'>Region: </span>
                    {country.region || '-'}
                  </div>
                  <div>
                    <span className='font-bold leading-8'>Sub Region: </span>
                    {country.subregion || '-'}
                  </div>
                  <div>
                    <span className='font-bold leading-8'>Capital: </span>
                    {country.capital || '-'}
                  </div>
                </div>
                <div>
                  <div>
                    <span className='font-bold leading-8'>Top Level Domain: </span>
                    {country.tld}
                  </div>
                  <div>
                    <span className='font-bold leading-8'>Currencies: </span>
                    {Object.values(country.currencies)[0].name || '-'}
                  </div>
                  <div>
                    <span className='font-bold leading-8'>Languages: </span>
                    {Object.values(country.languages).join(', ') || '-'}
                  </div>
                </div>
              </div>
              <div className='flex gap-4'>
                <span className='font-bold'>Borders: </span>
                <ul className='flex flex-wrap gap-2'>
                  {country.borders?.map(border =>
                    <li key={border} className='px-8 rounded-sm shadow-3xl border-2 dark:shadow-4xl dark:border-transparent'>
                      {border}
                    </li>) || '-'}
                </ul>
              </div>
            </div>
          </div>}
      </div>
    </main>
  )
}
