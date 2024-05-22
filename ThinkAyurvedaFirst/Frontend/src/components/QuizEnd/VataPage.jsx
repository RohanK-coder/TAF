import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
export default function VataPage() {
    const {name} = useContext(AppContext)
    const {vatascore} = useContext(AppContext)
    const {pittascore} = useContext(AppContext)
    const {kaphascore} = useContext(AppContext)
    console.log(name)
  return (
    <>
    <div className='doshVata pt-24'>
    <p className='w-full text-3xl opacity-80 font-bold flex items-center justify-center mb-5'>{`${name}'s Dosha`}</p>
    
    <div className='page'>
        <div className='side'>
        <div className='scores p-10'>
            <p className=' text-orange-900 opacity-80 font-bold pb-3 '>{`Vata Score is : ${vatascore}`}</p>
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
                    <p className='text-orange-900'> Sleep may be elusive, and you may often skip meals or keep irregular hours.</p>
                </div>
            </div>
            <div className='trait'>
                
                <div className='trait2'>
                    <p className='text-orange-900'>Vata types are often extremely sensitive people who find themselves exhausted by stimulation even as they crave it. </p>
                </div>
            </div>
            <div className='trait'>
                
                <div className='trait2'>
                    <p className='text-orange-900'>When stressed, you may be prone to occasional worry and sleeplessness.  </p>
                </div>
            </div>
        </div>
        <div className='info'>
            <h1 className='text-8xl opacity-80 font-bold'>VATA</h1>
            <p className='font-bold text-center pr-5 pl-5'>You are down to earth, easygoing, and reliable, with consistent energy levels and a harmonizing disposition. Kapha types are the teddy bears among us—good-natured and a pleasure to be around.</p>
        </div>
    </div>
    </div>
    
    </>
  )
}
