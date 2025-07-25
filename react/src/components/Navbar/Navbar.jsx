import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<>
    <div className="Navigator">
    <h1 className="logo">AA</h1>
    
      <div className='Navbar-list'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/product">Product</Link>


    </div>
        <button id='Navbar-button'>
          <Link to="/login">Login</Link>
          </button>
    </div>
    </>
  );  
}

export default Navbar;