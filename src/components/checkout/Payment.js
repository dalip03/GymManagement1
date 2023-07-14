import { Button, Grid, Link, Typography } from '@mui/material';
import React from 'react'
import Navbar from '../Navbar'

function Payment(){
    return(

        <>
        <Navbar />
      {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-cart">
        <div class="container">
          <div class="val">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2> Place Order </h2>
                <div class="bt-option">
                  <a href="/">Home</a>
                  <span>Place order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* cart page  > */}
      <section class="classes-section classes-page spad">
        <div class="container">
          <div class="val rw">
          <div className="col-lg-8 frman">
            <Typography variant="h6" gutterBottom>
                <h1>CHECKOUT</h1>
              </Typography>
              <Typography variant="h6" gutterBottom>
                Oreder Summary
              </Typography>

           <hr></hr>
           <Typography variant="h6" gutterBottom>
               Payment Method 
              </Typography>

              <Grid item  xs={12} sm={6}>
                  <Button component={Link} variant="outlined" to="/checkout">
                    Back to Cart
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                  component={Link}
                    variant="contained"
                    to="/checkout"
                  >
                    Place Order
                  </Button>
                </Grid>
            </div>
          </div>
          </div>
           </section>
        </>
    );
}

export default Payment;