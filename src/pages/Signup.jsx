import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
// <<<<<<< Updated upstream
import { db } from "../firebase-config";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";

import im from '../images/lightBLUE.jpg.jpg';

// >>>>>>> Stashed changes

const Signup = () => {

  const {user} = useUserAuth();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      await addUserdata()
      navigate("/");
    } catch (err) {
      setError(err.message);
    }


  };
  
  const dbRef = collection(db, 'Users');

  // const docRef = doc(db, 'Users', email)
  // const data = {
  //   email: {email},
  //     password: {password},
  //     fname: {fname},
  //     lname: {lname},
  //     phone: {phone},
  //     dob: {dob},
  // }


   const addUserdata = async (e) => {
    await setDoc(doc(db, 'Users', email), {
      email,
      password,
      fname,
      lname,
      phone,
      dob
    })
    // await setDoc(docRef, data)
    .then(docRef => {
            console.log("Document Id:", docRef.id)
          }).catch(error => {
            console.log("Error adding document:", error)
          })
   }






  return (
    <>
{/* <<<<<<< Updated upstream */}
    <div style = {{ marginTop: '50px'}}><h2 className="Auth-form-title text-center">Sign Up</h2></div>

{/* >>>>>>> Stashed changes */}
    <div className="container w-40 pt-3 d-flex align-item justify-content-center">{error && <Alert variant="danger">{error}</Alert>} </div>
      <div className="container w-40 d-flex align-item justify-content-center">
        
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicFname">
            <Form.Control
            
              type="fname"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLname">
            <Form.Control
              type="lname"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Control
              type="phone"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicDob">
            <Form.Control
              type="DOB"
              placeholder="mm/dd/yr"
              onChange={(e) => setDob(e.target.value)}
            />
          </Form.Group>
          
          
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>


          



          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    
    </>
  );
};

export default Signup;
