import { Link } from 'react-router-dom'

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country

  return (
    <div className='w-full rounded-md bg-white dark:bg-dark-blue dark:text-white shadow-md relative'>
      <div className='h-40'>
        <img
          src={flags.png}
          alt={`${name} flag`}
          className='w-full h-full object-cover rounded-t-md'
        />
      </div>
      <div className='p-6 text-sm'>
        <h3 className='text-lg font-extrabold mb-3'>{name}</h3>
        <p className='leading-6 font-extralight'>
          <span className='font-semibold'>Population: </span>
          {population.toLocaleString('en-US')}
        </p>
        <p className='leading-6 font-extralight'>
          <span className='font-semibold'>Region: </span>{region}
        </p>
        <p className='leading-6 font-extralight'>
          <span className='font-semibold'>Capital: </span>{capital}
        </p>
      </div>
      <Link to={`/countries/${name}`} className='absolute inset-0' />
    </div>
  )
}
