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

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import GetInTouch from "./getInTouch";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

import { Splide, SplideSlide } from "@splidejs/react-splide";

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
                <h2 className="head" style={{ color: "whitesmoke" }}>
                  PUSH YOUR LIMITS FORWARD
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="cs-item">
                <span class="flaticon-034-stationary-bike"></span>
                <h4>Modern equipment</h4>
                <p style={{textAlign:'justify'}}>
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
                <p style={{textAlign:'justify'}}>
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
                <p style={{textAlign:'justify'}}>
                  Here is a list of their offerings: Personal Trainers, Weight
                  Gain Program, Weight Loss Program. Of course, a gym may help
                  you build muscles and look fab. But remember people who
                  regularly exercise have a lower risk of developing several
                  health concerns, so you might want to check out this place.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="cs-item">
                <span class="flaticon-014-heart-beat"></span>
                <h4>Unique to your needs</h4>
                <p style={{textAlign:'justify'}}>
                  All scientific evidence and studies prove that being
                  physically active enables you to lead a healthier life. Not
                  just your physical health, but even your emotional and mental
                  well-being is impacted positively when your body is hail and
                  hearty. In the pursuit of holistic wellness, there has been an
                  overall increase across all demographics in the number of
                  people who wish to exercise.
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
                  href="https://www.youtube.com/watch?v=F7qG1wxuYpQ&ab_channel=DainikSavera"
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
                  <h2 style={{ color: "whitesmoke" }}>Khera Fitness Freak</h2>
                </div>
                <div class="at-desc">
                  <p>
                    Several Gyms have mushroomed in and around Ludhiana. Khera
                    Fitness Freak in Sarabha Nagar Ludhiana, Ludhiana is a
                    popular choice among fitness enthusiasts in the area. This
                    gym has existed since 2015. It has received an average 4.8
                    rating. Here is a list of their offerings: Personal
                    Trainers, Weight Gain Program, Weight Loss Program. Of
                    course, a gym may help you build muscles and look fab. But
                    remember people who regularly exercise have a lower risk of
                    developing several health concerns, so you might want to
                    check out this place.
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
     

      <GetInTouch />
      <Footer />
    </>
  );
}
export default AboutUs;
