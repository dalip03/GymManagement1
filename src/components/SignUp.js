import React, { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./footer";
import { auth, db } from "./Firebase/firebase";
import banner from "../Asset/img/banner-bg.jpg";
import { blueGrey } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {

// signup

var navi = useNavigate()
// function signup(e){
 
//     e.preventDefault();
//     var data = new FormData(e.currentTarget);

//     var name = data.get("name");
//     var phone = data.get("phone");
//     var email = data.get("email");
//     var password = data.get("password");

//     console.log(name + phone + email+ password)
  
//     db.collection("USERS").add(
//         {
//             Name:name,
//             Phone :phone,
//             Email:email,
//             Password:password 
//         }
//     ).then((succ)=>{
//         alert("Sign Up Successfully ")
//         navi('/')
//     }).catch((err)=>{
//         alert("can't Signup Try Again");
//     })
//     e.target.reset();
//     e.target.name.focus();
// }

const[name,setName] = useState('')
const[email,setEmail] =useState('')
const[password,setPassword] =useState('')

function SignUp(){

  auth.createUserWithEmailAndPassword(email,password).then((user)=>{
        console.log({user})
        navi('/')
    })

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
                    {/* <form> */}
                    <div>
                      <h2>Sign Up</h2>
                      <div className="form-group">
                        <input
                          onChange={(a) => setName(a.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                        // autoComplete=" "
                          type="tel"
                          className="form-control"
                          placeholder="Mobile No. "
                        ></input>
                      </div>
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
                        <button onClick={SignUp} className="btn btn-primary form-control">
                          Sign Up
                        </button>
                      </div>
                      <div className="form-group">
                        <span style={{color:'blue'}}>Already have an Account</span>
                        <Link to="/" style={{textDecoration:'none'}}> <span style={{color:'white'}}> : Login</span></Link>
                      </div>
                      </div>
                    {/* </form> */}
                </div>
                            {/* end signup */}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Hero Section End */}

      <Footer />
    </>
  );
}

export default SignUp;
