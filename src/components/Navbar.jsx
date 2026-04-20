import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="gradient-text">Nex</span>Gen
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/features" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Features</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pricing" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Pricing</NavLink>
          </li>
        </ul>
        <div className="navbar-action">
          <Link to="/build" className="primary-btn nav-btn">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
