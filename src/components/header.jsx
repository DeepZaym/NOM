// src/components/header.jsx
import React from 'react';
import './header.css';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="website-name">
        <img src={logo} alt="NOM Logo" className="logo" />
        <div className="brand-text">
          <h1 className="brand-logo">NOM</h1>
          <p className="brand-sub">Rasa Abadi Kaum Muda, Always NOM!</p>
        </div>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#home">Beranda</a></li>
          <li><a href="#about">Tentang Kami</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;