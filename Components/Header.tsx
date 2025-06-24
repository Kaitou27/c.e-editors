import React from 'react';
import './Header.css';

const Header = () => (
  <header className="main-header">
    <div className="logo">
      <span className="logo-icon">CE</span>
      <span className="logo-text">C.E Editors</span>
    </div>
    <nav className="main-nav">
      <a className="nav-btn" href="#">HOME</a>
      <div className="nav-btn nav-dropdown">SERVICES <span className="arrow">▼</span></div>
      <a className="nav-btn" href="#">PORTFOLIO</a>
      <div className="nav-btn nav-dropdown">ABOUT <span className="arrow">▼</span></div>
    </nav>
  </header>
);

export default Header; 