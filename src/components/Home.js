import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from '../assets/immagine-hero.jpg';
import './Home.css';
import Heroone from "./Heroone";
import Herotwo from "./Herotwo";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Button from "./Button";



const homeContainerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
};

function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="home-container" ref={homeRef}>
      <div style={homeContainerStyle} alt="Background image description">
      
      <a href="#banner">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="double-arrow-icon" />
        </a>
      
      </div>
  <div className="banner" id="banner">
        <p>Outerweare</p>
        <h1>KEEP ON MOVING</h1>
        <p>Vieni a scoprire la nostra nuova collezione primavera estate 2023</p>
        <Button/>
      </div>
      <h1 className="carousel-header">Ultimi arrivi collezione primavera estate 2023</h1>
      <Carousel />
      <Heroone />
      {/* <Herotwo /> */}
      
      {/* <h1 className="carousel-header">Ultimi arrivi collezione primavera estate 2023</h1>
      <Carousel /> */}
      
    
      <Footer></Footer>
    </div>
  );
}

export default Home;
