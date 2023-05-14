import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { Identification } from './pages/Identification.jsx'
import { Home } from './pages/Home.jsx'
import { NewEntry } from './pages/NewEntry.jsx'
export function App () {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Identification />} />
        <Route path='/entry' element={<NewEntry />} />
      </Routes>
    </div>
  )
}
