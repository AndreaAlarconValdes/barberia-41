import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <span className="logo-name">DR<span className="logo-letter">E</span>W</span>
        </Link>
      </div>
      <button
        className={`navbar-toggle ${menuOpen ? "open" : ""}`}
        onClick={handleToggle}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`navbar-routes ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          inicio
        </Link>
        <Link to="/about" onClick={closeMenu}>
          conóceme
        </Link>
        <Link to="/services" onClick={closeMenu}>
          servicios
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          contacto
        </Link>
        <a href="" className="booking-btn">
          <FontAwesomeIcon icon={faPhone} size="sm"/>
          Reservar cita</a>
      </div>
    </nav>
  );
};

export default Navbar;
