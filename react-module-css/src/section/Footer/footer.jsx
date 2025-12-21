import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.box1}>
        <h2>WEBIFY | Make Bold</h2>
        <p>© 2025 Webify. All rights reserved.</p>
      </div>

      <div className={styles.box2}>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className={styles.box3}>
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Facebook 🌐</a></li>
          <li><a href="#">Twitter 🐦</a></li>
          <li><a href="#">Instagram 📸</a></li>
          <li><a href="#">LinkedIn 💼</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
