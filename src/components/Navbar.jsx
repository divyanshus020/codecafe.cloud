import React, { useState } from "react";
import { Link } from "react-router-dom";
 // Assuming you have this CSS file for styling
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container-1 pb-5">
      <nav>
        <div className="menu-btn" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={isMenuOpen ? "open" : ""}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <li>Home</li>
          </Link>
          <Link to="/CoursePage" onClick={() => setIsMenuOpen(false)}>
            <li>Course</li>
          </Link>
          <Link to="/ServicesPage" onClick={() => setIsMenuOpen(false)}>
            <li>Services</li>
          </Link>
          <Link to="/About" onClick={() => setIsMenuOpen(false)}>
            <li>About us</li>
          </Link>
          <Link to="/Contact" onClick={() => setIsMenuOpen(false)}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
