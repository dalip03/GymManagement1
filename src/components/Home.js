import React, { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./footer";
import {  auth, db  } from "./Firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { EmailOutlined, LoginOutlined } from "@mui/icons-material";
import { fontSize } from "@mui/system";
import Iframe from "react-iframe";

function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  
    // add data in firebase 
    var data = new FormData(e.currentTarget);
    
    var name = data.get('name');
    var email = data.get('email');
    var tel = data.get('tel');
    var message = data.get('message');
  
  
   
    db.collection("Users")
      .add({
        Name: name,
        Email: email,
        Tel:tel,
        Message: message,
      })
      .then((succ) => {
        alert("Your Application is send to Dalip :) ");
      })
      .catch((err) => {
        alert("can't send your Application , please send Again :) ");
  
  
        
      });
    }  
  
  var navi = useNavigate()

  // function login(e){
  //     e.preventDefault();
  //     var data = new FormData(e.currentTarget)
      
  //     var email = data.get('mail')
  //     var password =data.get('password')

  //     console.log(email+password)

  //     db.collection('USERS').where("email",'==',email).where("password",'==', password).get().then((succ)=>{
  //          if(succ.size==0){
  //             alert('Please signup First')
  //             navi('/Signup')
  //          }else{
  //             alert('Welcome User')
  //             navi("/aboutUs")
  //          }
  //          }
  //     ) }

  const[name,setName] = useState('')
const[email,setEmail] =useState('')
const[password,setPassword] =useState('')

function login(){

  auth.signInWithEmailAndPassword(email,password).then((user)=>{
   console.log({user})
   if(user.size==0){
    alert('Please signup First')
    navi('/signup')
 }else{     
    alert('Welcome user')
    navi("/user")
 }
  //  navi('/user')

  })
  //  console.log('yes')


    

}


  return (
    <>
      <Navbar />
      {/* Hero Section Begin   */}
      <section class="hero-section set-bg-hero2">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="hero-text">
                  <div className="fmm col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-2 col-sm-8  col-sm-offset-2 col-xs-12">
                   <div>
                      <h2>Login Here<LoginOutlined/> </h2>
                      <div className="form-group">
                        <input
                         onChange={(a) => setEmail(a.target.value)}
                          type="email"
                          className="form-control"
                          placeholder="E-mail"
                          
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                         onChange={(a) => setPassword(a.target.value)}
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        ></input>
                      </div>
                      <div className="form-group">
                        <button onClick={login} className="btn btn-primary form-control">
                        Login &nbsp;
                        <LoginOutlined/>
                         
                        </button>
                      </div>
                      <div className="form-group">
                        <span style={{color:'blue'}}>New User , click here to Signup </span>
                        <Link to="/SignUp" style={{textDecoration:'none'}}> <span style={{color:'white'}}> : SignUp</span></Link>
                      </div>
                      </div>
                    {/* </form> */}
                </div>
                            {/* end Login */}
              </div>
            </div>
            {/* <div className="khera1 col-lg-4">
              <span></span>
              <span></span>
              <span></span>
              Login Here
            
            </div> */}

          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* about  */}

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

      {/* end about */}

{/* classes */}
<section class="classes-section classes-page spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2 style={{color:"whitesmoke"}}>UNLIMITED CLASSES</h2>
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
{/* end classes */}

 {/* <!-- Team Section Begin --> */}
 <section class="team-section team-page spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <div class="section-title">
                        <span style={{color:"orangered"}}>OUR TEAM</span>
                        <h2 style={{color:"whitesmoke"}}>EXPERTS TRAINERS</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="ts-item set-bg-team1" >
                        <div class="ts_text">
                            <h4>Harjeet Singh</h4>
                            <span>Gym Trainer</span>
                            <div class="tt_social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-youtube-play"></i></a>
                                <a href="https://www.instagram.com/harjeetsingh2207/"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa  fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="ts-item set-bg-team2" >
                        <div class="ts_text">
                            <h4>Gurtej Singh</h4>
                            <span>Gym Trainer</span>
                            <div class="tt_social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-youtube-play"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa  fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="ts-item set-bg-team3">
                        <div class="ts_text">
                            <h4>Vish Khatri</h4>
                            <span>Gym Trainer</span>
                            <div class="tt_social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-youtube-play"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa  fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="ts-item set-bg-team4">
                        <div class="ts_text">
                            <h4>Aditya Roy</h4>
                            <span>Gym Trainer</span>
                            <div class="tt_social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-youtube-play"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa  fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="ts-item set-bg-team5" >
                        <div class="ts_text">
                            <h4>Raghav</h4>
                            <span>Gym Trainer</span>
                            <div class="tt_social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-youtube-play"></i></a>
                                <a href="https://www.instagram.com/harjeetsingh2207/"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa  fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="ts-item set-bg-team6" >
                        <div class="ts_text">
                            <h4>Dalip</h4>
                            <span>Gym Trainer</span>
                            <div class="tt_social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-youtube-play"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa  fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Team Section End --> */}
    
      {/* gallery */}

   {/* <!-- Gallery Section Begin --> */}
   <div class="gallery-section">
   <div class="section-title">
                        <span style={{color:"orangered"}}>Gallery</span>
                        <h2 style={{color:"whitesmoke"}}>Modern equipment</h2>
                    </div>
    <div class="gallery">
        <div class="grid-sizer"></div>
        <div class="gs-item grid-wide set-bg-gallery1">
        </div>
        <div class="gs-item set-bg-gallery2" >
        </div>
        <div class="gs-item set-bg-gallery3" >
        </div>
        <div class="gs-item set-bg-gallery4" >
        </div>
        <div class="gs-item set-bg-gallery5">
        </div>
        <div class="gs-item  set-bg-gallery6" >
        </div>
        <div class="gs-item  set-bg-gallery7" >
        </div>
        <div class="gs-item  set-bg-gallery8" >
        </div>
        <div class="gs-item  set-bg-gallery9" >
        </div>
        <div class="gs-item  set-bg-gallery10" >
        </div>
        <div class="gs-item  set-bg-gallery11" >
        </div>
        
    </div>
</div>

      {/* end gallery */}

      <section class="pricing-section service-pricing spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Our Plan</span>
                        <h2 style={{color:"whitesmoke"}}>Choose your pricing plan</h2>
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
                        <a href="#" class="primary-btn pricing-btn"><Link to='/contact'><span style={{color:'white'}}>Enroll now</span></Link></a>
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
                        <a href="#" class="primary-btn pricing-btn"><Link to='/contact'><span style={{color:'white'}}>Enroll now</span></Link></a>
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
                        <a href="#" class="primary-btn pricing-btn"><Link to='/contact'><span style={{color:'white'}}>Enroll now</span></Link></a>
                        {/* <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a> */}
                    </div>
                </div>
                
            </div>
        </div>
    </section>

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
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                   
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                   
                  />
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Phone no."
                   
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                   
                  ></textarea>
                  <button type="submit">Submit</button>
                </form>

                {/* form end  */}
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

      <Footer />
    </>
  );
}

export default Home;
