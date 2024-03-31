import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src\assets\photo_2024-03-26_01-38-55.jpg" alt="Logo" />
      </div>
      <div className="navbar-buttons">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/contact">Contact</Link></button>
      </div>

      <div className="navbar-actions" id='navbar-layout'>
        <button><Link to="/login">Sign In</Link></button>
        <button><Link to="/register">Register</Link></button>
      </div>
    </nav>
  );
};
export default Navbar
