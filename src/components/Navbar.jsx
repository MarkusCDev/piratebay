import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../images/cart.png';



const Navbar = () => {
  return (
    <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
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
          <Link to="/Cart">
          <button type="button" className="btn btn-outline-dark me-3 d-none d-lg-inline">
            <img src={cart} alt="cart logo" style={{width: '30px', height: '30px'}} />
            <span className="ms-3 badge rounded-pill bg-dark">0</span>
          </button>
          </Link>
          <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login/Signup
                {/* add state object here */}
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
  )
}

export default Navbar