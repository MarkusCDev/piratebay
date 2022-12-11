import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase-config";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";

const Signup = () => {

  const [money, setMoney] = useState(0);
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

  const addUserdata = async (e) => {
    await setDoc(doc(db, 'Users', email), {
      email,
      password,
      fname,
      lname,
      phone,
      dob,
      money: 0,
      rating: 5,
      warning: 0
    })
      // await setDoc(docRef, data)
      .then(docRef => {
        console.log("Document Id:", docRef.id)
      }).catch(error => {
        console.log("Error adding document:", error)
      })
  }

  return (
    <div className='row-cols-lg-3 g-4 px-md-5' style={{ marginTop: '200px' }}>
      <div className='justify-content-center align-items container shadow p-3 mb-5 bg-white rounded' >
        <h3 className='text-center'>Sign Up</h3>
        <div className="container w-40 pt-3 d-flex align-item justify-content-center">{error && <Alert variant="danger">{error}</Alert>} </div>
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
              type="text"
              pattern="\d{3}-\d{3}-\d{4}"
              placeholder="Phone: xxx-xxx-xxxx"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDob">
            <Form.Control
              type="text"
              pattern="\d{2}/\d{2}/\d{2}"
              placeholder="mm/dd/yy"
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
          <div className="p-4 box mt-3 text-center">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;