import React, { useState } from 'react';
import '../css/home.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1>M-bd</h1>
          </div>
          <ul className={`nav-links ${menuVisible ? 'show' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/parcel-details">Parcel Details</Link></li>
            <li><Link to="/track-parcel">Track Parcel</Link></li>
            <li><Link to="/login">Sign In/Sign Out</Link></li>
          </ul>
          <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
