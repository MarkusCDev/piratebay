import React from "react";
import { Link } from "react-router-dom";
import cart from "../images/cart.png";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import pfp from "../images/pfp.png";
import { Navigate } from "react-router-dom";
import {
  snapshot,
  onSnapshot,
  getDoc,
  getDocs,
  setDoc,
  doc,
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logOut } = useUserAuth();

  const [userdata, setUserData] = useState(null);

  const retdata = async () => {
    const docRef = doc(db, "Users", user.email);
    const docSnap = await getDoc(docRef);
    setUserData(docSnap.data());
    console.log("items in cart " + docSnap.data().cartitems.length);
  };
  useEffect(() => {
    retdata();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("you are logged out");
    } catch (e) {
      console.log("suss not working");
    }
  };

  //console.log("Check user in Private: ", user.email);
  if (!user) {
    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <span className="ms-2 h5">PirateBay</span>
            </Link>

            <div className={"navbar-collapse offcanvas-collapse "}>
              <ul className="navbar-nav me-auto mb-lg-0">
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    Explore
                  </Link>
                </li>
              </ul>
              <Link to="/login" className="nav-link">
                <button className="btn btn-primary" variant="primary">
                  Login/SignUp
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  } 
  else if (user.email === 'admin@aol.com') {
  return(
  <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="ms-2 h5">PirateBay</span>
        </Link>

        <div className={"navbar-collapse offcanvas-collapse "}>
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Explore
              </Link>
            </li>
          </ul>
          

          <Link to="/account">
            <button
              type="button"
              className="btn btn-outline-dark me-3 d-none d-lg-inline"
            >
              {/* <img src={pfp} alt="user logo" style={{ width: '20px', height: '20px' }} /> */}
              Console
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="btn btn-primary"
            variant="primary"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  </header>
  )
  }
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="ms-2 h5">PirateBay</span>
          </Link>

          <div className={"navbar-collapse offcanvas-collapse "}>
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Explore
                </Link>
              </li>
            </ul>
            <Link to="/cart">
              <button
                type="button"
                className="btn btn-outline-dark me-3 d-none d-lg-inline"
              >
                <img
                  src={cart}
                  alt="cart logo"
                  style={{ width: "20px", height: "20px" }}
                />
                <span
                  className="ms-2 badge rounded-pill bg-dark"
                  style={{ color: "white" }}
                >
                  {userdata?.cartitems.length}
                </span>
              </button>
            </Link>

            <Link className="text-decoration-none " to="/account/banking">
              <button
                type="button"
                className="btn btn-outline-dark me-3 d-none d-lg-inline"
              >
                ${userdata?.money}
              </button>
            </Link>

            <Link to="/account">
              <button
                type="button"
                className="btn btn-outline-dark me-3 d-none d-lg-inline"
              >
                {/* <img src={pfp} alt="user logo" style={{ width: '20px', height: '20px' }} /> */}
                {userdata?.fname} {userdata?.lname}
              </button>
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-primary"
              variant="primary"
            >
              Log Out
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
