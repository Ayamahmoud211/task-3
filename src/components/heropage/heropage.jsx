import React from 'react'
import './heropage.css'
export default function Heropage(props) {
  return (
    <section className='hero1'>
        
        <p>Home/{props.des}</p>
        <h2>{props.title}</h2>
    </section>
  )
}
