import React from 'react'
import logo from '../img/logo.webp'

const header = () => {
  return (
    <div className='header' style={{padding:"30px 100px"}}>
        <img src={logo} alt='logo' width="200px" />
    </div>
  )
}

export default header