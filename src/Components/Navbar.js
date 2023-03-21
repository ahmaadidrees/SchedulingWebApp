import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import './Navbar.css';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/Images/logo2.jpeg" alt="logo" />
      </div>
      <ul
        className={`navbar__menu ${showMenu ? "active" : ""}`}
        onClick={handleClick}
      >
        <li className="navbar__item">
          <a href="#about">About</a>
        </li>
        <li className="navbar__item">
          <a href="#book">Book</a>
        </li>
        <li className="navbar__item">
          <a href="#contact">Contact</a>
        </li>
        <li className="navbar__item">
          <a href="#gallery">Gallery</a>
        </li>
      </ul>
      <div className="navbar__icon" onClick={handleClick}>
        {showMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </div>
    </nav>
  );
};

export default Navbar;
