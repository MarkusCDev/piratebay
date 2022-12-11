import PopularProduct from "./PopularProduct";
import { useState, useEffect } from "react";
import search from "../images/search.png"
import { db } from "../firebase-config";
import { getDocs } from "@firebase/firestore";
import { query, collectionGroup, orderBy, onSnapshot, collection } from "firebase/firestore";
import { useUserAuth } from "../context/UserAuthContext";
import imgset from "../images/setting.png"
import { Dropdown } from "react-bootstrap";



function ProductList() {
  const [viewType] = useState({ grid: true });
  // const [products, setProducts] = useState([])
  // const getProducts = async (id) => {
  //   try{
  //     const products = query(collectionGroup(db, 'Products'),
  //     orderBy('price', 'desc'));
  //     const snapshot = await getDocs(products)

  //     return snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //       price: Number(doc.data().price),
  //     }))
  //   } catch (error) {
  //     console.log("did not get products")
  //   }
  // }
  // useEffect(() => {
  //   getProducts().then((products) => {
  //     products.filter((item) => {
  //       item.price = Number(item.price)
  //     })
  //     setProducts(products)
  //     console.log(products)
  //   })
  // }, [])

  const { user } = useUserAuth();
  const [productarray, setProductArray] = useState([])

  const retdata3 = async () => {
    onSnapshot(collection(db, "Products"), (snapshot) => {
      setProductArray(snapshot.docs.map((doc) => doc.data()))
    }).then(docRef => {
      console.log("Document Id:", docRef.id)
    })
  }
  
  useEffect(() => {
    retdata3();
  }, [user])
  

  return (
    <div className="container mt-5 py-4 px-xl-5 justify-content-center">
      <div className="row mb-4 mt-lg-3">
        <div className="d-flex flex-column h-100">
          <div className="row mb-3">
            <div className="col-lg-9 col-xl-5 offset-xl-4 d-flex flex-row">
            <div className="input-group">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  All categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Boats</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Cannons</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Food</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Maps</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Ships</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Weapons</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <input
                className="form-control"
                type="text"
                placeholder="Search products..."
                aria-label="search input"
              />
              <button className="btn btn-outline-dark">
                <img src={search} alt="search icon" style={{ width: '15px', height: '15px' }} />
              </button>
            </div>
            </div>
          </div>
          <div
            className={
              "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4 px-md-5 flex-shrink-0 " +
              (viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2")}>
            {
              productarray.map((product)  => (
                <PopularProduct pro_img={product.imagelink} pro_title={product.title} pro_price={product.price} pro_uid={product.uid}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;