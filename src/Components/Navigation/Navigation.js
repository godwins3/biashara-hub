import React from 'react'
import { Link } from 'react-router-dom';
import logo  from "../Assests/Logo.png"
import './Navigation.css'


const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Jiachilie Logo" className="logo-image" />
        </div>
      </Link>
      <ul className="links">
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/categories">Categories</Link></li>
      </ul>
      <div className="nav-button-container">
        <Link to="/signup">
          <button className="nav-button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="nav-button">Login</button>
        </Link>
      </div>
    </nav>
  );
}



export default Navigation