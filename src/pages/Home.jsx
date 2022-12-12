import React, { useState, useEffect} from 'react'
import img from '../images/banners/treasure-chest.jpg';
import { Link } from 'react-router-dom';
import PopularProduct from './PopularProduct';
import Banner from './Banner';
import { useUserAuth } from '../context/UserAuthContext';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '../firebase-config';
import { query, getDocs, collection, getCountFromServer, onSnapshot, orderBy } from "firebase/firestore";

const Home = () => {
  
  const { user } = useUserAuth();
  const [productcount, setProductCount] = useState(1);
  const [productarray, setProductArray] = useState([])


  const dbRef = collection(db, "Products")
  const retdata2 = async () => {
      const snapshot = await getCountFromServer(dbRef)
      console.log('count:', snapshot.data().count) 
      setProductCount(snapshot.data().count)
    }

  const retdata3 = async () => {
    const collectionRef = collection(db, "Products")
    const q = query(collectionRef, orderBy("timestamp", "desc"))
    const snapshot = await getDocs(q)

    setProductArray(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }
  
  useEffect(() => {
    retdata2();
    retdata3();
  }, [user])
  

  var sixArr = productarray.slice(0,6)

  // const retdata3 = async () => {

  //     const dbRef = collection(db, "Products")
  //     const query = query(dbRef, orderBy("timestamp", "desc"))

  //     onSnapshot(query, (snapshot) => 
  //       setProductArray(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
  //     )
  // }
  
  return (
    <>
      <div style={{ paddingTop: 18 }}>
        <div className="d-flex flex-column bg-white py-4">
          <Banner />
          <div style={{ paddingTop: 35 }} className="d-flex justify-content-center">
            {/* <button onClick={retdata2}>Here</button> */}
            <Link to="/products" className="btn btn-primary" replace>
              Browse Products
            </Link>
          </div>
          <h3 className='justify-content-center text-center align-items'>Newest Products</h3>
        </div>
      </div>

      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {/* {Array.from({ length: 6 }, (_, i) => {
            return <PopularProduct pro_img={pro_img} pro_title={pro_title} pro_price={pro_price} key={i} />;
          })} */}


          {sixArr.map((product)  => (
              <PopularProduct pro_img={product.imagelink} pro_title={product.title} pro_price={product.price} pro_uid={product.uid}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home