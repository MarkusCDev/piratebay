import React from 'react'
import discount from '../images/discount.jpg'

const Secret = () => {
  return (
    <div style={{ width: '100%', height: 1000, position: 'relative', padding: 50 }}>
      <img
        src={discount}
        style={{
          width: '100%',
          height: '300px',
          objectPosition: 'center',
          objectFit: 'none'
        }} />
      <div style={{ textAlign: "center", padding: 15 }}>
        <h1>Coupon code: CSC33600</h1>
      </div>
      <img
        src="https://media.giphy.com/media/4QF0GV1h5cxAYSya6R/giphy.gif"
        alt="Dancing Pirate"
        style={{
          width: '100%',
          height: '50%',
          objectPosition: 'center',
          objectFit: 'none'
        }}
      />
    </div>
  )
}

export default Secret