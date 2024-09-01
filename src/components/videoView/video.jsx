import React from 'react'
import './video.css'
export default function Video() {
    const data=[
        {h3:34,p:"Bulding finished now"},
        {h3:12,p:"years experience"},
        {h3:24,p:"Awwards won 2023"}
    ]
  return (
    <>
        <div  className='video'>
            <p>Video View</p>
            
            <h3>Get Closser View & Different Feeling</h3>
            <img className='img' src="/public/images/video-frame.jpg" alt="" />
            <img className='background' src="/public/images/banner-03.jpg" alt="" />
        </div>
        <div className='video2'>
            {data.map((item,index) =>
            {
                return(
                    <div key={index}>
                        <h3>{item.h3}</h3>
                        <p>{item.p}</p>

                    </div>
                )
            })}
        </div>
    </>
  )
}
