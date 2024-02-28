import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Contacts from './Pages/Contacts'
import Register from './Pages/Register'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}  ></Route>
        <Route exact path='/Contact' element={<Contacts />}></Route>
        <Route exact path='/Registration' element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App
