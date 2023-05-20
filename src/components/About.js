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
        <p>Russo Abbigliamento è un marchio che ha iniziato la sua attività negli anni '80, producendo maglieria da uomo in Italia, principalmente nelle regioni della Toscana e del Veneto. Nel corso degli anni, la marca ha guadagnato popolarità e consenso grazie alla qualità dei suoi prodotti.

Oltre alla maglieria, Russo ha ampliato la sua produzione includendo anche le camicie, che sono diventate uno dei capi più richiesti dagli uomini. La marca ha creato una linea esclusiva di camicie chiamata "Prima Linea Russo", caratterizzata dalla qualità dei materiali, dalle fantasie e dalle due vestibilità disponibili: "regular" e "slim".

La maglieria e le camicie rappresentano il punto forte dell'azienda. La maglieria viene realizzata con materiali di alta qualità come la lana merinos extra fine, il cashmere, il misto cashmere, il lambswool e il cotone, con diverse sottigliezze che vanno dalla 3 alla 12.

Il brand Russo si contraddistingue per il controllo di qualità rigoroso lungo tutto il processo produttivo, incluso la ricerca dei tessuti e delle vestibilità. La lavorazione è completamente Made in Italy, garantendo il massimo livello di qualità ai clienti.

Negli ultimi anni, il successo del marchio ha portato all'ampliamento della produzione, offrendo una gamma completa di abbigliamento per uomo. Oltre alla maglieria e alle camicie, Russo produce anche pantaloni, giacche, abiti, jeans e calzature.

Il team qualificato di Russo segue attentamente tutte le fasi di produzione, dalla scelta dei tessuti italiani per camicie, pantaloni e capispalla, ai pregiati filati per la maglieria, fino alle finiture e ai bottoni. Ogni dettaglio del prodotto viene curato con precisione, dalla manifattura alla confezione.

I primi negozi di Russo hanno aperto negli anni '90, e oggi il marchio è presente in diverse città, tra cui Nocera Inferiore, Mercato San Severino, Cava de' Tirreni, Battipaglia, Atena Lucana, Sala Consilina, Praia a Mare e Paola. L'uomo Russo rappresenta l'eleganza con un tocco informale, interpretando lo stile contemporaneo della sartorialità napoletana con valori unici e inimitabili per uno stile distintivo.</p>
        <p></p>
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
