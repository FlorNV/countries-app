import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/index'
import { Home, CountryDetail } from './pages/index'

function App () {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : 'countries-app'}>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/countries/:id' element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
