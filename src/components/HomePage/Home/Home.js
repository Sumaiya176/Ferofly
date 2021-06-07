import React from 'react';
import './Home.css';
import bg from '../../../images/bg1.jpg';

const Home = () => {
    return (
        <div className="title pb-5 mb-5">
            <h1 className="ferofly"><i>Ferofly</i></h1>
            <h6 className=""><i>---Magnify your Journey---</i></h6>
            <div className="home-image"></div>
            <section className="home-img">
               <div className="inner"></div>
            </section>
            <div className="home-image"></div>
        </div>
    );
};

export default Home;