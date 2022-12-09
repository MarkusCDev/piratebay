import React, {useEffect, useState } from 'react';
import img from '../images/psword.jpg';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useUserAuth } from '../context/UserAuthContext';

const PopularProduct = () => {

  const {user} = useUserAuth();
  const [userdata, setUserData] = useState(null);
  
  const retdata = async () => {
    var x = "wwmZJOlVNLEy8DOEASd3"
    const docRef = doc(db, "Products", x)
    const docSnap = await getDoc(docRef)
    setUserData(docSnap.data())
    console.log(docSnap.data())
  }
  useEffect(()=>{
      retdata();
  }, [user])









  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={userdata?.image}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{userdata?.title}</h5>
          <p className="card-text text-center text-muted">${userdata?.price} USD</p>
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