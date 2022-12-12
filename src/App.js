import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
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
import CheckoutPage from './pages/Checkout';
import Additem from './pages/Additem';
import Banking from './pages/Banking';
import Banner from './pages/Banner';
import Boats from './pages/category/Boats';
import Cannons from './pages/category/Cannons';
import Maps from './pages/category/Maps';
import Ships from './pages/category/Ships';
import Weapons from './pages/category/Weapons';
import Food from './pages/category/Food';


const App = () => {
  return (
    <UserAuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="secret" element={<Secret />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path="/account/add-item" element={<ProtectedRoute><Additem /></ProtectedRoute>} />
        <Route path="/account/banking" element={<ProtectedRoute><Banking /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:uid" element={<Product1 />} />
        <Route path="/category/Boats" element={<Boats />} />
        <Route path="/category/Cannons" element={<Cannons />} />
        <Route path="/category/Food" element={<Food />} />
        <Route path="/category/Maps" element={<Maps />} />
        <Route path="/category/Ships" element={<Ships />} />
        <Route path="/category/Weapons" element={<Weapons />} />
        <Route path="/checkout" element={<ProtectedRoute> <CheckoutPage /> </ProtectedRoute>} />
        <Route path="/banner" element={<Banner />} />
      </Routes>
      <Footer />
    </UserAuthContextProvider>
  )
}

export default App