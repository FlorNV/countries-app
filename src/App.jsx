import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, CountryList } from './components/index'
import { CountryDetail } from './pages/CountryDetail'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<CountryList />} />
          <Route path='/countries/:id' element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
