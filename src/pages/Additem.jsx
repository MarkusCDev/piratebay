import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { storage } from "../firebase-config";
import {
  collection,
  snapshot,
  onSnapshot,
  addDoc,
  getDoc,
  setDoc,
  doc,
  query,
  where,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { serverTimestamp, updateDoc } from "firebase/firestore";

const Additem = () => {
  // const items = query(collection(db, "Products"))
  // console.log(items)
  // console.log('test')

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [timelimit, setTimelimit] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagelink, setImageLink] = useState("");
  const [startbid, setStartBid] = useState(0);

  const [imageError, setImageError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [uploadError, setUploadError] = useState("");

  const types = ["image/jpg", "image/png", "image/jpeg", "image/PNG"];

  let navigate = useNavigate();

  const handleProductImg = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setImage(selectedFile);
        setImageError("");
      } else {
        setImage(null);
        setImageError("please select a valid file type (jpg or png");
      }
    } else {
      console.log("please select your file");
    }
  };

  //const dbRef = collection(db, "Products")
  const { user } = useUserAuth();
  const data = {
    seller: user.email,
    title: { title },
    description: { description },
    price: { price },
    keywords: { keywords },
    timelimit: { timelimit },
  };

  const handleAddProducts = (e) => {
    e.preventDefault();
    const storageRef = ref(
      storage,
      "product-images${title.toUpperCase()}/${Date.now()}"
    );
    const num = parseInt(price, 10)
    const sb = parseInt(startbid, 10)
    uploadBytes(storageRef, image).then(() => {
      getDownloadURL(storageRef).then(async (url) => {
        await addDoc(collection(db, "AdminItems"), {
          seller: user.email,
          title,
          description,
          price: num,
          keywords,
          timelimit,
          image: url,
          imagelink,
          timestamp: serverTimestamp(),
          currentbid: 0,
          startbid: sb,
          uid: "",
        })
          .then(async (docRef) => {
            console.log("Document Id:", docRef.id);

            console.log(typeof docRef.id);
            const dref = doc(db, "AdminItems", docRef.id);
            await updateDoc(dref, {
              uid: docRef.id,
            });
          })
          .catch((error) => {
            console.log("Error adding document:", error);
          });
      });
    });
  };

  //  DO NOT DELETE THIS! WILL NEED THIS IN THE FUTURE.
  //   const handleAddProducts = async () =>{
  //     // const items = query(collection(db, "Products"))

  //     // console.log(items)
  //     // console.log('test')
  //     await addDoc(dbRef, data)
  //     .then(docRef => {
  //       console.log("Document Id:", docRef.id)
  //     }).catch(error => {
  //       console.log("Error adding document:", error)
  //     })
  // }

  // get count of products
  // const retdata = async () => {
  //   const snapshot = await getCountFromServer(dbRef)
  //   console.log('count:', snapshot.data().count)
  // }

  // get specific collection data
  // const retdata = async () => {
  //   const docRef = doc(db, "Products", "Sloop")
  //   const docSnap = await getDoc(docRef)

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     console.log("No such document!")
  //   }
  // }

  return (
    <>
      <div style={{ marginTop: "200px" }}></div>
      <div className="container align-item justify-content-center shadow-lg p-5 mb-5 bg-white rounded">
        <div className="text-center">
          <h3>Add Item</h3>
        </div>

        {successMsg && (
          <>
            <div>{successMsg}</div>
          </>
        )}
        {/* <Button onClick={retdata}>Count</Button> */}
        <Form onSubmit={handleAddProducts}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="title"
              placeholder="Title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="description"
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicKeyword">
            <Form.Label>Keyword(s)</Form.Label>
            <Form.Control
              type="keyword"
              placeholder="Keyword(s)"
              required
              onChange={(e) => setKeywords(e.target.value)}
              value={keywords}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTimelimit">
            <Form.Label>Time limit</Form.Label>
            <Form.Control
              type="timelimit"
              placeholder="Auction Timelimit"
              required
              onChange={(e) => setTimelimit(e.target.value)}
              value={timelimit}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicKeyword">
            <Form.Label>Starting Bid</Form.Label>
            <Form.Control
              type="Starting Bid"
              placeholder="Starting Bid"
              required
              onChange={(e) => setStartBid(e.target.value)}
              value={startbid}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPricerange">
            <Form.Label>Buy Now Price</Form.Label>
            <Form.Control
              type="number"
              patter="[0-1000000]*"
              placeholder="Buy Now Price"
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="file">
            <Form.Label>Cover photo</Form.Label>
            <Form.Control
              type="file"
              placeholder="Cover Photo"
              onChange={handleProductImg}
            />
          </Form.Group>
          <Button className="btn btn-success mb-3" type="submit">
            ADD
          </Button>

          {imageError && (
            <>
              <div>{imageError}</div>
            </>
          )}

          {/* <Form.Group className="mb-3" controlId="formBasicExtraphotos">
            <Form.Label>Extra photos</Form.Label>
            <Form.Control
              type="file"
              placeholder="Extra Photos"
            />
          </Form.Group>
          <Button className="btn btn-success mb-4" type="submit">ADD</Button> */}

          <Form.Group className="mb-3" controlId="formBasicPricerange">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image URL"
              required
              onChange={(e) => setImageLink(e.target.value)}
              value={imagelink}
            />
          </Form.Group>

          <div className="d-grid gap-2 mb-2">
            <Button variant="btn btn-primary" type="Submit">
              Submit Item Request
            </Button>
          </div>
        </Form>

        {uploadError && (
          <>
            <div>{uploadError}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Additem;
