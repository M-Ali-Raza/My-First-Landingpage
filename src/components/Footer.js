import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='social-icons'>
            <FontAwesomeIcon icon={faFacebookF}className='icons' />
            <FontAwesomeIcon icon={faXTwitter}className='icons' />
            <FontAwesomeIcon icon={faInstagram} className='icons'/>
        </div>
        <p style={{paddingTop:'20px'}}>Copyright 2006-2017 Indochino Inc All rights reserved</p>
        <a href='/'>See contest terms and conditions</a>
    </div>
  )
}

export default Footer