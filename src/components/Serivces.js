import React from 'react'
import service1 from '../img/service1.jpg'
import service2 from '../img/service2.jpg'
import service3 from '../img/service3.jpg'

const Serivces = () => {
  return (
    <div className='services'>
        <div className='myCard'>
          <img src={service1} alt='service1' />
          <h3>COME SEE US</h3>
          <div className='line'></div>
          <p>Schedule an appointment with a style guide.<br />We'll take your measurements and walk you<br />through all your suiting options.</p>
        </div>
        <div className='myCard'>
          <img src={service2} alt='service2' />
          <h3>MAKE IT YOUR OWN</h3>
          <div className='line'></div>
          <p>Choose the fabrics you love and the<br />customizations you can't live 
          without-<br />everything from lapels and linings to monograms<br />and contrast
          buttonhole stitching.</p>
        </div>
        <div className='myCard'>
          <img src={service3} alt='service3' />
          <h3>PERFECT THE FIT</h3>
          <div className='line'></div>
          <p>When your suit arrives in arounds four weeks,<br />come back to our showroom
          for any final<br />alterations-our expert tailors will ensure your<br />garment
          fits just right.</p>
        </div>
    </div>
  )
}

export default Serivces