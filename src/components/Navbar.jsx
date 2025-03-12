import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">CodeCafe</Link>
        </div>
        
        <div className={`menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/CoursePage" onClick={() => setIsMenuOpen(false)}>Courses</Link>
          </li>
          <li>
            <Link to="/ServicesPage" onClick={() => setIsMenuOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/About" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
