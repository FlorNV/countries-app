const ENDPOINT_COUNTRIES_URL = 'https://restcountries.com/v3.1'

export const getAllCountries = async () => {
  try {
    const response = await fetch(`${ENDPOINT_COUNTRIES_URL}/all`)
    // if (!response.ok) throw new Error('Request failed')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('could not fetch countries')
  }
}

export const getCountryByFullName = async ({ name }) => {
  try {
    const response = await fetch(`${ENDPOINT_COUNTRIES_URL}/name/${name}?fullText=true`)
    const data = await response.json()
    return data[0]
  } catch (error) {
    console.log('could not fetch country')
  }
}
