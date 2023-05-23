import React, { useEffect, } from 'react';
import './About.css';
import image1 from '../assets/logo.png';
import Footer from './Footer';


 


function About() {
    useEffect(() => {
       window.scrollTo({ top: 0, behavior: "instant" });
      }, [])
  return (
    <div className="about-container">
      <header>
        <h1>About Us</h1>
        <p>Russo abbigliamneto, un'eccellenza nell'abbigliamento maschile dal cuore italiano. Fondata negli anni '80, siamo orgogliosi di offrire prodotti di alta qualità, caratterizzati da un'attenzione meticolosa per i dettagli e una maestria artigianale senza pari.</p>
        <p>Ci dedichiamo con passione alla produzione di maglierie, camicie e abiti sartoriali, utilizzando solo i materiali più pregiati e le tecniche tradizionali tramandate nel tempo. Ogni capo che realizziamo è una testimonianza dell'arte sartoriale italiana, confezionato con cura e precisione per garantire un'eleganza senza tempo e una vestibilità impeccabile.</p>
        <p>Siamo profondamente orgogliosi di promuovere il "Made in Italy" e di preservare la tradizione artigianale che contraddistingue il nostro paese. Ogni capo è un'autentica opera d'arte, realizzata con passione e dedizione per soddisfare i gusti sofisticati degli uomini che cercano un'eleganza senza tempo.</p>
        <p>Negli anni, abbiamo ampliato la nostra presenza con diversi punti vendita situati strategicamente in luoghi come Cava de' Tirreni, Nocera Inferiore, Battipaglia e persino in Sardegna. Questa rete di punti vendita ci consente di essere vicini ai nostri clienti, offrendo un servizio personalizzato e un'esperienza di acquisto unica.</p>
        <p>
        Siamo lieti di accogliervi nel nostro mondo, dove la moda e l'artigianato si fondono per creare capi di alta qualità che riflettono la personalità di chi li indossa. Esplorate la nostra collezione e lasciatevi conquistare dallo stile italiano all'avanguardia e dalla perfezione artigianale.
        </p>
        
      </header>
      <section className="photo-gallery">
        <img src={image1} alt="team member 1" />
      </section>

      
      <Footer></Footer>
      
    </div>
    
  );
}

export default About;
