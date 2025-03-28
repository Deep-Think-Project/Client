import React from 'react';
import logo from '../assets/logo.png'; 
import '../styles/Header.css';

function Header() {
  return (
    <>
      <div className="header-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="service-name">Deep Think</div>
      </div>
      <hr />
    </>
  );
}

export default Header;