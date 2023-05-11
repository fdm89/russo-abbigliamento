import React, {useEffect} from 'react';
import './Collection.css';
import Footer from './Footer';
import Carousel from './Carousel';

function Collection() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    
    return <div className="container">
        <h1>Collection</h1>
        <Carousel></Carousel>
        <Carousel></Carousel>
        <Carousel></Carousel>
        <Footer></Footer>
    </div>
    
}

export default Collection;