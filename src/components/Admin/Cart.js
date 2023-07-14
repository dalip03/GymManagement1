import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase/firebase";
import Navbar from "../Navbar";
import firebase from "firebase";
import { Button, Link } from "@mui/material";
import { RemoveShoppingCart, ShoppingCart, ShoppingCartCheckout, ShoppingCartCheckoutOutlined, ShoppingCartCheckoutRounded, ShoppingCartCheckoutTwoTone } from "@mui/icons-material";
import CheckOut from "../checkout/CheckOut";

function Cart() {
  const [data, setdata] = useState([]);


  function getcart() {
    db.collection('myCart').doc(auth.currentUser.email).collection('Cart').onSnapshot((get)=>{
      setdata(get.docs.map((item)=>({
        data:item.data(),
        id:item.id
      })))
    }) 
  }

   

  useEffect(() => {
    getcart();
  }, [auth.currentUser.email]);

  const sum = data.map((item)=>parseInt(item.data.Price)).reduce((partialSum,a)=>partialSum+a,0)

  function incre(x) {
    // var idd = x.id;
    // console.log(idd);
    // db.collection("Products")
    //   .doc(product)
    //   .collection("mycart")
    //   .doc(idd)
    //   .update({
    //     Qty: firebase.firestore.FieldValue.increment(1),
    //   });
  }

  function decre(x) {
    console.log(x);
    db.collection("Products")
    .doc(auth.currentUser.email)
      .collection("mycart")
      .update({
        Qty: firebase.firestore.FieldValue.increment(-1),
      });
  }

  function del(x) {

    console.log(x.id );
    db.collection("myCart")
    .doc(auth.currentUser.email)
      .collection("Cart")
      .doc(x.id)
      .delete().then((succ)=>console.log(succ))
  }

  console.log(data);

  return (
    <>
      <Navbar />
      {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-cart">
        <div class="container">
          <div class="val">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2> My Cart </h2>
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
            <div className="papr col-lg-12 col-md-12 col-sm-12">
              {data.map((val) => (
                <div className="dv col-lg-12 col-md-4 col-sm-6">
                  <div className="box">
                    <img className="ig" src={val.data.Image} />
                    {/* // <img className="ig" /> */}
                  </div>

                  {/* df */}

                  <div className="btn btn-group btn1">
                    <Button
                      variant="outlined"
                      className="btnd"
                      onClick={() => incre(val)}
                    >
                      +
                    </Button>

                      <Button variant="outlined" className="btnd" disabled>
                      {val.data.Qty}
                    </Button>

                    {val.data.Qty <= 1 ? (
                      <button className="btnd">
                        <span
                          className="glyphicon glyphicon-trash"
                          onClick={() => del(val)}
                        ></span>
                      </button>
                    ) : (
                      <Button
                        variant="outlined"
                        className="btnd"
                        onClick={() => decre(val)}
                      >
                        -
                      </Button>
                    )}
                  </div>

                  {/* c */}

                  <h4  className="h">{val.data.Name}</h4>
                  <p className="p">{val.data.Quantity}&nbsp;kg</p>
                  <p className="price">&#x20b9;{val.data.Price}</p>
                  <div className="cdv">
                    <Button
                      className="btnd"
                      type="button"
                      variant="contained"
                      color="warning"
                    >
                     <span onClick={() => del(val)}>Remove<RemoveShoppingCart/></span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* bill */}

          <div className="col-lg-12 bill">
            <div className="col-lg-12 sub">
              {/* <h1>Price Details</h1> */}
              <div className="panel panel-default">
                <div className="panel-heading"><h1>PRICE DETAILS</h1></div>
                <div className="panel-body">
                  <p>Price:{sum}</p>
                  <p>Discount : 0%</p>
                  <p>Delivery Charges : 0</p>
                  <p className="pp"><h2 style={{color:'white'}}>Total Bill : {sum}</h2></p>
                </div>
                <div className="panel-footer ft">
                {/* <Button className="pl" variant="contained">
                <Link to="/checkout"  > <span style={{color:'white'}}> CHECKOUT <ShoppingCartCheckout/></span></Link>
                </Button> */}

                {/* <Button><a href ={'/checkout'}>CheckOut</a></Button> */}

                  

                  <Button 
                   className="pl"
                   variant="outlined" >
                    <a style={{textDecoration:'none'}} href={"user"}>
                  Back 
                  </a>
                  </Button>

                  <Button 
                   className="pl1"
                   variant="outlined" >
                    <a style={{textDecoration:'none'}} href={"checkout"}>
                  CheckOut <ShoppingCartCheckout/>
                  </a>
                  </Button>



                  {/* <Button 
                   className="pl1"
                   variant="contained"
                   color="warning" >
                  Empty Cart <RemoveShoppingCart/></Button> */}

                </div>
              </div>
            </div>
          </div>

          {/* </div> */}

          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default Cart;
