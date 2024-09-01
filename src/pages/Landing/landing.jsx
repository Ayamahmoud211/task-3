import React from 'react'



import Hero from '../../components/hero/hero'
import Feature from '../../components/featured/feature'
import Video from '../../components/videoView/video'
import Best from '../../components/beastDeal/best'
import Property from '../../components/properties/property'
import Contact from '../../components/contactUs/contact'

export default function Landing() {
  return (
    <>
       <Hero />
      <Feature />
      <Video />
      <Best />
      <Property />
      <Contact />
    
    </>
  )
}

