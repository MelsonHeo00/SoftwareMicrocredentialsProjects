import React from 'react';
import starImage from './images/star.jpg';

const Header = () => {
  return (
    <header style={{ backgroundColor: "Red", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
          <img src={starImage} alt="Logo" width="50" height="50" />
          <h1 style={{ marginLeft: "10px" }}>Welcome to the Page!</h1>
          <img style={{ marginLeft: "10px"}}src={starImage} alt="Logo" width="50" height="50" />
          </div>
    </header>
  );
};

export default Header;