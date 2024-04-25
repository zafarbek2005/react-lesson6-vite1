import React, { useState, useEffect } from 'react';
import './product.scss';
import andew from '../../Components/Blog/anderw.svg';
import job from '../../Components/Blog/Header Image.svg';
import Footer from '../Footer/Footer';
import axios from '../../API/Index'
import { Link } from 'react-router-dom';

const Product = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/products")
            .then(res => setData(res.data.products))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const products = data.slice(0,6).map((el) => (
        <div className="card" key={el.id}>
            <Link to={`/Product${el.id}`}>
            <img src={el.images[0]} alt="Product" />
              </Link>
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            <button>$ {el.price}</button>
        </div>
    ));

    return (
        <>
            <main>
                <section className='Conteiner wrap'>
                    <div className="wrapper">
                        <div className="anderw-jonson">
                            <div className="and-jon">
                                <img src={andew} alt="Andrew" />
                                <p>Andrew Jonson</p>
                            </div>
                            <div className="t">
                                <p>Posted on 27th January 2021</p>
                            </div>
                        </div>
                        <div className="phrps">
                            <h1>Our internal process and long-term vision</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</p>
                            <button>Read More</button>
                        </div>
                    </div>

                    <div className="jop">
                        <img src={job} alt="Job" />
                    </div>
                </section>
            </main>

            <section>
                <div className="Cards">
                    {products}
                </div>
            </section>

            <div className="main_bt">
                <Footer />
            </div>
        </>
    );
};

export default Product;
