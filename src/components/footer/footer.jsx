import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <section className='footer'>
        <p>CopyRight <FontAwesomeIcon icon={faCopyright} /> 2048 Villa Agency Co., ltd All Right reserved . Desgin :templateMo</p>

    </section>
  )
}

