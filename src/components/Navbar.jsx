import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Hambúrguer no canto esquerdo */}
      <div className="navbar-left">
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Logo/Título no centro */}
      <div className="navbar-center">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          Dashboard
        </Link>
      </div>

      {/* Perfil no canto direito */}
      <div className="navbar-right">
        <div className="profile-section">
          <div className="profile-icon">
            <span>👤</span>
          </div>
          <span className="profile-text">Meu Perfil</span>
        </div>
      </div>

      {/* Menu dropdown */}
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/ti" className="navbar-link" onClick={closeMenu}>
            T.I
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/rh" className="navbar-link" onClick={closeMenu}>
            RH
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/marketing" className="navbar-link" onClick={closeMenu}>
            Marketing
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/engenharia" className="navbar-link" onClick={closeMenu}>
            Engenharia
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/financeiro" className="navbar-link" onClick={closeMenu}>
            Financeiro
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/vendas" className="navbar-link" onClick={closeMenu}>
            Vendas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;