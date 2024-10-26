import React from 'react'
import logo from '../Images/logo.png'
import whyChoose from "../Images/whychooseus.png"
import subtract from '../Images/Subtract.svg'
import subtractright from '../Images/Subtractright.svg'


import "./bottom.css"

const data = [
    {
        name:'Lender Approval is simple',
        description:'We"ve designed our process to be quick,easy and efficient',
        imgurl:''
    },
    {
        name:'Lender Approval is simple',
        description:'We"ve designed our process to be quick,easy and efficient',
        imgurl:''
    },
    {
        name:'Lender Approval is simple',
        description:'We"ve designed our process to be quick,easy and efficient',
        imgurl:''
    },
    {
        name:'Lender Approval is simple',
        description:'We"ve designed our process to be quick,easy and efficient',
        imgurl:''
     }
]

const Bottom = () => {
  return (
    <section className='bottom-section-background'>


        <div className='choose-us-main'>
            <div className='choose-us-container'>
                <p className='why-text'>Why People <span className='choose-text'> Choose </span> <span className='us'> Us </span> </p>
            </div>
            <div className='choose-us-container'>
                <img src={whyChoose}  className='image-choose-us' alt='why-choose' />
            </div>
            <div className='choose-us-container'>
                {data.map((item)=>{
                    return(
                        <div className='choose-description-container'>
                            <div>
                                <div className='diamond'></div>
                            </div>
                            <div className='description-content'>
                            <h3 className='choose-description-heading'> {item?.name} </h3>
                            <p className='choose-description-content'> {item?.description} </p>
                            <hr />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>


        <div className='bottom-container'>
        <img src={subtractright} className='image-right-bottom' />

            <ul className='bottom-text-container'>
                <li className='para-1'>Explore your </li> 
                <li className='para-2'> Financial Desire  </li> 
                <li className='para-1'> With Us </li>  
                <li className='para-4'>Unlock your personal loan today </li>
            </ul>

            <hr className='horizontal-line-bottom' />

            <p className='bottom-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

            <button className='button'> Get Started </button>
        <img src={subtract} className='image-left-bottom' />

        </div>
    </section>
  )
}

export default Bottom