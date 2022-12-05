import React from 'react'
import Footer from './footer';
import Navbar from './Navbar';

import "../Asset1/css/style.css";
import "../Asset1/css/bootstrap.min.css";
import "../Asset1/css/font-awesome.min.css";
import "../Asset1/css/magnific-popup.css";
import "../Asset1/css/slicknav.min.css";



function Classes(){
    return (
        <>
        <Navbar/>
       {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>Classes</h2>
                <div class="bt-option">
                  <a href="/">Home</a>
                  <span>Classes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

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



       
        <Footer/>

        </>
    );
}

export default Classes;
