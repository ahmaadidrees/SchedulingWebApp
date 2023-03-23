import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import './Navbar.css';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (event, section) => {
    event.preventDefault();
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMenu(false);
  };

  const handleMenuClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img  onClick={(e) => handleClick(e, 'home')} src="/Images/logo2.jpeg" alt="logo" />
      </div>
      <ul className={`navbar__menu ${showMenu ? 'active' : ''}`}>
        <li className="navbar__item">
          <a href="#about" onClick={(e) => handleClick(e, 'about')}>
            About
          </a>
        </li>
        <li className="navbar__item">
          <a href="#book">Book</a>
        </li>
        <li className="navbar__item">
          <a href="#gallery" onClick={(e) => handleClick(e, 'gallery')}>
            Gallery
          </a>
        </li>
        <li className="navbar__item">
          <a href="#contact" onClick={(e) => handleClick(e, 'contact')}>
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar__icon" onClick={handleMenuClick}>
        {showMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </div>
    </nav>
  );
};

export default Navbar;
