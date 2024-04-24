import React from 'react'
import './mainbt.scss'
import card_img from '../Main/img/Image1.svg'
import card_img1 from '../Main/img/Image.svg'
import card_img2 from '../Main/img/Image2.svg'



const Main_bt = () => {
  return (
    <>

    <div className="Conteiner text">
        <h1>Latest Blog & News</h1>

        <div className="Cards">
            <div className="card">
                <img src={card_img} alt="" />
                <h3>Why you have to digitalize in <br /> 2021</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p> 
                <button>Learn More</button>
            </div>
            <div className="card">
                <img src={card_img1} alt="" />
                <h3>Our internal process and longerm vision</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p> 
                <button>Learn More</button>
            </div>
            <div className="card">
                <img src={card_img2} alt="" />
                <h3>Helping the next generation of leaders</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p> 
                <button>Learn More</button>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Main_bt