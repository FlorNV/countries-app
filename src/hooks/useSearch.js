import { useState } from 'react'

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [option, setOption] = useState('')

  const handleChange = (event) => setQuery(event.target.value)

  const handleChangeOption = (continent) => {
    console.log(continent)
    setOption(continent)
  }

  return { query, option, handleChange, handleChangeOption }
}
