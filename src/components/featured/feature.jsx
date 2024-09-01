import React from 'react'
import './feature.css'
export default function Feature() {
  return (
    <div className='feature'>
        <div>
            <img src="/public/images/featured.jpg" alt="" className='img1'/>
            <img src="/public/images/featured-icon.png" alt="" className='img'/>
        </div>
        <div>
            <div>
                <p className='p1'>FEATURED</p>
                <h3 className='h3'>Best Appartment& Sea View</h3>
            </div>
            <div className='div'>
                <p className='best'>Best useful links ?</p>
                
                <p className='get'>Get <b>the best villa </b>website template in HTML CSS and Bootstrap for your business. TempleteMo provides you the <b style={{color:"#f35525"}}> best free CSS template </b>in the world. Please tell your friends about it.</p>
                <p className='how'>How does this work?</p>
                
                <p className='why'>Why is Vila Agency the best? </p>

            </div>
        </div>
        <div className='div2'>
            <div className='divChild border' >
                <img src="/public/images/info-icon-01.png" alt="" />
                <div>
                    <p>250 m2</p>
                    <p >total flat space</p>
                </div>
            </div>
            <div className='divChild border'>
                <img src="/public/images/info-icon-02.png" alt="" />
                <div>
                    <p>Contract</p>
                    <p  >Contract Ready</p>
                </div>
            </div>
            <div className='divChild border'>
                <div>
                    <img src="/public/images/info-icon-03.png" alt="" />
                    <p>Process</p>
                </div>
                <div>
                    <p>Payment</p>
                    <p  >Payment</p>
                </div>
            </div>
            <div className='divChild'>
                <div>
                    <img src="/public/images/info-icon-04.png" alt="" />
                    <p>Control</p>
                </div>
                <div>
                    <p>Saftey</p>
                    <p>24/7 Under</p>
                </div>
            </div>
        </div>
    </div>
  )
}
