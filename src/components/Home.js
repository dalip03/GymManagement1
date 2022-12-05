import React from 'react'
import '../Asset/css/style.css';
import '../Asset/css/barfiller.css';
import '../Asset/css/bootstrap.min.css';
import '../Asset/css/flaticon.css';
import '../Asset/css/font-awesome.min.css';
import '../Asset/css/magnific-popup.css';
import '../Asset/css/owl.carousel.min.css';
import '../Asset/css/slicknav.min.css';

import Navbar from './Navbar';
import Footer from './footer';

import gallery1 from '../Asset/img/gallery/gallery-1.jpg'
import gallery2 from '../Asset/img/gallery/gallery-2.jpg'
import gallery3 from '../Asset/img/gallery/gallery-3.jpg'
import gallery4 from '../Asset/img/gallery/gallery-4.jpg'
import gallery5 from '../Asset/img/gallery/gallery-5.jpg'
import services1 from '../Asset/img/services/services-1.jpg'
import services2 from '../Asset/img/services/services-2.jpg'
import services3 from '../Asset/img/services/services-3.jpg'
import services4 from '../Asset/img/services/services-4.jpg'
import Iframe from 'react-iframe';


function Home(){
    return(
       <>
<Navbar/>

{/* <!-- Hero Section Begin --> */}
    <section class="hero-section">
        <div class="hs-slider owl-carousel">
            <div class="hs-item set-bg-hero1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-6">
                            <div class="hi-text">
                                <span>Shape your body</span>
                                <h1>Be <strong>strong</strong> traning hard</h1>
                                <a href="#" class="primary-btn">Get info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hs-item set-bg-hero2" >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-6">
                            <div class="hi-text">
                                <span>Shape your body</span>
                                <h1>Be <strong>strong</strong> traning hard</h1>
                                <a href="#" class="primary-btn">Get info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Hero Section End -->  */}

    {/* about */}

     {/* <!-- ChoseUs Section Begin --> */}
     <section class="choseus-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <span>Why chose us?</span>
                <h2>PUSH YOUR LIMITS FORWARD</h2>
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
            
            {/* // <div id="demo" class="carousel slide" data-ride="carousel">  */}
              {/* <!-- Indicators --> */}
              {/* <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul> */}

              {/* <!-- The slideshow --> */}
              {/* <div class="carousel-inner">
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
              </div> */}

              {/* <!-- Left and right controls --> */}
              {/* <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div> */}

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

          {/* <!-- Classes Section Begin --> */}
    <section class="classes-section classes-page spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>UNLIMITED CLASSES</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-class1" >
                        <div class="si-text">
                            <h4>Yoga</h4>
                            <span><i class="fa fa-user"></i> Ryan Knight</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-class4" >
                        <div class="si-text">
                            <h4>Karate</h4>
                            <span><i class="fa fa-user"></i> Kevin McCormick</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-class2" >
                        <div class="si-text">
                            <h4>Running</h4>
                            <span><i class="fa fa-user"></i> Randy Rivera</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-class5">
                        <div class="si-text">
                            <h4>Dance</h4>
                            <span><i class="fa fa-user"></i> Russell Lane</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-class3" >
                        <div class="si-text">
                            <h4>Personal Training</h4>
                            <span><i class="fa fa-user"></i> Cole Robertson</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-class6">
                        <div class="si-text">
                            <h4>Weight Loss</h4>
                            <span><i class="fa fa-user"></i> Ryan Scott</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-class7" >
                        <div class="si-text">
                            <h4>Box</h4>
                            <span><i class="fa fa-user"></i> Chester Bowen</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-class8" >
                        <div class="si-text">
                            <h4>Cardio</h4>
                            <span><i class="fa fa-user-class7"></i> Jorge Fernandez</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-class9" >
                        <div class="si-text">
                            <h4>Crossfit</h4>
                            <span><i class="fa fa-user"></i> Chester Bowen</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Classes Section End --> */}


 {/* <!-- Gallery Section Begin --> */}
 <div class="gallery-section">
    <div class="gallery">
        <div class="grid-sizer"></div>
        <div class="gs-item grid-wide set-bg-gallery1">
            <a href={gallery1} class="thumb-icon image-popup"><i class="fa fa-picture-o"></i></a>
        </div>
        <div class="gs-item set-bg-gallery2" >
            <a href={gallery2} class="thumb-icon image-popup"><i class="fa fa-picture-o"></i></a>
        </div>
        <div class="gs-item set-bg-gallery3" >
            <a href={gallery3} class="thumb-icon image-popup"><i class="fa fa-picture-o"></i></a>
        </div>
        <div class="gs-item set-bg-gallery4" >
            <a href={gallery4} class="thumb-icon image-popup"><i class="fa fa-picture-o"></i></a>
        </div>
        <div class="gs-item set-bg-gallery5">
            <a href={gallery5} class="thumb-icon image-popup"><i class="fa fa-picture-o"></i></a>
        </div>
        <div class="gs-item grid-wide set-bg-gallery6" >
            <a href="img/gallery/gallery-6.jpg" class="thumb-icon image-popup"><i class="fa fa-picture-o"></i></a>
        </div>
    </div>
</div>

{/* services */}

  {/* <!-- Services Section Begin --> */}
  <section class="services-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>What we do?</span>
                        <h2>PUSH YOUR LIMITS FORWARD</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 order-lg-1 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src={services1} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-2 col-md-6 p-0">
                    <div class="ss-text">
                        <h4>Personal training</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
                            facilisis.</p>
                        <a href="#">Explore</a>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-3 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src={services2} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-4 col-md-6 p-0">
                    <div class="ss-text">
                        <h4>Group fitness classes</h4>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
                        <a href="#">Explore</a>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-8 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src={services3} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-7 col-md-6 p-0">
                    <div class="ss-text second-row">
                        <h4>Body building</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
                            facilisis.</p>
                        <a href="#">Explore</a>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-6 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src={services4} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-5 col-md-6 p-0">
                    <div class="ss-text second-row">
                        <h4>Strength training</h4>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
                        <a href="#">Explore</a>
                    </div>
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
                        <div class="bt-tips">Where health, beauty and fitness meet.</div>
                        <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" class="play-btn video-popup"><i
                                class="fa fa-caret-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Banner Section End --> */}

    {/* <!-- Pricing Section Begin --> */}
    <section class="pricing-section service-pricing spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Our Plan</span>
                        <h2>Choose your pricing plan</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>Class drop-in</h3>
                        <div class="pi-price">
                            <h2> &#x20b9; 2000</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                        {/* <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a> */}
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>12 Month unlimited</h3>
                        <div class="pi-price">
                            <h2>&#x20b9; 16000</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                        {/* <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a> */}
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>6 Month unlimited</h3>
                        <div class="pi-price">
                            <h2>&#x20b9; 10000</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                        {/* <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Pricing Section End --> */}

    

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
<Footer/>

       </>

    );
}

export default Home;