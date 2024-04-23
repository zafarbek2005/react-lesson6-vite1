import React from 'react'
import './Main.scss'
import Navbar from '../Header/Navbar'
import mainlogo from '../Header/img/Header Logos.svg'
import bro from '../Main/img/bro.svg'
import Main_bt from './Main_bt'

const Main = () => {
  return (
    <>
            {/* <Navbar/> */}

    <main>
        <section className='Conteiner'>
            <div className="main_page">
                <div className="main-text">
                    <h3>Prosper with our  <br /> bespoke solutions</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                    <div className="main-btn">
                        <button>See our services</button>
                        <p>See All Services </p>
                    </div>
                    {/* <div className="main-logo">
                        <p>Worked with 100+ Companies</p>
                        <div className="logo-img">
                            <img src= {mainlogo} alt="" />
                        </div>
                    </div> */}
                </div>

                <div className="bro">
                    <img src= {bro} alt="" />
                </div>
            </div>
        </section>
        <Main_bt/>

    </main>
    
    
    </>
  )
}

export default Main