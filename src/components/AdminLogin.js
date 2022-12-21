import React, { useState } from "react";

import Footer from "./footer";
import {  auth, db  } from "./Firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  
  var navi = useNavigate()
const[email,setEmail] =useState('')
const[password,setPassword] =useState('')

function login(){

  auth.signInWithEmailAndPassword(email,password).then((admin)=>{
   console.log({admin})
   navi('/admin')

  })

}


  return (
    <>
      {/* Hero Section Begin   */}
      <section class="hero-section set-bg-hero2">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="hero-text">
                  <div className="fmm col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-2 col-sm-8  col-sm-offset-2 col-xs-12">
                   <div>
                      <h2>Admin Login</h2>
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
                      </div>
                    {/* </form> */}
                </div>
                            {/* end Login */}
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

export default AdminLogin;
