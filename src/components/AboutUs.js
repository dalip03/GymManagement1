import React from "react";
import Navbar from "./Navbar";

import "../Asset/css/style.css";
import "../Asset/css/barfiller.css";
import "../Asset/css/bootstrap.min.css";
import "../Asset/css/flaticon.css";
import "../Asset/css/font-awesome.min.css";
import "../Asset/css/magnific-popup.css";
import "../Asset/css/owl.carousel.min.css";
import "../Asset/css/carousel.min.css";
import "../Asset/css/slicknav.min.css";

import logo from "../Asset/img/logo.png";
import logo1 from "../Asset/img/logo.png";
import Footer from "./footer";

import team1 from "../Asset/img/team/team-1.jpg";
import team2 from "../Asset/img/team/team-2.jpg";
import team3 from "../Asset/img/team/team-3.jpg";
import team4 from "../Asset/img/team/team-4.jpg";
import team5 from "../Asset/img/team/team-5.jpg";
import team6 from "../Asset/img/team/team-6.jpg";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import GetInTouch from "./getInTouch";

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import { Splide, SplideSlide } from '@splidejs/react-splide';

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
                <h2 className="head" style={{color:"whitesmoke"}}>PUSH YOUR LIMITS FORWARD</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="cs-item">
                <span class="flaticon-034-stationary-bike"></span>
                <h4>Modern equipment</h4>
                <p>
                  Maintaining a workout routine is difficult without having the
                  right gym equipment in place. The features and functions that
                  come with gym equipment help you monitor your progress and
                  keep you motivated toward achieving your fitness goals.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="cs-item">
                <span class="flaticon-033-juice"></span>
                <h4>Healthy nutrition plan</h4>
                <p>
                  The 3 keys to optimal nutrition are balance, quality, and
                  timing. To maintain balance, eat from all or most of the food
                  groups. Eat the right amount for your activity and performance
                  goals.
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
                  <h2 style={{color:"whitesmoke"}}>What we have done</h2>
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

{/* team start */}

{/* <Splide aria-label="My Favorite Images"> */}
  {/* <SplideSlide>
    <img src={team1} alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src={team2} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img src={team3} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img src={team4} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img src={team5} alt="Image 2"/>
  </SplideSlide> */}

{/* splide */}
  {/* <SplideSlide>
    <img className="img1" src={team1} />&nbsp;
    <img className="img2" src={team2} />&nbsp;
    <img className="img3" src={team3} />&nbsp;
  </SplideSlide>
  
  <SplideSlide>
    <img className="img4" src={team4}/> &nbsp;
    <img className="img5" src={team5} /> &nbsp;
    <img className="img6" src={team6}/> &nbsp;
  </SplideSlide>
</Splide> */}

<Splide>

<SplideSlide >
           <div class="col-lg-4">
           <div class="ts-item set-bg-team1">
             <div class="ts_text">
               <h4>Aditya Roy </h4>
               <span>Gym Trainer1</span>
             </div>
           </div>
         </div>
         </SplideSlide>
         <div class="col-lg-4">
           <div class="ts-item set-bg-team2">
             <div class="ts_text">
               <h4>Gurveer Singh</h4>
               <span>Gym Trainer 2</span>
             </div>
           </div>
         </div>
         
         <div class="col-lg-4">
           <div class="ts-item set-bg-team3">
             <div class="ts_text">
               <h4>Gurtej Singh</h4>
               <span>Gym Trainer 3</span>
             </div>
           </div>
         </div>
       
      
         <SplideSlide>
         <div class="col-lg-4">
            <div class="ts-item set-bg-team4">
             <div class="ts_text">
               <h4>Harlay</h4>
               <span>Gym Trainer 4</span>
             </div>
            </div>
         </div>
         </SplideSlide>
         <SplideSlide>
         <div class="col-lg-4">
           <div class="ts-item set-bg-team5">
             <div class="ts_text">
               <h4>Vansh khatri</h4>
               <span>Gym Trainer 5</span>
             </div>
           </div>
         </div>
         </SplideSlide>
         <SplideSlide>
         <div class="col-lg-4">
           <div class="ts-item set-bg-team6">
             <div class="ts_text">
               <h4>Veeru </h4>
               <span>Gym Trainer 6</span>
             </div>
           </div>
         </div>
         </SplideSlide>
</Splide>

{/* team end */}
   
      <GetInTouch />
      <Footer />
    </>
  );
}
export default AboutUs;
