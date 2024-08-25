import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add styling for your navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
