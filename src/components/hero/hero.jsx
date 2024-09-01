import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './hero.css'
import b1 from '../../../public/images/banner-01.jpg'
import b2 from '../../../public/images/banner-02.jpg'
import b3 from '../../../public/images/banner-03.jpg'
export default function Hero() {
    const image=[b1,b2,b3];
    const [currentslide, setCurrentslide] =useState(0);
    const left = () => {
        setCurrentslide((Slide) => (Slide === 0 ? image.length - 1 : Slide - 1));
      };
    
      const right = () => {
        setCurrentslide((Slide) => (Slide === image.length - 1 ? 0 : Slide + 1));
      };
  return (
    <>
        <div className='hero'>
            <div className='p'>
                <p >toronto <b style={{color:"#f35525"}}>,canda</b></p>
                
            </div>
            <h3>HURRY! GET THE BEST VILLA FOR YOU</h3>
            <button onClick={left} className='left'><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button onClick={right} className='right'><FontAwesomeIcon icon={faChevronRight} /></button>
            <img src={image[currentslide]} alt=""  className='img'/>

            
        </div>

    </>
  )
}

