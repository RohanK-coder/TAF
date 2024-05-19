import React from 'react'
import { useNavigate } from "react-router-dom";

const handleHover = (e) => {
  e.target.style.background = 'red';
  
}
const handleHovers = (e) => {
  e.target.style.background = 'black';
  
}


export default function DoshaStart() {
  const navigate = useNavigate();
  const next = () => {
    navigate('/doshaNext');
  }
  return (
    <div className='dosha'>
        <div className='dosha1'></div>
        <div className='dosha2'>
        <h1 className='text-green-500 text-5xl p-5'>FIND BALANCE NATURALLY: START YOUR PERSONALIZED PATH TO HEALTH & WELLNESS</h1>
        <button onMouseEnter={handleHover} onMouseLeave={handleHovers} onClick={next}>Quiz Page</button>
        </div>
    </div>
  )
}
