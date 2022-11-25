import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


const Signup = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault()

    signup(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <>
     <div className="container mt-5 d-flex align-item justify-content-center">
     <div className="card">
      <div className="card-body">
        <h2 className="text-center mb-4">Sign Up</h2>
        <div className="form">
          <div className="form-group">
            <div className="form-label">Email</div>
            <div className="form-control" type="email" ref={emailRef} required />
          </div>
          <div className="form-group">
            <div className="form-label">Password</div>
            <div className="form-control" type="password" ref={passwordRef} required />
          </div>
          <div className="form-group">
            <div className="form-label">Password Confirmation</div>
            <div className="form-control" type="email" ref={passwordConfirmRef} required />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </div>
     </div>

    </div>
    <div className="w-100 text-center mt-2">
      Already have an account?  
      <Link to="/login" className='px-2'>Login</Link>
    </div>

    
    
    </>
  )
}

export default Signup