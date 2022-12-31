import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../Firebase/firebase";
import Navbar from "../Navbar";
import firebase from "firebase";
import { data } from "jquery";

function CheckOut() {

//   var navi = useNavigate()
//   const [img, setimg] = useState("")
//   const [fname, setfname] = useState("")
//   const [lname, setlname] = useState("")
//   const [address, setaddress] = useState("")
//   const [pcode, setpcode] = useState("")
//   const [city, setcity] = useState("")
//   const [state, setstate] = useState("")



const addAddress = (e) => {
//     var st_ref = storage.ref("/Products/" + img.name).put(img);
//     st_ref.then(function (succ) {
//       st_ref.snapshot.ref.getDownloadURL().then(function (suc) {
//         db.collection("AddressDetail").doc(auth.currentUser.email).collection("Address")
//           .add({
//             FirstName: fname,
//             LastName: lname,
//             Address: address,
//             PostalCode: pcode,
//             City:city,
//             State:state,
//             TimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            
//           })
//           .then(function (sic) {
//             alert("Address Added");
//             e.target.reset();
// });
//       });
//     });
  };



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
                    onClick={addAddress}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>

{/* <Table  className='anmol'>
                            <TableHead >
                                <TableRow>
                                    <TableCell style={{color:'white'}}><b>FirstName</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>LastName</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Address</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>PostalCode</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>City</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>State</b></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((val) => (
                                    <TableRow>
                                        <TableCell style={{color:'white'}}>{val.data().FirstName}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().LastName}</TableCell>

                                        <TableCell style={{color:'white'}}>{val.data().Address}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().PostalCode}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().City}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().State}</TableCell>

                                
                                    </TableRow>
                                 ))} 
                            </TableBody>
                        </Table>
                        <div className="form-group">
                        <button onClick={addAddress} className="btn btn-primary form-control">
                         Add Product
                        </button>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckOut;
