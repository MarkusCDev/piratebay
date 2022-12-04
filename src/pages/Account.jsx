import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Button } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form, Alert } from "react-bootstrap";
import { db } from '../firebase-config';
import { snapshot, onSnapshot, getDoc, setDoc, doc, addDoc, collection } from "firebase/firestore";
import { useEffect } from 'react';


const Account = () => {

  const {user, logOut} = useUserAuth();


  // get specific collection data
const retdata = async () => {
  const docRef = doc(db, "Users", user.email)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().email);
  } else {
    console.log("No such document!")
  }
}
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
      <div className='justify-content-center align-items container d-flex shadow p-3 mb-5 bg-white rounded' >
      
      <button onClick={retdata}></button>
      <Form>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><b>Email Address: </b>{user.email} </Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label><b>Name: </b>{user && user.fname} , {user &&user.lname}  
    </Form.Label> </Form.Group>

    <Form.Group className="mb-3" controlId="formDOB">
        <Form.Label><b >DOB: {user.dob} </b></Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formphonenumber">
        <Form.Label><b > Phone Number: {user&& user.phone} </b></Form.Label>
      </Form.Group>
      

    <Form.Group className="mb-3" controlId="formBasicCard">
        <Form.Label><b >Card Number: {user&& user.card} </b></Form.Label>
        <Form.Control type="new_card" placeholder= "XXXX-XXXX-XXXX-XXXX" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formOldPassword">
        <Form.Label><b>Old Password: {user && user.password} </b></Form.Label>
        <Form.Control type="password" placeholder="Confirm Old Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formNewPassword">
        <Form.Label><b>New Password:  </b></Form.Label>
        <Form.Control type="new_password" placeholder= "Change Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPasswordChange">
        <Form.Label><b>Confirm Password Change: </b></Form.Label>
        <Form.Control type="new_password" placeholder="Re-enter New Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formphonenumber">
        <Form.Label><b > Phone Number: {user&& user.phone} </b></Form.Label>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Confirm Changes" />
      </Form.Group>

      <div className='mt-3'>
      <Button variant="danger" type="submit">
        Submit changes
      </Button>
      </div>
      <div className='mt-3'>
      <Link to="/depositwithdraw"><Button variant="dark" type="deposit/withdraw">
        Deposit/Withdraw
      </Button>
      </Link>
      </div>

      <div className='mt-3'>
      <Link to="/account/add-item"><Button variant="success" type="deposit/withdraw">
        Add Item
      </Button>
      </Link>
      </div>
    </Form> 
        
      </div>
           
    </div>
  )
}

export default Account