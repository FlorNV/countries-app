import { useEffect, useMemo, useState } from 'react'
import { getAllCountries, getCountryByFullName } from '../api/countries'

export const useCountries = ({ query = '', option = '', id = '' }) => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)

  useEffect(() => {
    getAllCountries()
      .then(response => {
        const dataMapped = response.map(item => ({
          name: item.name.common,
          population: item.population,
          region: item.region,
          capital: item.capital,
          flags: item.flags
        }))
        setCountries(dataMapped)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (id) {
      getCountryByFullName({ name: id })
        .then(response => setCountry(response))
        .catch(error => console.log(error))
    }
  }, [id])

  const countriesFiltered = useMemo(() => {
    return countries.filter(country =>
      country.name.toLowerCase().includes(query.toLowerCase()))
  }, [countries, query])

  const countriesFilteredByContinent = useMemo(() => {
    return countriesFiltered.filter(country =>
      country.region.toLowerCase().includes(option.toLowerCase()))
  }, [countriesFiltered, option])

  return { countries: countriesFilteredByContinent, country }
}
