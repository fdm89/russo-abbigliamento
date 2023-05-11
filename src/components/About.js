import React, { useEffect } from 'react';
import './About.css';
import image1 from '../assets/logo.png';
import Footer from './Footer';


 


function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
  return (
    <div className="about-container">
      <header>
        <h1>About Us</h1>
        <p>A brief description of your company or business</p>
      </header>
      <section className="photo-gallery">
        <img src={image1} alt="team member 1" />
      </section>
      <section className="text-section">
        <h2>Our Story</h2>
        <p>More information about your company or business</p>
      </section>
      <section className="photo-gallery">
        <img src={image1} alt="team member 1" />
      </section>
      
      <Footer></Footer>
      
    </div>
    
  );
}

export default About;
