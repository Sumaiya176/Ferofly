import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navigation">
     
     <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler toggler-color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon toggler-color"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav navbar-center">
        <li class="nav-item">
          <a class="nav-link active px-4 nav-link" aria-current="page" href="#"><span className="nav-name">HOME</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-4 nav-link" href="#"><span className="nav-name">ABOUT</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-4 nav-name" href="#"><span className="nav-name">ROOMS</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-4 nav-name" href="#" tabindex="-1" aria-disabled="true"><span className="nav-name">SERVICES</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-4 nav-name" href="#"><span className="nav-name">GALLERY</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-4 nav-name" href="#"><span className="nav-name">SEE & DO</span></a>
        </li>
        <li class="nav-item"> 
          <a class="nav-link px-4 nav-name" href="#"><span className="nav-name">CONTACT</span></a>
        </li>
        <button className="button">Book A Room</button>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
