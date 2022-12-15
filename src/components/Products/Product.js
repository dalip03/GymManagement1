import { Button } from '@mui/material';
import React from 'react'
import Footer from '../footer';
import GetInTouch from '../getInTouch';
import Navbar from '../Navbar';

function Product(){
    return(
        <>
       <Navbar/>
 {/* <!-- Breadcrumb Section Begin --> */}
 <section class="breadcrumb-section set-bg-product">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>Our Products</h2>
                <div class="bt-option">
                  <a href="/">Home</a>
                  <span>Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}
{/* product start */}

<section class="classes-section classes-page spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-product1" >
                        <div class="si-text">
                            <h4>Yoga</h4>
                            <Button variant="contained">Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-product2" >
                        <div class="si-text">
                            <h4>Karate</h4>
                            <Button variant="contained">Add to Cart</Button>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-product3" >
                        <div class="si-text">
                            <h4>Running</h4>
                            <Button variant="contained">Add to Cart</Button>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-product4">
                        <div class="si-text">
                            <h4>Dance</h4>
                            <Button variant="contained">Add to Cart</Button>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-product5" >
                        <div class="si-text">
                            <h4>Whey Protein</h4>
                            <Button variant="contained">Add to Cart</Button>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-product6">
                        <div class="si-text">
                            <h4>Weight Loss</h4>
                            <Button variant="contained">Add to Cart</Button>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-product7" >
                        <div class="si-text">
                            <h4>Box</h4>
                            <Button variant="contained">Add to Cart</Button>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-product8" >
                        <div class="si-text">
                            <h4>Whey Protein</h4>
                            <Button variant="contained">Add to Cart</Button>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-class-item set-bg-product2" >
                        <div class="si-text">
                            <h4>Crossfit</h4>
                            <Button variant="contained">Add to Cart</Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 


                 

{/* product end */}


       <GetInTouch/>
       <Footer/>
        </>
    );
}

export default Product;