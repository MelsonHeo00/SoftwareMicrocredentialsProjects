import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'green', fontSize: '20px' }}>
      <div>
        <p>&copy; {new Date().getFullYear()} Melson Heo</p>
        <p>Contact: melsonheo646@gmail.com</p>
      </div>
      <div>
        <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#login">Login</a> | <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
