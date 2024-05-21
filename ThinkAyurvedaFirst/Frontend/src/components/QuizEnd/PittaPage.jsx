import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
export default function PittaPage() {
    const {name} = useContext(AppContext)
    const {vatascore} = useContext(AppContext)
    const {pittascore} = useContext(AppContext)
    const {kaphascore} = useContext(AppContext)
    console.log(name)
  return (
    <>
    <div className='doshPitta pt-20'>
    <p className='w-full text-3xl opacity-80 font-bold flex items-center justify-center mb-5'>{`${name}'s Dosha`}</p>
    
    <div className='page'>
        <div className='side'>
        <div className='scores p-10'>
            <p className=' text-orange-900 opacity-80 font-bold pb-3'>{`Vata Score is : ${vatascore}`}</p>
            <p className=' text-orange-900 opacity-80 font-bold pb-3'>{`Pitta Score is : ${pittascore}`}</p>
            <p className=' text-orange-900  opacity-80 font-bold pb-3'>{`Kapha Score is : ${kaphascore}`}</p>
        </div>
        </div>
        <div className='middle'>
            <img src="https://mapi.com/cdn/shop/files/Kapha_Logo.png?v=11416007419875805102" alt="" width={230}/>
        </div>
        <div className='side'>
            {/* <h1>Traits</h1> */}
            <div className='trait'>
                
                <div className='trait2'>
                    <p className='text-orange-900'>Intensity, perfectionism, and a strong agni (digestive fire) are among the best-known traits of fiery Pitta types.</p>
                </div>
            </div>
            <div className='trait'>
                
                <div className='trait2'>
                    <p className='text-orange-900'>Generally speaking, Pitta types have strong, athletic builds with good muscle tone. </p>
                </div>
            </div>
            <div className='trait'>
                
                <div className='trait2'>
                    <p className='text-orange-900'>Pitta types have strong intelligence and are quick to learn and retain new information.</p>
                </div>
            </div>
        </div>
        <div className='info'>
            <h1 className='text-8xl opacity-80 font-bold'>PITTA</h1>
            <p className='font-bold text-center pb-5 pl-5 pr-5'>You are a natural leader—a passionate, courageous person with a healthy glow, a bright intellect, and a forthright communication style. Pitta types generally have a strong presence and a healthy love of spirited competition.</p>
        </div>
    </div>
    </div>
    
    </>
  )
}