import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { Grid, Table } from "react-bootstrap";
import imgt from "../images/psword.jpg";
import { useUserAuth } from "../context/UserAuthContext";
import {
  doc,
  getDoc,
  onSnapshot,
  collection,
  updateDoc,
  arrayRemove,
} from "@firebase/firestore";
import { db } from "../firebase-config";

const Cart = () => {
  const [items, setItems] = useState([
    //{ name: "Item 1", quantity: 1, product: imgt, price: "$200" },
    // { name: "Item 2", quantity: 1, product: imgt, price: "$500" },
    // { name: "Item 3", quantity: 1, product: imgt, price: "$300" },
  ]);

  const [subtotal, setSubtotal] = useState(0);

  // Event handler for adding items to the cart
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  // Event handler for removing items from the cart
  const handleRemoveItem = async (item) => {
    // setItems(items.filter((i) => i !== item));
    console.log(item);
    const docRef = doc(db, "Users", user.email);
    await updateDoc(docRef, {
      cartitems: arrayRemove(item),
    });
    window.location.reload(true);
  };

  // Event handler for updating the quantity of an item in the cart
  const handleUpdateQuantity = (index, quantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = quantity;
    setItems(updatedItems);
  };

  const { user } = useUserAuth();
  const [userdata, setUserData] = useState(null);
  const [productarray, setProductArray] = useState([]);

  const retdata = async () => {
    const docRef = doc(db, "Users", user.email);
    const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data().email);
    setUserData(docSnap.data());
    console.log(docSnap.data().cartitems);
    setProductArray(docSnap.data().cartitems);
    const totalPrice = docSnap
      .data()
      .cartitems.map((item) => item.price) // get the price from each array
      .reduce((acc, price) => acc + price, 0); // add the prices together

    setSubtotal(totalPrice);
  };

  // const retdata3 = async () => {
  //   onSnapshot(collection(db, "Users", ), (snapshot) => {
  //     setProductArray(snapshot.docs.map((doc) => doc.data()));
  //   }).then((docRef) => {
  //     console.log("Document Id:", docRef.id);
  //   });
  // };

  const upp = async () => {
    console.log(productarray);
  };

  useEffect(() => {
    retdata();
  }, [user]);

  return (
    <div
      style={{ marginTop: "200px " }}
      className="shadow-lg p-3 mb-5 bg-white rounded container"
    >
      {/* <Button
        onClick={() =>
          handleAddItem({
            name: "Item 3",
            quantity: 1,
            product: imgt,
            price: "$300",
          })
        }
      >
        Add Item
      </Button> */}

      <Button href="/products">Add More Treasure</Button>
      {/* <Button onClick={upp}>Consolelog</Button> */}
      <h3>
        {/* {productarray
          .map((product) => (
            
          ))} */}
      </h3>
      <Table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productarray.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>1</td>
              <td>
                <img src={product.img} height="100" width="100"></img>
              </td>
              <td>${product.price} USD</td>
              <td>
                <Button onClick={() => handleRemoveItem(product)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
        <td>
          <b>Subtotal</b>: ${subtotal} USD
        </td>
        <div className="mt-3">
          <Link to="/checkout">
            <button className="btn btn-dark">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
