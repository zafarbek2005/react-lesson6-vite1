import { AiOutlineMenu } from "react-icons/ai"; 
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Header/img/Logo (1).svg';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header>
        <div className={`navbar ${menuOpen ? 'open' : ''}`}>
          <div className="logo" onClick={toggleMenu}>
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>

          <div className="items">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/Carerslink">Careers</NavLink>
            <NavLink to="/Serveses">Services</NavLink>
            <NavLink to="/Bloglink">Blog</NavLink>
            <NavLink to="/Productslink">Products</NavLink>
            <button> Clone project</button>
            <button className='menu' onClick={toggleMenu}><AiOutlineMenu /></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
