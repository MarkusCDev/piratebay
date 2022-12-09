import React from 'react'
import img from '../images/banners/treasure-chest.jpg';
import { Link } from 'react-router-dom';
import PopularProduct from './PopularProduct';
import Banner from './Banner';

const Home = () => {
  return (
    <>
      <div style={{ paddingTop: 18 }}>
        <div className="d-flex flex-column bg-white py-4">
          <Banner />
          <div style={{ padding: 50 }} className="d-flex justify-content-center">
            <Link to="/products" className="btn btn-primary" replace>
              Browse Products
            </Link>
          </div>
        </div>
      </div>

      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {Array.from({ length: 6 }, (_, i) => {
            return <PopularProduct key={i} />;
          })}
        </div>
      </div>
    </>
  )
}

export default Home