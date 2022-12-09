import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Button } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form, Alert } from "react-bootstrap";
import { db } from '../firebase-config';
import { snapshot, onSnapshot, getDoc, getDocs, setDoc, doc, addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { updatePassword } from '@firebase/auth';


const Account = () => {
  const { user } = useUserAuth();

  function changePassword(newPassword) {
    return updatePassword(user, newPassword).then(() => {
      console.loga("Password updated")
    }).catch(err => {
      console.log("Password did not change")
    });
  }

  // get specific collection data
  const [userdata, setUserData] = useState(null);
  const retdata = async () => {
    const docRef = doc(db, "Users", user.email)
    const docSnap = await getDoc(docRef)

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data().email);
    setUserData(docSnap.data())
    // } else {
    //   console.log("No such document!")
    // }

    console.log(userdata)
  }
  useEffect(() => {
    retdata();
  }, [user])

  // can be used for SU to get all Users
  //  const [userdata, setUserData] = useState([]);

  //   const fetchPost = async () => {

  //     const ref = await doc(db, "Users", user.email)
  //     docSnap = await getDoc(ref)

  //       await getDoc(collection(db, "Users", user.email))
  //           .then((querySnapshot)=>{               
  //               const newData = querySnapshot.docs
  //                   .map((doc) => ({...doc.data(), id:doc.id }));
  //               setUserData(newData);                
  //               console.log(userdata, newData);
  //           })

  //   }

  //   useEffect(()=>{
  //       fetchPost();
  //   }, [])

  // code for function above

  return (
    <div className='row-cols-lg-3 g-4 px-md-5' style={{ marginTop: '200px' }}>
      <div className='justify-content-center align-items container shadow p-3 mb-5 bg-white rounded' >
        <h3 className='text-center'>Account Info</h3>
        {/* <button className='btn btn-success' onClick={retdata}></button> */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><b>Email Addresss: </b>{user.email} </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label><b>Name: </b>{userdata?.fname} {userdata?.lname}
            </Form.Label> </Form.Group>

          <Form.Group className="mb-3" controlId="formDOB">
            <Form.Label><b >DOB: </b>{userdata?.dob} </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formphonenumber">
            <Form.Label><b > Phone Number: </b>{userdata?.phone} </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formOldPassword">
            <Form.Label><b>Old Password: {user && user.password} </b></Form.Label>
            <Form.Control type="password" placeholder="Confirm Old Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNewPassword">
            <Form.Label><b>New Password:  </b></Form.Label>
            <Form.Control type="new_password" placeholder="Change Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordChange">
            <Form.Label><b>Confirm Password Change: </b></Form.Label>
            <Form.Control type="new_password" placeholder="Re-enter New Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formphonenumber">
            <Form.Label><b > Phone Number: {user && user.phone} </b></Form.Label>
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
            <Link to="/account/banking"><Button variant="dark" type="deposit/withdraw">
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