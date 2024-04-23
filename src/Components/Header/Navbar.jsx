import React from 'react'
import {  NavLink } from 'react-router-dom';
import logo from '../Header/img/Logo (1).svg'
import "./Navbar.scss"
const Navbar = () => {
  return (
  <>
  <header>
  <div className="navbar Conteiner">    
    <div className="logo">
        <NavLink to="/">
        <img src= {logo} alt="" />
        </NavLink>
    </div>
    
    <div className="items">
    <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/Carerslink">Careers</NavLink>
        <NavLink to="/Serveses">Services</NavLink>
        <NavLink to="/Bloglink">Blog</NavLink>
        <NavLink>Contact us</NavLink>
        <button>Clone project</button>
    </div>

  </div>
  
  

  </header>
  
  </>


  )
}

export default Navbar