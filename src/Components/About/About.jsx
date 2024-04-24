import React from 'react'
import './About.scss'
import opa from '../About/img/Header Image.svg'
import Main_bt from '../Main/Main_bt'
import Footer from '../Footer/Footer'
const About = () => {
  return (
    <>

        <div className="ab-Hero Conteiner">
            <div className="ab-hero">
            <h3>We value human, organizational, and operational intelligence, not just artificial</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
            <button>Work With Us</button>
            </div>
            
            <div className="opa">
                <img src= {opa} alt="" />
            </div>
        </div>
        <Main_bt/>
        <Footer/>

    
    
    </>

  )
}

export default About