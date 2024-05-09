import { useState } from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUp from './components/SignUp/SignIn/signup'

import Home from './pages/Home'
import Header from './components/Header'

function App() {
  

  return (
    <>
      {/* <Header/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
