import { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-logo">
        <Link to="home" onClick={closeMenu} smooth={true} duration={500}>
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
        <Link to="home" onClick={closeMenu} smooth={true} duration={500} spy activeClass="active-link">
          inicio
        </Link>
        <Link to="about" onClick={closeMenu}  smooth={true} duration={500} spy={true} activeClass="active-link">
          conóceme
        </Link>
        <Link to="services" onClick={closeMenu}  smooth={true} duration={500} spy={true} activeClass="active-link">
          servicios
        </Link>
        <Link to="contact" onClick={closeMenu} smooth={true} duration={500} spy={true} activeClass="active-link">
          contacto
        </Link>
        <button className="booking-btn">
          <FontAwesomeIcon icon={faPhone} size="sm"/>
          Reservar cita</button>
      </div>
    </nav>
  );
};

export default Navbar;
