import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export const Footer = () => {
  return (
    <footer className="bg-dark" style={{position: 'absolute', left: '0', bottom: '0', right:'0'}}>
        <div className="container d-flex justify-content-center">
          <Link to="/secret"><span className="text-muted">PirateBay Inc. 2022</span></Link>
        </div>
      </footer>
  )
}