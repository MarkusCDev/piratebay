import Home from './Home';
import './App.css';
import Nav from './Nav';
import Login from './Login';
import Profile from './Profile';

import { Link, Route, Routes } from "react-router-dom";
import HomePgIMGS from './HomePgIMGS';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
