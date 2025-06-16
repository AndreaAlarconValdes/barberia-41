import { Element } from "react-scroll";

const Home = () => {
  return (
    <Element name="home" className="header">
        <div className="bg bg1"></div>
        <div className="bg bg2"></div>
        <img src="./logo.png" alt="logo" />
    </Element>
  )
}

export default Home