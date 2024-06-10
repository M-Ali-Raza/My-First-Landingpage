import React from 'react'
import banner from '../img/banner.png'

const Banner = () => {
  return (
    <div className='banner'>
        <img src={banner} alt='banner' />
        <div className='content'>
            <h1>THE TAILOR IS IN</h1>
            <p>The ultimate custom menswear experience is now open in <b>Chinook Centre.</b></p>
            <b><hr /></b>
            <p>Visit us by April 30 to be entered in a draw for a perfectly tailored wardrobe.</p>
            <div className='myBtn'>BOOK AN APPIONTMENT</div>
        </div>
    </div>
  )
}

export default Banner