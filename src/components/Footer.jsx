import React from 'react';
import './Footer.css'; // pakai file CSS khusus untuk Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Website NOM. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
