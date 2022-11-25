import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Button } from "react-bootstrap";
import { Navigate } from 'react-router-dom';

const Account = () => {


  const {user, logOut} = useUserAuth();

  const handleLogout = async () => {
    try{
      await logOut()
      console.log('you are logged out')
    } catch(e){
      console.log('suss not working')
    }
  }

  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5' style={{marginTop: '200px'}}>
      <div className='justify-content-center align-items'>
          Email Address: {user && user.email}
      </div>
      <div className="d-grid gap-2">
            <button onClick={handleLogout} className="btn btn-primary" variant="primary">
              Log Out
            </button>
          </div>
    </div>
  )
}

export default Account