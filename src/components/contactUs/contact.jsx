import React from 'react'
import './contact.css'
import emil from '../../../public/images/email-icon.png'
import phone from '../../../public/images/phone-icon.png'

export default function Contact() {
  const data=[
    {img:phone,h2:'010-020-0340',p:'phone Number'},
    {img:emil,h2:'info@villa.co',p:'Business Emial'}
  ]
  return (
    <>
    <div className='contact'>
        <div className='titile'>
            <p>Contact Us</p>
            <h3>Get in touch with our agent</h3>
            <img className='background' src="/public/images/contact-bg.jpg" alt="" />
        </div>
        
          <div className='div2'>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.044484467344!2d-80.10441745413671!3d25.93914628600728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2snl!4v1723985494906!5m2!1sar!2snl"height="450" ></iframe>
            <div className='div21'>
              {data.map((item,index) =>
                {
                  return(
                    <div key={index} className='child'>
                      <img src={item.img} alt="" />
                      <div>
                        <h2>{item.h2}</h2>
                        <p>{item.p} </p>
                      </div>
                    </div>
                  )
                }

              )}
            </div> 
          </div>
          <div className='label'>
            <form>
              <label >Full Name</label>
              <input type='text' placeholder='Your Name'></input>
              <label >Email Addres</label>
              <input type='email' placeholder='Your E-mail'></input>
              <label >Subject</label>
              <input type='text' placeholder='Subject'></input>
              <label>Message</label>
              <textarea rows={6} placeholder='Your Message'></textarea>
              <button>Send Message</button>
            </form>
           
          </div>

          
      </div>
    </>
  )
}
