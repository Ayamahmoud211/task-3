import React from 'react'
import './property.css'
import img1 from '../../../public/images/property-01.jpg'
import img2 from '../../../public/images/property-02.jpg'
import img3 from '../../../public/images/property-03.jpg'
import img4 from '../../../public/images/property-04.jpg'
import img5 from '../../../public/images/property-05.jpg'
import img6 from '../../../public/images/property-06.jpg'
import Cards from '../cards/cards'
export default function Property() {
    // const data=[
    //     {   id: 0,
    //         div:[
    //             {img:img1,p1:'$2.246.000',p2: 'luxury villa',h3:'18 New street maiami , or 97219',p3:'Bedroom:',
    //              p4:'Bathroom:',p5:'Area:',p6:'floor:',p7:'Parking:',n1:'8',n2:'8',n3:'525m2',n4:'3',
    //              n5:'6 potes'
    //             },
    //             {img:img2,p1:'$1.180.000',p2: 'luxury villa',h3:'45 mid streert florida , or 27001',p3:'Bedroom:',
    //              p4:'Bathroom:',p5:'Area:',p6:'floor:',p7:'Parking:',n1:'6',n2:'5',n3:'450m2',n4:'3',
    //              n5:'8 potes'
    //             },
    //             {img:img3,p1:'$1.460.000',p2: 'luxury villa',h3:'18 old street maiami , or 38450',p3:'Bedroom:',
    //              p4:'Bathroom:',p5:'Area:',p6:'floor:',p7:'Parking:',n1:'5',n2:'3',n3:'225m2',n4:'3',
    //              n5:'10 potes'
    //             }
    //         ]
    //     },
    //     {   id: 1,
    //         div:[
    //             {img:img4,p1:'$5.846.000',p2: 'luxury villa',h3:'12 New street maiami , or 97219',p3:'Bedroom:',
    //              p4:'Bathroom:',p5:'Area:',p6:'floor:',p7:'Parking:',n1:'8',n2:'8',n3:'125m2',n4:'25th',
    //              n5:'4 cars'
    //             },
    //             {img:img5,p1:'$922.600',p2: 'luxury villa',h3:'34 Beach street maiami , or 43680',p3:'Bedroom:',
    //              p4:'Bathroom:',p5:'Area:',p6:'floor:',p7:'Parking:',n1:'6',n2:'5',n3:'180m2',n4:'38th',
    //              n5:'3 cars'
    //             },
    //             {img:img6,p1:'$450.000',p2: 'luxury villa',h3:'34 new street portland , or 16540',p3:'Bedroom:',
    //              p4:'Bathroom:',p5:'Area:',p6:'floor:',p7:'Parking:',n1:'5',n2:'3',n3:'165m2',n4:'26th',
    //              n5:'2 cars'
    //             }
    //         ]
    //     }
    // ]
  return (
    <div className='pro'>
    <div className='div'>
        <p>Properties</p>
        <h3>WE provide The Best Property you like</h3>
    </div>
    <Cards />
    {/* <div className='cards'>
        {data.map((item,index) =>
                    {
                        return(
                            <div key={index} className='all'>
                                {item.div.map((item1,index1) =>
                                    <div key={index1} className='three'>
                                        <img src={item1.img} alt="" />
                                        <div className='div1'>
                                            <p className='p'>{item1.p2}</p>
                                            <p className='p2'>{item1.p1}</p>
                                        </div>
                                        <h3>{item1.h3}</h3>
                                        <div className='div2'>
                                            <div> 
                                                <span>{item1.p3} </span>
                                                <b>{item1.n1}</b>
                                                <br />
                                                <span>{item1.p5} </span>
                                                <b>{item1.n3}</b>
                                                <br />
                                                <span>{item1.p7}</span>
                                                <b>{item1.n5}</b>
                                            </div>
                                            <div>
                                                <span>{item1.p4} </span>
                                                <b>{item1.n2}</b>
                                                <br />
                                                <span>{item1.p6} </span>
                                                <b>{item1.n4}</b>
                                            </div>

                                            
                                        </div>
                                        <button>schdule a visit</button>
                                    </div>
                                    )}
                            </div>
                        )
                    })}
    </div> */}
    </div>
  )
}
