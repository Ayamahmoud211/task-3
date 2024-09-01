import React from 'react'
import './best.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
export default function Best() {
    const data1=[

        {h3:"Appartment"},
        {h3:"Villa Hous"},
        {h3:"Penthous"}
    ];
    const data2=[
        {p:'Total flat space',h3:'185m2'},
        {p:'floor number',h3:'26th'},
        {p:'number of rooms ',h3:'4'},
        {p:'Parking available ',h3:'yes'},
        {p:'Payment process ',h3:'Banl'}
    ]
  return (
    <div className='best'>
        <div className='div1'>
            <div className='div11' >
                <p>Best Deal</p>
                <h3>Find your best deal right now!</h3>
            </div>
            <div className='div12'>
                {data1.map((item,index) =>
                {
                    return(
                        <div key={index}>
                            <h3>{item.h3}</h3>
                        </div>
                    )
                })}

            </div>
        </div>
        <div className='div2'>
            <div className='div21'>
            {data2.map((item,index) =>
                {
                    return(
                        <div key={index}>
                            <p>{item.p}</p>
                            <h3>{item.h3}</h3>
                        </div>
                    )
                })}

            </div>
            <div>
                <img src="/public/images/deal-01.jpg" alt="" />
            </div>
            <div className='div23'>
                <h4>Extra info About Property</h4>
                <p className='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolorem, distinctio fugiat consectetur laboriosam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae culpa voluptas natus</p>
                <p className='p'>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                <div>
                   <div className='div'><FontAwesomeIcon icon={faCalendar} className='ll' /></div> 
                   <p className='l'> schedule a visit</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
