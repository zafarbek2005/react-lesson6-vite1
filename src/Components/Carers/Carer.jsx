import React from 'react'
import './Carers.scss'
import Main_bt from '../Main/Main_bt'
import opa from '../Carers/img/opa.svg'
import Footer from '../Footer/Footer'
const Carer = () => {
  return (
   <>
   
   
   <div className="ab-Hero Conteiner">
            <div className="ab-hero">
            <h3>We serve clients with ground breaking solutions</h3>
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

export default Carer