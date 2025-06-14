import { servicesArray } from "../data/constants"
import "./Home.css"
const Home = () => {
  return (
    <>
      <header className="header">
        <div className="bg bg1"></div>
        <div className="bg bg2"></div>
        <img src="./logo.png" alt="logo" />
      </header>
      <div className="about-home">
        <div className="about-description-home">
          <h2>Sobre drew</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laboriosam officia saepe alias accusantium repudiandae, minus suscipit ea perferendis reprehenderit iure, quas maxime nihil cumque quisquam nulla architecto blanditiis praesentium! </p>
        </div>
        <div className="about-img-home">
          <img src="./barber.jpg" alt="" />
        </div>
        <div className="about-data-home">
          <div>
            <h3>25+</h3>
            <p>Años de Experiencia</p>
          </div>
          <div>
            <h3>5000+</h3>
            <p>Clientes Felices</p>
          </div>
          <div>
            <h3>5</h3>
            <p>Barberos Profesionales</p>
          </div>
        </div>
      </div>
      <div className="img-divisor">
        <h2>Todo lo que necesitas</h2>
        <p>Lo hacemos todo, y lo hacemos perfecto.</p>
      </div>
      <div className="services-home">
        <h2>Servicios</h2>
        <div className="services-list">
          {servicesArray.map((item) => (
            <div className="service-item" key={item.title}>
              <img src={item.imgSrc} alt="" width={100} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home