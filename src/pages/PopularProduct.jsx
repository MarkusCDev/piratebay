import React, { useEffect, useState } from 'react';
import img from '../images/psword.jpg';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useUserAuth } from '../context/UserAuthContext';

const PopularProduct = ({pro_img, pro_title, pro_price, pro_uid, pro_rating}) => {
  const prolinking = "/products/"
  const redirect = prolinking + pro_uid

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={pro_img}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{pro_title}</h5>
          <p className="card-text text-center text-muted">${pro_price} USD</p>
          {/* <p className="card-text text-center text-muted">Rating: {pro_rating}</p> */}
          {/* <p className="card-text text-center text-muted">{redirect}</p> */}

          <div className="d-grid gap-2">
            <Link to={redirect} className="btn btn-outline-dark" replace>
              View Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularProduct