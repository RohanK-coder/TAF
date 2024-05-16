import { useState } from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUp from './components/SignUp/SignIn/signup'
import SignupNew from './components/SignUp/SignIn/signupNew'
import Home from './pages/Home'
import Header from './components/Header'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Recipes from './pages/Recipes'
import Dosha from './pages/Dosha'


function App() {
  

  return (
    <>
      
      <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/dosha' element={<Dosha/>}/>
        

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
