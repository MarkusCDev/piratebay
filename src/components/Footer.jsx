import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

//display flex, display direction collum, flex grow

export const Footer = () => {
  return (
    <footer className="py-2 w-100 bg-dark" style={{ position: 'fixed', bottom: '0' }}>
      <div className="container d-flex justify-content-center">
        <Link className="text-decoration-none" to="/secret"><span className="text-muted">PirateBay Inc. 2022</span></Link>
      </div>
    </footer>
  )
}