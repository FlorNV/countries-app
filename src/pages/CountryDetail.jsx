import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import data from '../api/data.json'

export const CountryDetail = () => {
  const { id } = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const countryFound = data.find(item => item.name === id)
    if (countryFound) {
      setCountry(countryFound)
    }
  }, [id])

  return (
    <main className='dark:bg-very-dark-blue-bg dark:text-white'>
      <div className='container mx-auto py-12 px-10'>
        <Link to='/' className='inline-flex gap-2 items-center py-2 px-10 rounded-md mb-12  shadow-3xl border-2 dark:shadow-4xl dark:border-none'>
          <BsArrowLeft />Back
        </Link>
        {!!country &&
          <div className='flex gap-20'>
            <div className='flex-1 shadow-sm'>
              <img
                src={country.flags.png}
                alt={`${country.name} flag`}
                className='w-full h-96'
              />
            </div>
            <div className='flex-1'>
              <h2 className='text-3xl font-extrabold my-6'>{country.name}</h2>
              <div className='flex justify-between mb-12 font-extralight'>
                <div>
                  <div>
                    <span className='font-bold leading-8'>Native Name: </span>
                    {country.nativeName}
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
                    {country.topLevelDomain}
                  </div>
                  <div>
                    <span className='font-bold leading-8'>Currencies: </span>
                    {country.currencies?.map(currency => currency.name).join(', ') || '-'}
                  </div>
                  <div>
                    <span className='font-bold leading-8'>Languages: </span>
                    {country.languages?.map(lang => lang.name).join(', ') || '-'}
                  </div>
                </div>
              </div>
              <div className='flex gap-4'>
                <span className='font-bold'>Borders: </span>
                <ul className='flex flex-wrap gap-2'>
                  {country.borders?.map(border =>
                    <li key={border} className='px-8 rounded-sm shadow-3xl border-2 dark:shadow-4xl dark:border-none'>
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
