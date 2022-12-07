import React from 'react';
import img from '../images/banner.jpg';
import im from '../images/lightBLUE.jpg.jpg';
import { Link } from 'react-router-dom';
import PopularProduct from './PopularProduct';


const Home = () => {
  return (
    <div style={{backgroundColor:"red"}}>
         <div className="d-flex flex-column bg-white py-4">
         <div className="d-flex justify-content-center">
           <Link to="/products" className="btn btn-primary" replace style={{'margin-top': '30px'}}>
            Browse Products
          </Link>

          
         </div>
       </div>

      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
            {Array.from({ length: 6 }, (_, i) => {
            return <PopularProduct key={i} />;
            })}
        </div>
    </div>
  


    </div>


  
    
  )
}

export default Home