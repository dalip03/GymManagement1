import React from "react";
import '../Asset/css/style.css';
import '../Asset/css/barfiller.css';
import '../Asset/css/bootstrap.min.css';
import '../Asset/css/flaticon.css';
import '../Asset/css/font-awesome.min.css';
import '../Asset/css/magnific-popup.css';
// import '../Asset/css/owl.carousel.min.css';
import '../Asset/css/slicknav.min.css';

import logo from '../Asset/img/logo.png'






function Navbar(){

  return(
 <>

<div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
        <div class="canvas-close">
            <i class="fa fa-close"></i>
        </div>
        <div class="canvas-search search-switch">
            <i class="fa fa-search"></i>
        </div>
        <nav class="canvas-menu mobile-menu">
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/contact'>About Us</a></li>
                <li><a href="/classes">Classes</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/team">Our Team</a></li>
                <li><a href="/plans">Our Plans</a></li>
                <li><a href="#">Pages</a>
                    <ul class="dropdown">
                        <li><a href="/aboutUs">About us</a></li>
                        <li><a href="/classes">Classes timetable</a></li>
                        <li><a href="bmi">Bmi calculate</a></li>
                        <li><a href="/team">Our team</a></li>
                        <li><a href='/gallery'>Gallery</a></li>
                        <li><a href="/plans">Our Plans</a></li>
                        <li><a href="/blog">Our blog</a></li>
                    </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="canvas-social">
            <a href="https://www.linkedin.com/in/dalip-divaker-077a021b5/?originalSubdomain=in"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-youtube-play"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
        </div>
    </div>
    {/* <!-- Offcanvas Menu Section End --> */}
       
        {/* <!-- Header Section Begin --> */}
    <header class="header-section">
        <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3">
                    <div class="logo">
                        <a href="./index.html">
                            <img src={logo} alt=""/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="nav-menu">
                        <ul>
                            <li class="active"><a href="/">Home</a></li>
                            <li><a href="/aboutUs">About Us</a></li>
                            <li><a href="/classes">Classes</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/team">Our Team</a></li>
                            <li><a href="/plans">Our Plans</a></li>
                            <li><a href="#">Pages</a>
                                <ul class="dropdown">
                                    <li><a href="/aboutUs">About us</a></li>
                                    <li><a href="/classes">Classes timetable</a></li>
                                    <li><a href="/bmi">Bmi calculate</a></li>
                                    <li><a href="/team">Our team</a></li>
                                    <li><a href="/plans">Our Plans</a></li>
                                    <li><a href="/gallery">Gallery</a></li>
                                    <li><a href="./blog.html">Our blog</a></li>
                                </ul>
                            </li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="top-option">
                        <div class="to-search search-switch">
                            <i class="fa fa-search"></i>
                        </div>
                        <div class="to-social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="canvas-open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
    {/* <!-- Header End --> */}

   



</>
  );
}
export default Navbar