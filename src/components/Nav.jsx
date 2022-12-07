import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../images/cart.png';
import { Button, Navbar } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import pfp from '../images/pfp.png';
import { Navigate } from 'react-router-dom';


const Nav = () => {

  const {user, logOut} = useUserAuth();



  const handleLogout = async () => {
    try{
      await logOut()
      console.log('you are logged out')
    } catch(e){
      console.log('suss not working')
    }
  }



  console.log("Check user in Private: ", user);
  if (!user) {
   return (
    <header>
    {/* <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom"> */}
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="ms-2 h5">PirateBay</span>
        </Link>

        <div className={"navbar-collapse offcanvas-collapse "}>
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Explore
              </Link>
            </li>
          </ul>
          <Link to="/login" className="nav-link">
              <button className="btn btn-primary" variant="primary">
              Login/SignUp
            </button>
              </Link>

        </div>

      </div>
  </header>
  )
  }
  
  return (
    <header>
      
    {/* <Nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom"> */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="ms-2 h5">PirateBay</span>
        </Link>

        <div className={"navbar-collapse offcanvas-collapse "}>
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Explore
              </Link>
            </li>
          </ul>
          <Link to="/cart">
          <button type="button" className="btn btn-outline-dark me-3 d-none d-lg-inline">
            <img src={cart} alt="cart logo" style={{width: '30px', height: '30px'}} />
            <span className="ms-3 badge rounded-pill bg-dark">0</span>
          </button>
          </Link>

          <Link to="/account">
          <button type="button" className="btn btn-outline-dark me-3 d-none d-lg-inline">
            <img src={pfp} alt="user logo" style={{width: '30px', height: '30px'}} />
          </button>
          </Link>

        
          <button onClick={handleLogout} className="btn btn-primary" variant="primary">
              Log Out
            </button>
        </div>

      </div>
    {/* </nav> */}

  </header>
  )
}

export default Nav