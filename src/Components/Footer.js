import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Company Name</p>
        <ul className="footer__links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
