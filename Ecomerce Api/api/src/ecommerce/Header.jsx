import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <header>
      <h1><a href="/">Ecommerce</a></h1>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Product">Product</Link></li>
        <li><Link to="/cart">Cart</Link></li>
       
      </ul>
    </header>
  );
}

export default Header;
