import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about" className="about-home">
      <div className="about-description">
        <div className="about-description-home">
          <h2>Sobre drew</h2>
          <p>Somos una barbería de referencia en el corazón de Barcelona, formada por un equipo de tres profesionales con más de 25 años de experiencia en el arte del corte, el afeitado clásico y el cuidado masculino.
            <br />
            <br />
            Nuestra pasión por la barbería tradicional se combina con las técnicas más actuales para ofrecerte un servicio de calidad, personalizado y con atención al detalle.
            <br />
            <br />
            Más que un corte de pelo, buscamos ofrecer una experiencia: un momento para ti, en un ambiente acogedor donde el estilo, la autenticidad y el buen trato van de la mano.
          </p>
        </div>
        <img src="./barber.jpg" alt="" />
      </div>
      <div className="about-data-home">
        <div>
          <h3>25+</h3>
          <p>Años de Experiencia</p>
        </div>
        <div>
          <h3>10.000+</h3>
          <p>Clientes Felices</p>
        </div>
        <div>
          <h3>3</h3>
          <p>Barberos Profesionales</p>
        </div>
      </div>
    </Element>
  )
}

export default About