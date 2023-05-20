import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    
    return <div className="footer">
    <div className="social-icons">
      <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
    <p>
       R.G.S. Group SRL P.IVA: 04884990658
    </p>
    <Link to="/NoteLegali" className='note-legali'>
  <p>Note Legali</p>
</Link>
  
        
    </div>
    
}

export default Footer;