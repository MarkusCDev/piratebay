import React from 'react'
import './App.css';

import { Link, Route, Routes } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3><Link to="/">Logo</Link></h3>
            <ul className="nav-links">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;