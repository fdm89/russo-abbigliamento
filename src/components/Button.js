import React from 'react';

import './Button.css';
import { Link } from 'react-router-dom';

function Button() {
  

  return (
    <Link to="/collection" className="button">VAI ALLA COLLEZIONE</Link>
  );
}

export default Button;
