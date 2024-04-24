import React from 'react'
import './Blog.scss'
import Main_bt from '../Main/Main_bt'
import andew from '../Blog/anderw.svg'
import job from '../Blog/Header Image.svg'
import Footer from '../Footer/Footer'

const Blog = () => {
  return (
    <>
    <main>
        <section className='Conteiner wrap'>
            <div className="wrapper">    
            <div className="anderw-jonson">
                <div className="and-jon">
                    <img src= {andew} alt="andrew" />
                    <p>Andrew Jonson</p>
                </div>
                <div className="t">
                    <p>Posted on 27th January 2021</p>
                </div>
            </div>
            <div className="phrps">
            <h1>Our internal process and longerm vision</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</p>
                <button>Read More</button>
            </div>
            </div>

            <div className="jop">
                <img src= {job} alt="job.pnj" />
            </div>
        </section>
    </main>
    <div className="main_bt">
    <Main_bt/>
    <Footer/>
    </div>
    
    </>
  )
}

export default Blog