import React, { useState } from "react";

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

import { axios, db } from "../components/Firebase/firebase";

function Contact() {
  // submit data in backend
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    // add data in firebase
    var data = new FormData(e.currentTarget);

    var name = data.get("name");
    var email = data.get("email");
    var tel = data.get("tel");
    var message = data.get("message");

    db.collection("Users")
      .add({
        Name: name,
        Email: email,
        Tel: tel,
        Message: message,
      })
      .then((succ) => {
        alert("Your Application is send to Dalip :) ");
      })
      .catch((err) => {
        alert("can't send your Application , please send Again :) ");
      });
  };
  // end submit data

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
                <h2 style={{ color: "whitesmoke" }}>GET IN TOUCH</h2>
              </div>
              <div class="contact-widget">
                <div class="cw-text">
                  <i class="fa fa-map-marker"></i>
                  <p>
                    SCO 12-13, Gurudwara Rd, I-Block Market, Opposite durga Mata
                    Mandir, Sarabha Nagar, Ludhiana,
                    <br /> Punjab 141001
                  </p>
                </div>
                <div class="cw-text">
                  <i class="fa fa-mobile"></i>
                  <ul>
                    <li>62393-89593</li>
                    <li>62393-89593</li>
                  </ul>
                </div>
                <div class="cw-text email">
                  <i class="fa fa-envelope"></i>
                  <p>dalipdivakar@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="leave-comment">
                {/* form start */}

                <form onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="Name" />
                  <input type="text" name="email" placeholder="Email" />
                  <input type="tel" name="tel" placeholder="Phone no." />
                  <textarea name="message" placeholder="Message"></textarea>
                  <button type="submit">Submit</button>
                </form>

                {/* form end  */}
              </div>
            </div>
          </div>
          {/* <!-- Map Section Begin --> */}
          <div class="map">
            {/* <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.2310832890685!2d75.84630781505746!3d30.880195935307853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a825313ade647%3A0x8221aeeb0002f9ba!2sANSH%20InfoTech!5e0!3m2!1sen!2sin!4v1670048626206!5m2!1sen!2sin"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe> */}

            {/* new Auribises */}
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.4369848372135!2d75.81978267434438!3d30.902407477414858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83c442c50729%3A0xd8c600825a973347!2sAuribises%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1686584657138!5m2!1sen!2sin"
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
