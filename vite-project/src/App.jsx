import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/NavBar'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='About' element={<About/>} />
      <Route path='Home' element={<Home/>} />
      <Route path='/' element={<Home/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='services' element={<Services/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
