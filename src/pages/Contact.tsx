import { faClock, faEnvelope, faPhone, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Element } from "react-scroll";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <Element name="contact" >
            <div className="divisor">
            </div>
            <div className="contact-page">
                <div className="contact-left-column">
                    <div className="contact-card">
                        <div className="contact-card-item">
                            <FontAwesomeIcon icon={faPhone} />
                            <h3>Teléfono</h3>
                            <p>+34 111 111 111</p>
                        </div>
                        <div className="contact-card-item">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <h3>Email</h3>
                            <p>info@tutienda.com</p>
                        </div>
                        <div className="contact-card-item">
                            <FontAwesomeIcon icon={faShop} />
                            <h3>Tienda</h3>
                            <p>Calle Ficticia 21, Barcelona, España</p>
                        </div>
                        <div className="contact-card-item">
                            <FontAwesomeIcon icon={faClock} />
                            <h3>Horarios</h3>
                            <div>
                                <p>Lunes - Sábado</p>
                                <p>10am - 8pm</p>
                                <p>Domingos cerrado</p>
                            </div>

                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.6676216032!2d2.057788979256682!3d41.39263855854927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sie!4v1750074782471!5m2!1ses!2sie"  loading="lazy"></iframe>
                </div>
                <div className="contact-right-column">
                    <div className="contact-right-title">
                        <h2>Ponte en contacto</h2>
                        <p>
                            Si eres un proveedor, cliente o estás interesado/a en formar parte de nuestro equipo de profesionales contacta con nosotros y te atenderemos encantados.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </Element>
    )
}

export default Contact