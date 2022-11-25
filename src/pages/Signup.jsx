import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
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
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div style = {{ marginTop: '200px'}}><h2 className="Auth-form-title text-center">Sign Up</h2></div>
      <div className="container w-40 p-3 mt-5 d-flex align-item justify-content-center">
        {error && <Alert variant="danger">{error}</Alert>}
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
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;