import React from 'react'
import Sectionbar from '../components/Sectionbar'
import elipse1 from '../assets/Ellipse 58.png';
import elipse2 from '../assets/Ellipse 59 (1).png';
import elipse3 from '../assets/Ellipse 66.png';
import indus1 from "../assets/indus1.jpeg";
export default function Industry() {
  return (
    <><div className='container' style={{ backgroundColor : '#0e1012', marginTop: '-300px', position: 'relative'}}>
      <div className='indsutry-hero'>
        <h1 style={{ color: 'white' , paddingTop: '422px', position: 'relative'}}>Industry Wise Use Cases</h1>
        <div className='industry-hero-images'>
          <div className='industry-hero-image'><img src={indus1} style={{borderRadius: 25}} alt=''></img></div>
          <div className='industry-hero-image'></div>
          <div className='industry-hero-image'></div>
          <div className='industry-hero-image'></div>
        </div>
      </div>
    </div>
    <div className='elipse2' style={{height: '35px', width: '35px'}}>
      <img src={elipse3} alt=''/>
    </div>
    <div className='elipse3' style={{height: '1300px'}}>
      <img src={elipse1} alt=''/>
    </div>
    <div className='elipse4' style={{height: '1988px'}}>
      <img src={elipse2} alt=''/>
    </div>
    <Sectionbar /></>
  )
}
