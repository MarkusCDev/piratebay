import PopularProduct from "../PopularProduct";
import { useState, useEffect } from "react";
import searchimg from "../../images/search.png"
import { db } from "../../firebase-config";
import { getDocs } from "@firebase/firestore";
import { where, query, collectionGroup, orderBy, onSnapshot, collection } from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";
import imgset from "../../images/setting.png"
import { Dropdown } from "react-bootstrap";
import { DropdownItem } from "semantic-ui-react";



function Food() {
  const [viewType] = useState({ grid: true });

  const [search, setSearch] = useState('')

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
  //console.log(search)

  const retdata3 = async () => {
    // onSnapshot(collection(db, "Products"), (snapshot) => {
    //   setProductArray(snapshot.docs.map((doc) => doc.data()))
    // }).then(docRef => {
    //   console.log("Document Id:", docRef.id)
    // })

    const collectionRef = collection(db, "Products")
    const q = query(collectionRef, where("keywords", "==", "Food"))
    const snapshot = await getDocs(q)

    setProductArray(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))

  }
  
  useEffect(() => {
    retdata3();
  }, [])
  

  return (
    <div className="container mt-5 py-4 px-xl-5 justify-content-center">
      <div className="row mb-4 mt-lg-3">
        <div className="d-flex flex-column h-100">
          <div className="row mb-3">
            <div className="col-lg-9 col-xl-5 offset-xl-4 d-flex flex-row">
            <div className="input-group">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu className="justify-content-center">
                  <DropdownItem>-------Categories-------</DropdownItem>
                  <Dropdown.Item href="/products">All</Dropdown.Item>
                  <Dropdown.Item href="/category/Boats">Boats</Dropdown.Item>
                  <Dropdown.Item href="/category/Cannons">Cannons</Dropdown.Item>
                  <Dropdown.Item href="/category/Food">Food</Dropdown.Item>
                  <Dropdown.Item href="/category/Maps">Maps</Dropdown.Item>
                  <Dropdown.Item href="/category/Ships">Ships</Dropdown.Item>
                  <Dropdown.Item href="/category/Weapons">Weapons</Dropdown.Item>
                  <DropdownItem>---------Sorting---------</DropdownItem>
                  <Dropdown.Item href="/category/Weapons">Top Ratings</Dropdown.Item>
                  <Dropdown.Item href="/category/Weapons">Low Ratings</Dropdown.Item>
                  <Dropdown.Item href="/category/Weapons">Price Desc</Dropdown.Item>
                  <Dropdown.Item href="/category/Weapons">Price Asc</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <input
                className="form-control"
                type="text"
                placeholder="Search products..."
                aria-label="search input"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-dark">
                <img src={searchimg} alt="search icon" style={{ width: '15px', height: '15px' }} />
              </button>
            </div>
            </div>
          </div>
          <div
            className={
              "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4 px-md-5 flex-shrink-0 " +
              (viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2")}>
            {
              productarray.filter((product) => {
                return search.toLowerCase() === '' ? product : product.title.toLowerCase().includes(search)
              }).map((product)  => (
                <PopularProduct key={product.uid} pro_img={product.imagelink} pro_title={product.title} pro_price={product.price} pro_uid={product.uid}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;