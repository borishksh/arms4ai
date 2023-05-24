import React from 'react'
import Sectionbar from '../components/Sectionbar'

export default function Industry() {
  return (
    <div className='container'>
      <div className='indsutry-hero'>
          <h1>Industry Wise Use Cases</h1>
          <p className='center-para'>
          Our vision is to enable the entire Global Geospatial Ecosystem with cutting edge Technology & 
          Solutions Designed and Made in India Product. with appropriate technology and solution that
          solves the problem of manual scavenging and indefinite time consumption forever that
          open doors to analysis driven approach further.
          </p>
          <div className='industry-hero-images'>
            <div className='industry-hero-image'></div>
            <div className='industry-hero-image'></div>
            <div className='industry-hero-image'></div>
            <div className='industry-hero-image'></div>
          </div>
      </div>
      <Sectionbar/>
    </div>
  )
}
