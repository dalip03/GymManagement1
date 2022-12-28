import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function CheckOut() {
  return (
    <>
      <Navbar />
      {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-cart">
        <div class="container">
          <div class="val">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2> checkout </h2>
                <div class="bt-option">
                  <a href="/">Home</a>
                  <span>Cart</span>
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
                Shipping Address
              </Typography>
              <Grid className="cntrp" container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className="nnm"
                    id="outlined-basic"
                    label="First name"
                    variant="outlined"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Last name"
                    variant="outlined"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="city"
                    variant="outlined"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Postal code"
                    variant="outlined"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button className="payment1" component={Link} variant="outlined" to="/cart">
                    Back to Cart
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                  component={Link}
                    className="payment"
                    variant="contained"
                    to="/payment"
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckOut;
