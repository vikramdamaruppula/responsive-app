import React from 'react'
import form1 from "../Images/form1.png"
import form2 from "../Images/form2.png"
import form3 from "../Images/form3.png"
import form4 from "../Images/form4.png"
import "./middle.css"

const MiddleSection = () => {
  return (
    <section className='middle-background'>
        <div className='middle-main-container'>
            <div className='middle-left-container'>
                <h3 className='middle-heading'>How does it works?</h3>
                <p className='guide-text'>Your Guide to Getting a Loan</p>
                <p className='middle-description'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

            <button className='button'> Get Started </button>

            </div>
            <div className='middle-image-container'>
                <div>
                <img src={form1} alt="form1" className='middle-image' />
                <img src={form2} alt="form1" className='middle-image' />
                </div>
                <div>
                <img src={form3} alt="form1" className='middle-image' />
                <img src={form4} alt="form1" className='middle-image' />
                </div>
                
            </div>

        </div>
    </section>
    
  )
}

export default MiddleSection