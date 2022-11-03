import logo from './logo.svg';
import Home from './Home';
import Profile from './Profile';
import './App.css';
import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
