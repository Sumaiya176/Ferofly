import React from 'react';
import './Services.css';
import breakfast from '../../../images/breakfast.png';
import garden from '../../../images/garden.png';
import pool from '../../../images/pool.png';
import wifi from '../../../images/wifi.png';
import housekeeping from '../../../images/housekeeping.png';
import dining from '../../../images/dining.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        pic: breakfast,
        title: "Breakfast",
        id: 1,
        detail: "I'm a paragraph. Click here to add your own text and edit me."

    },
    {
        pic: garden,
        title: "Garden",
        id: 2,
        detail: "I'm a paragraph. Click here to add your own text and edit me."

    },
    {
        pic: pool,
        title: "Pool",
        id: 3,
        detail: "I'm a paragraph. Click here to add your own text and edit me."

    },
    {
        pic: wifi,
        title: "Free Wifi",
        id: 4,
        detail: "I'm a paragraph. Click here to add your own text and edit me."

    },
    {
        pic: housekeeping,
        title: "Daily Housekeeping",
        id: 5,
        detail: "I'm a paragraph. Click here to add your own text and edit me."

    },
    {
        pic: dining,
        title: "In-Room Dining Service",
        id: 6,
        detail: "I'm a paragraph. Click here to add your own text and edit me."

    }
]


const Services = () => {
    return (
        <div className="container">
            <h1 className="services">OUR SERVICES</h1>
            <div className="row justify-content-center">
                {
                    serviceData.map( service => <ServiceDetail key={service.id} service={service}></ServiceDetail>)
                }
            </div>
        </div>
    );
};

export default Services;