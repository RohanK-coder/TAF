import React from 'react'
import BandAid from '../assets/bandAid.svg'
import ImgDoc from '../assets/ImgDoc.png'

export default function Content1() {
  return (
    <div className='content1'>
      <div className='con1'>
        <h1>Keep Going With Your Passion</h1>
        <p>ThinkAyurvedaFirst™ is a Business entity from Omni Health Care Solutions PVT Ltd. Our vision at ThinkAyurvedaFirst™ is to be the global leader in promoting Ayurveda as a holistic approach to health, empowering individuals to prioritize disease prevention and effective disease management</p>
        
        <p>We are committed to providing a comprehensive platform that blends ancient Ayurvedic wisdom with modern technology</p>
        
        <p>
          We aim to make Ayurveda accessible to all through our Android and iOS-compatible App
        </p>
      </div>
      <div className='con2'>
        <div>
          <img src={ImgDoc} alt=""/>
        </div>
      </div>
    </div>
  )
}
