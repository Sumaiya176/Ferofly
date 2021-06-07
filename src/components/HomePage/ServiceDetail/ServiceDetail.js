import React from "react";
import "./ServiceDetail.css";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 py-5 px-5">
      <div className="cards">
       <div className="img"> <img className="service-img" src={service.pic} alt="" srcset="" /></div>
        <div className="detail p-4">
          <h6>{service.title}</h6>
          <p>
            <small>
              <i>{service.detail}</i>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
