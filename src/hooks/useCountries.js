import { useEffect, useMemo, useState } from 'react'
import data from '../api/data.json'

export const useCountries = ({ query }) => {
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

  const countriesFiltered = useMemo(() => {
    return countries.filter(country =>
      country.name.toLowerCase().includes(query.toLowerCase()))
  }, [countries, query])

  return { countries: countriesFiltered }
}
