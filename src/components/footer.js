import React from "react";
import logo1 from "../Asset/img/logo.png";

function Footer() {
  return (
    <>
      {/* <!-- Footer Section Begin --> */}
      <section class="footer-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="fs-about">
                <div class="fa-logo">
                  <a href="#">
                    <img src={logo1} alt="" />
                  </a>
                </div>
                <p>
                  Khera
                  Fitness Freak in Sarabha Nagar Ludhiana, Ludhiana is a popular
                  choice among fitness enthusiasts in the area. This gym has
                  existed since 2015. It has received an average 4.8 rating.{" "}
                </p>
                <div class="fa-social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-youtube-play"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa  fa-envelope-o"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6">
              <div class="fs-widget">
                <h4>Useful links</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Classes</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6">
              <div class="fs-widget">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">Subscribe</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="fs-widget">
                <h4>Tips & Guides</h4>
                <div class="fw-recent">
                  <h6>
                    <a href="#">
                      Physical fitness may help prevent depression, anxiety
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
                <div class="fw-recent">
                  <h6>
                    <a href="#">
                      Fitness: The best exercise to lose belly fat and tone
                      up...
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 text-center">
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer Section End --> */}

      {/* <!-- Search model Begin --> */}
      <div class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
          <div class="search-close-switch">+</div>
          <form class="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
      {/* <!-- Search model end --> */}
    </>
  );
}

export default Footer;
