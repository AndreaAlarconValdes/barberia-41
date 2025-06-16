import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <img src="./logo.png" alt="logo" width={100} />
            <div className="footer-info">
                <div className="footer-info-left">
                    <h3>Dirección</h3>
                    <p>Calle Ficticia 21,</p>
                    <p> Barcelona,</p>
                    <p> España</p>
                </div>
                <div className="footer-section">
                    <h3>Horario</h3>
                    <p>Lunes - Sábado</p>
                    <p>10am - 8pm</p>
                    <p>Domingos cerrado</p>
                </div>
            </div>

            <div className="social-contact">
                <a href="https://github.com/AndreaAlarconValdes" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/andreaalarconvaldes/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />

                </a>
                <a href="mailto:alarconvaldes.a@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />

                </a>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Fictitious Barber Shop – Portfolio project by
                Andrea Alarcón Valdés.
            </div>
        </footer>
    );
};

export default Footer;
