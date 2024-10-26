import React, { useState } from 'react'
import logo from "../Images/logo.png"
import burger from "../Images/burger.svg"
import group from '../Images/Group33.svg'
import './header.css'

const Header = () => {
    const [isheader,setIsHeader] =useState(false)

    const handleHeader=()=>{
        setIsHeader(!isheader)
        console.log('cliclev')
    }

  return (
    <div className='header-background'>
    <header >
        <div className='main-header'>
        <div className='header-left'>
            <img src={logo} alt='logo' className='logo-image' />
        </div>
        <div onClick={handleHeader}>
            <img src={burger}  alt="burger" className='hamburger'/>
        </div>
        <div className={` header-right ${isheader?'mobile-header':''} `}>
            <div className='nav'>
            <p>Home </p>
            <p>Loans </p>
            <p>About us</p>
            <p>Blog</p>
            <p>Contact</p>
            </div>
        </div>
        </div>
    </header>


    <section className='section-header-main'>
        <div className='section-header'>
            <div className='section-header-1'>
                <img loading='lazy' src={group} alt='group' className='header-group-image' />
            </div>
            <div className='section-header-2'>
                <div className='header-input-1-container'>
                    <input className='input firstname' placeholder='First Name' />
                    <input className='input lastname' placeholder='Last Name' />
                    <input className='input email' placeholder='Email' />
                </div>
                <div className='loan-container'>
                    <p>Loan Amount ($100-$35000)* </p>
                    <p>$560 </p>
                </div>
                <div>
                  <input type='range' className='range-input' />
                  <div className='check-box-container'>
                    <input type='checkbox' className='check-box' />
                    <p> you agree to our Privacy Policy & Terms, E-consent </p>
                  </div>
                </div>
                <button className='button-header'> Get Started</button>
            </div>
        </div>
    </section>


    </div>
  )
}

export default Header