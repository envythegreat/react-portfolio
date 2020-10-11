import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button'
import '../styles/Header.css'
export default function Header(){


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  useEffect(()=>{
    showButton();
  }, [])

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    }else{
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton);
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
          {button && <Button buttonStyle="btn--outline">My Projects</Button>}
        </div>
      </nav>
    </>
  );
}
