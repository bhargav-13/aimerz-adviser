import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/Group 48096821.svg" alt="Aimerz Advisors" className="logo-img" />
        </Link>
        <div className="nav-menu">
          <div
            className={`hamburger${isOpen ? ' is-open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isOpen && (
            <div className="nav-dropdown">
              <div className="nav-dropdown-panel" onClick={(e) => e.stopPropagation()}>
                <Link to="/" className={`nav-item${location.pathname === '/' ? ' active' : ''}`} onClick={closeMenu}>Home</Link>
                <Link to="/about" className={`nav-item${location.pathname === '/about' ? ' active' : ''}`} onClick={closeMenu}>About</Link>
                <Link to="/services" className={`nav-item${location.pathname === '/services' ? ' active' : ''}`} onClick={closeMenu}>Services</Link>
                <Link to="/why-choose" className={`nav-item${location.pathname === '/why-choose' ? ' active' : ''}`} onClick={closeMenu}>Why Choose Us</Link>
                <Link to="/contact" className={`nav-item${location.pathname === '/contact' ? ' active' : ''}`} onClick={closeMenu}>Contact Us</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
