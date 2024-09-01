import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
        <div className='nav1'>
          <ul>
            <li><a href="#"><FontAwesomeIcon icon={faEnvelope} className='orange' />info@company.com</a></li>
            <li><a href="#"> <FontAwesomeIcon icon={faMap} className='orange' /> sunny isles Beach, 33160</a></li>
          </ul>
          <ul className='AM-icon'>
            <li><a href="#"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            
          </ul>
          
        </div>
        
        <div className='nav2'>
          <h1>VILLA</h1>
          <div className='ul'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/propertiesPage">Properties</Link></li>
              <li><Link to="/propertyPage" >Prperty Details</Link></li>
              <li><Link to="/contactUs">Contact Us</Link></li>
              
            </ul>
            <div className='div'><FontAwesomeIcon icon={faCalendar} className='ll' /></div> 
            <p className='l'> schedule a visit</p>
          </div>
          

        </div>
    
    </div>
  )
}
