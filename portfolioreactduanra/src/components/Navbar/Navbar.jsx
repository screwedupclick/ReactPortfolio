import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__hamburger" onClick={toggleMenu}>
          <div
            className={`navbar__hamburger__bar ${
              menuOpen ? "navbar__hamburger__bar--open" : ""
            }`}
          ></div>
          <div
            className={`navbar__hamburger__bar ${
              menuOpen ? "navbar__hamburger__bar--open" : ""
            }`}
          ></div>
          <div
            className={`navbar__hamburger__bar ${
              menuOpen ? "navbar__hamburger__bar--open" : ""
            }`}
          ></div>
        </div>

        <ul className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>
          <li className="navbar__item">
            <a
              href="#"
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#"
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              Parcours
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#"
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              Projet
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#"
              className="navbar__link"
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
