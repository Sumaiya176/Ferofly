import React from "react";
import "./Review.css";
import comma from '../../../images/comma.png';

const Review = () => {
  return (
    <div className="room">
      <div className="room-image"></div>
      <section className="review-img">
        <div className="inner-room">
          <div className="inner-detail py-5 px-5">
              <h4 className="our-rooms pt-4">GUEST REVIEW</h4>
              <img className="comma pt-4" src={comma} alt="" srcset="" />
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <p className="d-block w-100 pt-4"><small><i>“I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.”</i></small></p>
                </div>
                <div className="carousel-item">
                  <p className="d-block w-100 pt-4"><small><i>“I'm a paragraph. Click here to add your own text and edit me.”</i></small></p>
                </div>
                <div className="carousel-item">
                  <hp className="d-block w-100 pt-4"><small><i>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</i></small></hp>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="room-image"></div>
    </div>
  );
};

export default Review;
