import React from 'react'
import { useRef } from 'react';
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const passionRef = useRef();
  const navigate = useNavigate(); 
    const handleClick = () => navigate('/signup'); 
    const handleShop = () => navigate('/shop');
    const logout = () => {
      localStorage.removeItem('accessToken');
      navigate("/");
    };
    const accessToken = localStorage.getItem('accessToken');
    const username = localStorage.getItem('username');
  return (
    <>
    

<nav class="bg-gray-700 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logo} class="h-8" alt="Flowbite Logo"/>
      
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  {accessToken ? (
        <>
        <p className='text-white pr-10 pt-2 opacity-80'>Signed in as {username}</p>
        <button type="button" className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={logout}>Logout</button>
        
        </>
        ) : (
        <button type="button" className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Sign Up / Sign In</button>)}
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
    <li>
        <a href="/" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
      </li>
      <li>
        <a href="/shop" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shop</a>
      </li>
      <li>
        <a href="/blog" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
      </li>
      <li>
        <a href="/recipes" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Recipes</a>
      </li>
      <li>
        <a href="/dosha" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dosha</a>
      </li>
      
    </ul>
  </div>
  </div>
  {/* <div className='inner-box'>
            <ul className='flex items-center justify-center gap-5 cursor-pointer'>
              <li>Passion</li>
              <li>Introduction</li>
              <li>What we do</li>
              <li>Testimonials</li>
              <li>Our Doctors</li>
            </ul>
    </div> */}
  
</nav>
    </> 
  )
}
