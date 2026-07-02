
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from "./Pages/Register.jsx"
import SignIn from './Pages/Login.jsx'


function App() {
  return (
  <Routes>
    
    <Route path ='/register' element={<Register/>}/>
    <Route path ='/login' element={<Login/>}/>
  </Routes>

  )
}

export default App
