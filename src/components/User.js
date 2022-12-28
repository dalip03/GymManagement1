import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { auth, db, storage } from "./Firebase/firebase";
import firebase from "firebase";
import Navbar from "./Navbar";
import { AddShoppingCart, ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";

function User() {
  // snapshot
  // const [data, setdata] = useState([]);
  
  // useEffect(() => {
  //   db.collection('Products')
  //   .orderBy('timestamp', 'desc')
  //   .onSnapshot((data) =>{
  //     setdata(
  //       data.docs.map((item)=>({
  //         data:item.data(),
  //         id:item.id,
  //       }))
  //     )
  //   })
  // },[])

  

  const [data, setdata] = useState([]);
  function getdata() {
    db.collection("Products").onSnapshot((succ) => {
      var ar = [];
      succ.forEach((abc) => {
        ar.push(abc);
      }); 
      setdata(ar);
    });
  }

  useEffect(() => {
    getdata();
  }, []);

 



// add to cart

function addcart(x){
  console.log(x.data())   

      db.collection("myCart").doc(auth.currentUser.email).collection('Cart')
        .add(x.data())
        .then(function (sic) {
          alert("Product Added in Cart");
          x.target.reset(); })

    }



  return (
    <>
      <Navbar/> {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-product">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>Our Products</h2>
                <div class="bt-option">
                  <a href="/">Home</a>
                  <span>Our Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}
      <section class="classes-section classes-page spad">
        <div class="container">
          <div class="row">
            {/* <div className="papr col-lg-12 col-md-12 col-sm-12">
              <div className="dv col-lg-2 col-md-4 col-sm-6">
                <div className="box">
                  <img className="ig" />
                </div>
                <h4 className="h">Name</h4>
                <p className="p">Quantity</p>
                <p className="price">Price</p>
                <div className="cdv">
                  <button className="btn btn-warning form-control crtb">
                    {" "}
                    Add to Cart{" "}
                  </button>
                </div>
              </div>
            </div> */}

{/* hkdcjh */}

<div className="papr col-lg-12 col-md-12 col-sm-12">
{data.map((val) => (
              <div className="dv col-lg-12 col-md-4 col-sm-6">
                <div className="box">
                <img className="ig"  src={val.data().Image}  />
                  {/* // <img className="ig" /> */}
                </div>
                <h4 className="h" >{val.data().Name}</h4>
                <p className="p" >{val.data().Quantity}&nbsp;kg</p>
                <p className="price" >&#x20b9;{val.data().Price}</p>
                <div className="cdv">
                  <Button onClick={()=> addcart(val)}
                      className="crtb"
                      type="button"
                      variant="contained"
                      color="warning" >
                      Add &nbsp; &nbsp;&nbsp;&nbsp; <AddShoppingCart/>
                  </Button>
                </div>
              </div>
))}
            </div>

{/* end */}

          </div>
        </div>
      </section>
    </>
  );
}

export default User;
