import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Contacts from './Pages/Contacts'
import Regiester from './Pages/Regiester'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/Kalvium' element={<Home />}  >         Kalvium   </Route>
        <Route exact path='/Contact' element={<Contacts />}>       Contacts  </Route>
        <Route exact path='/Registration' element={<Regiester />}> Register  </Route>
      </Routes>
    </>
  )
}

export default App
