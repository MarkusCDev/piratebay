import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase-config";
import { getDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { Button, Form } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";

function Product1() {
  const { user } = useUserAuth();
  const { uid } = useParams();
  const [userdata, setUserData] = useState(null);
  const [userr, setUserr] = useState(null);
  const [newbid, setBid] = useState(0);
  const [getrating, setRating] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const retdata = async () => {
    const x = uid;
    //const y = "GwWMZqqEESpwLTS5ad44";

    // if (x == y) {
    //   console.log("same");
    // } else {
    //   console.log("not same");
    // }

    const docRef = doc(db, "Products", x);
    const docSnap = await getDoc(docRef);
    //console.log(x);
    //console.log(y);
    setUserData(docSnap.data());
    const proseller = docSnap.data().seller
    const docRef2 = doc(db, "Users", proseller)
    const docSnap2 = await getDoc(docRef2);
    setRating(docSnap2.data());

  };

  const addtocart = async (ptitle, pprice, pimg, pseller) => {
    const data = {
      id: uid,
      title: ptitle,
      price: pprice,
      img: pimg,
      seller: pseller,
    };

    const docRef2 = doc(db, "Users", user.email);
    await updateDoc(docRef2, {
      cartitems: arrayUnion(data),
    });
    window.location.reload(true);
  };

  //   const docRef = doc(db, "Products", x)
  //   const docSnap = await getDoc(docRef)
  //   console.log(x)
  //   console.log(y)
  //   setUserData(docSnap.data())
  // }
  // const Userr = async () => {
  //   const o = {userdata?.seller}
  //   const docRef2 = doc(db, "Users", o)
  //     const docSnap2 = await getDoc(docRef2)
  //     setUserr(docSnap2.data())
  // }

  const UpdateBid = async (e) => {
    e.preventDefault();
    
    const docRef0 = doc(db, "Users", user.email);
    const docSnap0 = await getDoc(docRef0)

    const x = uid;
    const docRef = doc(db, "Products", x);
    const docSnap = await getDoc(docRef)
    const highestbid = parseInt(newbid, 10); 

    if (highestbid >= docSnap.data().startbid && docSnap0.data().money >= highestbid) {
      await updateDoc(docRef, {
        startbid: highestbid,
      });
      window.location.reload(true);
    } 
  }



  useEffect(() => {
    retdata();
  }, [user]);

  return (
    <>
      <div
        style={{ marginTop: "200px " }}
        className="shadow-lg p-3 mb-2 bg-white rounded container"
      >
        <div className="row mb-4">
          {/* Product pain photo*/}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12 mb-4">
                <img
                  className="border rounded ratio ratio-1x1"
                  alt=""
                  height="500px"
                  src={userdata?.imagelink}
                />
              </div>
            </div>

            {/* Extra product images*/}
            <div className="row mt-2">
              <div className="col-12">
                <div
                  className="d-flex flex-nowrap"
                  style={{ overflowX: "scroll" }}
                >
                  {Array.from({ length: 8 }, (_, i) => {
                    return (
                      <a key={i}>
                        <img
                          className="cover rounded mb-2 me-2"
                          width="70"
                          height="70"
                          alt=""
                          src={userdata?.imagelink}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="d-flex flex-column h-100">
              <h2 className="mb-1">{userdata?.title}</h2>
              <h4 className="text-muted">Time Remaining: </h4>

              <div className="row g-3 mb-4">
                <div className="col">
                  <button className="btn btn-outline-dark py-2 w-100">
                    Bid: ${userdata?.startbid} USD
                  </button>
                </div>

                <div className="col">
                  <Link to="/cart">
                    <button
                      className="btn btn-dark py-2 w-100"
                      onClick={() =>
                        addtocart(
                          userdata?.title,
                          userdata?.price,
                          userdata?.imagelink,
                          userdata?.seller
                        )
                      }
                    >
                      Buy now: ${userdata?.price} USD
                    </button>
                  </Link>
                </div>
              </div>

              <Form onSubmit={UpdateBid}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicPasswordChange"
                >
                  <Form.Label>
                    <b>Enter Bid: </b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    onChange={(e) => setBid(e.target.value)}
                    placeholder="Enter Higher Bid"
                  />
                </Form.Group>
                <Button type="submit">Submit Bid</Button>
              </Form>

              {/* Description of product details */}

              <h4 className="mb-0">Details</h4>
              <hr />
              <dl className="row">
                <dt className="col-sm-4">Product #:</dt>
                <dd className="col-sm-8 mb-3">{uid}</dd>
                <dt className="col-sm-4">Starting Bid:</dt>
                <dd className="col-sm-8 mb-3">${userdata?.startbid} USD</dd>
                <dt className="col-sm-4">Category</dt>
                <dd className="col-sm-8 mb-3">{userdata?.keywords}</dd>
                <dt className="col-sm-4">Rating</dt>
                <dd className="col-sm-8 mb-3">{getrating?.rating}/5</dd>
                <dt className="col-sm-4">Seller</dt>
                <dd className="col-sm-8 mb-3">{userdata?.seller}</dd>
              </dl>

              <h4 className="mb-0">Description</h4>
              <hr />
              <p className="lead flex-shrink-0">
                <small>{userdata?.description}</small>
              </p>
              <div>
                <button className="btn btn-dark py-2 w-40" onClick={handleShow}>
                  Report Item
                </button>
                {/* <button className="ms-3 btn btn-dark py-2 w-40">
                  Add Review
                </button> */}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Reason :</Form.Label>
                        <Form.Control type="email" autoFocus />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Report :</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <button
                        style={{ float: "right" }}
                        className="btn btn-dark"
                      >
                        Submit
                      </button>
                    </Form>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style = {{ marginTop: '50px '}}>
    <div style = {{ marginTop: '25px '}} className="shadow-lg p-3 mb-5 bg-white rounded container">
                  Review 1
    </div>
    <div style = {{ marginTop: '25px '}} className="shadow-lg p-3 mb-5 bg-white rounded container">
                  Review 2
    </div>
    <div style = {{ marginTop: '25px '}} className="shadow-lg p-3 mb-5 bg-white rounded container">
                  Review 3
    </div>
    </div> */}
    </>
  );
}
export default Product1;
