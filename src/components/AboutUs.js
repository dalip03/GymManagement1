import React from "react";
import Navbar from "./Navbar";

import "../Asset/css/style.css";
import "../Asset/css/barfiller.css";
import "../Asset/css/bootstrap.min.css";
import "../Asset/css/flaticon.css";
import "../Asset/css/font-awesome.min.css";
import "../Asset/css/magnific-popup.css";
import '../Asset/css/owl.carousel.min.css';
import "../Asset/css/carousel.min.css";
import "../Asset/css/slicknav.min.css";

import logo from "../Asset/img/logo.png";
import logo1 from "../Asset/img/logo.png";
import Footer from "./footer";

import team1 from "../Asset/img/team/team-1.jpg";
import team2 from "../Asset/img/team/team-2.jpg";
import team3 from "../Asset/img/team/team-3.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import GetInTouch from "./getInTouch";

function AboutUs() {
  return (
    <>
      <Navbar />
      {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-about">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>About us</h2>
                <div class="bt-option">
                  <a href="./index.html">Home</a>
                  <span>About</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- ChoseUs Section Begin --> */}
      <section class="choseus-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <span>Why chose us?</span>
                <h2 className="head">PUSH YOUR LIMITS FORWARD</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="cs-item">
                <span class="flaticon-034-stationary-bike"></span>
                <h4>Modern equipment</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut dolore facilisis.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="cs-item">
                <span class="flaticon-033-juice"></span>
                <h4>Healthy nutrition plan</h4>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="cs-item">
                <span class="flaticon-002-dumbell"></span>
                <h4>Proffesponal training plan</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut dolore facilisis.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="cs-item">
                <span class="flaticon-014-heart-beat"></span>
                <h4>Unique to your needs</h4>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ChoseUs Section End --> */}

      {/* <!-- About US Section Begin --> */}
      <section class="aboutus-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 p-0">
              <div class="about-video set-bg-about2">
                <a
                  href="https://www.youtube.com/watch?v=EzKkl64rRbM"
                  class="play-btn video-popup"
                >
                  <i class="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6 p-0">
              <div class="about-text">
                <div class="section-title">
                  <span>About Us</span>
                  <h2>What we have done</h2>
                </div>
                <div class="at-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                    aliquip ex ea commodo consequat sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
                <div class="about-bar">
                  <div class="ab-item">
                    <p>Body building</p>
                    <div id="bar1" class="barfiller">
                      <span class="fill" data-percentage="80"></span>
                      <div class="tipWrap">
                        <span class="tip"></span>
                      </div>
                    </div>
                  </div>
                  <div class="ab-item">
                    <p>Training</p>
                    <div id="bar2" class="barfiller">
                      <span class="fill" data-percentage="85"></span>
                      <div class="tipWrap">
                        <span class="tip"></span>
                      </div>
                    </div>
                  </div>
                  <div class="ab-item">
                    <p>Fitness</p>
                    <div id="bar3" class="barfiller">
                      <span class="fill" data-percentage="75"></span>
                      <div class="tipWrap">
                        <span class="tip"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About US Section End --> */}

      {/* <!-- Team Section Begin --> */}
      <section class="team-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="team-title">
                <div class="section-title">
                  <span>Our Team</span>
                  <h2>TRAIN WITH EXPERTS</h2>
                </div>
                <a href="#" class="primary-btn btn-normal appoinment-btn">
                  appointment
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            
             <div id="demo" class="carousel slide" data-ride="carousel"> 
              {/* <!-- Indicators --> */}
              <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              {/* <!-- The slideshow --> */}
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    className="img-responsive"
                    src={team1}
                    alt="Los Angeles"
                  />
                </div>
                <div class="carousel-item">
                  <img src={team2} alt="Chicago" />
                </div>
                <div class="carousel-item">
                  <img src={team3} alt="New York" />
                </div>
              </div>

                 {/* <!-- The slideshow --> */}
                 <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    className="img-responsive"
                    src={team1}
                    alt="Los Angeles"
                  />

                </div>
                <div class="carousel-item">
                  <img src={team2} alt="Chicago" />
                </div>
                <div class="carousel-item">
                  <img src={team3} alt="New York" />
                </div>
              </div>

   {/* <!-- The slideshow --> */}
   <div class="carousel-inner">
                <div class="carousel-item active">
                  
                  <img
                    className="img-responsive"
                    src={team1}
                    alt="Los Angeles"
                  />
                </div>
                <div class="carousel-item">
                  <img src={team2} alt="Chicago" />
                </div>
                <div class="carousel-item">
                  <img src={team3} alt="New York" />
                </div>
              </div>


              {/* <!-- Left and right controls --> */}
              <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>

{/* end */}
            
            <div class="ts-slider owl-carousel">
                <div class="col-lg-4">
                    <div class="ts-item set-bg-team1" >
                        <div class="ts_text">
                            <h4>Athart Rachel</h4>
                            <span>Gym Trainer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="ts-item set-bg-team2" >
                        <div class="ts_text">
                            <h4>Athart Rachel</h4>
                            <span>Gym Trainer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="ts-item set-bg-team3" >
                        <div class="ts_text">
                            <h4>Athart Rachel</h4>
                            <span>Gym Trainer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="ts-item set-bg-team4" >
                        <div class="ts_text">
                            <h4>Athart Rachel</h4>
                            <span>Gym Trainer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="ts-item set-bg-team5" >
                        <div class="ts_text">
                            <h4>Athart Rachel</h4>
                            <span>Gym Trainer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="ts-item set-bg-team6" >
                        <div class="ts_text">
                            <h4>Athart Rachel</h4>
                            <span>Gym Trainer</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Team Section End --> */}
      <GetInTouch/>
      <Footer />
    </>
  );
}
export default AboutUs;
