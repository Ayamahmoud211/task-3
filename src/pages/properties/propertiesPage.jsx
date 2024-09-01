import React from 'react'
import Cards from '../../components/cards/cards'
import './propertiesPage.css'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Heropage from '../../components/heropage/heropage'



export default function Prop() {
  
  return (
    <section className='PrpertiesPage'>
    <Heropage title = "Properties" des ="Properties" />
    <div className='buttons'>
      <button>ٍShow All</button>
      <button>Apartment</button>
      <button>Villa House</button>
      <button>Penthouse</button>
    </div>
      <Cards />
      <div className='div'>
        <div><p>1</p></div>
        <div><p>2</p></div>
        <div><p>3</p></div>
        <div className='icon'><FontAwesomeIcon icon={faAnglesRight} /></div>
      </div>
    </section>
  )
}
