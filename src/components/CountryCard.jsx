export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country

  return (
    <div className='w-full rounded-md bg-white dark:bg-dark-blue dark:text-white shadow-md'>
      <div className='h-40'>
        <img
          src={flags.png}
          alt={`${name} flag`}
          className='w-full h-full object-cover rounded-t-md'
        />
      </div>
      <div className='p-6 text-sm'>
        <h3 className='text-lg font-extrabold mb-3'>{name}</h3>
        <p className='mb-1 font-thin'>
          <span className='font-semibold'>Population: </span>
          {population.toLocaleString('en')}
        </p>
        <p className='mb-1 font-thin'>
          <span className='font-semibold'>Region: </span>{region}
        </p>
        <p className='font-thin'>
          <span className='font-semibold'>Capital: </span>{capital}
        </p>
      </div>
    </div>
  )
}
