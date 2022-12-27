import React, { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./footer";
import {  auth, db  } from "./Firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

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
                      <h2>Login Here</h2>
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
                          
                          Login
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

      <Footer />
    </>
  );
}

export default Home;
