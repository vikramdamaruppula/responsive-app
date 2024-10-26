import React from 'react'
import logo from '../Images/logo.png'
import "./footer.css"

const Footer1 = () => {
  return (
    <footer className='footer-background'>
        <div className='footer-border'>
        <div className='footer-main-container'>
            <div>
                <img src={logo} className='logo-image-footer' alt='footer-logo' />
                <p className='footer-text'>We Help to complete your financial desire by a few steps of the form</p>
            </div>

            <div>
                <h3 className='footer-heading-text'> Company</h3>
                <ul>
                    <li>Who we are</li>
                    <li>Blogs</li>
                    <li>rates & Fees</li>
                    <li>Credit score </li>
                    <li>Credit Repair</li>
                    <li>rates & Fees</li>

                </ul>
            </div>

            <div>
            <h3 className='footer-heading-text'>Important</h3>
                <ul>
                    <li>How It Works</li>
                    <li>About Us</li>
                    <li>Unsubscribe</li>
                    <li>Update preferences</li>
                    <li>Adevrtiser disclosure</li>
                    <li>CCPAs</li>


                </ul>
            </div>
            
            <div>
            <h3 className='footer-heading-text'>Products</h3>
                <ul>
                    <li>Payday Loans</li>
                    <li>Installment loan</li>
                    <li>Personal Loan</li>
                </ul>
            </div>
        </div>
        <hr className='horizontal-footer-line' />
        <div className='footer-foot-background'>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard    
        </p>
    </div>
        </div>

    


    </footer>
  )
}

export default Footer1