import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <a
              href="#"
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#"
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              Parcours
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#"
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              Projet
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#"
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
