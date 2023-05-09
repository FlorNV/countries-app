import { useEffect, useState } from 'react'
import { getCountryByFullName } from '../api/countries'

export const useCountry = ({ id }) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    getCountryByFullName({ name: id })
      .then(response => setCountry(response))
      .catch(error => console.log(error))
  }, [id])

  return { country }
}
