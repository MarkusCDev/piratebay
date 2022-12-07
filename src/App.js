import './App.css';
import React from 'react'
import { Footer } from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/space.css";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Account from './pages/Account';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import Product1 from './pages/Product1';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './context/ProtectedRoute';
import Secret from './pages/Secret';
import Additem from './pages/Additem';



const App = () => {
  return (
    <div style={{backgroundColor:"red"}}>
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path="/account/add-item" element={<ProtectedRoute><Additem /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/1" element={<Product1 />} />
        
      </Routes>
      
      <Footer />
    </UserAuthContextProvider>
    </div>
  )
}

export default App


{/*

We want to set the color of the entire background to "RED"

- set the color -> how do we set a color in code?
  - Use the CSS background-color property. 
  - Set it to the color name or code you want and 
  - place it inside a style attribute. 
  - add this style attribute to an HTML element
- entire background -> where does the entire background live, in the code?
- RED -> how do we represent "RED" color in code?
  - just say "red"
  - hex value 
  - rgb(xxx, xxx, xxx)

*/}