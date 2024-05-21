import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
export default function KaphaPage() {
    const {name} = useContext(AppContext)
    const {vatascore} = useContext(AppContext)
    const {pittascore} = useContext(AppContext)
    const {kaphascore} = useContext(AppContext)
    console.log(name)
  return (
    <>
    <div className='doshKapha pt-20'>
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
                    <p className='text-orange-900'>Consistency and constancy are among the most common traits of Kapha types, beloved among the dosha types</p>
                </div>
            </div>
            <div className='trait'>
                
                <div className='trait2'>
                    <p className='text-orange-900'>They often have large eyes, radiant skin, thick and wavy hair, and robust or voluptuous figures.</p>
                </div>
            </div>
            <div className='trait'>
                
                <div className='trait2'>
                    <p className='text-orange-900'>When stressed, you might find yourself feeling lethargic, apathetic, or unable to see a task through. </p>
                </div>
            </div>
        </div>
        <div className='info'>
            <h1 className='text-8xl opacity-80 font-bold'>KAPHA</h1>
            <p className='font-bold'>You are down to earth, easygoing, and reliable, with consistent energy levels and a harmonizing disposition. Kapha types are the teddy bears among us—good-natured and a pleasure to be around.</p>
        </div>
    </div>
    </div>
    
    </>
  )
}
