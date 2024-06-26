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
import DoshaStart from './pages/DoshaStart'
import Dosha from './components/Dosha'
import InsideNav from './components/InsideNav'
import Vegan from './components/Recipes/Vegan'
import GlutenFree from './components/Recipes/GlutenFree'
import Vegetarian from './components/Recipes/Vegetarian'
import Vata from './components/Recipes/Vata'
import Pitta from './components/Recipes/Pitta'
import Kapha from './components/Recipes/Kapha'
import HomeTest from './pages/HomeTest'
import DoshaQuiz from './components/DoshaQuiz'
import KaphaPage from './components/QuizEnd/KaphaPage'
import VataPage from './components/QuizEnd/VataPage'
import PittaPage from './components/QuizEnd/PittaPage'
import ShopSample from './components/Samples/ShopSample'


function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path='/' element={<HomeTest/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/dosha' element={<DoshaStart/>}/>
        <Route path='/doshaNext' element={<Dosha/>}/>
        <Route path='/doshaquiz' element={<DoshaQuiz/>}/>
        <Route path='/vegan' element={<Vegan/>}/>
        <Route path='/glutenfree' element={<GlutenFree/>}/>
        <Route path='/veg' element={<Vegetarian/>}/>
        <Route path='/vata' element={<Vata/>}/>
        <Route path='/pitta' element={<Pitta/>}/>
        <Route path='/kapha' element={<Kapha/>}/>
        <Route path='/kaphapage' element={<KaphaPage/>}/>
        <Route path='/pittapage' element={<PittaPage/>}/>
        <Route path='/vatapage' element={<VataPage/>}/>
        <Route path='/shopsample' element={<ShopSample/>}/>

        

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
