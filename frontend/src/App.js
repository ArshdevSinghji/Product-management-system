// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './component/autheticate/Login'
import Signup from './component/autheticate/Signup'
import Admin from './component/page/Admin'
import Home from './component/page/Home'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
