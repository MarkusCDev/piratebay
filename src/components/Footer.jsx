import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export const Footer = () => {
  return (
    <footer className="py-5 w-100 bg-dark" style = {{bottom: '0', right: '0', left: '0'}}>
        <div className="container d-flex justify-content-center">
          <Link className="text-decoration-none" to="/secret"><span className="text-muted">PirateBay Inc. 2022</span></Link>
        </div>
      </footer>
  )
}