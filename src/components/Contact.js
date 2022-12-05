import React from "react";
// import lg from '../img/lg.png'
import Iframe from "react-iframe";
import "../Asset/css/style.css";
import "../Asset/css/barfiller.css";
import "../Asset/css/bootstrap.min.css";
import "../Asset/css/flaticon.css";
import "../Asset/css/font-awesome.min.css";
import "../Asset/css/magnific-popup.css";
// import '../Asset/css/owl.carousel.min.css';
import "../Asset/css/slicknav.min.css";
import location from "../Asset/img/icon/location.png";

import img from "../Asset/img/hero/hero-1.jpg";
import Navbar from "./Navbar";
import Footer from "./footer";
import GetInTouch from "./getInTouch";

function Contact() {
  return (
    <>
      <Navbar />

      {/* <!-- Breadcrumb Section Begin --> */}

      <section class="breadcrumb-section set-bg-contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>Contact Us</h2>
                <div class="bt-option">
                  <a href="./index.html">Home</a>
                  <a href="#">Pages</a>
                  <span>Contact us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}



      {/* <!-- Contact Section Begin --> */}
      <section class="contact-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-title contact-title">
                <span>Contact Us</span>
                <h2>GET IN TOUCH</h2>
              </div>
              <div class="contact-widget">
                <div class="cw-text">
                  <i class="fa fa-map-marker"></i>
                  <p>
                    333 Middle Winchendon Rd, Rindge,
                    <br /> NH 03461
                  </p>
                </div>
                <div class="cw-text">
                  <i class="fa fa-mobile"></i>
                  <ul>
                    <li>125-711-811</li>
                    <li>125-668-886</li>
                  </ul>
                </div>
                <div class="cw-text email">
                  <i class="fa fa-envelope"></i>
                  <p>Support.gymcenter@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="leave-comment">
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Website" />
                  <textarea placeholder="Comment"></textarea>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
               {/* <!-- Map Section Begin --> */}
      <div class="map">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.2310832890685!2d75.84630781505746!3d30.880195935307853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a825313ade647%3A0x8221aeeb0002f9ba!2sANSH%20InfoTech!5e0!3m2!1sen!2sin!4v1670048626206!5m2!1sen!2sin"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
          </div>
      {/* <!-- Map Section End --> */}
        </div>
      </section>
      {/* <!-- Contact Section End --> */}

      <GetInTouch />
      <Footer />
    </>
  );
}

export default Contact;
