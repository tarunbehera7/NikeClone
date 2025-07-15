import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png' alt="Nike Logo"
            className="nav-logo">
          </img>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/gearup">Gear Up</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/cart" className="cart-icon1">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/shopping-cart.png"
            alt="Cart Icon"
          />
        </Link>
      </div>
      {/* <div className="nav-actions">
        <Link to="/cart">Cart</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
