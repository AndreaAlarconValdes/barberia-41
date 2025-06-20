import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesArray } from '../data/constants'
import { Element } from "react-scroll";
import { faBan, faLeaf, faRecycle } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
        <Element name='services' className='services-page'>
            <div className="products-divisor">
                <div className='products-list'>
                    <div className='product-item'>
                        <FontAwesomeIcon icon={faLeaf} />
                        <p>Productos orgánicos</p>
                    </div>
                    <div className='product-item'>
                        <FontAwesomeIcon icon={faBan} />
                        <p>No tóxicos</p>
                    </div>
                    <div className='product-item'>
                        <FontAwesomeIcon icon={faRecycle} />
                        <p>Ecológicos</p>
                    </div>
                </div>
            </div>
            <div className='services'>
                <div className='services-title'>
                    <h2>Servicios</h2>
                    <p>Descubre todos los servicios que ofrecemos para cuidar tu imagen y resaltar tu estilo.</p>
                </div>
                <div className="services-list" >
                    {servicesArray.map((item) => (
                        <div className="service-item" key={item.id}>
                            <img src={item.imgSrc} alt="img"  />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <span>{item.price}€</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="products-container">
                <img className="products-slider-img" src='./american-crew-logo.png' />
                <img className="products-slider-img" src='./proraso-logo.png' />
                <img className="products-slider-img" src='./carobels-logo.jpg' />
                <img className="products-slider-img" src='./suavecito-logo.png' />
                <img className="products-slider-img" src='./babylisspro-logo.png' />

            </div>

        </Element>
    )
}

export default Services