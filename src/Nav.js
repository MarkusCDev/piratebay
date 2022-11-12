import React from 'react'
import './App.css';
import user from './images/user.png';
import bell from './images/bell.png';
import list from './images/list.png';
import scart from './images/scart.png';


import { Link, Route, Routes } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3><Link to="/">Logo</Link></h3>
            <ul className="nav-links">  
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/profile"><img src={user} alt="" height={30} width={30} /></Link></li>
                <li><Link to="/notifications"><img src={bell} alt="" height={30} width={30} /></Link></li>
                <li><Link to="/shopping-cart"><img src={scart} alt="" height={30} width={30} /></Link></li>
                <li><Link to="/web-settings"><img src={list} alt="" height={30} width={30} /></Link></li>
            </ul>
        </nav>
    )
}

export default Nav;