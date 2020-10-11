import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ENVY <i class="fas fa-fingerprint"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick} >
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact us</Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-links-mobile" onClick={closeMobileMenu}>Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
