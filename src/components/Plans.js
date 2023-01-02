import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './footer';
import GetInTouch from './getInTouch';
import Navbar from './Navbar';
function Plans(){
    return(
        <>
        <Navbar/>
        {/* <!-- Breadcrumb Section Begin --> */}
    <section class="breadcrumb-section set-bg-classes">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb-text">
                        <h2>Our Plans</h2>
                        <div class="bt-option">
                            <a href="/index">Home</a>
                            <span>Our Plans</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}
       {/* <!-- Pricing Section Begin --> */}
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
    {/* <!-- Pricing Section End --> */}
<GetInTouch/>
        <Footer/>
        </>
    );
}

export default Plans;