import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="fade-in">
    <h1>TechTrek</h1>
    <nav>
      <Link to="/">Product</Link>
      <Link to="/order">Order</Link>
      <Link to="/news">News</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
