import React from 'react';
import './OurRoom.css'

const OurRoom = () => {
    return (
        <div className="room">
             <div className="room-image"></div>
            <section className="room-img">
               <div className="inner-room">
                  <div className="inner-detail py-5 px-5">
                  <h3 className="our-rooms pb-3">OUR ROOMS</h3>
                   <p className="text-secondary"><i><small>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</small></i></p>
                   <div className="pt-4"><button class="room-button">Book A Room</button></div>
                  </div>
               </div>
            </section>
            <div className="room-image"></div>
        </div>
    );
};

export default OurRoom;