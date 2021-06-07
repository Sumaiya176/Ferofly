import React from 'react';
import owl from '../../../images/owl.png'
import fb from '../../../images/fb.png'
import insta from '../../../images/insta.png'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidenav">
            <div className="py-3">
                <img className="side-icon " src={owl} alt="" />
            </div>
            <div className="py-5">
                <img className="side-icon" src={fb} alt="" />
            </div>
            <div className="">
                <img className="side-icon" src={insta} alt="" />
            </div>
        </div>
    );
};

export default Sidebar;