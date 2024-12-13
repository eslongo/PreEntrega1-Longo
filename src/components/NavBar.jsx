import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ cartItems }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">LONGO</Link>
      </div>

      <ul className="categories">
        <li><Link to="/category1">Components</Link></li>
        <li><Link to="/category2">Peripherals</Link></li>
        <li><Link to="/category3">Ornaments</Link></li>
      </ul>

      <div className="cart-container">
        <div className="cart-count">{cartItems}</div>
        <div className="cart-icon">🛒</div>
      </div>
    </div>
  );
}

export default NavBar;
