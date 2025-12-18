import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">Webify</h2>
          <p className="footer-text">
            Crafting elegant digital experiences with care and creativity.
          </p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact</h3>
          <p>Email: info@webify.com</p>
          <p>Phone: +92 317 0254252</p>
          <div className="social-icons">
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">IG</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} BrandName. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
