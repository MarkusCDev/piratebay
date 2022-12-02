import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Button } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
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
      <Form>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><b>Email Address: </b>{user && user.email} </Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label><b>Name: </b>{user && user.fname} , {user &&user.lname}  
    </Form.Label> </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCard">
        <Form.Label><b >Cardinfo: {user&& user.card} </b></Form.Label>
        <Form.Control type="new_card" placeholder= "XXXX-XXXX-XXXX-XXXX" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formOldPassword">
        <Form.Label><b>Old Password: {user && user.password} </b></Form.Label>
        <Form.Control type="password" placeholder="Confirm old password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formNewPassword">
        <Form.Label><b>New Password:  </b></Form.Label>
        <Form.Control type="new_password" placeholder= "change password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPasswordChange">
        <Form.Label><b>Confirm Password Change: </b></Form.Label>
        <Form.Control type="new_password" placeholder="re-enter new pass-word" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDOB">
        <Form.Label><b >DOB: {user&& user.dob} </b></Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formphonenumber">
        <Form.Label><b > Phonenumber: {user&& user.phone} </b></Form.Label>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Confirm Changes" />
      </Form.Group>

      
      <Button variant="danger" type="submit">
        Submit changes
            
      </Button>
      <Button variant="dark" type="deposit/withdraw">
        Deposit/Withdraw
            
      </Button>
    </Form> 
        
      </div>
           
    </div>
  )
}

export default Account