import React from 'react'
import './Footer.scss'
import logo from '../Footer/img/Logo.svg'
import { MdOutlineFacebook } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import facebook from '../Footer/img/facebook.svg'

const Footer = () => {


  return (
    <>
    <footer>
        <section className='Conteiner'>
            <div className="footer-main">
                <div className="footer-left">
                    <img src= {logo}  alt="logo" />
                    <h3>Bespoke software solutions</h3>
                    <div className="media-icons">
                        <a href="https://www.facebook.com/"><img src= {facebook} alt="" /></a>
                        {/* <a href="https://www.youtube.com/"><img src= {<CiYoutube />} alt="" /></a>
                        <a href="https://www.instagram.com/"><img src= {<FaInstagram />} alt="" /></a>
                        <a href="https://twitter.com/i/flow/login"><img src= {<CiTwitter />} alt="" /></a> */}
                        <p>© All rights reserved – Finsweet</p>
                    </div>
                </div>

                <div className="footer-right">
                 <div className="item">
                 <h3>Company</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Services</p>
                    <p>Blog</p>
                 </div>

                 <div className="item">
                 <h3>Connect</h3>
                    <p>hi@finsweet.com</p>
                    <p>+(123) 456-7890</p>
                 </div>

                 <div className="item">
                 <h3>Join Newsletter</h3>
                 <input type="text" placeholder='       Type email here' /> <br />
                 <button>Subscribe</button>
                 <div className="txt">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                 </div>
                 </div>
                 
                </div>
            </div>
        </section>
    </footer>
    </>

  )
}

export default Footer