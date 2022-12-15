import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { db } from "../firebase-config";
import {
  updateDoc,
  snapshot,
  onSnapshot,
  getDoc,
  getDocs,
  setDoc,
  doc,
  addDoc,
  collection,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { updatePassword } from "@firebase/auth";

const Account = () => {
  const { user } = useUserAuth();
  const [userdata, setUserData] = useState(null);
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setNewPasswordConfirm] = useState("");
  const [newphone, setNewPhone] = useState("");
  const [newfname, setNewFname] = useState("");
  const [newlname, setNewLname] = useState("");
  const [newaddy, setAddy] = useState("");
  const [newcard, setCard] = useState("");
  let navigate = useNavigate();

  const retdata = async () => {
    const docRef = doc(db, "Users", user.email);
    const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data().email);
    setUserData(docSnap.data());
    console.log(docSnap.data());
  };

  function changePassword(newpassword) {
    return updatePassword(user, newpassword)
      .then(() => {
        console.log("Password updated");
      })
      .catch((err) => {
        console.log("Password did not change");
      });
  }

  const changedata = async () => {
    if (newfname == "") {
      var nf = userdata?.fname;
    } else {
      var nf = newfname;
    }

    if (newlname == "") {
      var nl = userdata?.lname;
    } else {
      var nl = newlname;
    }

    if (newphone == "") {
      var np = userdata?.phone;
    } else {
      var np = newphone;
    }

    if (newcard == "") {
      var nc = userdata?.card;
    } else {
      var nc = newcard;
    }

    if (newaddy == "") {
      var na = userdata?.address;
    } else {
      var na = newaddy;
    }

    // var nf = newfname
    // var nl = newlname
    // var np = newphone
    var npass = newpassword;

    const docRef = doc(db, "Users", user.email);
    await updateDoc(docRef, {
      fname: nf,
      lname: nl,
      phone: np,
      password: npass,
      address: na,
      card: nc,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changedata();
      console.log(newpassword);
      console.log(confirmpassword);
      if (newpassword == confirmpassword) {
        await changePassword(newpassword);
        // //navigate("/");
        window.location.reload(true);
      }
    } catch (e) {
      console.log("Info did not change");
    }
  };

  useEffect(() => {
    retdata();
  }, [user]);

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
if (user.email === "admin@aol.com") {
  return (
    <div className="row-cols-lg-3 g-4 px-md-5" style={{ marginTop: "200px" }}>
      <div className="justify-content-center align-items container shadow p-3 mb-5 bg-white rounded">
        <h3 className="text-center">Console</h3>

        <div className="text-center">
          <div className="mb-3">
            <Link to="AdminOUApp">
              <Button variant="dark">OU Applications</Button>
            </Link>
          </div>

          <div className="mb-3">
            <Link to="AdminNewItems">
              <Button variant="secondary">New Items</Button>
            </Link>
          </div>
          <div className="mb-3">
            <Link to="/account/AdminUserData">
              <Button className="" variant="primary">
                User Data
              </Button>
            </Link>
          </div>

          <div className="mb-3">
            <Link to="/account/AdminReports">
              <Button className="" variant="info">
                Reports
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} else {
  return (
    <div className="row-cols-lg-3 g-4 px-md-5" style={{ marginTop: "200px" }}>
      <div className="justify-content-center align-items container shadow p-3 mb-5 bg-white rounded">
        <h3 className="text-center">Account Info</h3>
        {/* <button className='btn btn-success' onClick={retdata}></button> */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Email Addresss: </b>
              {user.email}{" "}
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>
              <b>Name: </b>
              {userdata?.fname} {userdata?.lname}
            </Form.Label>{" "}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDOB">
            <Form.Label>
              <b>DOB: </b>
              {userdata?.dob}{" "}
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formphonenumber">
            <Form.Label>
              <b> Phone Number: </b>
              {userdata?.phone}{" "}
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formaddress">
            <Form.Label>
              <b> Address: </b>
              {userdata?.address}{" "}
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formcard">
            <Form.Label>
              <b> Card Number: </b>
              {userdata?.card}{" "}
            </Form.Label>
          </Form.Group>

          {/* ----------------CHANGE INFO------------------- */}

          <Form.Group className="mb-3" controlId="formBasicPasswordChange">
            <Form.Label>
              <b>New Address: </b>
            </Form.Label>
            <Form.Control
              onChange={(e) => setAddy(e.target.value)}
              placeholder="Enter New Address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordChange">
            <Form.Label>
              <b>New Card Number: </b>
            </Form.Label>
            <Form.Control
              onChange={(e) => setCard(e.target.value)}
              placeholder="Enter Card Number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordChange">
            <Form.Label>
              <b>New First Name: </b>
            </Form.Label>
            <Form.Control
              onChange={(e) => setNewFname(e.target.value)}
              type="new_password"
              placeholder="Enter New First Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordChange">
            <Form.Label>
              <b>New Last Name: </b>
            </Form.Label>
            <Form.Control
              onChange={(e) => setNewLname(e.target.value)}
              type="new_password"
              placeholder="Enter New Last Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordChange">
            <Form.Label>
              <b>New Phone Number: </b>
            </Form.Label>
            <Form.Control
              onChange={(e) => setNewPhone(e.target.value)}
              type="new_password"
              pattern="\d{3}-\d{3}-\d{4}"
              placeholder="Enter New Phone #"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNewPassword">
            <Form.Label>
              <b>New Password: </b>
            </Form.Label>
            <Form.Control
              onChange={(e) => setNewPassword(e.target.value)}
              type="new_password"
              placeholder="Enter New Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordChange">
            <Form.Label>
              <b>Confirm Password Change: </b>
            </Form.Label>
            <Form.Control
              onChange={(e) => setNewPasswordConfirm(e.target.value)}
              type="new_password"
              placeholder="Re-enter New Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Confirm Changes" />
          </Form.Group>

          <div className="mt-3">
            <Button variant="danger" type="submit">
              Submit changes
            </Button>
          </div>
          <div className="mt-3">
            <Link to="/account/banking">
              <Button variant="dark" type="deposit/withdraw">
                Deposit/Withdraw
              </Button>
            </Link>
          </div>
          <div className="mt-3">
            <Link to="/account/transaction-history">
              <Button variant="secondary" type="deposit/withdraw">
                Transaction history
              </Button>
            </Link>
          </div>
          <div className="mt-3">
            <Link to="/account/add-item">
              <Button variant="success" type="deposit/withdraw">
                Sell Item
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
}

export default Account;
