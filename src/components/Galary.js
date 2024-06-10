import React from 'react'
import galary1 from '../img/galary1.avif'
import galary2 from '../img/galary2.avif'
import galary3 from '../img/galary3.avif'
import galary4 from '../img/galary4.avif'
import galary5 from '../img/galary5.avif'
import galary6 from '../img/galary6.avif'
import galary7 from '../img/galary7.avif'
import galary8 from '../img/galary8.avif'
import galary9 from '../img/galary9.avif'
import galary10 from '../img/galary10.avif'

const Galary = () => {
  const imageData=[galary1,galary2,galary3,galary4,galary5,galary6,galary7,galary8,galary9,galary10]
  return (
    <div className='galary'>
        <h2>#INDOCHINO</h2>
        <div className='images'>
            {
                imageData.map((image,index)=>
                  <img key={index} src={image} alt={`galary${index+1}`} />
                )
            }
        </div>
    </div>
  )
}

export default Galary