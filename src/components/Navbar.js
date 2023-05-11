import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <nav className={`navbar ${scroll ? 'navbar--scroll' : ''}`}>
      <Link to="/">
      <img className='logo-russo' src={logo} alt='logo'></img>
      </Link>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className={`navbar-close ${scroll ? 'navbar-close--scroll' : ''}`} onClick={toggleMenu}>
        </button>
        <Link to="/" className="navbar-item" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="navbar-item" onClick={toggleMenu}>About</Link>
        <Link to="/collection" className="navbar-item" onClick={toggleMenu}>Collection</Link>
        <Link to="/contact" className="navbar-item" onClick={toggleMenu}>Contact</Link>
      </div>
      <button className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className={`navbar-span ${scroll ? 'navbar-span--scroll' : ''}`}></span>
        <span className={`navbar-span ${scroll ? 'navbar-span--scroll' : ''}`}></span>
        <span className={`navbar-span ${scroll ? 'navbar-span--scroll' : ''}`}></span>
      </button>
    </nav>
  );
}

export default Navbar;