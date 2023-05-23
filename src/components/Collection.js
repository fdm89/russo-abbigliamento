import React, {useEffect} from 'react';
import './Collection.css';
import Footer from './Footer';
import Carousel from './Carousel';

function Collection() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, [])
    
    return <div className="container">
        <h1>Collection</h1>
        <h2>Abiti</h2>
        <Carousel></Carousel>
        <h2>Camiceria</h2>
        <Carousel></Carousel>
        <h2>Maglieria</h2>
        <Carousel></Carousel>
        <Footer></Footer>
    </div>
    
}

export default Collection;