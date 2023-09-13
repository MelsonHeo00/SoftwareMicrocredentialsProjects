import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'space-around' }}>
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#login">Login</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
