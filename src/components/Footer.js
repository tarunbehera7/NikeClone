import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Nike</h3>
          <p>News</p>
          <p>Careers</p>
          <p>Investors</p>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <p>Order Status</p>
          <p>Shipping & Delivery</p>
          <p>Returns</p>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Nike Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



