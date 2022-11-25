import React from 'react';
import img from '../images/psword.jpg';
import { Link } from 'react-router-dom';


const PopularProduct = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={img}
        />
        <div className="card-body">
          <h5 className="card-title text-center">Pirate Sword</h5>
          <p className="card-text text-center text-muted">$1,000 USD</p>
          <div className="d-grid gap-2">
            <Link to="/products/1" className="btn btn-outline-dark" replace>
              View Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularProduct