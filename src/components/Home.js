import React, { useRef, useEffect } from "react";
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container" ref={homeRef}>
      <div style={homeContainerStyle} alt="Background image description"></div>
      <div className="banner" >
        <p>Outerweare</p>
        <h1>KEEP ON MOVING</h1>
        <p>Vieni a scoprire la nostra nuova collezione primavera estate 2023</p>
        <Button/>
      </div>
      <Heroone />
      <Herotwo />
      <h1 className="carousel-header">Ultimi arrivi collezione primavera estate 2023</h1>
      <Carousel />
      <Footer></Footer>
    </div>
  );
}

export default Home;