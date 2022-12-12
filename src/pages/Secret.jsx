import React from 'react'
import discount from '../images/discount.jpg'

const Secret = () => {
  return (
    <div style={{ marginTop: '200px' }} className="container align-item justify-content-center shadow-lg p-5 mb-5 bg-white rounded">
      <div className="text-center"><h3 style={{ fontSize: '30px', color: 'red' }}>A pirate always finds treasure!</h3></div>
      <img
        src={discount}
        style={{
          width: '100%',
          height: '300px',
          objectPosition: 'center',
          objectFit: 'none'
        }} />
      <div style={{ textAlign: "center", padding: 0 }}>
        <h1 style={{ color: 'green' }}>Coupon code: CSC32200</h1>
      </div>
      <div className='mt-3 d-flex justify-contnet-center'><img
        src="https://media.giphy.com/media/4QF0GV1h5cxAYSya6R/giphy.gif"
        alt="Dancing Pirate"
        style={{
          width: '100%',
          height: '400px',
          objectPosition: 'center',
          objectFit: 'none'
        }} />
      </div>
    </div>
  )
}

export default Secret