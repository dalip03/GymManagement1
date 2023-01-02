import React, { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./footer";
import {  auth, db  } from "./Firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { EmailOutlined, LoginOutlined } from "@mui/icons-material";

function Home() {
  
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

      <Footer />
    </>
  );
}

export default Home;
