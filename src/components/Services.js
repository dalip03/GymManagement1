import React from "react";
import Footer from "./footer";
import GetInTouch from "./getInTouch";
import Navbar from "./Navbar";
import services1 from "../Asset/img/services/services-1.jpg";
import services2 from "../Asset/img/services/services-2.jpg";
import services3 from "../Asset/img/services/services-3.jpg";
import services4 from "../Asset/img/services/services-4.jpg";

function Services() {
  return (
    <>
      <Navbar />

      {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-classes">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>Services</h2>
                <div class="bt-option">
                  <a href="/index">Home</a>
                  <span>Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Services Section Begin --> */}
      <section class="services-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <span>What we do?</span>
                <h2 style={{ color: "whitesmoke" }}>
                  PUSH YOUR LIMITS FORWARD
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 order-lg-1 col-md-6 p-0">
              <div class="ss-pic">
                <img src={services1} alt="" />
              </div>
            </div>
            <div class="col-lg-3 order-lg-2 col-md-6 p-0">
              {/* <div class="ss-text"> */}
              <h4 style={{ color: "white" }}>Personal training</h4>
              <p>
                During your PT session, you'll do a mixture of cardio and
                aerobic exercise, work on strength and endurance, and possibly
                flexibility or range of motion exercises too.
              </p>
              <a href="#">Explore</a>
              {/* </div> */}
            </div>
            <div class="col-lg-3 order-lg-3 col-md-6 p-0">
              <div class="ss-pic">
                <img src={services2} alt="" />
              </div>
            </div>
            <div class="col-lg-3 order-lg-4 col-md-6 p-0">
              {/* <div class="ss-text"> */}
              <h4 style={{ color: "white" }}>Group fitness classes</h4>
              <p>
                Let that motivate you, not intimidate you! When you see someone
                next to you lifting heavier or moving faster, it will inspire
                you to push your limits.
              </p>
              <a href="#">Explore</a>
              {/* </div> */}
            </div>
            <div class="col-lg-3 order-lg-8 col-md-6 p-0">
              <div class="ss-pic">
                <img src={services3} alt="" />
              </div>
            </div>
            <div class="col-lg-3 order-lg-7 col-md-6 p-0">
              {/* <div class="ss-text second-row"> */}
              <h4 style={{ color: "white" }}>Body building</h4>
              <p>
                Bodybuilding is the use of progressive resistance exercise to
                control and develop one's muscles (muscle building) by muscle
                hypertrophy for aesthetic purposes.
              </p>
              <a href="#">Explore</a>
              {/* </div> */}
            </div>
            <div class="col-lg-3 order-lg-6 col-md-6 p-0">
              <div class="ss-pic">
                <img src={services4} alt="" />
              </div>
            </div>
            <div class="col-lg-3 order-lg-5 col-md-6 p-0">
              {/* <div class="ss-text second-row"> */}
              <h4 style={{ color: "white" }}>Strength training</h4>
              <p>
                Strength training may enhance your quality of life and improve
                your ability to do everyday activities. Strength training can
                also protect your joints from injury.
              </p>
              <a href="#">Explore</a>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Section End --> */}

      {/* <!-- Banner Section Begin --> */}
      <section class="banner-section set-bg-services">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="bs-text service-banner">
                <h2>Exercise until the body obeys.</h2>
                <div class="bt-tips">
                  Where health, beauty and fitness meet.
                </div>
                <a
                  href="https://www.youtube.com/watch?v=NKlWiWy6geA&ab_channel=RousseBenMotivation"
                  class="play-btn video-popup"
                >
                  <i class="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Section End --> */}

      <GetInTouch />
      <Footer />
    </>
  );
}

export default Services;
