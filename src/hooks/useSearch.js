import { useState } from 'react'

export const useSearch = () => {
  const [query, setQuery] = useState('')

  const handleChange = (event) => setQuery(event.target.value)

  return { query, handleChange }
}
